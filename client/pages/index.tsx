import { useState, useRef, useEffect } from "react";

const companies = [
  {
      "company_name": "InnoTech Solutions",
      "description": "InnoTech Solutions is a leading provider of cloud-based software and data analytics services for businesses, renowned for its innovative and scalable solutions that drive operational efficiency. Founded in 2010 and headquartered in San Francisco, CA, the company has established itself as a trusted partner for businesses looking to leverage technology to enhance performance and productivity in an increasingly competitive landscape. InnoTech Solutions specializes in a wide array of services, including enterprise resource planning (ERP), customer relationship management (CRM), and business intelligence (BI) systems, all designed to streamline operations and optimize resources. With a team of over 850 skilled professionals, InnoTech Solutions employs industry experts who bring diverse experience and a passion for technology to the table. This ensures that clients receive tailored solutions that meet their unique business needs and align with their strategic goals. The company’s flagship product, the InnoCloud Platform, offers a comprehensive suite of tools that integrates seamlessly with existing systems, providing real-time insights and analytics to help organizations make data-driven decisions. The platform leverages cutting-edge technologies such as artificial intelligence (AI) and machine learning (ML) to deliver predictive analytics, enabling businesses to anticipate market trends and customer needs effectively. InnoTech Solutions is committed to continuous innovation, investing significantly in research and development to stay ahead of market trends and evolving client requirements. This forward-thinking approach has allowed the company to expand its product offerings to include solutions for cybersecurity, mobile application development, and blockchain integration. Their innovative spirit is reflected in numerous industry awards and recognitions for excellence in technology and customer service. Customer satisfaction is at the core of InnoTech Solutions' business philosophy. The company prides itself on its customer-centric approach, offering 24/7 support and dedicated account management to ensure that clients receive the highest level of service. InnoTech Solutions has a proven track record of successful implementations across various industries, including finance, healthcare, manufacturing, and retail, helping businesses reduce costs, improve efficiency, and enhance customer satisfaction through tailored solutions. The company also emphasizes the importance of strategic partnerships, collaborating with industry leaders to enhance its service offerings and provide clients with access to the latest technologies and best practices. InnoTech was founded by Kyaw Swar Hein. InnoTech Solutions’ partnerships with major cloud service providers allow them to deliver reliable and scalable solutions, ensuring that clients can grow and adapt in a rapidly changing business environment. Furthermore, InnoTech Solutions is deeply committed to corporate social responsibility, actively participating in community outreach programs and sustainability initiatives. The company believes in giving back to the community and supports various educational programs aimed at promoting STEM (Science, Technology, Engineering, and Mathematics) among underprivileged youth. Through mentorship programs and scholarships, InnoTech Solutions seeks to inspire the next generation of innovators and technology leaders. With a strong focus on innovation, excellence, and customer satisfaction, InnoTech Solutions continues to expand its footprint in the technology sector. The company strives to empower businesses worldwide to harness the power of data and technology for growth and success. As it looks to the future, InnoTech Solutions is committed to remaining at the forefront of technological advancement, driving digital transformation, and shaping the future of business through intelligent solutions."
  },
  {
      "company_name": "Safari Springs Zoo",
      "description": "Nestled in the heart of a sprawling 100-acre reserve, Safari Springs Zoo has been a leading force in wildlife conservation since its establishment in 1985. Founded by renowned zoologist Dr. Thomas Elmore, the zoo aims to provide a sanctuary for endangered species while educating the public about the importance of preserving biodiversity. Under the leadership of CEO Sarah Montgomery, who took the reins in 2015, the zoo has expanded its mission to focus not only on animal care but also on environmental sustainability and wildlife research. Safari Springs Zoo is home to over 300 species of animals from all over the world, including rare and endangered species such as the Sumatran tiger and the golden-headed lion tamarin. The zoo offers immersive exhibits like the \"African Savannah\" and \"Rainforest Adventure,\" where visitors can experience the beauty of exotic wildlife up close in naturalistic habitats. The zoo is also a leader in conservation efforts, contributing to global wildlife protection initiatives and running breeding programs for endangered species. Its outreach programs work with schools and communities to raise awareness about environmental challenges, making Safari Springs Zoo a vital part of the conservation movement. 1. Maximus the African Lion is 12 years old and hails from the Serengeti, Tanzania. As the pride leader in the zoo's 'African Savannah' exhibit, Maximus is a magnificent creature with a golden mane that commands attention. Weighing in at 420 pounds, he enjoys basking in the sun and is known for his calm yet powerful presence. Maximus plays a vital role in educating visitors about the apex predators of the savanna. His daily activities include puzzle feeders and spending time with his pride, making him an essential part of the zoo’s wildlife conservation efforts. 2. Luna, the 10-year-old African lioness, also originates from the Serengeti in Tanzania. She is a skilled huntress and an attentive mother, known for her protective nature towards her cubs and pride. Luna enjoys spending time with Maximus, and together, they are the zoo's star couple. In the wild, lionesses are the primary hunters, and Luna's role in her pride showcases the importance of female lions in sustaining the social structure of the group. Her presence is crucial to the zoo’s efforts in educating the public about the delicate balance of predator and prey. 3. Sasha the Sumatran Tiger, 8 years old, is one of the last surviving members of the critically endangered Sumatran tiger subspecies, which can only be found on the Indonesian island of Sumatra. Sasha was born at a breeding center in Sumatra and brought to the zoo at 2 years old. Her striking orange coat with black stripes and fierce independence make her a captivating exhibit. Sasha enjoys roaming her lush, forested habitat in the \"Tiger Territory\" exhibit. She is part of a global breeding program aimed at increasing the population of Sumatran tigers, which face severe threats from habitat loss and poaching. 4. Ruby the Asian Elephant, at 25 years old, is one of the largest and most gentle animals in the zoo. Originally from the plains of India, Ruby was rescued from captivity and brought to the zoo to provide a better life. She is known for her incredible memory and strong family bonds, which are central to elephant social structures. Ruby enjoys spending time in her spacious enclosure, where she is given opportunities for enrichment activities like painting and playing with her herd. As one of the zoo’s most beloved residents, Ruby helps spread awareness about the threats facing wild elephant populations. 5. George the Giraffe, who is 15 years old, was born in the wilds of Kenya and brought to the zoo as part of a conservation program. Standing over 18 feet tall, George is the tallest animal in the zoo. His long neck and spotted coat make him a striking figure, and he can often be seen browsing for leaves in the \"African Plains\" exhibit. George plays a critical role in educating visitors about the importance of preserving Africa’s unique wildlife, particularly giraffes, whose populations are increasingly threatened by habitat loss and poaching. 6. Nala, the 7-year-old cheetah, is an incredibly fast and graceful animal. Native to the grasslands of Africa, Nala came to the zoo as part of a wildlife conservation effort. She is known for her exceptional speed, capable of running up to 70 mph in short bursts, making her the fastest land animal on Earth. In the zoo, Nala enjoys chasing after her enrichment toys and participating in controlled races, which help maintain her hunting instincts. Cheetah conservation is critical, as these animals face declining numbers due to habitat destruction and human-wildlife conflict. 7. Bobo the Western Lowland Gorilla, at 22 years old, was born in the Congo Basin of Central Africa. Bobo is one of the most intelligent animals at the zoo and can often be found solving puzzles and engaging in complex social interactions with his group. Gorillas are endangered, and Bobo’s role in the zoo’s breeding program is vital to preserving the species. He is a beloved figure among visitors who admire his calm demeanor and strong family bonds. The zoo is committed to educating the public about gorilla conservation and the challenges these incredible primates face in the wild. 8. Zuri the White Rhinoceros, 9 years old, is a resident of the zoo’s African savanna exhibit. Originally from South Africa, Zuri was brought to the zoo as part of an international effort to protect the critically endangered white rhino species. With her massive size and horn, Zuri is a striking presence, but she is known for her gentle nature and playful interactions with other animals. White rhinos are heavily endangered due to poaching for their horns, and the zoo plays an important role in their conservation through education, research, and breeding programs. 9. Pedro the Andean Condor, 17 years old, was born in the high Andes mountains of South America. As one of the largest flying birds, Pedro has a wingspan of over 10 feet. He spends most of his time soaring above the \"Andean Peaks\" exhibit, where visitors can marvel at his majestic flight. Pedro plays an important role in the zoo’s conservation efforts for condors, which are critically endangered due to hunting and habitat destruction. He also participates in breeding programs designed to boost the population of this remarkable bird. 10. Ellie the Koala, at 6 years old, is a beloved resident of the zoo’s \"Australian Outback\" exhibit. Native to the eucalyptus forests of Australia, Ellie was brought to the zoo as part of a breeding program to help preserve the koala population. With her adorable appearance and calm demeanor, Ellie educates visitors about the koala’s habitat and the threats they face, such as deforestation and disease. Koalas are considered vulnerable in the wild, and the zoo plays a crucial role in their conservation, providing a safe space for them to thrive."
  },
  {
      "company_name": "UrbanEnergies Corporation",
      "description": "UrbanEnergies Corp. is at the forefront of the renewable energy revolution, specializing in innovative solutions that harness solar and wind energy to create sustainable power sources for communities and businesses. Founded in 2010 and headquartered in Berlin, Germany, UrbanEnergies has established itself as a leader in the renewable energy sector, driven by a mission to combat climate change and promote clean energy alternatives. With a commitment to sustainability, UrbanEnergies focuses on developing and implementing cutting-edge technologies that enable efficient energy generation and consumption. The company designs and constructs state-of-the-art solar farms and wind turbines that are strategically located to maximize energy output while minimizing environmental impact. By utilizing the latest advancements in energy storage and smart grid technology, UrbanEnergies ensures that the energy generated is not only reliable but also accessible and cost-effective. UrbanEnergies Corp. offers a wide range of services, from project planning and consultation to installation and maintenance of renewable energy systems. The company collaborates closely with local governments, businesses, and community organizations to tailor energy solutions that meet the unique needs of each client. Whether it’s a large-scale solar project for a municipality or a small wind turbine installation for a business, UrbanEnergies is committed to delivering personalized and effective solutions. One of the hallmark projects of UrbanEnergies is the “Green City Initiative,” a comprehensive program aimed at transforming urban areas into sustainable, energy-efficient environments. This initiative focuses on retrofitting existing infrastructure with renewable energy solutions, including solar panels on rooftops, energy-efficient lighting systems, and advanced energy management systems. By integrating these technologies, UrbanEnergies aims to reduce energy consumption and greenhouse gas emissions, ultimately contributing to cleaner air and a healthier urban landscape. UrbanEnergies also emphasizes community engagement and education as essential components of its mission. The company hosts workshops, seminars, and community outreach programs to raise awareness about the benefits of renewable energy and sustainability. By fostering a culture of environmental responsibility, UrbanEnergies empowers individuals and organizations to adopt renewable energy solutions and participate in the transition toward a greener economy. In addition to its commitment to sustainability, UrbanEnergies is dedicated to innovation and research in the renewable energy field. The company invests significantly in research and development to explore new technologies and improve the efficiency of existing systems. Collaborating with academic institutions and industry partners, UrbanEnergies aims to drive advancements in renewable energy that will benefit not only their clients but the entire planet. UrbanEnergies Corp. is proud to have received multiple awards and recognitions for its contributions to the renewable energy sector. Their projects have been recognized for excellence in engineering, environmental stewardship, and community impact. These accolades reflect the company’s unwavering dedication to creating a sustainable future through renewable energy solutions. The company is also deeply committed to corporate social responsibility and actively participates in initiatives that promote social equity and environmental justice. UrbanEnergies partners with local organizations to support underprivileged communities, providing access to clean energy resources and educational opportunities in renewable energy technologies. By championing inclusivity and diversity, UrbanEnergies seeks to ensure that the benefits of renewable energy are accessible to all. As UrbanEnergies looks to the future, the company is poised for continued growth and expansion. With a rapidly evolving energy landscape, UrbanEnergies remains agile and adaptable, ready to seize new opportunities and tackle emerging challenges. Their vision includes expanding into new markets, developing innovative financing solutions for renewable energy projects, and advocating for policies that support sustainable energy practices on a global scale. In summary, UrbanEnergies Corp. is not just a renewable energy company; it is a catalyst for change in the fight against climate change. Through innovation, community engagement, and a steadfast commitment to sustainability, UrbanEnergies is shaping a cleaner, greener future for generations to come."
  }
]

