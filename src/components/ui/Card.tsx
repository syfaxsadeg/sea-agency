"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  hover?: boolean;
};

export default function Card({
  children,
  className = "",
  hover = true,
}: Props) {
  return (
    <motion.div
      whileHover={
        hover ? { y: -5, transition: { duration: 0.3 } } : undefined
      }
      className={`bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-8 transition-all duration-300 ${
        hover
          ? "hover:border-[#FF6B2C]/30 hover:shadow-[0_0_40px_rgba(255,107,44,0.08)]"
          : ""
      } ${className}`}
    >
      {children}
    </motion.div>
  );
}
