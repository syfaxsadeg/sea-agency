"use client";

import AnimatedCounter from "@/components/ui/AnimatedCounter";
import SectionTitle from "@/components/ui/SectionTitle";
import ScrollReveal from "@/components/animations/ScrollReveal";
import stats from "@/content/stats.json";

export default function Stats() {
  return (
    <section className="py-20 md:py-32 bg-[#141414] text-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          subtitle="Chiffres clés"
          title="Nos résultats parlent d'eux-mêmes"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <ScrollReveal
              key={index}
              delay={index * 0.1}
              className="relative"
            >
              <div className="flex flex-col items-center text-center">
                <AnimatedCounter
                  value={stat.value}
                  label={stat.label}
                  description={stat.description}
                />

                {/* Divider on desktop (not on last item) */}
                {index < stats.length - 1 && (
                  <div className="hidden lg:block absolute right-0 top-1/2 transform -translate-y-1/2 w-px h-20 bg-gradient-to-b from-transparent via-[#FF6B2C]/20 to-transparent" />
                )}

                {/* Divider on tablet (not on last two items) */}
                {index < stats.length - 2 && (
                  <div className="hidden md:block lg:hidden absolute -right-6 bottom-0 w-12 h-px bg-gradient-to-r from-transparent via-[#FF6B2C]/20 to-transparent" />
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