export default function Home() {
  const [selectedCompany, setSelectedCompany] = useState<string>("InnoTech Solutions");
  const [chatInput, setChatInput] = useState<string>("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const BASEURL = process.env.NEXT_PUBLIC_BASEURL;
  interface Message {
    type: "user" | "ai";
    message: string;
  }
  const [chatMessages, setChatMessages] = useState<Message[]>([]);
  useEffect(() => {
    if (messagesEndRef.current) {
      // Scroll to the bottom of the chat container
      messagesEndRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  }, [chatMessages]); // Trigger effect when chatMessages changes
  const handleChatSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (chatInput.trim()) {
      // Add user message to chat history
      setChatMessages((prevMessages) => [
        ...prevMessages,
        { type: "user", message: chatInput },
      ]);

      // Immediately clear the input field
      setChatInput('');

      try {
        const response = await fetch(`${BASEURL}/chat`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ user_input: chatInput, selectedCompany: selectedCompany }),
        });
        const data = await response.json();

        if (response.ok) {
          // Add AI response to chat history
          setChatMessages((prevMessages) => [
            ...prevMessages,
            { type: "ai", message: data.response },
          ]);
        } else {
          console.error('Error:', data.error);
        }
      } catch (error) {
        console.error('Error submitting chat:', error);
      }

      // Disable the send button for 3 seconds
      setIsButtonDisabled(true);
      setTimeout(() => {
        setIsButtonDisabled(false);
      }, 3000);
    }
  };




  // Invoke the function when the dropdown changes
  const handleCompanyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newCompany = e.target.value;
    setSelectedCompany(newCompany);
    setChatMessages([]);
  };

  const selectedCompanySummary = companies.find(
    (company) => company.company_name === selectedCompany
  )?.description;

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
              onChange={handleCompanyChange}
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
                <option key={company.company_name} value={company.company_name}>
                  {company.company_name}
                </option>
              ))}
            </select>
            {/* Dropdown icon */}
          </div>
          {/* Summary */}
          <div
  style={{
    border: "1px solid #ccc",
    borderRadius: "15px",
    marginTop: "10px",
    height: "59vh", // Set height to 65vh
    overflowY: "auto", // Enable vertical scrolling
    display: "flex", // Enable flexbox for the container
    flexDirection: "column", // Stack children vertically
  }}
