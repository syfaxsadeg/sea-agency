import { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Sectors from "@/components/sections/Sectors";
import Methodology from "@/components/sections/Methodology";
import Testimonials from "@/components/sections/Testimonials";
import CTASection from "@/components/sections/CTASection";
import PageTransition from "@/components/animations/PageTransition";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata: Metadata = generatePageMetadata({
  title: "Agence Google Ads Paris — Experts SEA & Référencement Payant",
  description: "Agence Google Ads à Paris spécialisée en SEA et publicité numérique. Nos experts optimisent vos campagnes Google Ads pour augmenter vos conversions et votre ROI. Audit gratuit sans engagement.",
  path: "/",
});

export default function HomePage() {
  return (
    <PageTransition>
      <Hero />
      <Stats />
      <Sectors />
      <Methodology />
      <Testimonials />
      <CTASection
        title="Prêt à booster vos conversions ?"
        description="Recevez un audit gratuit de vos campagnes et découvrez comment optimiser votre stratégie SEA."
        ctaText="Obtenir mon audit gratuit"
        ctaHref="/audit-gratuit"
      />
    </PageTransition>
  );
}
