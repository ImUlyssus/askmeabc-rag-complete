import { useState } from "react";

const companies = [
  {
    name: "Company A",
    summary: `Company Overview: SolaraTech Solutions is a dynamic and innovative technology firm that specializes in providing advanced software and hardware solutions for businesses across a wide range of industries. Founded in 2012 and headquartered in Austin, Texas, SolaraTech has grown to become a leader in the field of cloud computing, artificial intelligence (AI), and Internet of Things (IoT) technologies. The company’s mission is to help businesses transform their operations through cutting-edge technology, enabling them to achieve higher efficiency, better customer service, and increased profitability.
Products and Services: SolaraTech offers an array of products and services designed to meet the needs of modern enterprises. Its flagship products include the SolaraCloud platform, a comprehensive cloud infrastructure service that allows companies to manage data, deploy applications, and scale their operations with ease. SolaraCloud integrates seamlessly with popular development tools, enabling businesses to build and run applications with enhanced flexibility.`,
  },
  {
    name: "Company B",
    summary: "Details for Company B will go here...",
  },
];

export default function Home() {
  const [selectedCompany, setSelectedCompany] = useState<string>("Company A");
  const [chatInput, setChatInput] = useState<string>("");
  const [chatMessages, setChatMessages] = useState<string[]>([]);

  const handleChatSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (chatInput.trim()) {
      setChatMessages((prev) => [...prev, chatInput]);
      setChatInput("");
    }
  };
  const navButtonStyle = {
    margin: "0 5px", // Add space between buttons
    padding: "8px 15px", // Adjust padding for better look
    backgroundColor: "white", // Button background color
    color: "#007bff", // Text color to match the navbar theme
    border: "none", // Remove borders
    borderRadius: "5px", // Add rounded corners
    cursor: "pointer", // Pointer cursor on hover
    fontWeight: "bold", // Make text bold
  };

  const selectedCompanySummary = companies.find(
    (company) => company.name === selectedCompany
  )?.summary;

  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#0395D8", // Navbar background color
          padding: "10px 20px", // Add some padding
          color: "white", // Set text color to white
        }}
      >
        {/* Left Section: Brand Name */}
        <h1 style={{ margin: 0, fontSize: "30px", fontWeight: "bold" }}>AskMeABC</h1>

        {/* Right Section: Buttons */}
        <div>
          <button style={{
            backgroundColor: "#0395D8",
            borderColor: "#fff",
            color: "#fff",
            borderWidth: "1px",
            borderStyle: "solid",
            fontSize: "25px",
          }}>
            View on GitHub
          </button>
          <button style={{
            backgroundColor: "#0395D8",
            borderColor: "#fff",
            color: "#fff",
            borderWidth: "1px",
            borderStyle: "solid",
            fontSize: "25px",
          }}>
            Architecture Diagram
          </button>
          <button style={{
            backgroundColor: "#0395D8",
            borderColor: "#fff",
            color: "#fff",
            borderWidth: "1px",
            borderStyle: "solid",
            fontSize: "25px",
          }}>
            Developer Profile
          </button>
        </div>
      </header>


      <main style={{ display: "flex", gap: "20px", margin: "20px" }}>
        {/* Left Section */}
        <div style={{ flex: 1 }}>
          <h2 style={{ fontSize: "30px", fontWeight: 'bold' }}>
            NLP Project with vector database integrated with LLM
          </h2>
          <p>
            This website is
            developed to showcase developer proficiency in using vector data
            storage integration with LLM to query relevant contents from a given
            text data.
          </p>
          <h2 style={{ fontSize: "30px", fontWeight: 'bold' }}>What user can do on this website?</h2>
          <p>
            From the following box, user can opt for a company that they would
            like to query. Once a company is selected, the summary of the
            company will be shown in the box and user can ask further questions
            as he/she wants. The system will do semantic search in the vector
            database according to user query and retrieve relevant content from
            it. Then, it will send those retrieved data and query to Large
            Language Model (LLM) to structure the answer to make it readable for
            the user.
          </p>

          {/* Dropdown */}
          <label htmlFor="company-select" style={{ fontWeight: "bold" }}>
            Select a Company:
          </label>
          <div style={{ position: "relative", width: "100%" }}>
            <select
              id="company-select"
              value={selectedCompany}
              onChange={(e) => setSelectedCompany(e.target.value)}
              style={{
                display: "block",
                margin: "10px 0",
                padding: "10px 40px 10px 10px", // Add padding to make room for the icon
                fontSize: "25px",
                fontWeight: "bold",
                textAlign: "center",
                width: "100%",
                border: "1px solid black", // Set border color
                borderRadius: "15px", // Optional: for rounded corners
                appearance: "none", // Hide the default dropdown icon
                backgroundColor: "#fff", // Background color for the select
              }}
            >
              {companies.map((company) => (
                <option key={company.name} value={company.name}>
                  {company.name}
                </option>
              ))}
            </select>
            {/* Dropdown icon */}
            <span
              style={{
                position: "absolute",
                top: "50%",
                left: "10px", // Position the icon beside the text
                transform: "translateY(-50%)",
                pointerEvents: "none", // Make the icon unclickable
                fontSize: "20px", // Adjust icon size
                color: "#0395D8", // Icon color
              }}
            >
              ▼
            </span>
          </div>



          {/* Summary */}
          <div
            style={{
              border: "1px solid #ccc",
              borderRadius: "15px",
              marginTop: "10px",
            }}
          >
            <h3 style={{ padding: "10px", borderTopLeftRadius: "15px", borderTopRightRadius: "15px", backgroundColor: "#0395D8", color: "white", fontSize: '25px', fontWeight: "bold", textAlign: "center" }}>{selectedCompany} Summary</h3>
            <p style={{ padding: '10px' }}>{selectedCompanySummary}</p>
          </div>
        </div>

        {/* Right Section */}
        <div
  style={{
    display: "flex",
    flexDirection: "column", // Stacks header, messages, and input vertically
    height: "80vh", // Fixed height for the chat box
    border: "1px solid #ccc",
    borderRadius: "5px",
    width: "50%"
  }}
