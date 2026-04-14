import { Metadata } from "next";
import Script from "next/script";
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
import PageTransition from "@/components/animations/PageTransition";
import ScrollReveal from "@/components/animations/ScrollReveal";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { generatePageMetadata, generateBreadcrumbSchema } from "@/lib/metadata";
import { SITE_CONFIG } from "@/lib/constants";
import sectorsData from "@/content/sectors.json";

export const metadata: Metadata = generatePageMetadata({
  title: "Secteurs d'activité — Google Ads par industrie",
  description: "Google Ads adapté à chaque industrie. Immobilier, e-commerce, hôtellerie, santé, services, formation, B2B, automobile, juridique et bien-être. Stratégies SEA personnalisées par secteur.",
  path: "/secteurs",
});

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Accueil", url: `${SITE_CONFIG.url}` },
  { name: "Secteurs", url: `${SITE_CONFIG.url}/secteurs` },
]);

// Icon mapping for sectors
const iconMap: Record<string, React.ReactNode> = {
  Building2: <Building2 className="w-12 h-12" />,
  ShoppingCart: <ShoppingCart className="w-12 h-12" />,
  UtensilsCrossed: <UtensilsCrossed className="w-12 h-12" />,
  Heart: <Heart className="w-12 h-12" />,
  Wrench: <Wrench className="w-12 h-12" />,
  BookOpen: <BookOpen className="w-12 h-12" />,
  Briefcase: <Briefcase className="w-12 h-12" />,
  Car: <Car className="w-12 h-12" />,
  Scale: <Scale className="w-12 h-12" />,
  Sparkles: <Sparkles className="w-12 h-12" />,
};

