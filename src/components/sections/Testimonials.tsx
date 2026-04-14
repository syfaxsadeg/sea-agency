"use client";

import { Star } from "lucide-react";
import Card from "@/components/ui/Card";
import SectionTitle from "@/components/ui/SectionTitle";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { motion } from "framer-motion";
import testimonials from "@/content/testimonials.json";

export default function Testimonials() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="py-20 md:py-32 bg-[#0A0A0A] text-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          subtitle="Témoignages"
          title="Ce que nos clients disent de nous"
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {testimonials.map((testimonial) => (
            <motion.div key={testimonial.id} variants={itemVariants}>
              <Card className="h-full flex flex-col justify-between">
                {/* Quote text */}
                <blockquote className="mb-6 flex-1">
                  <p className="text-base md:text-lg italic text-[#FAFAFA] leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                </blockquote>

                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 + 0.2, duration: 0.4 }}
                      viewport={{ once: true }}
                    >
                      <Star
                        className="w-5 h-5 fill-[#FF6B2C] text-[#FF6B2C]"
                        size={20}
                      />
                    </motion.div>
                  ))}
                </div>

                {/* Author info */}
                <div className="flex items-center gap-4 pt-6 border-t border-[#2A2A2A]">
                  {/* Initials circle */}
                  <motion.div
                    className="w-12 h-12 rounded-full bg-[#FF6B2C] flex items-center justify-center flex-shrink-0"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <span className="font-bold text-[#0A0A0A] text-sm">
                      {testimonial.initials}
                    </span>
                  </motion.div>

                  <div>
                    <p className="text-sm font-semibold text-[#A3A3A3]">
                      {testimonial.sector}
                    </p>
                    <p className="text-xs text-[#A3A3A3]">{testimonial.location}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
