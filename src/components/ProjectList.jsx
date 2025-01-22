// src/components/ProjectGallery.jsx
import React from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion
import slide1 from "../assets/images/project/kapays.png";
import slide2 from "../assets/images/project/aglo.png";
import slide3 from "../assets/images/project/daur.png";
import slide4 from "../assets/images/project/montego.png";
import slide5 from "../assets/images/project/pdam.png";
import slide6 from "../assets/images/project/grounder.png";
import slide7 from "../assets/images/project/volvo.png";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useNavigate } from "react-router-dom";

const ProjectGallery = () => {
  const projectList = [
    {
      title: "Kapays - Payment System",
      description:
        "Helping the people of Karangsalam Kidul manage their monthly trash payments with ease, Kapays offers a smooth, hassle-free payment experience with an integrated gateway.",
      image: slide1,
    },
    {
      title: "Aglostock - Warehouse Website",
      description:
        "Keeping stock management simple and efficient, Aglostock helps businesses stay on top of inventory, orders, and suppliers, with insightful dashboards to make better decisions.",
      image: slide2,
    },
    {
      title: "Daur",
      description:
        "Daur is a space for expression—where you can write, share your thoughts, and connect with others through comments and social media. Blogging has never felt this easy.",
      image: slide3,
    },
    {
      title: "Montego - E-Commerce Website",
      description:
        "Montego makes online shopping management a breeze, offering tools to handle products, orders, and suppliers while keeping an eye on growth with built-in analytics.",
      image: slide4,
    },
    {
      title: "Water-Pumping Record Website",
      description:
        "This website addresses inefficiencies in logging water production activities. Manual methods led to data inaccuracies, delays, and unreliable reporting.",
      image: slide5,
    },
    {
      title: "Grounder - Car Dealers Website",
      description:
        "Grounder is a dedicated platform for car dealerships, addressing the challenges of managing inventory, customer inquiries, and sales tracking.",
      image: slide6,
    },
    {
      title: "Volvo Indonesia - Landing Page Remade",
      description:
        "This project is a remade landing page for Volvo Indonesia, designed to enhance their digital presence and align with modern web standards.",
      image: slide7,
    },
    // Add more projects as needed
  ];

  const navigate = useNavigate();

  return (
    <div className="bg-white min-h-screen flex items-center py-12">
      {/* Main container for Projects section */}
      <div className="flex flex-col w-full max-w-6xl mx-auto p-4">
        {/* Title Section */}
        <h2 className="text-4xl font-bold text-gray-800 mb-16 mt-20 flex">
          My Latest Projects
          <svg
            className="w-6 h-6 ml-5 mt-3 text-black"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </h2>

        {/* Projects container with Grid layout */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {projectList.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg p-4 flex flex-col hover:bg-gray-200 text-white transition-all duration-300 ease-in-out"
              initial={{ opacity: 0, y: 20, scale: 0.95 }} // Initial state
              whileInView={{ opacity: 1, y: 0, scale: 1 }} // State when in view
              transition={{ duration: 0.5 }} // Staggered delay
              viewport={{ once: false }} // Re-animates when scrolling back
              whileHover={{ scale: 1.3, rotate: 2 }} // Scale and rotate on hover
              onClick={() => navigate(`/project/${index}`)}
            >
              {/* Project Image */}
              <div className="w-full h-40 mb-4">
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  className="w-full h-full object-cover shadow-md"
                />
              </div>

              {/* Project Title and Description */}
              <h3 className="text-2xl font-semibold text-black mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectGallery;
