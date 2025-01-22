// src/components/Projects.jsx
import React from "react";
import { motion } from "framer-motion";

const Projects = () => {
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { duration: 0.5},
    },
  };

  return (
    <div className="bg-white min-h-screen flex items-center mt-2">
      <div className="flex flex-col sm:flex-row w-full mt-8 max-w-6xl mx-auto p-4">
        <div className="w-full sm:w-1/3 flex flex-col items-start mb-8 sm:mb-0 pr-0 sm:pr-8">
          <h2 className="text-4xl font-bold mt-[60px] text-gray-800 pe-4 sm:pe-8">
            What Can I Do?
          </h2>
          <div className="flex my-6 justify-end">
            <svg
              className="w-6 h-6 text-gray-400"
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
          </div>
        </div>

        <div className="w-full sm:w-2/3 flex flex-wrap justify-start">
          {/* Card 1: Web Development */}
          <motion.div
            className="bg-white w-full p-4 flex flex-row items-center border-b-2 rounded-0 border-grey-300 hover:bg-gray-100 hover:text-white transition-all duration-300 ease-in-out"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            transition={{ delay: 0.1 }}
          >
            <figure className="flex justify-center items-center w-24 h-24">
              <i className="fas fa-code fa-3x text-grey-400 hover:text-white"></i>
            </figure>
            <div className="card-body ml-4">
              <h1 className="text-2xl font-semibold text-black mb-2">
                Fullstack Website Development
              </h1>
              <h2 className="text-2xl text-justify text-gray-700">
                Proficient in building responsive and modern web applications in every single way using React, Laravel, Vue, and everything You want.
              </h2>
            </div>
          </motion.div>

          {/* Card 2: UI/UX Design */}
          <motion.div
            className="bg-white w-full p-4 flex flex-row items-center border-b-2 rounded-0 border-grey-300 hover:bg-gray-200 hover:text-white transition-all duration-300 ease-in-out"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            transition={{ delay: 0.3 }}
          >
            <figure className="flex justify-center items-center w-24 h-24">
              <i className="fas fa-pencil-alt fa-3x text-grey-400 hover:text-white"></i>
            </figure>
            <div className="card-body ml-4">
              <h1 className="text-2xl font-semibold text-black mb-2">
                UI/UX Design
              </h1>
              <h2 className="text-2xl text-justify text-gray-700">
                Experienced in designing intuitive user interfaces and enhancing user experience through thoughtful design.
              </h2>
            </div>
          </motion.div>

          {/* Card 3: Project Management */}
          <motion.div
            className="bg-white w-full p-4 flex flex-row items-center border-b-2 rounded-0 border-grey-300 hover:bg-gray-300 hover:text-white transition-all duration-300 ease-in-out"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            transition={{ delay: 0.5 }}
          >
            <figure className="flex justify-center items-center w-24 h-24">
              <i className="fas fa-project-diagram fa-3x text-grey-400 hover:text-white"></i>
            </figure>
            <div className="card-body ml-4">
              <h1 className="text-2xl font-semibold text-black mb-2">
                Project Management
              </h1>
              <h2 className="text-2xl text-justify text-gray-700">
                Skilled in managing projects using agile methodologies to ensure timely delivery and high-quality outcomes.
              </h2>
            </div>
          </motion.div>

          {/* Card 4: Other Skills */}
          <motion.div
            className="bg-white w-full p-4 flex flex-row items-center border-b-2 rounded-0 border-grey-300 hover:bg-gray-400 hover:text-white transition-all duration-300 ease-in-out"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            transition={{ delay: 0.7 }}
          >
            <figure className="flex justify-center items-center w-24 h-24">
              <i className="fas fa-rocket fa-3x text-grey-400 hover:text-white"></i>
            </figure>
            <div className="card-body ml-4">
              <h2 className="text-2xl text-justify text-gray-700">
                Knowledgeable in various tools and technologies including Git, API integrations, Cybersecurity, and cloud services.
              </h2>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
