"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedCardProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  hoverScale?: number;
}

const AnimatedCard = ({ 
  children, 
  delay = 0, 
  className = "",
  hoverScale = 1.05
}: AnimatedCardProps) => {
  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        y: 50,
        scale: 0.9
      }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
        scale: 1
      }}
      whileHover={{ 
        scale: hoverScale,
        y: -5,
        transition: { duration: 0.3 }
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ 
        duration: 0.6,
        delay,
        ease: "easeOut"
      }}
      viewport={{ once: true, amount: 0.3 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedCard;
