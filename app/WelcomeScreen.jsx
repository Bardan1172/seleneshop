"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Moon, Star, Zap } from "lucide-react";

// Komponen untuk efek mesin ketik yang lebih elegan
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
    }, 100);
    return () => clearInterval(timer);
  }, [text]);

  return (
    <span className="inline-block">
      {displayText}
      <motion.span
        className="inline-block w-[2px] h-4 ml-1 bg-purple-500"
        animate={{ opacity: [1, 0, 1] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
      />
    </span>
  );
};

// Efek Latar Belakang Nebula Ungu
const BackgroundEffect = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <motion.div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-purple-600/10 blur-[120px] rounded-full"
      animate={{
        scale: [1, 1.3, 1],
        opacity: [0.2, 0.4, 0.2],
      }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    />
  </div>
);

const IconButton = ({ Icon }) => (
  <motion.div
    className="relative group"
    whileHover={{ scale: 1.1 }}
  >
    <div className="absolute -inset-2 bg-purple-600/20 rounded-full blur-md opacity-50 transition-all duration-300" />
    <div className="relative p-3 bg-white/5 backdrop-blur-md rounded-full border border-white/10">
      <Icon className="w-5 h-5 text-purple-300" />
    </div>
  </motion.div>
);

const WelcomeScreen = ({ onLoadingComplete }) => {
  const [isLoading, setIsLoading] = useState(true);
  const fantasyFont = "font-serif italic tracking-wider uppercase";

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => {
        onLoadingComplete?.();
      }, 1000);
    }, 4000);

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          className="fixed inset-0 bg-[#010108] z-[9999] flex items-center justify-center overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            scale: 1.05,
            filter: "blur(20px)",
            transition: { duration: 1, ease: "easeInOut" } 
          }}
        >
          <BackgroundEffect />

          <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto px-4 text-center">
            
            {/* Logo Selene Shop */}
            <div className="relative mb-8">
              <motion.div 
                className="absolute inset-0 bg-purple-500/20 blur-[50px] rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.img
                src="/selene_shop.png"
                alt="Selene Logo"
                className="relative w-32 h-32 sm:w-40 sm:h-40 object-contain mix-blend-screen"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                onError={(e) => { e.target.src="https://placehold.co/200x200/010108/a855f7?text=SELENE"; }}
              />
            </div>

            {/* Title & Brand */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <h1 className={`${fantasyFont} text-4xl sm:text-6xl font-bold tracking-[0.3em] text-white`}>
                SELENE <span className="text-purple-500">SHOP</span>
              </h1>
              <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto my-4 opacity-50" />
              <p className="text-[10px] sm:text-xs tracking-[0.5em] text-white/40 uppercase font-light italic">
                Crafting Digital Elegance
              </p>
            </motion.div>

            {/* Icons Decor */}
            <div className="flex gap-6 sm:gap-10 my-10">
              {[Moon, Sparkles, Star].map((Icon, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + i * 0.2 }}
                >
                  <IconButton Icon={Icon} />
                </motion.div>
              ))}
            </div>

            {/* Typing URL */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
              className="mt-2"
            >
              <div className={`flex items-center gap-3 text-xs sm:text-sm tracking-[0.4em] font-medium text-purple-400/80 uppercase`}>
                <Zap className="w-3 h-3" />
                <TypewriterEffect text="est. 2026" />
              </div>
            </motion.div>
          </div>

          {/* Progress Bar Tipis di Bawah */}
          <div className="absolute bottom-0 left-0 w-full h-[2px] bg-white/5">
            <motion.div 
              className="h-full bg-purple-600 shadow-[0_0_10px_#a855f7]"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 3.5, ease: "linear" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WelcomeScreen;
