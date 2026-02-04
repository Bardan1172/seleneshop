"use client"; // Tambahkan ini karena menggunakan state & effect

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Sword, Shield, Axe } from "lucide-react";

// Komponen untuk efek mesin ketik
const TypewriterEffect = ({ text }) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= text.length) {
        setDisplayText(text.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 80);
    return () => clearInterval(timer);
  }, [text]);

  return (
    <span className="inline-block">
      {displayText}
      <motion.span
        className="inline-block w-2 h-4 ml-1 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full"
        animate={{ opacity: [1, 0, 1] }}
        transition={{ repeat: Infinity, duration: 1 }}
      />
    </span>
  );
};

// Komponen latar belakang
const BackgroundEffect = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <motion.div
      className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-pink-500/30 blur-3xl"
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.6, 0.3],
        rotate: [0, 90, 0]
      }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
    />
  </div>
);

const IconButton = ({ Icon }) => (
  <motion.div
    className="relative group cursor-pointer"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
  >
    <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full blur-md opacity-0 group-hover:opacity-75 transition-all duration-300" />
    <div className="relative p-3 bg-black/50 backdrop-blur-sm rounded-full border border-white/10">
      <Icon className="w-6 h-6 text-white" />
    </div>
  </motion.div>
);

const WelcomeScreen = ({ onLoadingComplete }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      // Memberi waktu animasi exit selesai sebelum memanggil onLoadingComplete
      setTimeout(() => {
        onLoadingComplete?.();
      }, 800);
    }, 4000);

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 bg-[#030014] z-[9999] flex items-center justify-center overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            scale: 1.1,
            filter: "blur(10px)",
            transition: { duration: 0.8 } 
          }}
        >
          <BackgroundEffect />

          <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto px-4 text-center">
            {/* Logo */}
            <motion.img
              src="/HeppyCloud.webp"
              alt="Logo"
              className="w-36 h-36 sm:w-44 sm:h-44 mb-4 object-contain"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              onError={(e) => { e.target.src="https://placehold.co/150x150?text=HeppyCloud"; }}
            />

            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <h1 className="text-4xl sm:text-6xl font-bold bg-gradient-to-r from-[#a855f7] to-[#6366f1] bg-clip-text text-transparent">
                HEPPY CLOUD
              </h1>
              <h2 className="text-xl sm:text-3xl font-semibold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent mt-2">
                Next-Generation
              </h2>
            </motion.div>

            {/* Icons */}
            <div className="flex gap-4 sm:gap-8 my-8">
              {[Axe, Shield, Sword].map((Icon, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 + i * 0.2, type: "spring" }}
                >
                  <IconButton Icon={Icon} />
                </motion.div>
              ))}
            </div>

            {/* Link */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
              className="mt-4"
            >
              <div className="flex items-center gap-2 text-lg sm:text-2xl font-mono">
                <Globe className="w-5 h-5 text-purple-500" />
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  <TypewriterEffect text="heppycloud.id" />
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WelcomeScreen;
