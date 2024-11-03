// src/components/About.jsx
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Separator from "../assets/images/separator.png";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Ensure this path is correct

const About = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  // Animation variants
  const aboutVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 50 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <motion.div
      ref={ref}
      className="mx-auto sm:px-[210px] py-8 sm:py-16 bg-white w-full"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <div className="flex flex-col sm:flex-row items-start justify-between my-4 sm:my-8">
        <div className="flex items-center py-8">
          <h2 className="text-4xl font-bold text-gray-800 pe-8 pl-4 sm:pe-8">
            About Me
          </h2>
          <svg
            className="w-6 h-6 mt-2 text-black"
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
        <div className="flex-col items-start w-full sm:w-2/3 ms-4 sm:ms-8">
          <motion.h3
            className="text-2xl text-justify text-gray-600 me-8"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={aboutVariants}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Hi, I’m Danny, a dedicated web programmer and UI/UX designer from
            Batang, Central Java. My journey in the tech world began in high
            school, where I developed a passion for creating functional and
            aesthetically pleasing digital experiences. With a strong foundation
            in programming and design, I strive to bridge the gap between user
            needs and technical implementation.
          </motion.h3>
          <motion.h3
            className="text-2xl text-justify text-gray-600 mt-16 me-8 sm:mt-16 sm:me-8"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={aboutVariants}
            transition={{ duration: 1, delay: 0.4 }} // Increased delay for stagger effect
          >
            I’m currently seeking new opportunities to enhance my skills and
            contribute to innovative projects. My goal is to deliver seamless
            user experiences while leveraging the latest web technologies. Let’s
            connect and see how I can add value to your team or project!
          </motion.h3>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