>
  <h3
    style={{
      padding: "10px",
      borderTopLeftRadius: "15px",
      borderTopRightRadius: "15px",
      backgroundColor: "#0395D8",
      color: "white",
      fontSize: "25px",
      fontWeight: "bold",
      textAlign: "center",
      margin: 0, // Remove margin to prevent extra space
    }}
  >
    {selectedCompany} Detail
  </h3>
  <div
    style={{
      padding: '10px',
      overflowY: 'auto', // Enable scrolling for the content below
      flex: 1, // Allow this section to take up remaining space
    }}
  >
    <p style={{ margin: 0 }}>{selectedCompanySummary}</p>
  </div>
</div>
        </div>

        {/* Right Section */}
        <div
          style={{
            display: "flex",
            flexDirection: "column", // Stacks header, messages, and input vertically
            height: "90vh", // Fixed height for the chat box
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
          flex: 1,
          overflowY: "auto", // Makes the chat area scrollable
          padding: "10px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          height: "400px", // Set a fixed height for the chat box area (adjust as needed)
        }}
      >
        {chatMessages.map((message, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              justifyContent: message.type === "user" ? "flex-end" : "flex-start",
              maxWidth: "70%",
              alignSelf: message.type === "user" ? "flex-end" : "flex-start",
              alignItems: "center", // Aligns content vertically
            }}
          >
            {/* Chatbot Image for AI Messages */}
            {message.type === "ai" && (
              <img
                src="/chatbot.jpg"
                alt="Chatbot"
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  marginRight: "5px", // Adds space between the image and the message
                  marginTop: "auto",
                }}
              />
            )}
            <span
              style={{
                backgroundColor: message.type === "user" ? "#fff" : "#f0f8ff",
                border: "1px solid #007bff",
                borderRadius: "5px",
                padding: "10px",
              }}
            >
              {message.message}
            </span>
          </div>
        ))}
        
        {/* Invisible element to scroll to */}
        <div ref={messagesEndRef} />
      </div>
          {/* Chat Input */}
          <form
            onSubmit={handleChatSubmit}
            style={{
              display: 'flex',
              padding: '10px',
              borderTop: '1px solid #ccc',
            }}
          >
            <input
              type="text"
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              placeholder="Type your question..."
              style={{
                flex: 1,
                padding: '10px',
                border: '1px solid #ccc',
                borderRadius: '5px 0 0 5px',
              }}
            />
            <button
              type="submit"
              disabled={isButtonDisabled} // Disable button when `isButtonDisabled` is true
              style={{
                backgroundColor: isButtonDisabled ? '#ccc' : '#007bff', // Change color when disabled
                color: 'white',
                padding: '10px 15px',
                border: 'none',
                borderRadius: '0 5px 5px 0',
                cursor: isButtonDisabled ? 'not-allowed' : 'pointer', // Show pointer only when enabled
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