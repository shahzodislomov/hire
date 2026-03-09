"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface CardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function Card({ children, className = "", delay = 0 }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={`bg-white/5 border border-white/10 rounded-[22px] p-6 shadow-2xl backdrop-blur-sm hover:border-white/20 transition-colors ${className}`}
    >
      {children}
    </motion.div>
  );
}
