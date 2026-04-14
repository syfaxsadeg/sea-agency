import { Metadata } from "next";
import { generatePageMetadata, generateBreadcrumbSchema } from "@/lib/metadata";
import { SITE_CONFIG } from "@/lib/constants";
import PageTransition from "@/components/animations/PageTransition";
import ScrollReveal from "@/components/animations/ScrollReveal";
import ContactForm from "@/components/ui/ContactForm";
import { Phone, Mail, MessageCircle, MapPin, ArrowRight } from "lucide-react";

export const metadata: Metadata = generatePageMetadata({
  title: "Contact — Agence Google Ads Paris",
  description:
    "Contactez notre agence Google Ads basée à Paris. Nous répondons à vos questions par téléphone, email ou WhatsApp.",
  path: "/contact",
});

export default function ContactPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Accueil", url: SITE_CONFIG.url },
    { name: "Contact", url: `${SITE_CONFIG.url}/contact` },
  ]);

  const contactInfo = [
    {
      icon: Phone,
      title: "Téléphone",
      value: SITE_CONFIG.phoneDisplay,
      description: "Disponible du lundi au vendredi, 9h-19h",
      href: `tel:${SITE_CONFIG.phone}`,
      isLink: true,
    },
    {
      icon: Mail,
      title: "Email",
      value: SITE_CONFIG.email,
      description: "Réponse garantie sous 24h",
      href: `mailto:${SITE_CONFIG.email}`,
      isLink: true,
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: "Message direct",
      description: "Chat instantané avec notre équipe",
      href: SITE_CONFIG.whatsappUrl,
      isLink: true,
    },
    {
      icon: MapPin,
      title: "Adresse",
      value: SITE_CONFIG.address.street,
      description: `${SITE_CONFIG.address.zip} ${SITE_CONFIG.address.city}, France`,
      isLink: false,
    },
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
              Contactez notre équipe
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-xl text-[#A3A3A3] leading-relaxed">
              Nous sommes là pour répondre à vos questions et discuter de vos
              objectifs Google Ads
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Two Column Layout */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column - Contact Info */}
            <div className="flex flex-col justify-between">
              <div>
                <ScrollReveal>
                  <h2 className="text-4xl font-bold text-[#FAFAFA] mb-12">
                    Nos informations de contact
                  </h2>
                </ScrollReveal>

                {/* Contact Cards */}
                <div className="space-y-6">
                  {contactInfo.map((info, idx) => {
                    const Icon = info.icon;
                    return (
                      <ScrollReveal key={idx} delay={0.1 * idx}>
                        {info.isLink ? (
                          <a
                            href={info.href}
                            target={
                              info.href.startsWith("http")
                                ? "_blank"
                                : undefined
                            }
                            rel={
                              info.href.startsWith("http")
                                ? "noopener noreferrer"
                                : undefined
                            }
                            className="block p-6 rounded-xl bg-[#141414] border border-[#2A2A2A] hover:border-[#FF6B2C]/50 transition-all duration-300 group"
                          >
                            <div className="flex items-start justify-between">
                              <div className="flex items-start gap-4 flex-1">
                                <div className="mt-1">
                                  <Icon className="w-6 h-6 text-[#FF6B2C]" />
                                </div>
                                <div>
                                  <h3 className="text-lg font-bold text-[#FAFAFA] mb-1">
                                    {info.title}
                                  </h3>
                                  <p className="text-[#FF6B2C] font-semibold text-lg mb-1">
                                    {info.value}
                                  </p>
                                  <p className="text-sm text-[#A3A3A3]">
                                    {info.description}
                                  </p>
                                </div>
                              </div>
                              <ArrowRight className="w-5 h-5 text-[#FF6B2C] mt-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                          </a>
                        ) : (
                          <div className="p-6 rounded-xl bg-[#141414] border border-[#2A2A2A]">
                            <div className="flex items-start gap-4">
                              <div className="mt-1">
                                <Icon className="w-6 h-6 text-[#FF6B2C]" />
                              </div>
                              <div>
                                <h3 className="text-lg font-bold text-[#FAFAFA] mb-1">
                                  {info.title}
                                </h3>
                                <p className="text-[#FF6B2C] font-semibold text-lg mb-1">
                                  {info.value}
                                </p>
                                <p className="text-sm text-[#A3A3A3]">
                                  {info.description}
                                </p>
                              </div>
                            </div>
                          </div>
                        )}
                      </ScrollReveal>
                    );
                  })}
                </div>
              </div>

              {/* Hours */}
              <ScrollReveal delay={0.5}>
                <div className="mt-12 p-6 rounded-xl bg-[#FF6B2C]/5 border border-[#FF6B2C]/20">
                  <h3 className="text-lg font-bold text-[#FAFAFA] mb-3">
                    Horaires
                  </h3>
                  <div className="space-y-2 text-[#A3A3A3]">
                    <p>
                      <span className="font-semibold text-[#FAFAFA]">
                        Lundi - Vendredi:
                      </span>{" "}
                      9:00 - 19:00
                    </p>
                    <p>
                      <span className="font-semibold text-[#FAFAFA]">
                        Samedi - Dimanche:
                      </span>{" "}
                      Sur rendez-vous
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Column - Form */}
            <div>
              <ScrollReveal delay={0.2}>
                <div className="bg-[#141414] p-8 sm:p-10 rounded-2xl border border-[#2A2A2A] sticky top-32">
                  <h2 className="text-3xl font-bold text-[#FAFAFA] mb-2">
                    Envoyez-nous un message
                  </h2>
                  <p className="text-[#A3A3A3] mb-8">
                    Remplissez le formulaire ci-dessous et nous vous
                    recontacterons rapidement.
                  </p>
                  <ContactForm formId={SITE_CONFIG.formspreeId} />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#141414]">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h2 className="text-4xl font-bold text-[#FAFAFA] mb-12 text-center">
              Notre localisation
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="rounded-2xl overflow-hidden border border-[#2A2A2A] h-96 bg-[#0A0A0A] flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-[#FF6B2C] mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-[#FAFAFA] mb-2">
                  {SITE_CONFIG.address.street}
                </h3>
                <p className="text-[#A3A3A3] text-lg mb-6">
                  {SITE_CONFIG.address.zip} {SITE_CONFIG.address.city},{" "}
                  {SITE_CONFIG.address.country}
                </p>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(SITE_CONFIG.address.full)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-[#FF6B2C] text-white rounded-full font-semibold hover:bg-[#FF8A55] transition-colors"
                >
                  Voir sur Google Maps
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0A0A0A]">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <h2 className="text-4xl font-bold text-[#FAFAFA] mb-12 text-center">
              À quoi vous attendre
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                step: "1",
                title: "Premier contact",
                description:
                  "Nous répondons à votre demande dans les 24h et programmez un appel de découverte.",
              },
              {
                step: "2",
                title: "Compréhension de vos objectifs",
                description:
                  "Nous écoutons vos besoins, défis et objectifs commerciaux précis.",
              },
              {
                step: "3",
                title: "Audit et recommandations",
                description:
                  "Nous analysons votre situation et proposons un plan d'action détaillé.",
              },
              {
                step: "4",
                title: "Mise en œuvre",
                description:
                  "Si vous acceptez, nous mettons en place et optimisons continuellement vos campagnes.",
              },
            ].map((item, idx) => (
              <ScrollReveal key={idx} delay={0.1 * idx}>
                <div className="p-6 rounded-xl bg-[#141414] border border-[#2A2A2A]">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#FF6B2C] text-white font-bold mb-4">
                    {item.step}
                  </div>
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
    </PageTransition>
  );
}
