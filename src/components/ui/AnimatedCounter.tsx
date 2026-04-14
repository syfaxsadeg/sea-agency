"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

type Props = {
  value: string;
  label: string;
  description?: string;
};

export default function AnimatedCounter({
  value,
  label,
  description,
}: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (!isInView) return;

    // Extract numeric part
    const numMatch = value.match(/(\d+)/);
    if (!numMatch) {
      setDisplayValue(value);
      return;
    }

    const target = parseInt(numMatch[1]);
    const prefix = value.substring(0, value.indexOf(numMatch[1]));
    const suffix = value.substring(
      value.indexOf(numMatch[1]) + numMatch[1].length
    );

    let start = 0;
    const duration = 2000;
    const startTime = Date.now();

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      start = Math.round(eased * target);
      setDisplayValue(`${prefix}${start}${suffix}`);
      if (progress >= 1) clearInterval(timer);
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center p-6"
    >
      <div className="text-5xl md:text-6xl font-bold text-[#FF6B2C] font-[family-name:var(--font-heading)] mb-2">
        {displayValue}
      </div>
      <div className="text-lg font-semibold text-[#FAFAFA] mb-1">{label}</div>
      {description && (
        <div className="text-sm text-[#A3A3A3]">{description}</div>
      )}
    </motion.div>
  );
}
