// src/components/ProjectGallery.jsx
import React from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion
import slide1 from "../assets/images/slide1.png";
import slide2 from "../assets/images/slide2.png";
import slide3 from "../assets/images/slide3.png";
import slide4 from "../assets/images/slide4.png";
import slide5 from "../assets/images/slide5.png";
import "@fortawesome/fontawesome-free/css/all.min.css";

const ProjectGallery = () => {
  const projectList = [
    {
      title: "E-Commerce Platform",
      description:
        "An online store with real-time product updates, shopping cart, and integrated payment gateways.",
      image: slide1,
    },
    {
      title: "Portfolio Website",
      description:
        "A responsive portfolio showcasing projects, skills, and contact information using React and Tailwind CSS.",
      image: slide2,
    },
    {
      title: "Blog Platform",
      description:
        "A blog platform with rich-text editing, commenting, and social media sharing features.",
      image: slide3,
    },
    {
      title: "Inventory Management System",
      description:
        "A web app for managing stock levels, orders, and suppliers, with analytical dashboards.",
      image: slide4,
    },
    {
      title: "Social Media Dashboard",
      description:
        "A dashboard for monitoring social media analytics and engagement in real-time.",
      image: slide5,
    },
    // Add more projects as needed
  ];

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
              className="bg-white shadow-lg p-4 flex flex-col hover:bg-blue-500 hover:text-white transition-all duration-300 ease-in-out"
              initial={{ opacity: 0, y: 20, scale: 0.95 }} // Initial state
              whileInView={{ opacity: 1, y: 0, scale: 1 }} // State when in view
              transition={{ duration: 0.5 }} // Staggered delay
              viewport={{ once: false }} // Re-animates when scrolling back
              whileHover={{ scale: 1.3, rotate: 2 }} // Scale and rotate on hover
            >
              {/* Project Image */}
              <div className="w-full h-40 mb-4">
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  className="w-full h-full object-cover rounded-lg shadow-md"
                />
              </div>

              {/* Project Title and Description */}
              <h3 className="text-2xl font-semibold text-black mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectGallery;
