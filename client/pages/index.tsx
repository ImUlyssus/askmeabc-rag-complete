import { useState } from "react";

const companies = [
  {
    "company_name": "InnoTech Solutions",
    "industry": "Technology",
    "description": "InnoTech Solutions is a leading provider of cloud-based software and data analytics services for businesses, renowned for its innovative and scalable solutions that drive operational efficiency. Founded in 2010 and headquartered in San Francisco, CA, the company has established itself as a trusted partner for businesses looking to leverage technology to enhance performance and productivity in an increasingly competitive landscape. InnoTech Solutions specializes in a wide array of services, including enterprise resource planning (ERP), customer relationship management (CRM), and business intelligence (BI) systems, all designed to streamline operations and optimize resources. With a team of over 850 skilled professionals, InnoTech Solutions employs industry experts who bring diverse experience and a passion for technology to the table. This ensures that clients receive tailored solutions that meet their unique business needs and align with their strategic goals. The company’s flagship product, the InnoCloud Platform, offers a comprehensive suite of tools that integrates seamlessly with existing systems, providing real-time insights and analytics to help organizations make data-driven decisions. The platform leverages cutting-edge technologies such as artificial intelligence (AI) and machine learning (ML) to deliver predictive analytics, enabling businesses to anticipate market trends and customer needs effectively. InnoTech Solutions is committed to continuous innovation, investing significantly in research and development to stay ahead of market trends and evolving client requirements. This forward-thinking approach has allowed the company to expand its product offerings to include solutions for cybersecurity, mobile application development, and blockchain integration. Their innovative spirit is reflected in numerous industry awards and recognitions for excellence in technology and customer service. Customer satisfaction is at the core of InnoTech Solutions' business philosophy. The company prides itself on its customer-centric approach, offering 24/7 support and dedicated account management to ensure that clients receive the highest level of service. InnoTech Solutions has a proven track record of successful implementations across various industries, including finance, healthcare, manufacturing, and retail, helping businesses reduce costs, improve efficiency, and enhance customer satisfaction through tailored solutions. The company also emphasizes the importance of strategic partnerships, collaborating with industry leaders to enhance its service offerings and provide clients with access to the latest technologies and best practices. InnoTech was founded by Kyaw Swar Hein. InnoTech Solutions’ partnerships with major cloud service providers allow them to deliver reliable and scalable solutions, ensuring that clients can grow and adapt in a rapidly changing business environment. Furthermore, InnoTech Solutions is deeply committed to corporate social responsibility, actively participating in community outreach programs and sustainability initiatives. The company believes in giving back to the community and supports various educational programs aimed at promoting STEM (Science, Technology, Engineering, and Mathematics) among underprivileged youth. Through mentorship programs and scholarships, InnoTech Solutions seeks to inspire the next generation of innovators and technology leaders. With a strong focus on innovation, excellence, and customer satisfaction, InnoTech Solutions continues to expand its footprint in the technology sector. The company strives to empower businesses worldwide to harness the power of data and technology for growth and success. As it looks to the future, InnoTech Solutions is committed to remaining at the forefront of technological advancement, driving digital transformation, and shaping the future of business through intelligent solutions.",
    "headquarters": "San Francisco, CA, USA",
    "employees": 850
  },
  {
    "company_name": "GreenLeaf Organics",
    "industry": "Agriculture",
    "description": "GreenLeaf Organics is a pioneering force in the organic agriculture sector, dedicated to promoting sustainable farming practices and the production of high-quality organic foods. Established in 2015 and based in Austin, TX, the company has quickly gained recognition for its commitment to environmental stewardship and healthy living, serving a diverse clientele that ranges from individual consumers to large retail chains. At the heart of GreenLeaf Organics is the belief that food should be produced in harmony with nature. The company cultivates a wide variety of organic fruits, vegetables, and herbs across its sprawling farms, which cover over 1,000 acres of rich, fertile land. Utilizing regenerative farming techniques, GreenLeaf Organics enhances soil health, conserves water, and promotes biodiversity, ensuring that the land remains productive for generations to come. Their farming practices eliminate synthetic fertilizers and pesticides, relying instead on natural solutions such as compost, cover crops, and integrated pest management to create a sustainable ecosystem. GreenLeaf Organics takes pride in its farm-to-table philosophy, ensuring that consumers receive fresh, nutritious, and ethically produced food. The company operates a network of community-supported agriculture (CSA) programs, enabling local consumers to receive seasonal produce directly from the farm. This not only supports local economies but also fosters a closer connection between consumers and their food sources, encouraging healthier eating habits and greater awareness of sustainable practices. In addition to fresh produce, GreenLeaf Organics offers a range of value-added products, including organic sauces, jams, and packaged snacks made from their farm-grown ingredients. These products are crafted with the same commitment to quality and sustainability, providing consumers with convenient options that do not compromise on taste or health. GreenLeaf Organics also engages in product innovation, exploring new flavors and formulations to meet the evolving demands of health-conscious consumers. The company emphasizes transparency and traceability in its operations, providing customers with clear information about the sourcing and production of their food. GreenLeaf Organics is certified organic by the USDA and adheres to rigorous standards that ensure the integrity of its products. Customers can trace the origins of their food through a unique QR code system that provides information about the farm, growing practices, and even the specific harvest date, fostering trust and accountability. GreenLeaf Organics is not only committed to producing high-quality food but also to educating the public about the benefits of organic farming and healthy eating. The company hosts workshops, farm tours, and community events that engage consumers, families, and schools in discussions about nutrition, gardening, and sustainable practices. By empowering individuals with knowledge, GreenLeaf Organics seeks to inspire a movement toward more responsible food choices and a healthier lifestyle. With a strong emphasis on corporate social responsibility, GreenLeaf Organics actively participates in initiatives that support local communities and promote environmental sustainability. The company collaborates with schools and nonprofit organizations to provide educational resources and support for urban gardening projects, food banks, and nutrition programs for underserved populations. By investing in community well-being, GreenLeaf Organics aims to create a positive impact beyond its business operations. GreenLeaf Organics also recognizes the importance of sustainable sourcing and ethical supply chains. The company partners with other local and national organic producers to ensure that its products meet high standards of quality and sustainability. By building strong relationships with like-minded businesses, GreenLeaf Organics reinforces its commitment to a holistic approach to food production that benefits both consumers and the planet. As GreenLeaf Organics continues to grow, the company remains focused on innovation and sustainability. By leveraging technology and research, they are exploring new methods for improving crop yields, reducing waste, and minimizing their environmental footprint. The vision for the future includes expanding their product lines, enhancing distribution channels, and continuing to advocate for organic farming practices as a solution to modern agricultural challenges. With a steadfast dedication to organic farming, community engagement, and environmental stewardship, GreenLeaf Organics is positioned to be a leader in the agriculture industry. The company’s mission is clear: to nourish communities with wholesome, sustainable food while promoting a healthier planet for future generations.",
    "headquarters": "Austin, TX, USA",
    "employees": 120
  },
  {
    "company_name": "UrbanEnergies Corporation",
    "industry": "Renewable Energy",
    "description": "UrbanEnergies Corp. is at the forefront of the renewable energy revolution, specializing in innovative solutions that harness solar and wind energy to create sustainable power sources for communities and businesses. Founded in 2010 and headquartered in Berlin, Germany, UrbanEnergies has established itself as a leader in the renewable energy sector, driven by a mission to combat climate change and promote clean energy alternatives. With a commitment to sustainability, UrbanEnergies focuses on developing and implementing cutting-edge technologies that enable efficient energy generation and consumption. The company designs and constructs state-of-the-art solar farms and wind turbines that are strategically located to maximize energy output while minimizing environmental impact. By utilizing the latest advancements in energy storage and smart grid technology, UrbanEnergies ensures that the energy generated is not only reliable but also accessible and cost-effective. UrbanEnergies Corp. offers a wide range of services, from project planning and consultation to installation and maintenance of renewable energy systems. The company collaborates closely with local governments, businesses, and community organizations to tailor energy solutions that meet the unique needs of each client. Whether it’s a large-scale solar project for a municipality or a small wind turbine installation for a business, UrbanEnergies is committed to delivering personalized and effective solutions. One of the hallmark projects of UrbanEnergies is the “Green City Initiative,” a comprehensive program aimed at transforming urban areas into sustainable, energy-efficient environments. This initiative focuses on retrofitting existing infrastructure with renewable energy solutions, including solar panels on rooftops, energy-efficient lighting systems, and advanced energy management systems. By integrating these technologies, UrbanEnergies aims to reduce energy consumption and greenhouse gas emissions, ultimately contributing to cleaner air and a healthier urban landscape. UrbanEnergies also emphasizes community engagement and education as essential components of its mission. The company hosts workshops, seminars, and community outreach programs to raise awareness about the benefits of renewable energy and sustainability. By fostering a culture of environmental responsibility, UrbanEnergies empowers individuals and organizations to adopt renewable energy solutions and participate in the transition toward a greener economy. In addition to its commitment to sustainability, UrbanEnergies is dedicated to innovation and research in the renewable energy field. The company invests significantly in research and development to explore new technologies and improve the efficiency of existing systems. Collaborating with academic institutions and industry partners, UrbanEnergies aims to drive advancements in renewable energy that will benefit not only their clients but the entire planet. UrbanEnergies Corp. is proud to have received multiple awards and recognitions for its contributions to the renewable energy sector. Their projects have been recognized for excellence in engineering, environmental stewardship, and community impact. These accolades reflect the company’s unwavering dedication to creating a sustainable future through renewable energy solutions. The company is also deeply committed to corporate social responsibility and actively participates in initiatives that promote social equity and environmental justice. UrbanEnergies partners with local organizations to support underprivileged communities, providing access to clean energy resources and educational opportunities in renewable energy technologies. By championing inclusivity and diversity, UrbanEnergies seeks to ensure that the benefits of renewable energy are accessible to all. As UrbanEnergies looks to the future, the company is poised for continued growth and expansion. With a rapidly evolving energy landscape, UrbanEnergies remains agile and adaptable, ready to seize new opportunities and tackle emerging challenges. Their vision includes expanding into new markets, developing innovative financing solutions for renewable energy projects, and advocating for policies that support sustainable energy practices on a global scale. In summary, UrbanEnergies Corp. is not just a renewable energy company; it is a catalyst for change in the fight against climate change. Through innovation, community engagement, and a steadfast commitment to sustainability, UrbanEnergies is shaping a cleaner, greener future for generations to come.",
    "headquarters": "Berlin, Germany",
    "employees": 300
  }
]

export default function Home() {
  const [selectedCompany, setSelectedCompany] = useState<string>("InnoTech Solutions");
  const [chatInput, setChatInput] = useState<string>("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  interface Message {
    type: "user" | "ai";
    message: string;
  }
  const [chatMessages, setChatMessages] = useState<Message[]>([]);

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
      const response = await fetch('http://localhost:8080/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user_input: chatInput, selectedCompany }),
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
            }}
          >
            <h3 style={{ padding: "10px", borderTopLeftRadius: "15px", borderTopRightRadius: "15px", backgroundColor: "#0395D8", color: "white", fontSize: '25px', fontWeight: "bold", textAlign: "center" }}>{selectedCompany} Detail</h3>
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
              flex: 1,
              overflowY: "auto",
              padding: "10px",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
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