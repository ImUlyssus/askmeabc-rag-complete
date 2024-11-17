from flask import Flask, jsonify, request
from flask_cors import CORS
import os
import json
import hashlib
from dotenv import load_dotenv
from langchain_google_genai import GoogleGenerativeAIEmbeddings, ChatGoogleGenerativeAI
from pinecone.grpc import PineconeGRPC as Pinecone
from langchain.prompts import PromptTemplate
from sklearn.metrics.pairwise import cosine_similarity
from typing import List, Dict, Any
import numpy as np

# Load environment variables
load_dotenv()
chat_history = []
# Access API keys
GOOGLE_API_KEY = os.getenv("GOOGLE_API_KEY")
PINECONE_API_KEY = os.getenv("PINECONE_API_KEY")
pc = Pinecone(api_key=PINECONE_API_KEY)
index = pc.Index("quickstart")

# Set up embeddings with the Google API key
embeddings = GoogleGenerativeAIEmbeddings(model="models/text-embedding-004")

def chunk_text_for_list(docs: list[str], max_chunk_size: int = 1000) -> list[list[str]]:
    """Splits text into manageable chunks, skipping empty chunks."""
    def chunk_text(text: str, max_chunk_size: int) -> list[str]:
        if not text.endswith("\n\n"):
            text += "\n\n"
        paragraphs = text.split("\n\n")
        chunks = []
        current_chunk = ""
        for paragraph in paragraphs:
            paragraph = paragraph.strip()  # Strip whitespace
            if not paragraph:  # Skip empty paragraphs
                continue
            if len(current_chunk) + len(paragraph) + 2 > max_chunk_size and current_chunk:
                chunks.append(current_chunk.strip())
                current_chunk = ""
            current_chunk += paragraph + "\n\n"
        if current_chunk.strip():  # Add last chunk if non-empty
            chunks.append(current_chunk.strip())
        return chunks

    chunked_docs = [chunk_text(doc, max_chunk_size) for doc in docs]
    return chunked_docs

def generate_short_id(content: str) -> str:
    """Generate a short ID based on the content using SHA-256 hash."""
    hash_obj = hashlib.sha256()
    hash_obj.update(content.encode("utf-8"))
    return hash_obj.hexdigest()

def combine_vector_and_text(company: dict, doc_embeddings: list[list[float]], chunks: list[str]) -> list[dict[str, any]]:
    """Combine embeddings with metadata, skipping empty text chunks."""
    data_with_metadata = []
    company_name = company["company_name"]

    for chunk, embedding in zip(chunks, doc_embeddings):
        if not chunk.strip():  # Skip empty text chunks
            continue

        doc_id = generate_short_id(chunk)
        data_item = {
            "id": doc_id,
            "values": embedding,
            "metadata": {
                "company_name": company_name,
                "text": chunk
            }
        }
        data_with_metadata.append(data_item)

    return data_with_metadata

def embed_chunked_company_data(json_file_path, max_chunk_size=1000):
    with open(json_file_path, "r") as file:
        company_data = json.load(file)

    all_data_with_metadata = []

    for company in company_data:
        text_to_embed = company["description"]

        # Filter out empty or whitespace-only descriptions
        if not text_to_embed.strip():
            continue

        # Chunk the text
        chunks = chunk_text_for_list([text_to_embed], max_chunk_size)[0]

        # Remove any empty chunks
        chunks = [chunk for chunk in chunks if chunk.strip()]

        if not chunks:
            continue  # Skip if no valid chunks remain

        # Generate embeddings for each chunk
        doc_embeddings = embeddings.embed_documents(chunks)

        # Combine data with metadata for upserting
        data_with_metadata = combine_vector_and_text(company, doc_embeddings, chunks)
        all_data_with_metadata.extend(data_with_metadata)

    # Remove entries with empty 'text' values in metadata
    all_data_with_metadata = [
        item for item in all_data_with_metadata
        if item["metadata"].get("text", "").strip()
    ]

    return all_data_with_metadata

def upsert_data_to_pinecone(data_with_metadata: list[dict[str, any]]) -> None:
    """Upsert data with metadata into a Pinecone index."""
    index.upsert(vectors=data_with_metadata)

# Give False if you have new data to upsert
data_already_upserted = True

if data_already_upserted==False:
    # Upsert only if data_with_metadata has valid entries
    data_with_meta_data = embed_chunked_company_data("./CompanyData.json")
    upsert_data_to_pinecone(data_with_metadata=data_with_meta_data)
else:
    print("No valid data to upsert.")

