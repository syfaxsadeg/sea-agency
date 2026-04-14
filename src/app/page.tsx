import { Metadata } from "next";
import { generatePageMetadata, generateLocalBusinessSchema, generateOrganizationSchema } from "@/lib/metadata";
import { SITE_CONFIG } from "@/lib/constants";
import PageTransition from "@/components/animations/PageTransition";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Sectors from "@/components/sections/Sectors";
import Services from "@/components/sections/Services";
import Methodology from "@/components/sections/Methodology";
import Testimonials from "@/components/sections/Testimonials";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = generatePageMetadata({
  title: "SEA Agency | Agence Google Ads Paris — Experts Certifiés",
  description:
    "Agence Google Ads certifiée à Paris. Experts SEA, nous créons et optimisons vos campagnes pour maximiser votre ROI. Audit gratuit, résultats prouvés.",
  path: "/",
});

export default function Home() {
  const localBusinessSchema = generateLocalBusinessSchema();
  const organizationSchema = generateOrganizationSchema();

  return (
    <PageTransition>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Hero />
      <Stats />
      <Sectors />
      <Services />
      <Methodology />
      <Testimonials />
      <CTASection />
    </PageTransition>
  );
}