export default function SecteursPage() {
  return (
    <PageTransition>
      <Script
        id="schema-secteurs"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        strategy="afterInteractive"
      />

      {/* Hero Section */}
      <section className="relative min-h-[500px] flex items-center justify-center bg-[#0A0A0A] py-20 px-4 md:px-6">
        <div className="max-w-5xl mx-auto text-center">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#FAFAFA] mb-6 leading-tight">
              Google Ads adapté à votre industrie
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-lg md:text-xl text-[#A3A3A3] max-w-3xl mx-auto">
              Chaque secteur a ses enjeux, sa saisonnalité, ses cycles d'achat. Nous élaborons des campagnes Google Ads spécifiques à votre industrie pour capter les clients vraiment intéressés.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Sectors Grid */}
      <section className="bg-[#0A0A0A] py-20 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sectorsData.map((sector, index) => (
              <ScrollReveal key={sector.id} delay={index * 0.05}>
                <Card className="h-full flex flex-col group">
                  {/* Icon */}
                  <div className="text-[#FF6B2C] mb-4 group-hover:scale-110 transition-transform duration-300">
                    {iconMap[sector.icon as keyof typeof iconMap]}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-[#FAFAFA] mb-3">
                    {sector.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#A3A3A3] leading-relaxed mb-6 flex-grow">
                    {sector.description}
                  </p>

                  {/* Keywords/Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {sector.keywords.map((keyword) => (
                      <span
                        key={keyword}
                        className="inline-block bg-[#FF6B2C]/10 border border-[#FF6B2C]/30 text-[#FF6B2C] text-xs font-medium px-3 py-1.5 rounded-full hover:bg-[#FF6B2C]/20 transition-colors duration-300"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>

                  {/* Learn More Link */}
                  <a
                    href="/contact"
                    className="text-[#FF6B2C] font-medium hover:text-[#FF8A55] transition-colors duration-300 inline-flex items-center gap-2"
                  >
                    En savoir plus
                    <span className="inline-block">→</span>
                  </a>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Sectoral Approach Section */}
      <section className="bg-[#1A1A1A] py-20 px-4 md:px-6 border-t border-[#2A2A2A]">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#FAFAFA] mb-4">
                Une expertise par secteur
              </h2>
              <div className="w-20 h-1 bg-[#FF6B2C] mx-auto"></div>
            </div>
          </ScrollReveal>

          <div className="space-y-6">
            <ScrollReveal delay={0.1}>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-[#FF6B2C]/10 border border-[#FF6B2C]/30">
                    <span className="text-[#FF6B2C] font-bold">1</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#FAFAFA] mb-2">
                    Connaissance approfondie de vos défis
                  </h3>
                  <p className="text-[#A3A3A3]">
                    Nous comprenons les enjeux spécifiques de votre industrie : régule,mentations, saisonnalité, cycles d'achat, concurrence locale. Cela nous permet de construire des stratégies vraiment pertinentes.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-[#FF6B2C]/10 border border-[#FF6B2C]/30">
                    <span className="text-[#FF6B2C] font-bold">2</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#FAFAFA] mb-2">
                    Ciblage précis et pertinent
                  </h3>
                  <p className="text-[#A3A3A3]">
                    Les campagnes sont affinées pour parler directement à votre audience. Nous utilisons les bons mots-clés, les bons messages, les bons canaux pour chaque industrie.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-[#FF6B2C]/10 border border-[#FF6B2C]/30">
                    <span className="text-[#FF6B2C] font-bold">3</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#FAFAFA] mb-2">
                    Optimisation basée sur les meilleures pratiques
                  </h3>
                  <p className="text-[#A3A3A3]">
                    Nous appliquons les stratégies qui fonctionnent vraiment pour votre secteur : benchmarks, tendances, innovations testées. Votre budget génère un meilleur ROI.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.25}>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-[#FF6B2C]/10 border border-[#FF6B2C]/30">
                    <span className="text-[#FF6B2C] font-bold">4</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#FAFAFA] mb-2">
                    Croissance durable et mesurable
                  </h3>
                  <p className="text-[#A3A3A3]">
                    Nos stratégies sectorielles ne cherchent pas juste les clics rapides, mais une croissance solide et durable. Chaque campagne est pensée pour augmenter vos conversions réelles.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Sectors Overview */}
      <section className="bg-[#0A0A0A] py-20 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#FAFAFA] mb-6">
                Nos spécialités sectorielles
              </h2>
              <div className="space-y-4 text-[#A3A3A3]">
                <p>
                  <strong className="text-[#FAFAFA]">Immobilier & Construction :</strong> Générez des leads qualifiés pour vos programmes neufs, vos agences et vos promotions.
                </p>
                <p>
                  <strong className="text-[#FAFAFA]">E-commerce & Retail :</strong> Augmentez votre trafic qualifié et vos ventes via Google Shopping et les campagnes Search performantes.
                </p>
                <p>
                  <strong className="text-[#FAFAFA]">Hôtellerie & Restauration :</strong> Captez la demande locale et remplissez vos tables avec des clients prêts à consommer.
                </p>
                <p>
                  <strong className="text-[#FAFAFA]">Santé & Bien-être :</strong> Attirez des patients et clients avec un positionnement confiance et une conformité réglementaire assurée.
                </p>
                <p>
                  <strong className="text-[#FAFAFA]">Services à Domicile :</strong> Captez les demandes urgentes et les projets planifiés dans votre zone d'intervention.
                </p>
                <p>
                  <strong className="text-[#FAFAFA]">Formation & Éducation :</strong> Attirez des étudiants qualifiés et augmentez vos inscriptions avec des campagnes persuasives.
                </p>
                <p>
                  <strong className="text-[#FAFAFA]">B2B & SaaS :</strong> Générez des leads professionnels pour votre équipe commerciale avec un ciblage sophistiqué.
                </p>
                <p>
                  <strong className="text-[#FAFAFA]">Automobile :</strong> Attirez des clients pour l'achat, la révision ou la réparation à chaque étape du parcours client.
                </p>
                <p>
                  <strong className="text-[#FAFAFA]">Services Juridiques :</strong> Générez des instructions et positionnez votre expertise avec conformité professionnelle.
                </p>
                <p>
                  <strong className="text-[#FAFAFA]">Beauté & Bien-être :</strong> Boostez vos réservations et fidélisez votre clientèle avec des campagnes premium.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#1A1A1A] py-20 px-4 md:px-6 border-t border-[#2A2A2A]">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-[#FAFAFA] mb-6">
              Votre secteur mérite une stratégie dédiée
            </h2>
            <p className="text-[#A3A3A3] text-lg mb-8 max-w-2xl mx-auto">
              Discutons de vos enjeux spécifiques. Nos experts analyseront votre position actuelle et proposeront une stratégie Google Ads vraiment adaptée à votre industrie.
            </p>
            <Button href="/contact" size="lg">
              Programmer une consultation gratuite
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </PageTransition>
  );
}
