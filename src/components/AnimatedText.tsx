"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedTextProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  staggerChildren?: number;
}

const AnimatedText = ({ 
  children, 
  delay = 0, 
  className = "",
  staggerChildren = 0.1
}: AnimatedTextProps) => {
  const text = typeof children === 'string' ? children : '';
  
  if (typeof children === 'string') {
    return (
      <motion.div
        initial="hidden"
        whileInView="visible"
        transition={{ staggerChildren, delay }}
        viewport={{ once: true }}
        className={className}
      >
        {text.split('').map((char, index) => (
          <motion.span
            key={index}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { duration: 0.5, ease: "easeOut" }
              }
            }}
            style={{ display: 'inline-block' }}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedText;