# Query embedding
def get_query_embeddings(query: str) -> list[float]:
    """This function returns a list of the embeddings for a given query.

    Args:
        query (str): The actual query/question.

    Returns:
        list[float]: The embeddings for the given query.
    """
    query_embeddings = embeddings.embed_query(query)
    return query_embeddings

user_query = "When was InnoTech founded? Is there any contribution to society? If yes, what is/are those?"

query_embeddings = get_query_embeddings(query=user_query)

def query_pinecone_index(
    query_embeddings: list[float],
    top_k: int = 1,
    include_metadata: bool = True,
    company_name: str = None
) -> dict[str, any]:
    """
    Query a Pinecone index for a specific company using a filter on metadata.

    Args:
    - query_embeddings (list[float]): List of query vectors.
    - top_k (int): Number of nearest neighbors to retrieve (default: 2).
    - include_metadata (bool): Whether to include metadata in the query response.
    - company_id (str): The unique company ID to filter by.

    Returns:
    - query_response (dict[str, any]): Query response containing nearest neighbors.
    """
    # filter_dict = {"company_id": company_id} if company_id else None
    query_response = index.query(
        vector=query_embeddings,
        filter={"company_name": {"$eq": company_name}},
        top_k=top_k,
        include_metadata=include_metadata,
    )
    return query_response

# Instantiate the LLM using Gemini
LLM = ChatGoogleGenerativeAI(
    model="gemini-1.5-flash",
    temperature=0,
    max_tokens=None,
    timeout=None,
    max_retries=2,
)


def better_query_response(prompt: str) -> str:
    """This function returns a better response using the LLM.
    
    Args:
        prompt (str): The prompt to send to the LLM.

    Returns:
        str: The actual response returned by the LLM.
    """
    # Format the prompt for the conversation model
    conversation_history = [
        {"role": "system", "content": (
            "You are a helpful chatbot that provides concise answers between 50 to 150 words. "
            "Follow these rules strictly: \n"
            "1. If the user's question is not related to the provided text or information is unavailable, respond with something similar to the following sentence: "
            "'Sorry, I do not have this information. Is there anything else I can help you with?'\n"
            "2. If the user greets, respond with an appropriate greeting, such as: 'Hi, how can I assist you today?'\n"
            "3. If the user indicates acknowledgment, such as 'ok' or 'alright,' respond with something similar to the following sentence: "
            "'Is there anything else I can help you with?'\n"
            "Your goal is to ensure helpful and context-aware communication at all times."
        )},
        {"role": "user", "content": prompt}
    ]

    # Call the LLM with the formatted conversation history
    better_answer = LLM.invoke(conversation_history)
    return better_answer.content  # Return the generated answer

# Create the prompt for the LLM
def get_response(user_prompt: str, context_text: str) -> str:
    """
    Generate a better response from the LLM based on user input and context.

    Args:
        user_prompt (str): The user's query or input.
        context_text (str): The relevant information for the response.

    Returns:
        str: The final response from the LLM.
    """
    # Format the prompt for querying the LLM
    prompt = (
        f"You have access to the following context:\n\n{context_text}\n\n"
        f"Respond to the user's query below, adhering to the rules provided.\n\nUser Query: {user_prompt}"
    )

    # Generate a better response from the LLM
    final_answer = better_query_response(prompt=prompt)
    return final_answer


app = Flask(__name__)
CORS(app)

@app.route("/api/home",methods=["GET"])
def return_home():
    return jsonify({
        'message': "Hello world!"
    })
@app.route('/chat', methods=['POST'])
def chat():
    data = request.json
    user_prompt = data.get("user_input")
    selectedCompany = data.get("selectedCompany")
    if not user_prompt:
        return jsonify({"error": "User input is required"}), 400

    # Generate embeddings for the query
    query_embeddings = get_query_embeddings(query=user_prompt)

    # Query the Pinecone index
    query_response = query_pinecone_index(query_embeddings=query_embeddings, company_name=selectedCompany)

    # Extract text from matches
    text_answer = " ".join([doc['metadata']['text'] for doc in query_response.get('matches', [])]) if query_response and "matches" in query_response else "No relevant matches found in the Pinecone index."

    # Create the prompt for the LLM
    prompt = f"Using the provided information, give me a concise answer. \n\n Query: {user_prompt}\n\nInformation: {text_answer}"

    # Generate a better response from the LLM
    final_answer = better_query_response(prompt=prompt)

    return jsonify({"response": final_answer})


if __name__ == "__main__":
    app.run(debug=True, port=8080)
