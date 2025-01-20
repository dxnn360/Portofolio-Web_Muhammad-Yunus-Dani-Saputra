import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import slide1 from "../assets/images/slide1.png";
import slide2 from "../assets/images/slide2.png";
import slide3 from "../assets/images/slide3.png";
import slide4 from "../assets/images/slide4.png";
import slide5 from "../assets/images/slide5.png";

const projectList = [
  {
    title: "Kapays - Payment System",
    description: [
      `Kapays was developed to address the inconvenience and inefficiencies in managing monthly trash payments for the people of Karangsalam Kidul. The existing manual payment processes often caused delays, disputes, and challenges in keeping accurate records. These issues created unnecessary frustration for both residents and the administrators responsible for collecting payments.`,
      `To solve this problem, Kapays was built using Laravel, providing a modern web-based solution. The platform integrates a secure payment gateway, allowing residents to make payments easily and ensuring administrators have access to real-time records. Automatic reminders and user-friendly dashboards further simplify the process, reducing late payments and administrative overhead.`,
      `By streamlining payment management, Kapays not only improves the user experience but also helps administrators focus on community development rather than operational inefficiencies. This system is a practical example of how technology can bridge gaps in essential services.`,
    ],
    image: slide1,
  },
  {
    title: "Aglostock - Warehouse Website",
    description: [
      `Aglostock was created to solve common challenges in warehouse management, such as tracking inventory, avoiding stockouts, and managing supplier relationships. Small and medium-sized businesses often struggled with outdated tools, leading to inefficiencies and lost opportunities due to poor inventory control.`,
      `Built using the MERN stack (MongoDB, Express.js, React, and Node.js), Aglostock provides a comprehensive solution. It offers features like real-time stock updates, automated alerts for low inventory, and detailed analytics for smarter decision-making. The intuitive user interface ensures that even users without technical expertise can easily navigate the system.`,
      `Aglostock empowers businesses to optimize their operations and respond proactively to inventory needs. Its scalable architecture makes it suitable for businesses of various sizes, ensuring they stay competitive in a rapidly changing market.`,
    ],
    image: slide2,
  },
  {
    title: "Daur",
    description: [
      `Daur is a conceptual prototype for a blogging platform designed to enhance the blogging experience for writers and readers alike. Writers often struggle with platforms that lack robust editing tools or features to foster meaningful audience engagement, inspiring the creation of Daur.`,
      `Developed using Figma, Daur features a modern and user-friendly interface with rich-text editing capabilities. The prototype prioritizes seamless navigation, making it easier for writers to draft, edit, and publish content. Additionally, community features like commenting and sharing are integrated to encourage interaction and collaboration.`,
      `Though still in the design phase, Daur showcases a thoughtful approach to addressing the needs of modern content creators. It highlights how intuitive design can make online expression more accessible and enjoyable.`,
    ],
    image: slide3,
  },
  {
    title: "Montego - E-Commerce Website",
    description: [
      `Montego was developed to address the operational challenges faced by small online businesses, including inventory tracking, order management, and customer engagement. Many businesses relied on fragmented or manual systems, which often led to errors and inefficiencies.`,
      `Built using PHP, Montego provides a straightforward yet powerful solution for e-commerce management. The system includes features such as intuitive product management, order tracking, and reporting tools. With a focus on simplicity and reliability, Montego ensures that business owners can easily manage their operations without needing extensive technical knowledge.`,
      `By streamlining daily tasks, Montego allows business owners to focus on growth and customer satisfaction. Its design reflects the importance of balancing functionality and user experience, ensuring that it remains an invaluable tool for managing online stores.`,
    ],
    image: slide4,
  },
  {
    title: "Water-Pumping Record Website",
    description: [
      `This project was created to address the inefficiencies in tracking water production activities. Previously, manual record-keeping processes often resulted in data inaccuracies, operational delays, and difficulty in generating reliable reports for decision-making.`,
      `Using Laravel as the backend framework, the platform provides a centralized system for logging water-pumping activities. Operators can track production data, generate detailed reports, and analyze trends over time. The platform's clean and intuitive design ensures accessibility for users with varying levels of technical expertise.`,
      `By replacing manual processes with an automated solution, this system improves transparency and ensures accurate data management. It empowers stakeholders to make better decisions based on real-time insights and historical data, ultimately enhancing the efficiency of water production operations.`,
    ],
    image: slide5,
  },
];

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectList[id];

  if (!project) {
    return <p>Project not found!</p>;
  }

  return (
    <div className="bg-white min-h-screen flex flex-col items-center py-12">
      <div className="max-w-4xl w-full p-4">
        <button
          onClick={() => navigate(-1)}
          className="text-blue-500 mb-6 hover:underline"
        >
          &larr; Back to Projects
        </button>
        <h1 className="text-4xl text-black font-bold mb-4">{project.title}</h1>
        <img
          src={project.image}
          alt={`${project.title} preview`}
          className="w-full h-64 object-contain"
        />
        
        <div className="text-gray-500 text-justify text-lg mt-6 space-y-4">
          {project.description.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
