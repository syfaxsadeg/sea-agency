import { Metadata } from "next";
import { generatePageMetadata, generateBreadcrumbSchema } from "@/lib/metadata";
import { SITE_CONFIG } from "@/lib/constants";
import PageTransition from "@/components/animations/PageTransition";
import ScrollReveal from "@/components/animations/ScrollReveal";
import Button from "@/components/ui/Button";
import {
  ClipboardCheck,
  TrendingUp,
  BarChart3,
  Zap,
  Target,
  Lightbulb,
} from "lucide-react";

export const metadata: Metadata = generatePageMetadata({
  title: "Méthodologie Google Ads — Stratégie SEA Proven",
  description:
    "Notre méthodologie Google Ads éprouvée : audit, stratégie, création et optimisation continue pour maximiser votre ROI.",
  path: "/methodologie",
});

export default function MethodologiePage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Accueil", url: SITE_CONFIG.url },
    { name: "Méthodologie", url: `${SITE_CONFIG.url}/methodologie` },
  ]);

  return (
    <PageTransition>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero Section */}
      <section className="min-h-[50vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-32 pb-16 bg-[#0A0A0A]">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#FAFAFA] mb-6 leading-tight">
              Notre Méthodologie
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-xl text-[#A3A3A3] leading-relaxed">
              Une approche systématique et basée sur les données pour
              maximiser votre ROI Google Ads
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 4 Steps Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Audit",
                description: "Analyse approfondie de votre situation actuelle",
                icon: ClipboardCheck,
              },
              {
                step: "02",
                title: "Stratégie",
                description: "Développement d'une stratégie personnalisée",
                icon: Target,
              },
              {
                step: "03",
                title: "Mise en œuvre",
                description: "Création et lancement des campagnes",
                icon: Zap,
              },
              {
                step: "04",
                title: "Optimisation",
                description: "Amélioration continue basée sur les données",
                icon: TrendingUp,
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <ScrollReveal key={idx} delay={0.1 * idx}>
                  <div className="p-8 rounded-xl bg-[#141414] border border-[#2A2A2A] hover:border-[#FF6B2C]/50 transition-colors h-full">
                    <div className="text-4xl font-bold text-[#FF6B2C] mb-4">
                      {item.step}
                    </div>
                    <Icon className="w-8 h-8 text-[#FF6B2C] mb-4" />
                    <h3 className="text-xl font-bold text-[#FAFAFA] mb-3">
                      {item.title}
                    </h3>
                    <p className="text-[#A3A3A3]">{item.description}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Detailed Steps */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#141414]">
        <div className="max-w-7xl mx-auto">
          {/* Step 1 */}
          <div className="mb-20">
            <ScrollReveal>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div>
                  <h2 className="text-4xl font-bold text-[#FAFAFA] mb-4">
                    <span className="text-[#FF6B2C]">1.</span> Audit approfondi
                  </h2>
                  <p className="text-lg text-[#A3A3A3] mb-6 leading-relaxed">
                    Nous commençons par analyser votre situation actuelle :
                  </p>
                  <ul className="space-y-3 mb-8">
                    {[
                      "Analyse de vos campagnes existantes",
                      "Identification des mots-clés performants et manquants",
                      "Audit de votre stratégie d'enchères",
                      "Analyse concurrentielle détaillée",
                      "Review de vos pages de destination",
                      "Évaluation de votre conversion tracking",
                    ].map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-[#FAFAFA]"
                      >
                        <ClipboardCheck className="w-5 h-5 text-[#FF6B2C] flex-shrink-0 mt-1" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-[#A3A3A3] italic">
                    Durée : 1-2 semaines | Livrables : Rapport détaillé + recommandations
                  </p>
                </div>
                <ScrollReveal delay={0.2}>
                  <div className="p-10 rounded-2xl bg-[#0A0A0A] border border-[#2A2A2A] flex items-center justify-center h-96">
                    <BarChart3 className="w-32 h-32 text-[#FF6B2C]/20" />
                  </div>
                </ScrollReveal>
              </div>
            </ScrollReveal>
          </div>

          {/* Step 2 */}
          <div className="mb-20">
            <ScrollReveal delay={0.1}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <ScrollReveal delay={0.2}>
                  <div className="p-10 rounded-2xl bg-[#0A0A0A] border border-[#2A2A2A] flex items-center justify-center h-96 order-2 lg:order-1">
                    <Target className="w-32 h-32 text-[#FF6B2C]/20" />
                  </div>
                </ScrollReveal>
                <div className="order-1 lg:order-2">
                  <h2 className="text-4xl font-bold text-[#FAFAFA] mb-4">
                    <span className="text-[#FF6B2C]">2.</span> Stratégie personnalisée
                  </h2>
                  <p className="text-lg text-[#A3A3A3] mb-6 leading-relaxed">
                    Sur la base de l'audit, nous définissons une stratégie adaptée :
                  </p>
                  <ul className="space-y-3 mb-8">
                    {[
                      "Définition des objectifs SMART et KPIs",
                      "Sélection et structuration des campagnes",
                      "Recherche approfondie de mots-clés",
                      "Création des audiences et segmentations",
                      "Planification budgétaire",
                      "Stratégie d'enchères optimisée",
                    ].map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-[#FAFAFA]"
                      >
                        <Lightbulb className="w-5 h-5 text-[#FF6B2C] flex-shrink-0 mt-1" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-[#A3A3A3] italic">
                    Durée : 1-2 semaines | Livrables : Document stratégie + présentation
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Step 3 */}
          <div className="mb-20">
            <ScrollReveal delay={0.2}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div>
                  <h2 className="text-4xl font-bold text-[#FAFAFA] mb-4">
                    <span className="text-[#FF6B2C]">3.</span> Création et lancement
                  </h2>
                  <p className="text-lg text-[#A3A3A3] mb-6 leading-relaxed">
                    Nous mettons en place les campagnes avec attention au détail :
                  </p>
                  <ul className="space-y-3 mb-8">
                    {[
                      "Configuration complète des campagnes",
                      "Rédaction des annonces pertinentes",
                      "Mise en place des extensions d'annonces",
                      "Configuration du conversion tracking",
                      "Tests A/B des créatifs",
                      "Lancement progressif avec monitoring",
                    ].map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-[#FAFAFA]"
                      >
                        <Zap className="w-5 h-5 text-[#FF6B2C] flex-shrink-0 mt-1" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-[#A3A3A3] italic">
                    Durée : 2-4 semaines | Livrables : Campagnes live + documentation
                  </p>
                </div>
                <ScrollReveal delay={0.3}>
                  <div className="p-10 rounded-2xl bg-[#0A0A0A] border border-[#2A2A2A] flex items-center justify-center h-96">
                    <Zap className="w-32 h-32 text-[#FF6B2C]/20" />
                  </div>
                </ScrollReveal>
              </div>
            </ScrollReveal>
          </div>

          {/* Step 4 */}
          <div>
            <ScrollReveal delay={0.3}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <ScrollReveal delay={0.4}>
                  <div className="p-10 rounded-2xl bg-[#0A0A0A] border border-[#2A2A2A] flex items-center justify-center h-96 order-2 lg:order-1">
                    <TrendingUp className="w-32 h-32 text-[#FF6B2C]/20" />
                  </div>
                </ScrollReveal>
                <div className="order-1 lg:order-2">
                  <h2 className="text-4xl font-bold text-[#FAFAFA] mb-4">
                    <span className="text-[#FF6B2C]">4.</span> Optimisation continue
                  </h2>
                  <p className="text-lg text-[#A3A3A3] mb-6 leading-relaxed">
                    Nous optimisons vos campagnes en continu pour maximiser le ROI :
                  </p>
                  <ul className="space-y-3 mb-8">
                    {[
                      "Analyse hebdomadaire des performances",
                      "Optimisation des enchères en temps réel",
                      "Amélioration des Quality Scores",
                      "Test et itération des annonces",
                      "Expansion des mots-clés performants",
                      "Rapports mensuels détaillés",
                    ].map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-[#FAFAFA]"
                      >
                        <TrendingUp className="w-5 h-5 text-[#FF6B2C] flex-shrink-0 mt-1" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-[#A3A3A3] italic">
                    Durée : Continu | Livrables : Rapports mensuels + recommandations
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Why This Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0A0A0A]">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <h2 className="text-4xl font-bold text-[#FAFAFA] mb-12 text-center">
              Pourquoi cette méthodologie fonctionne
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Basée sur les données",
                description:
                  "Chaque décision est prise sur la base de données réelles et testées, pas d'intuition.",
              },
              {
                title: "Transparence totale",
                description:
                  "Vous avez accès à tous les rapports et pouvez voir en temps réel vos performances.",
              },
              {
                title: "Flexible et itérative",
                description:
                  "Nous ajustons continuellement la stratégie basée sur les résultats et votre feedback.",
              },
              {
                title: "Résultats mesurables",
                description:
                  "Nous focalisez sur les KPIs qui importent vraiment pour votre business.",
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

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#141414]">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-4xl font-bold text-[#FAFAFA] mb-6">
              Prêt à transformer votre présence Google Ads ?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-xl text-[#A3A3A3] mb-8 leading-relaxed">
              Démarrez par un audit gratuit pour découvrir les opportunités
              spécifiques à votre business.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <Button
              href="/audit-gratuit"
              variant="primary"
              size="lg"
              className="inline-block"
            >
              Demander votre audit gratuit
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </PageTransition>
  );
}