>
  {/* Chat Header */}
  <h2
    style={{
      padding: "10px",
      borderTopLeftRadius: "15px",
      borderTopRightRadius: "15px",
      backgroundColor: "#0395D8",
      color: "white",
      fontSize: "25px",
      fontWeight: "bold",
      textAlign: "center",
    }}
  >
    AskMeABC
  </h2>

  {/* Messages Area */}
  <div
    style={{
      flex: 1, // Allows this section to grow and fill available space
      overflowY: "auto", // Enables vertical scrolling for messages
      padding: "10px",
      display: "flex",
      flexDirection: "column", // Stack messages vertically
      gap: "10px", // Space between messages
    }}
  >
    {/* Example AI Message */}
    <div
      style={{
        display: "flex", // Align image and text
        maxWidth: "70%",
      }}
    >
      <img
        src="/chatbot.jpg"
        alt="Chatbot"
        style={{
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          objectFit: "cover",
        }}
      />
      <span
        style={{
          backgroundColor: "#f0f8ff",
          border: "1px solid #007bff",
          borderRadius: "5px",
          padding: "10px",
          flex: 1,
        }}
      >
        Hi! I am your AI assistant. I am ready to answer any question about{" "}
        {selectedCompany}.
      </span>
    </div>

    {/* Example User Message */}
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end", // Align user message to the right
        maxWidth: "70%",
        alignSelf: "flex-end", // Align the entire message to the right
      }}
    >
      <span
        style={{
          backgroundColor: "#fff",
          border: "1px solid #007bff",
          borderRadius: "5px",
          padding: "10px",
          textAlign: "right", // Align text within the bubble to the right
          flex: 1,
        }}
      >
        This is an example user message.
      </span>
    </div>
  </div>

  {/* Chat Input */}
  <form
    onSubmit={handleChatSubmit}
    style={{
      display: "flex",
      padding: "10px",
      borderTop: "1px solid #ccc", // Adds a subtle separation line
    }}
  >
    <input
      type="text"
      value={chatInput}
      onChange={(e) => setChatInput(e.target.value)}
      placeholder="Type your question..."
      style={{
        flex: 1, // Takes up the remaining space
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "5px 0 0 5px",
      }}
    />
    <button
      type="submit"
      style={{
        backgroundColor: "#007bff",
        color: "white",
        padding: "10px 15px",
        border: "none",
        borderRadius: "0 5px 5px 0",
        cursor: "pointer",
      }}
    >
      Send
    </button>
  </form>
</div>

      </main>
    </div>
  );
}

const buttonStyle = {
  margin: "0 5px",
  padding: "10px 15px",
  backgroundColor: "#007bff",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};


// function index() {
//   const [message, setMessage] = useState("Loading");
//   useEffect(()=>{
//     fetch("http://localhost:8080/api/home").then(
//       response => response.json()
//     ).then(
//       (data) =>{
//         setMessage(data.message);
//       }
//     )
//   },[])
//   return (
//     <div>{message}</div>
//   )
// }

// export default index