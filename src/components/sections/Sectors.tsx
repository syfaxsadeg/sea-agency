"use client";

import { motion } from "framer-motion";
import {
  Building2,
  ShoppingCart,
  UtensilsCrossed,
  Heart,
  Wrench,
  BookOpen,
  Briefcase,
  Car,
  Scale,
  Sparkles,
} from "lucide-react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import SectionTitle from "@/components/ui/SectionTitle";
import ScrollReveal from "@/components/animations/ScrollReveal";
import sectors from "@/content/sectors.json";

type IconName = keyof typeof iconMap;

const iconMap = {
  Building2,
  ShoppingCart,
  UtensilsCrossed,
  Heart,
  Wrench,
  BookOpen,
  Briefcase,
  Car,
  Scale,
  Sparkles,
};

export default function Sectors() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
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
          subtitle="Secteurs"
          title="Des campagnes adaptées à votre secteur"
        />

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {sectors.map((sector) => {
            const IconComponent = iconMap[sector.icon as IconName];

            return (
              <motion.div key={sector.id} variants={itemVariants}>
                <Card
                  className="h-full flex flex-col items-center justify-center text-center p-6 md:p-8 group cursor-pointer"
                  hover={true}
                >
                  {IconComponent && (
                    <motion.div
                      className="mb-4"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      <IconComponent className="w-12 h-12 md:w-14 md:h-14 text-[#FF6B2C] group-hover:text-[#FF8A55] transition-colors" />
                    </motion.div>
                  )}

                  <h3 className="font-semibold text-lg md:text-xl text-[#FAFAFA] mb-3 group-hover:text-[#FF6B2C] transition-colors">
                    {sector.title}
                  </h3>

                  <p className="text-sm text-[#A3A3A3] group-hover:text-[#FAFAFA] transition-colors leading-relaxed">
                    {sector.description}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Button */}
        <ScrollReveal className="flex justify-center">
          <Button href="/secteurs" variant="primary" size="lg">
            Découvrir nos solutions
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
}
