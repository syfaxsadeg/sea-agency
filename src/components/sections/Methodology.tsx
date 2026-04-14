"use client";

import { motion } from "framer-motion";
import {
  ClipboardCheck,
  Lightbulb,
  Rocket,
  Zap,
  TrendingUp,
} from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import ScrollReveal from "@/components/animations/ScrollReveal";
import methodology from "@/content/methodology.json";

type IconName = keyof typeof iconMap;

const iconMap = {
  ClipboardCheck,
  Lightbulb,
  Rocket,
  Zap,
  TrendingUp,
};

export default function Methodology() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="py-20 md:py-32 bg-[#0A0A0A] text-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          subtitle="Notre approche"
          title="Une méthodologie éprouvée en 5 étapes"
        />

        {/* Mobile & Tablet: Vertical Timeline */}
        <div className="lg:hidden">
          <motion.div
            className="space-y-8 md:space-y-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {methodology.map((step, index) => {
              const IconComponent = iconMap[step.icon as IconName];

              return (
                <motion.div
                  key={step.step}
                  variants={itemVariants}
                  className="relative pl-8 md:pl-12"
                >
                  {/* Vertical line (not on last step) */}
                  {index < methodology.length - 1 && (
                    <div className="absolute left-[14px] md:left-[20px] top-16 bottom-0 w-0.5 bg-gradient-to-b from-[#FF6B2C] to-[#FF6B2C]/20" />
                  )}

                  {/* Step circle */}
                  <motion.div
                    className="absolute left-0 top-0 w-7 h-7 md:w-10 md:h-10 rounded-full bg-[#FF6B2C] flex items-center justify-center font-bold text-[#0A0A0A] text-sm md:text-base"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    {step.step}
                  </motion.div>

                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <div className="flex items-start gap-4 mb-2">
                      {IconComponent && (
                        <div className="text-[#FF6B2C] flex-shrink-0 mt-1">
                          <IconComponent className="w-5 h-5 md:w-6 md:h-6" />
                        </div>
                      )}
                      <h3 className="font-bold text-lg md:text-xl text-[#FAFAFA] flex-1">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-[#A3A3A3] leading-relaxed ml-9 md:ml-11">
                      {step.description}
                    </p>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Desktop: Horizontal Timeline */}
        <div className="hidden lg:block">
          <motion.div
            className="relative"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {/* Horizontal connector line */}
            <div className="absolute top-6 left-0 right-0 h-0.5 bg-gradient-to-r from-[#FF6B2C] via-[#FF6B2C]/50 to-[#FF6B2C]/20" />

            <div className="grid grid-cols-5 gap-6">
              {methodology.map((step) => {
                const IconComponent = iconMap[step.icon as IconName];

                return (
                  <motion.div key={step.step} variants={itemVariants}>
                    <div className="text-center relative">
                      {/* Step circle */}
                      <motion.div
                        className="w-12 h-12 rounded-full bg-[#FF6B2C] flex items-center justify-center font-bold text-[#0A0A0A] text-lg mx-auto mb-6 relative z-10"
                        whileHover={{ scale: 1.15 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      >
                        {step.step}
                      </motion.div>

                      {/* Icon */}
                      {IconComponent && (
                        <motion.div
                          className="flex justify-center mb-4"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 17,
                          }}
                        >
                          <IconComponent className="w-8 h-8 text-[#FF6B2C]" />
                        </motion.div>
                      )}

                      <h3 className="font-bold text-lg text-[#FAFAFA] mb-3 hover:text-[#FF6B2C] transition-colors">
                        {step.title}
                      </h3>

                      <p className="text-sm text-[#A3A3A3] leading-relaxed hover:text-[#FAFAFA] transition-colors">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
