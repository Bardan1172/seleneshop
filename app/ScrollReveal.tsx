"use client";
import { motion } from "framer-motion";

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
}

export const ScrollReveal = ({ children, delay = 0 }: ScrollRevealProps) => {
  return (
    <motion.div
      // 1. Definisikan State Animasi
      initial="hidden"
      whileInView="visible"
      exit="exit" // Menambahkan state saat keluar dari view
      
      // 2. Setting Viewport (once: false agar bisa bolak-balik)
      viewport={{ 
        once: false, 
        amount: 0.2,
        margin: "-10% 0px -10% 0px" // Trigger animasi sebelum benar-benar di ujung layar
      }}

      // 3. Konfigurasi Variasi Gerakan
      variants={{
        hidden: { 
          opacity: 0, 
          y: 50, // Muncul dari bawah saat scroll down
          scale: 0.95,
          filter: "blur(10px)"
        },
        visible: { 
          opacity: 1, 
          y: 0, 
          scale: 1,
          filter: "blur(0px)",
          transition: {
            duration: 0.8,
            delay: delay,
            ease: [0.16, 1, 0.3, 1] // Custom ease agar gerakan terasa premium
          }
        },
        exit: { 
          opacity: 0, 
          y: -50, // Menghilang ke atas saat di-scroll terus ke bawah
          scale: 0.95,
          filter: "blur(10px)",
          transition: {
            duration: 0.5,
            ease: "easeIn"
          }
        }
      }}
      
      // Optimasi Performa
      style={{ willChange: "transform, opacity, filter" }}
    >
      {children}
    </motion.div>
  );
};
