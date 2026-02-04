"use client";
import { motion } from "framer-motion";

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number; // Tambahkan fitur delay untuk animasi berurutan
  direction?: "up" | "down"; // Bisa diatur arah munculnya
}

export const ScrollReveal = ({ children, delay = 0, direction = "up" }: ScrollRevealProps) => {
  return (
    <motion.div
      // Arah muncul: kalau 'up' mulai dari bawah ke atas, kalau 'down' mulai dari atas ke bawah
      initial={{ 
        opacity: 0, 
        y: direction === "up" ? 40 : -40,
        filter: "blur(4px)" // Efek fokus cinematic
      }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
        filter: "blur(0px)" 
      }}
      viewport={{ 
        once: true, 
        margin: "-50px",
        amount: 0.1 
      }}
      transition={{ 
        duration: 0.8, 
        delay: delay, // Menunggu giliran muncul
        ease: [0.16, 1, 0.3, 1] 
      }}
      style={{ willChange: "transform, opacity, filter" }}
    >
      {children}
    </motion.div>
  );
};
