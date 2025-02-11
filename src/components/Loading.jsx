import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom"; // Untuk navigasi ke halaman berikutnya

// Komponen untuk animasi huruf per huruf dengan gaya elegant
const AnimatedText = ({ text }) => {
  const letters = Array.from(text); // Memisahkan teks menjadi array huruf

  return (
    <div className="flex">
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20, scale: 0.9 }} // Huruf awalnya tersembunyi, di bawah, dan sedikit kecil
          animate={{ opacity: 1, y: 0, scale: 1 }} // Huruf muncul, naik, dan kembali ke ukuran normal
          transition={{
            delay: index * 0.05, // Delay untuk setiap huruf
            duration: 0.5, // Durasi animasi
            ease: "easeOut", // Efek easing yang halus
          }}
          className="inline-block"
        >
          {letter === " " ? "\u00A0" : letter} {/* Menangani spasi */}
        </motion.span>
      ))}
    </div>
  );
};

const Loading = () => {
  const [progress, setProgress] = useState(0);
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);
  const navigate = useNavigate(); // Hook untuk navigasi

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          clearInterval(interval);
          setIsLoadingComplete(true); // Set loading selesai
          return 100;
        }
        return oldProgress + 10;
      });
    }, 500); // Interval lebih cepat

    return () => clearInterval(interval);
  }, []);

  // Navigasi ke halaman berikutnya setelah loading selesai
  useEffect(() => {
    if (isLoadingComplete) {
      setTimeout(() => {
        navigate("/"); // Navigasi ke halaman utama
      }, 0); // Delay sebelum navigasi
    }
  }, [isLoadingComplete, navigate]);

  return (
    <AnimatePresence>
      {!isLoadingComplete && (
        <motion.div
          className="w-full h-screen flex flex-col justify-center items-center bg-[#02022F] text-white relative overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }} // Fade-out saat komponen unmount
          transition={{ duration: 0.5, ease: "easeOut" }} // Transisi lebih cepat
        >
          {/* Main Content */}
          <div className="text-center z-10">
            {/* Animasi Teks "Welcome" */}
            <motion.h1
              className="mb-4 text-4xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }} // Animasi lebih halus
            >
              <AnimatedText text="Welcome to Dxnn Portfolio" />
            </motion.h1>
            <motion.p
              className="text-sm text-gray-400"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }} // Animasi lebih halus
            >
              Crafting digital experiences with precision and passion.
            </motion.p>
          </div>

          {/* Loading Bar at the Bottom */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-800 z-99">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }} // Animasi progress bar
              transition={{ duration: 0.3, ease: "easeOut" }} // Animasi lebih cepat
            />
          </div>

          {/* Additional Decorative Elements */}
          <motion.div
            className="absolute bottom-4 right-4 text-sm text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8, ease: "easeOut" }} // Animasi lebih halus
          >
            Loading...
          </motion.div>

          {/* Background Abstrak */}
          <motion.div
            className="absolute inset-0 z-0"
            initial={{ scale: 0.8, rotate: 0 }}
            animate={{ scale: 1.2, rotate: 360 }} // Rotasi dan scaling
            transition={{
              duration: 10,
              ease: "linear",
              repeat: Infinity, // Animasi berulang
            }}
            style={{
              background:
                "radial-gradient(circle, rgba(2,2,47,1) 0%, rgba(0,0,0,1) 100%)",
            }}
          />
          <motion.div
            className="absolute inset-0 z-0"
            initial={{ x: -100, y: -100 }}
            animate={{ x: [0, 100, -100, 0], y: [0, 100, -100, 0] }} // Pergerakan acak
            transition={{
              duration: 5,
              ease: "easeInOut",
              repeat: Infinity, // Animasi berulang
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loading;