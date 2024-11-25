import { useState, useRef, useEffect } from "react";

const companies = [
  {
      "company_name": "ShopEase Inc.",
      "description": "ShopEase Inc. is a fast-growing e-commerce platform founded in 2018 by tech entrepreneurs Emily Carter and James Rodriguez. Headquartered in Austin, Texas, the company started as a small online marketplace for handmade and vintage goods but quickly expanded into a one-stop shop offering a wide range of products, including electronics, fashion, home essentials, and groceries. With a mission to make shopping convenient, affordable, and accessible, ShopEase has gained a reputation for its customer-centric approach and seamless online experience. The company employs over 1,500 people globally, with a diverse team of engineers, marketing professionals, customer support specialists, and logistics experts. ShopEase operates in over 10 countries and serves millions of active users every month, with a robust supply chain network ensuring quick delivery and hassle-free returns. Known for leveraging cutting-edge technology, the platform uses AI-driven recommendations and a sophisticated search system to enhance user experience. Emily and James attribute the company’s success to its strong focus on customer satisfaction, as reflected in its 24/7 support system and loyalty programs like \"EasePoints.\" ShopEase has also committed to sustainability by introducing eco-friendly packaging and collaborating with green delivery services. With plans to expand its product categories and enter new international markets, ShopEase continues to set benchmarks in the e-commerce industry.High-quality wireless earbuds with active noise cancellation and up to 24 hours of battery life. Compatible with all Bluetooth-enabled devices, these earbuds offer a crystal-clear sound experience. They are designed with a lightweight structure and come with multiple ear-tip sizes for a comfortable fit. The touch controls make it easy to manage calls, music, and voice assistants on the go. Rated IPX5, they are also water-resistant, making them perfect for workouts or outdoor activities. The earbuds are from the brand SoundPulse, priced at $49.99. With an impressive customer rating of 4.8 stars, they are one of the top-selling items in the electronics category. These earbuds are currently in stock and are highly recommended for anyone seeking premium audio on the go. This adjustable and foldable smartphone stand is made of premium aluminum alloy, offering both durability and style. Its anti-slip base ensures stability, while its ergonomic design supports hands-free use for video calls, streaming, or reading. The stand accommodates phones of all sizes and angles, making it a versatile accessory for your workspace or home. Compact and portable, it’s perfect for users on the go. This smartphone stand, from the brand TechHold, is priced at $12.99 and is highly rated at 4.6 stars. It’s available in stock and is popular among customers who need a convenient way to use their phones hands-free during daily tasks or meetings. A 32-ounce stainless steel water bottle designed with double-wall insulation to keep beverages hot for up to 12 hours and cold for 24 hours. Featuring a leak-proof lid and a built-in carrying handle, it’s ideal for daily use or outdoor adventures. The bottle is BPA-free and eco-friendly, making it a sustainable alternative to disposable plastics. It comes in multiple vibrant colors to match your style. This reusable water bottle is from the brand HydratePro and is priced at $24.99. With a rating of 4.7 stars, it’s a top-selling item in the home and lifestyle category. Customers appreciate its design and functionality, and it remains a popular choice for those looking to stay hydrated while reducing their carbon footprint.This compact power bank offers 10,000mAh of charging capacity, allowing you to power up your devices on the go. It supports fast charging for phones, tablets, and even laptops, making it an essential accessory for travelers or people with busy schedules. The slim, lightweight design fits easily in your bag or pocket, while the LED display shows the remaining battery percentage. It’s equipped with multiple charging ports, so you can charge multiple devices simultaneously. From the brand PowerFlex, this power bank is priced at $29.99. It has a customer rating of 4.6 stars and is available in stock. This portable Bluetooth speaker delivers rich, high-quality sound with deep bass and crisp treble. With up to 12 hours of continuous playback and a waterproof design, it’s perfect for outdoor parties, beach trips, or backyard BBQs. The built-in microphone allows hands-free calls, and it connects seamlessly with any Bluetooth-enabled device. The speaker is also equipped with an AUX input, ensuring versatility for wired connections. This speaker is from the brand SoundWave, priced at $39.99, and has a customer rating of 4.8 stars. It's a popular choice for those looking for an all-around reliable audio experience. A sleek fitness tracker that monitors heart rate, steps, calories burned, and sleep patterns, helping users stay on top of their health goals. With a long-lasting battery life of up to 7 days, it syncs with your phone to display notifications and track your progress over time. The tracker is also water-resistant and comes with a comfortable, adjustable strap. Compatible with both iOS and Android devices, it's the perfect fitness companion. This fitness tracker is from the brand FitTrack, priced at $49.99. It has a 4.7-star rating and is in stock, making it one of the most popular items in the health and wellness category. These smart LED light bulbs are Wi-Fi enabled and can be controlled via a smartphone app or voice assistants like Alexa and Google Assistant. They offer adjustable color temperature and brightness levels to create the perfect ambiance in any room. Energy-efficient and long-lasting, these bulbs are a great choice for anyone looking to upgrade their home lighting system. Installation is easy, as the bulbs fit into standard light sockets. The smart light bulbs are priced at $19.99 and come from the brand HomeGlow. With a rating of 4.5 stars, they are popular in the home automation and smart home categories. This ergonomic office chair provides excellent lumbar support and is designed to reduce strain during long hours of sitting. With adjustable height, armrests, and a reclining feature, the chair can be customized to fit individual needs. The breathable mesh back promotes airflow, ensuring comfort even during extended use. It’s made with high-quality materials to offer durability and long-term performance. From the brand WorkEase, this office chair is priced at $149.99. With a 4.6-star rating, it’s favored by home office workers for its comfort and design. This air fryer uses rapid hot air circulation to cook crispy, delicious food with little to no oil. It’s perfect for making healthier versions of fried foods like fries, chicken wings, and vegetables. The fryer features adjustable temperature controls and a large capacity basket, making it ideal for family meals. Easy to clean and compact in design, it’s a popular choice for anyone looking to upgrade their kitchen gadgets. Priced at $79.99, the air fryer is from the brand FryMaster and has a customer rating of 4.8 stars. It’s available in stock and continues to be a top-seller in the kitchen appliance category. This smart thermostat allows you to control your home’s temperature remotely via an app or voice assistant. It features energy-saving algorithms that adjust the temperature based on your preferences and schedule. With easy installation and compatibility with most HVAC systems, it’s an excellent option for homeowners looking to optimize energy usage and reduce utility bills. The thermostat also includes features like weather forecasting and humidity control. From the brand ClimateTech, this smart thermostat is priced at $119.99 and has a 4.7-star rating. It’s in stock and continues to be one of the most sought-after items in the home improvement category."
  },
  {
      "company_name": "Safari Springs Zoo",
      "description": "Nestled in the heart of a sprawling 100-acre reserve, Safari Springs Zoo has been a leading force in wildlife conservation since its establishment in 1985. Founded by renowned zoologist Dr. Thomas Elmore, the zoo aims to provide a sanctuary for endangered species while educating the public about the importance of preserving biodiversity. Under the leadership of CEO Sarah Montgomery, who took the reins in 2015, the zoo has expanded its mission to focus not only on animal care but also on environmental sustainability and wildlife research. Safari Springs Zoo is home to over 300 species of animals from all over the world, including rare and endangered species such as the Sumatran tiger and the golden-headed lion tamarin. The zoo offers immersive exhibits like the \"African Savannah\" and \"Rainforest Adventure,\" where visitors can experience the beauty of exotic wildlife up close in naturalistic habitats. The zoo is also a leader in conservation efforts, contributing to global wildlife protection initiatives and running breeding programs for endangered species. Its outreach programs work with schools and communities to raise awareness about environmental challenges, making Safari Springs Zoo a vital part of the conservation movement. 1. Maximus the African Lion is 12 years old and hails from the Serengeti, Tanzania. As the pride leader in the zoo's 'African Savannah' exhibit, Maximus is a magnificent creature with a golden mane that commands attention. Weighing in at 420 pounds, he enjoys basking in the sun and is known for his calm yet powerful presence. Maximus plays a vital role in educating visitors about the apex predators of the savanna. His daily activities include puzzle feeders and spending time with his pride, making him an essential part of the zoo’s wildlife conservation efforts. 2. Luna, the 10-year-old African lioness, also originates from the Serengeti in Tanzania. She is a skilled huntress and an attentive mother, known for her protective nature towards her cubs and pride. Luna enjoys spending time with Maximus, and together, they are the zoo's star couple. In the wild, lionesses are the primary hunters, and Luna's role in her pride showcases the importance of female lions in sustaining the social structure of the group. Her presence is crucial to the zoo’s efforts in educating the public about the delicate balance of predator and prey. 3. Sasha the Sumatran Tiger, 8 years old, is one of the last surviving members of the critically endangered Sumatran tiger subspecies, which can only be found on the Indonesian island of Sumatra. Sasha was born at a breeding center in Sumatra and brought to the zoo at 2 years old. Her striking orange coat with black stripes and fierce independence make her a captivating exhibit. Sasha enjoys roaming her lush, forested habitat in the \"Tiger Territory\" exhibit. She is part of a global breeding program aimed at increasing the population of Sumatran tigers, which face severe threats from habitat loss and poaching. 4. Ruby the Asian Elephant, at 25 years old, is one of the largest and most gentle animals in the zoo. Originally from the plains of India, Ruby was rescued from captivity and brought to the zoo to provide a better life. She is known for her incredible memory and strong family bonds, which are central to elephant social structures. Ruby enjoys spending time in her spacious enclosure, where she is given opportunities for enrichment activities like painting and playing with her herd. As one of the zoo’s most beloved residents, Ruby helps spread awareness about the threats facing wild elephant populations. 5. George the Giraffe, who is 15 years old, was born in the wilds of Kenya and brought to the zoo as part of a conservation program. Standing over 18 feet tall, George is the tallest animal in the zoo. His long neck and spotted coat make him a striking figure, and he can often be seen browsing for leaves in the \"African Plains\" exhibit. George plays a critical role in educating visitors about the importance of preserving Africa’s unique wildlife, particularly giraffes, whose populations are increasingly threatened by habitat loss and poaching. 6. Nala, the 7-year-old cheetah, is an incredibly fast and graceful animal. Native to the grasslands of Africa, Nala came to the zoo as part of a wildlife conservation effort. She is known for her exceptional speed, capable of running up to 70 mph in short bursts, making her the fastest land animal on Earth. In the zoo, Nala enjoys chasing after her enrichment toys and participating in controlled races, which help maintain her hunting instincts. Cheetah conservation is critical, as these animals face declining numbers due to habitat destruction and human-wildlife conflict. 7. Bobo the Western Lowland Gorilla, at 22 years old, was born in the Congo Basin of Central Africa. Bobo is one of the most intelligent animals at the zoo and can often be found solving puzzles and engaging in complex social interactions with his group. Gorillas are endangered, and Bobo’s role in the zoo’s breeding program is vital to preserving the species. He is a beloved figure among visitors who admire his calm demeanor and strong family bonds. The zoo is committed to educating the public about gorilla conservation and the challenges these incredible primates face in the wild. 8. Zuri the White Rhinoceros, 9 years old, is a resident of the zoo’s African savanna exhibit. Originally from South Africa, Zuri was brought to the zoo as part of an international effort to protect the critically endangered white rhino species. With her massive size and horn, Zuri is a striking presence, but she is known for her gentle nature and playful interactions with other animals. White rhinos are heavily endangered due to poaching for their horns, and the zoo plays an important role in their conservation through education, research, and breeding programs. 9. Pedro the Andean Condor, 17 years old, was born in the high Andes mountains of South America. As one of the largest flying birds, Pedro has a wingspan of over 10 feet. He spends most of his time soaring above the \"Andean Peaks\" exhibit, where visitors can marvel at his majestic flight. Pedro plays an important role in the zoo’s conservation efforts for condors, which are critically endangered due to hunting and habitat destruction. He also participates in breeding programs designed to boost the population of this remarkable bird. 10. Ellie the Koala, at 6 years old, is a beloved resident of the zoo’s \"Australian Outback\" exhibit. Native to the eucalyptus forests of Australia, Ellie was brought to the zoo as part of a breeding program to help preserve the koala population. With her adorable appearance and calm demeanor, Ellie educates visitors about the koala’s habitat and the threats they face, such as deforestation and disease. Koalas are considered vulnerable in the wild, and the zoo plays a crucial role in their conservation, providing a safe space for them to thrive."
  },
  {
      "company_name": "Greenfield University",
      "description": "Greenfield University was founded in 1995 by Dr. Laura Mitchell, a renowned educator and philanthropist, with the goal of providing accessible, high-quality education to students from diverse backgrounds. Located in the heart of Silicon Valley, California, Greenfield University began as a small liberal arts college, offering undergraduate programs in humanities, science, and business. Over the years, the university expanded its academic offerings and now includes graduate programs, professional certifications, and research opportunities in fields such as technology, healthcare, and social sciences. With a student population of over 20,000, Greenfield University is known for its commitment to academic excellence, innovation, and community involvement. The university’s faculty consists of over 1,000 distinguished professors and industry professionals who bring both theoretical knowledge and practical expertise to the classroom. Greenfield is particularly recognized for its cutting-edge research centers, where students collaborate with faculty on projects that address global challenges in fields like renewable energy, artificial intelligence, and public health. The university’s state-of-the-art campus, which includes modern classrooms, research labs, and recreational facilities, fosters an environment of collaboration and growth. Greenfield’s diverse student body represents more than 50 countries, and the institution prides itself on promoting a culture of inclusion and global citizenship. With a strong alumni network, Greenfield University has established itself as a leader in higher education, preparing students for successful careers and leadership roles in their respective fields. 2024: The year 2024 saw impressive academic achievements at Greenfield University, with the top-ranking student being Emily Davidson, who graduated with a perfect unweighted GPA of 5.0. Emily majored in Computer Science and was known for her innovative research on artificial intelligence. Right behind her was Michael Owens, with a 4.98 GPA in Electrical Engineering, who had also received a prestigious internship at Tesla. Other standout students included Sophia Johnson (4.97, Business Administration), Liam Harris (4.96, Chemistry), and Ava Smith (4.95, Psychology), each of whom excelled in their respective fields. The class of 2024 included students from a range of disciplines, all achieving remarkable academic success. The top 10 list also featured students like Olivia Thompson, Noah Green, Isabella Martinez, Jacob Lewis, and Mia Clark, all maintaining GPAs of 4.9 or higher. 2023: In 2023, the top-ranking student was Noah Green, who graduated with a GPA of 5.0 in Biology, completing a highly impactful senior thesis on gene editing. Close behind were Emma Brown (4.98, Mechanical Engineering), Elijah Lee (4.97, Physics), and Isabella Roberts (4.96, Economics). This year also marked the university's first graduating class with a high number of international students making the top 10 list, including Priya Kapoor from India (4.95, Environmental Science) and Carlos Ruiz from Spain (4.93, Political Science). Other notable graduates included Grace Mitchell (4.94, History), James King (4.92, Mathematics), Lily Wang (4.91, Sociology), and Jack Walker (4.90, Literature). Many of these students went on to receive offers from top global companies and universities for graduate study. 2022: The 2022 graduating class was marked by outstanding achievements, with Sarah Walker earning a 5.0 GPA in Engineering. Sarah, a standout in renewable energy projects, was followed closely by Ethan Carter (4.99, Biochemistry) and Lily Adams (4.98, Law). Other top students included Olivia White (4.97, Marketing), Michael Turner (4.96, Finance), and Ava Collins (4.95, International Relations). The year saw a strong presence of interdisciplinary research projects, with many of the top students being involved in cross-departmental initiatives. Some of the notable graduates were Isabella Green (4.94, Art History), Leo Smith (4.93, Philosophy), and Mason Clark (4.92, Neuroscience), all of whom contributed to the university's growing reputation for fostering interdisciplinary learning. 2021: The top student of 2021 was Emily Davis, who graduated with a perfect 5.0 GPA in Neuroscience. Emily’s groundbreaking research on brain-computer interfaces earned her an internship at a leading tech company. Right behind her were Liam Parker (4.98, Environmental Engineering), Anna Lee (4.97, Sociology), and Ethan Williams (4.96, Mathematics). This year also saw the rise of several students with a focus on entrepreneurship, including Oliver Thompson (4.95, Business) and Chloe Harris (4.94, Economics), both of whom launched successful startups during their time at the university. The top 10 list also featured students like Grace Thompson (4.93, Political Science), Lucas Martinez (4.92, Physics), and Mia Rodriguez (4.91, Linguistics), who all earned high praise for their academic and extracurricular achievements. 2020: In 2020, Alexander Scott was the highest-ranked student, graduating with a 5.0 GPA in Computer Science. His work on cybersecurity protocols earned him several job offers from major tech companies. Following closely were Isabella King (4.98, Biomedical Engineering) and Sophia White (4.97, Chemistry). Other top students included Ethan Thompson (4.96, Physics), Olivia Harris (4.95, Business Management), and Lucas Lee (4.94, Economics). The year also saw a significant number of students entering prestigious graduate programs, including Grace Parker (4.93, Literature) and Nathan Reed (4.92, Environmental Science). The students who made it to the top 10 list were recognized for their leadership in both academics and extracurricular activities, particularly in student government and research. 2019: The highest-ranking student of 2019 was Lily Cooper, who graduated with a 5.0 GPA in Psychology. Her research in child development was highly regarded. In second place was Michael Green (4.99, Chemistry), followed by Ava Mitchell (4.98, Law). Other top students included Noah Davis (4.97, Economics), Olivia Lee (4.96, Engineering), and James Brown (4.95, Political Science). The year also saw an increasing number of students entering internships at prestigious institutions, with standout placements including Isabella Clark at Google and Ethan Turner at NASA. Graduates such as Zoe Allen (4.94, Philosophy) and Caleb Roberts (4.93, Physics) were highly sought after by graduate schools around the world. 2018: The class of 2018 was led by Daniel Foster, who graduated with a 5.0 GPA in History. Daniel’s thesis on the impact of ancient civilizations on modern society was highly acclaimed. He was followed by Sofia White (4.99, Biology) and Isabella Johnson (4.98, Mechanical Engineering). Other top students included Liam Harris (4.97, Business), Mia Thompson (4.96, Sociology), and Jack Walker (4.95, Mathematics). This year also marked the increasing influence of tech-focused degrees, with top students like Noah King (4.94, Computer Science) and Grace Williams (4.93, Electrical Engineering) gaining attention for their innovative projects. The class of 2018 left a lasting legacy, with many graduates going on to become leaders in their respective fields. 2017: Leading the class of 2017 was Emily Roberts, who graduated with a 5.0 GPA in Physics. Emily was recognized for her work in quantum mechanics and theoretical physics. Following her was Jacob Clark (4.99, Mechanical Engineering), who co-authored a paper on sustainable energy solutions. Other outstanding students included Sophie Lee (4.98, Political Science), Mason Davis (4.97, Environmental Science), and Lily Brown (4.96, Mathematics). This was also a year of major achievements in the humanities, with students like Ava King (4.95, History) and Daniel Martinez (4.94, Philosophy) being awarded prestigious fellowships. The university’s commitment to both STEM and the arts was reflected in this diverse and successful cohort. 2016: The highest-ranking student of 2016 was Ava Carter, with a 5.0 GPA in Biomedical Engineering. Ava’s innovative work in prosthetics design earned her national recognition. Following closely were Lucas Roberts (4.99, Chemistry), Sophia Adams (4.98, Economics), and Ethan White (4.97, History). The top 10 also included high achievers like Olivia Walker (4.96, Social Work), Mason Brown (4.95, Business), and Noah Harris (4.94, Computer Science). Several students from the class of 2016 were accepted into highly competitive medical and law schools, setting the stage for an exceptional future for Greenfield graduates. 2015: The top student of 2015 was Liam Johnson, who graduated with a perfect 5.0 GPA in Engineering. Liam’s final project focused on renewable energy solutions and earned him multiple accolades. Other top students included Mia Clark (4.99, Computer Science), Daniel Green (4.98, Political Science), and Noah Adams (4.97, Psychology). The class of 2015 was known for its strong leadership in student organizations, with many graduates taking on influential roles in various industries. Graduates from this year were highly successful in securing internships and full-time positions with global companies."
  }
]

export default function Home() {
  const [selectedCompany, setSelectedCompany] = useState<string>("ShopEase Inc.");
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
          <a
            href="https://github.com/ImUlyssus/askmeabc-rag-complete"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <button style={{
              backgroundColor: "#0395D8",
              borderColor: "#fff",
              color: "#fff",
              borderWidth: "1px",
              borderStyle: "solid",
              fontSize: "25px",
              cursor: "pointer", // Makes it look clickable
            }}>
              View on GitHub
            </button>
          </a>
          <a
            href="https://drive.google.com/file/d/1PbaR56q2L9R1WsXU1JFHsGxB87URz9T2/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <button style={{
              backgroundColor: "#0395D8",
              borderColor: "#fff",
              color: "#fff",
              borderWidth: "1px",
              borderStyle: "solid",
              fontSize: "25px",
              cursor: "pointer",
            }}>
              Architecture Diagram
            </button>
          </a>
          <a
            href="https://kyaw-swar-hein-portfolio-opal.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <button style={{
              backgroundColor: "#0395D8",
              borderColor: "#fff",
              color: "#fff",
              borderWidth: "1px",
              borderStyle: "solid",
              fontSize: "25px",
              cursor: "pointer",
            }}>
              Developer Profile
            </button>
          </a>
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