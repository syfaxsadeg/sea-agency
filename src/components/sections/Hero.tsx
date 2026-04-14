"use client";

import { motion } from "framer-motion";
import { ChevronDown, Phone } from "lucide-react";
import Button from "@/components/ui/Button";
import TextReveal from "@/components/animations/TextReveal";

export default function Hero() {
  const scrollVariants = {
    animate: {
      y: [0, 10, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="min-h-screen bg-[#0A0A0A] text-[#FAFAFA] flex flex-col items-center justify-center relative overflow-hidden">
      {/* Gradient overlay background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FF6B2C]/5 via-transparent to-transparent pointer-events-none" />

      {/* Grid pattern background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg
          className="absolute inset-0 w-full h-full opacity-5"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <pattern
              id="grid"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 20 0 L 0 0 0 20"
                fill="none"
                stroke="#FAFAFA"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Dot pattern accent */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-[#FF6B2C] rounded-full filter blur-[100px] opacity-10 pointer-events-none" />
      <div className="absolute bottom-40 left-10 w-96 h-96 bg-[#FF6B2C] rounded-full filter blur-[120px] opacity-5 pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-[#FF6B2C]/10 border border-[#FF6B2C]/30 text-[#FF6B2C] text-sm font-semibold tracking-wide">
            Agence Google Ads certifiée
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          className="font-[family-name:var(--font-heading)] text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 text-[#FAFAFA]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <TextReveal
            text="Transformez chaque clic en client avec Google Ads"
            delay={0.3}
          />
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl md:text-2xl text-[#A3A3A3] mb-12 leading-relaxed max-w-3xl mx-auto"
        >
          Votre agence SEA à Paris conçoit et pilote des campagnes Google Ads
          rentables. De l'audit à l'optimisation, nous maximisons votre retour
          sur investissement publicitaire.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <Button
            href="/audit-gratuit"
            variant="primary"
            size="lg"
            className="whitespace-nowrap"
          >
            Demander un audit gratuit
          </Button>
          <Button
            href="tel:+33646334777"
            variant="secondary"
            size="lg"
            className="gap-2 whitespace-nowrap"
          >
            <Phone size={20} />
            Nous appeler
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 z-10"
        variants={scrollVariants}
        animate="animate"
      >
        <ChevronDown className="w-8 h-8 text-[#FF6B2C]" />
      </motion.div>
    </section>
  );
}
