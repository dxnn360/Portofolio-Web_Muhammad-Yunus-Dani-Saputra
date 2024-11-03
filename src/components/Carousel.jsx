// src/components/Carousel.jsx
import React, { useState, useEffect } from "react";
import { motion, useInView } from "framer-motion"; // Importing useInView from framer-motion
import slide1 from "../assets/images/slide1.png";
import slide2 from "../assets/images/slide2.png";
import slide3 from "../assets/images/slide3.png";
import slide4 from "../assets/images/slide4.png";
import slide5 from "../assets/images/slide5.png";

// Data proyek yang akan ditampilkan di carousel
const projects = [
  {
    id: 1,
    title: "Proyek 1",
    description: "Deskripsi proyek 1.",
    image: slide1,
  },
  {
    id: 2,
    title: "Proyek 2",
    description: "Deskripsi proyek 2.",
    image: slide2,
  },
  {
    id: 3,
    title: "Proyek 3",
    description: "Deskripsi proyek 3.",
    image: slide3,
  },
  {
    id: 4,
    title: "Proyek 4",
    description: "Deskripsi proyek 4.",
    image: slide4,
  },
  {
    id: 5,
    title: "Proyek 5",
    description: "Deskripsi proyek 5.",
    image: slide5,
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { ref, inView } = useInView({ threshold: 0.1 }); // Set threshold for when the component is considered in view

  // Fungsi untuk pindah ke proyek berikutnya
  const nextProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Efek untuk membuat sliding otomatis
  useEffect(() => {
    const intervalId = setInterval(nextProject, 3000); // Ganti slide setiap 3 detik
    return () => clearInterval(intervalId); // Bersihkan interval saat komponen unmount
  }, []);

  return (
    <div
      ref={ref} // Reference for inView tracking
      className="relative w-full h-[600px] overflow-hidden bg-gray-100 flex items-center justify-center"
    >
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          className={`absolute w-full h-full`}
          initial={{ opacity: 0, scale: 1.05 }} // Initial state
          animate={{
            opacity: index === currentIndex ? 1 : 0, // Fade in and out
            scale: index === currentIndex ? 1 : 1.05, // Scale effect
          }}
          transition={{ duration: 1, ease: "easeInOut" }} // Transition settings
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full object-contain"
          />
        </motion.div>
      ))}
    </div>
  );
};

export default Carousel;
