// src/components/Header.jsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import profilePictureLarge from "../assets/images/hero-page.png";
import profilePictureSmall from "../assets/images/hero-page1.png";
import "@fortawesome/fontawesome-free/css/all.min.css";
import cvFile from "../assets/prtfldxnn.pdf";

const Header = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);
  const { ref, inView } = useInView({ threshold: 0.1 });

  const handleResize = () => {
    setIsSmallScreen(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      className="relative w-full py-[30px] flex flex-col items-center justify-center bg-white"
    >
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-2xl text-gray-800 mb-[30px]"
      >
        - Hello
      </motion.h1>
      <motion.h3
        initial={{ opacity: 0, scale: 0.9 }}
        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-7xl sm:text-8xl font-bold text-gray-800"
      >
        I'm <span className="text-blue-900">Dani Saputra</span>
      </motion.h3>
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="lg:text-4xl text-gray-800 mt-3 mb-16"
      >
        WEB PROGRAMMER
      </motion.h3>
      <motion.img
        src={isSmallScreen ? profilePictureSmall : profilePictureLarge}
        alt="Profile Picture"
        className="w-full h-auto object-contain"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      />
      <div className="absolute flex justify-center left-0 right-0 bottom-12">
        <div className="bg-white p-2 rounded shadow-md flex space-x-4 rounded-0">
          <a href={cvFile} download>
            <button className="bg-blue-900 hover:bg-blue-300 text-white w-[150px] font-bold py-3 border-2 border-black">
              <span className="mr-2">Portfolio</span>
            </button>
          </a>
          <button className="bg-white hover:bg-gray-100 text-gray-800 font-bold py-3 px-4 border-2 border-black">
            Hire Me
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
