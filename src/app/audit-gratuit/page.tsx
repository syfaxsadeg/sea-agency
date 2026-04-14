import { Metadata } from "next";
import { generatePageMetadata, generateBreadcrumbSchema } from "@/lib/metadata";
import { SITE_CONFIG } from "@/lib/constants";
import PageTransition from "@/components/animations/PageTransition";
import ScrollReveal from "@/components/animations/ScrollReveal";
import ContactForm from "@/components/ui/ContactForm";
import { CheckCircle2, Phone } from "lucide-react";

export const metadata: Metadata = generatePageMetadata({
  title: "Audit Google Ads Gratuit — Analyse de vos campagnes",
  description:
    "Recevez un audit complet et gratuit de vos campagnes Google Ads. Nos experts analysent vos performances et identifient les opportunités d'amélioration sous 48h.",
  path: "/audit-gratuit",
});

export default function AuditGratuitPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Accueil", url: SITE_CONFIG.url },
    { name: "Audit Gratuit", url: `${SITE_CONFIG.url}/audit-gratuit` },
  ]);

  const benefits = [
    "Analyse complète de vos campagnes existantes",
    "Identification des mots-clés sous-exploités",
    "Recommandations de budget et d'enchères",
    "Plan d'action personnalisé sous 48h",
  ];

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
              Audit Google Ads{" "}
              <span className="text-[#FF6B2C]">100% gratuit</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-xl text-[#A3A3A3] leading-relaxed">
              Découvrez les forces et faiblesses de vos campagnes actuelles
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Two Column Layout */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column - Content */}
            <div className="flex flex-col justify-center">
              <ScrollReveal>
                <h2 className="text-4xl sm:text-5xl font-bold text-[#FAFAFA] mb-6">
                  Recevez votre audit Google Ads gratuit
                </h2>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <p className="text-lg text-[#A3A3A3] mb-10 leading-relaxed">
                  Sans engagement, nos experts analysent vos campagnes et
                  identifient les opportunités d'amélioration. Nous produisons
                  un rapport détaillé avec recommandations concrètes.
                </p>
              </ScrollReveal>

              {/* Benefits List */}
              <div className="space-y-4 mb-12">
                {benefits.map((benefit, idx) => (
                  <ScrollReveal key={idx} delay={0.15 + idx * 0.05}>
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 mt-1">
                        <CheckCircle2 className="w-6 h-6 text-[#FF6B2C]" />
                      </div>
                      <p className="text-[#FAFAFA] text-base leading-relaxed">
                        {benefit}
                      </p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              {/* Offer Section */}
              <ScrollReveal delay={0.4}>
                <div className="p-6 rounded-xl bg-gradient-to-br from-[#FF6B2C]/10 to-[#FF6B2C]/5 border border-[#FF6B2C]/20 mb-8">
                  <p className="text-[#FAFAFA] font-bold mb-2">
                    Offre spéciale limitée
                  </p>
                  <p className="text-[#A3A3A3] mb-4">
                    Recevez <span className="text-[#FF6B2C] font-bold">1 200€ de crédit Google Ads</span> avec votre première
                    campagne (conditions Google Ads standards applicables).
                  </p>
                  <p className="text-sm text-[#888] italic">
                    *Offre soumise aux conditions d'éligibilité Google Ads. Les
                    nouveaux clients seulement.
                  </p>
                </div>
              </ScrollReveal>

              {/* Phone Alternative */}
              <ScrollReveal delay={0.45}>
                <div className="flex items-center gap-3 text-[#FAFAFA]">
                  <Phone className="w-5 h-5 text-[#FF6B2C]" />
                  <span>Ou appelez-nous directement au</span>
                </div>
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="text-2xl font-bold text-[#FF6B2C] hover:text-[#FF8A55] transition-colors mt-2"
                >
                  {SITE_CONFIG.phoneDisplay}
                </a>
              </ScrollReveal>
            </div>

            {/* Right Column - Form */}
            <div>
              <ScrollReveal delay={0.2}>
                <div className="bg-[#141414] p-8 sm:p-10 rounded-2xl border border-[#2A2A2A] sticky top-32">
                  <h3 className="text-2xl font-bold text-[#FAFAFA] mb-2">
                    Demander votre audit
                  </h3>
                  <p className="text-[#A3A3A3] mb-8">
                    Remplissez le formulaire ci-dessous pour recevoir votre
                    analyse personnalisée.
                  </p>
                  <ContactForm formId={SITE_CONFIG.formspreeId} />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#141414]">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <h2 className="text-4xl font-bold text-[#FAFAFA] mb-12 text-center">
              Ce que vous allez découvrir
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: "📊",
                title: "Performance des campagnes",
                description:
                  "Analyse détaillée de vos CTR, CPC, conversions et ROI actuels.",
              },
              {
                icon: "🔍",
                title: "Opportunités de mots-clés",
                description:
                  "Identification des mots-clés à volume élevé que vous ne ciblez pas.",
              },
              {
                icon: "💰",
                title: "Optimisation budgétaire",
                description:
                  "Recommandations pour allouer votre budget aux campagnes les plus rentables.",
              },
              {
                icon: "⚙️",
                title: "Recommandations techniques",
                description:
                  "Ajustements de stratégie d'enchères, extensions manquantes et améliorations.",
              },
              {
                icon: "🏆",
                title: "Analyse de la concurrence",
                description:
                  "Benchmark contre vos concurrents et positionnement stratégique.",
              },
              {
                icon: "📈",
                title: "Plan d'action",
                description:
                  "Feuille de route détaillée avec priorités et étapes de mise en œuvre.",
              },
            ].map((item, idx) => (
              <ScrollReveal key={idx} delay={0.1 * idx}>
                <div className="p-6 rounded-xl bg-[#0A0A0A] border border-[#2A2A2A] hover:border-[#FF6B2C]/50 transition-colors">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="text-lg font-bold text-[#FAFAFA] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[#A3A3A3]">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0A0A0A]">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <h2 className="text-4xl font-bold text-[#FAFAFA] mb-12 text-center">
              Questions fréquentes
            </h2>
          </ScrollReveal>

          <div className="space-y-6">
            {[
              {
                q: "L'audit est-il vraiment gratuit ?",
                a: "Oui, 100% gratuit et sans engagement. Nous effectuons un audit complet et vous proposons un plan d'action que vous pouvez mettre en œuvre vous-même ou avec notre aide.",
              },
              {
                q: "Combien de temps faut-il pour recevoir l'audit ?",
                a: "Nous produisons votre audit dans les 48 heures suivant la réception de vos informations. Nous vous contactons par téléphone ou email pour discuter les résultats.",
              },
              {
                q: "Dois-je accepter de travailler avec vous ?",
                a: "Non. L'audit est sans engagement. Si vous décidez de travailler avec nous, nous discutons d'un contrat adapté à vos besoins et budget.",
              },
              {
                q: "Quelles informations avez-vous besoin ?",
                a: "Idéalement l'accès à votre compte Google Ads ou à des captures d'écran de vos campagnes. Vous pouvez aussi décrire simplement votre situation actuelle.",
              },
            ].map((item, idx) => (
              <ScrollReveal key={idx} delay={0.1 * idx}>
                <div className="p-6 rounded-xl bg-[#141414] border border-[#2A2A2A]">
                  <h3 className="text-lg font-bold text-[#FAFAFA] mb-2">
                    {item.q}
                  </h3>
                  <p className="text-[#A3A3A3]">{item.a}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
