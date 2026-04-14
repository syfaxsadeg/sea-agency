import { Metadata } from "next";
import Script from "next/script";
import { CheckCircle2, Search, ShoppingCart, Monitor, Youtube, Share2, BarChart3 } from "lucide-react";
import PageTransition from "@/components/animations/PageTransition";
import ScrollReveal from "@/components/animations/ScrollReveal";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { generatePageMetadata, generateBreadcrumbSchema } from "@/lib/metadata";
import { SITE_CONFIG } from "@/lib/constants";
import servicesData from "@/content/services.json";

export const metadata: Metadata = generatePageMetadata({
  title: "Services Google Ads — SEA, Search, Shopping, Display",
  description:
    "Nos services Google Ads complets : Search, Shopping, Display, YouTube, Remarketing et Data-driven attribution pour maximiser votre ROI.",
  path: "/services",
});

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Accueil", url: `${SITE_CONFIG.url}` },
  { name: "Services", url: `${SITE_CONFIG.url}/services` },
]);

const serviceIcons: Record<string, React.ReactNode> = {
  Search: <Search className="w-12 h-12" />,
  Shopping: <ShoppingCart className="w-12 h-12" />,
  Display: <Monitor className="w-12 h-12" />,
  YouTube: <Youtube className="w-12 h-12" />,
  Remarketing: <Share2 className="w-12 h-12" />,
  Analytics: <BarChart3 className="w-12 h-12" />,
};

export default function ServicesPage() {
  return (
    <PageTransition>
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        strategy="afterInteractive"
      />

      {/* Hero Section */}
      <section className="relative min-h-[500px] flex items-center justify-center bg-[#0A0A0A] py-20 px-4 md:px-6">
        <div className="max-w-5xl mx-auto text-center">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#FAFAFA] mb-6 leading-tight">
              Nos services Google Ads
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-lg md:text-xl text-[#A3A3A3] max-w-3xl mx-auto">
              Une suite complète de services pour dominer votre marché. De la recherche payante à la publicité display, en passant par le shopping et le remarketing.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-[#0A0A0A] py-20 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, index) => (
              <ScrollReveal key={service.id} delay={index * 0.05}>
                <Card className="h-full">
                  <div className="text-[#FF6B2C] mb-4">
                    {serviceIcons[service.icon as keyof typeof serviceIcons]}
                  </div>
                  <h3 className="text-2xl font-bold text-[#FAFAFA] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-[#A3A3A3] leading-relaxed mb-6 flex-grow">
                    {service.description}
                  </p>
                  <div className="space-y-2">
                    {service.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-[#FF6B2C] flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-[#A3A3A3]">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="bg-[#141414] py-20 px-4 md:px-6">
        <div className="max-w-5xl mx-auto space-y-16">
          {servicesData.map((service, index) => (
            <ScrollReveal key={`detail-${service.id}`} delay={index * 0.05}>
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="text-[#FF6B2C] mb-4">
                    {serviceIcons[service.icon as keyof typeof serviceIcons]}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-[#FAFAFA] mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-[#A3A3A3] mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="space-y-3 mb-8">
                    {service.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-[#FF6B2C] flex-shrink-0 mt-0.5" />
                        <span className="text-[#FAFAFA]">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  <Button href="/contact">
                    Discuter de ce service
                  </Button>
                </div>
                <div className={`p-10 rounded-2xl bg-[#0A0A0A] border border-[#2A2A2A] flex items-center justify-center min-h-96 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="text-6xl opacity-20">{serviceIcons[service.icon as keyof typeof serviceIcons]}</div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-[#0A0A0A] py-20 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <h2 className="text-4xl font-bold text-[#FAFAFA] mb-12 text-center">
              Pourquoi nous choisir
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Expertise Google Certifiée",
                description:
                  "Notre équipe est certifiée Google Partners avec une expertise approfondie de tous les produits Google Ads.",
              },
              {
                title: "Approche Data-Driven",
                description:
                  "Nous prenons les décisions basées sur des données réelles, pas sur des hypothèses. Chaque dollar dépensé est optimisé.",
              },
              {
                title: "Support Dédié",
                description:
                  "Vous avez un account manager dédié qui comprend votre business et vos objectifs spécifiques.",
              },
              {
                title: "Transparence Totale",
                description:
                  "Accès en temps réel à tous les rapports. Vous savez exactement où va votre budget et quels résultats vous obtenez.",
              },
              {
                title: "Optimisation Continue",
                description:
                  "Nous n'arrêtons jamais d'optimiser. Chaque semaine apporte des améliorations à vos campagnes.",
              },
              {
                title: "ROI Prouvé",
                description:
                  "Nos clients voient généralement une augmentation de 30-50% du ROI dans les 3 premiers mois.",
              },
            ].map((item, idx) => (
              <ScrollReveal key={idx} delay={0.1 * idx}>
                <div className="p-6 rounded-xl bg-[#141414] border border-[#2A2A2A]">
                  <h3 className="text-lg font-bold text-[#FAFAFA] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[#A3A3A3]">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#141414] py-20 px-4 md:px-6 border-t border-[#2A2A2A]">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-[#FAFAFA] mb-6">
              Prêt à développer vos ventes ?
            </h2>
            <p className="text-[#A3A3A3] text-lg mb-8 max-w-2xl mx-auto">
              Parlons de vos objectifs. Nous élaborerons une stratégie Google Ads complète adaptée à votre business.
            </p>
            <Button href="/audit-gratuit" size="lg">
              Demander un audit gratuit
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </PageTransition>
  );
}
