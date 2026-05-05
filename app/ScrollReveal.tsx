"use client";
import { motion } from "framer-motion";

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
}

export const ScrollReveal = ({ children, delay = 0 }: ScrollRevealProps) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ 
        once: true, 
        amount: 0.2,
        margin: "-10% 0px -10% 0px"
      }}

      variants={{
        hidden: { 
          opacity: 0, 
          y: 50,
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
            ease: [0.16, 1, 0.3, 1]
          }
        }
      }}
      
      style={{ willChange: "transform, opacity, filter" }}
    >
      {children}
    </motion.div>
  );
};
