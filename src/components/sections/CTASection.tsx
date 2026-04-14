"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { SITE_CONFIG } from "@/lib/constants";

type Props = {
  title: string;
  description: string;
  ctaText: string;
  ctaHref: string;
};

export default function CTASection({
  title,
  description,
  ctaText,
  ctaHref,
}: Props) {
  return (
    <section className="py-20 md:py-32 bg-[#0A0A0A] text-[#FAFAFA] relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-radial-gradient opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#FF6B2C] rounded-full filter blur-[120px] opacity-10 pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <ScrollReveal>
          <motion.h2
            className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            {title}
          </motion.h2>
        </ScrollReveal>

        <ScrollReveal>
          <motion.p
            className="text-lg md:text-xl text-[#A3A3A3] mb-10 leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
          >
            {description}
          </motion.p>
        </ScrollReveal>

        <ScrollReveal>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Button href={ctaHref} variant="primary" size="lg">
              {ctaText}
            </Button>
          </motion.div>
        </ScrollReveal>

        {/* Secondary CTA */}
        <ScrollReveal>
          <motion.div
            className="flex items-center justify-center gap-2 text-[#A3A3A3]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <span className="text-base md:text-lg">Ou appelez-nous:</span>
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="flex items-center gap-1 text-[#FF6B2C] font-semibold hover:text-[#FF8A55] transition-colors"
            >
              <Phone size={20} />
              {SITE_CONFIG.phoneDisplay}
            </a>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}
