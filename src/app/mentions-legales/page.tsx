import { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { SITE_CONFIG } from "@/lib/constants";
import PageTransition from "@/components/animations/PageTransition";
import ScrollReveal from "@/components/animations/ScrollReveal";

export const metadata: Metadata = generatePageMetadata({
  title: "Mentions Légales",
  description: "Mentions légales de l'agence SEA Agency Google Ads Paris.",
  path: "/mentions-legales",
});

export const robots = {
  index: false,
  follow: false,
  nocache: true,
};

export default function MentionsLegalesPage() {
  return (
    <PageTransition>
      <section className="min-h-[50vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-32 pb-12 bg-[#0A0A0A]">
        <div className="max-w-4xl mx-auto w-full">
          <ScrollReveal>
            <h1 className="text-5xl sm:text-6xl font-bold text-[#FAFAFA] mb-4">
              Mentions Légales
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-lg text-[#A3A3A3]">
              Informations légales et réglementaires relatives au site
              sea-agency.fr
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0A0A0A]">
        <div className="max-w-4xl mx-auto prose prose-invert max-w-none">
          {/* Éditeur */}
          <div className="mb-12">
            <ScrollReveal>
              <h2 className="text-3xl font-bold text-[#FAFAFA] mb-6 mt-0">
                1. Éditeur du site
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-[#A3A3A3] leading-relaxed">
                Le site sea-agency.fr est édité par :
              </p>
              <div className="mt-4 p-6 bg-[#141414] rounded-lg border border-[#2A2A2A] text-[#FAFAFA]">
                <p className="mb-2">
                  <strong>SEA Agency</strong>
                </p>
                <p className="mb-2">
                  {SITE_CONFIG.address.street}
                </p>
                <p className="mb-2">
                  {SITE_CONFIG.address.zip} {SITE_CONFIG.address.city},{" "}
                  {SITE_CONFIG.address.country}
                </p>
                <p className="mb-2">
                  <strong>Email :</strong>{" "}
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="text-[#FF6B2C] hover:text-[#FF8A55] transition-colors"
                  >
                    {SITE_CONFIG.email}
                  </a>
                </p>
                <p>
                  <strong>Téléphone :</strong>{" "}
                  <a
                    href={`tel:${SITE_CONFIG.phone}`}
                    className="text-[#FF6B2C] hover:text-[#FF8A55] transition-colors"
                  >
                    {SITE_CONFIG.phoneDisplay}
                  </a>
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Hébergeur */}
          <div className="mb-12">
            <ScrollReveal delay={0.15}>
              <h2 className="text-3xl font-bold text-[#FAFAFA] mb-6 mt-0">
                2. Hébergeur du site
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-[#A3A3A3] leading-relaxed">
                Le site est hébergé par :
              </p>
              <div className="mt-4 p-6 bg-[#141414] rounded-lg border border-[#2A2A2A] text-[#FAFAFA]">
                <p className="mb-2">
                  <strong>Vercel Inc.</strong>
                </p>
                <p className="mb-2">
                  440 N Barranca Ave #4133
                </p>
                <p>
                  Covina, CA 91723, USA
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Propriété Intellectuelle */}
          <div className="mb-12">
            <ScrollReveal delay={0.25}>
              <h2 className="text-3xl font-bold text-[#FAFAFA] mb-6 mt-0">
                3. Propriété intellectuelle
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <p className="text-[#A3A3A3] leading-relaxed mb-4">
                Tous les éléments du site sea-agency.fr, incluant notamment les
                textes, images, logos, graphismes, structure et mise en page,
                sont la propriété exclusive de SEA Agency ou de ses
                partenaires/fournisseurs autorisés. Toute reproduction, représentation,
                adaptation ou modification, intégrale ou partielle, par quelque
                procédé que ce soit, sans l'autorisation préalable écrite de
                SEA Agency est strictement interdite et constituerait une
                contrefaçon sanctionnée par les articles L. 335-2 et suivants du
                Code de la propriété intellectuelle.
              </p>
              <p className="text-[#A3A3A3] leading-relaxed">
                L'utilisateur s'engage à respecter les droits de propriété
                intellectuelle et à ne pas utiliser les contenus du site à des
                fins commerciales ou concurrentielles sans autorisation expresse.
              </p>
            </ScrollReveal>
          </div>

          {/* Données Personnelles et RGPD */}
          <div className="mb-12">
            <ScrollReveal delay={0.35}>
              <h2 className="text-3xl font-bold text-[#FAFAFA] mb-6 mt-0">
                4. Données personnelles et RGPD
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.4}>
              <div className="space-y-4 text-[#A3A3A3] leading-relaxed">
                <p>
                  <strong className="text-[#FAFAFA]">Responsable de traitement :</strong> SEA Agency
                </p>

                <p>
                  <strong className="text-[#FAFAFA]">Finalités du traitement :</strong> Les données
                  personnelles collectées via les formulaires du site sont
                  utilisées pour répondre à vos demandes, vous proposer nos
                  services, et améliorer notre offre commerciale.
                </p>

                <p>
                  <strong className="text-[#FAFAFA]">Base légale :</strong> Votre consentement, exécution
                  d'un contrat, ou intérêt légitime.
                </p>

                <p>
                  <strong className="text-[#FAFAFA]">Destinataires :</strong> Les données sont conservées
                  en interne et ne sont pas partagées avec des tiers, sauf
                  obligation légale.
                </p>

                <p>
                  <strong className="text-[#FAFAFA]">Durée de conservation :</strong> Les données sont
                  conservées pendant la durée nécessaire à la relation
                  commerciale, puis supprimées dans un délai de 3 ans suite à
                  votre dernière interaction.
                </p>

                <p>
                  <strong className="text-[#FAFAFA]">Vos droits :</strong> Vous bénéficiez d'un droit
                  d'accès, de rectification, d'effacement, de portabilité et
                  d'opposition au traitement de vos données. Pour exercer ces
                  droits, veuillez nous contacter à{" "}
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="text-[#FF6B2C] hover:text-[#FF8A55] transition-colors"
                  >
                    {SITE_CONFIG.email}
                  </a>
                </p>

                <p>
                  <strong className="text-[#FAFAFA]">Réclamation auprès de la CNIL :</strong> Vous avez le
                  droit de déposer une réclamation auprès de la Commission
                  Nationale de l'Informatique et des Libertés (CNIL) si vous
                  estimez que le traitement de vos données viole le RGPD.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Cookies */}
          <div className="mb-12">
            <ScrollReveal delay={0.45}>
              <h2 className="text-3xl font-bold text-[#FAFAFA] mb-6 mt-0">
                5. Cookies
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.5}>
              <p className="text-[#A3A3A3] leading-relaxed mb-4">
                Le site sea-agency.fr peut utiliser des cookies pour améliorer
                votre expérience utilisateur. Les cookies sont des petits
                fichiers texte stockés sur votre appareil.
              </p>
              <p className="text-[#A3A3A3] leading-relaxed mb-4">
                <strong className="text-[#FAFAFA]">Types de cookies utilisés :</strong>
              </p>
              <ul className="list-disc list-inside text-[#A3A3A3] space-y-2 mb-4">
                <li>Cookies techniques : nécessaires au fonctionnement du site</li>
                <li>Cookies analytiques : pour comprendre l'usage du site</li>
                <li>Cookies de marketing : pour personnaliser les contenus</li>
              </ul>
              <p className="text-[#A3A3A3] leading-relaxed">
                Vous pouvez à tout moment refuser ou supprimer les cookies via
                les paramètres de votre navigateur. Cependant, cela peut
                impacter votre expérience sur le site.
              </p>
            </ScrollReveal>
          </div>

          {/* Responsabilité */}
          <div className="mb-12">
            <ScrollReveal delay={0.55}>
              <h2 className="text-3xl font-bold text-[#FAFAFA] mb-6 mt-0">
                6. Limitation de responsabilité
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.6}>
              <p className="text-[#A3A3A3] leading-relaxed mb-4">
                SEA Agency s'efforce de maintenir le site à jour et sans erreurs.
                Cependant, nous ne garantissons pas l'exactitude, la
                complétude ou l'absence de virus du contenu du site.
              </p>
              <p className="text-[#A3A3A3] leading-relaxed mb-4">
                En particulier, SEA Agency ne peut être tenue responsable de :
              </p>
              <ul className="list-disc list-inside text-[#A3A3A3] space-y-2">
                <li>Les dommages indirects ou consécutifs résultant de votre utilisation du site</li>
                <li>La perte de données ou d'accès à vos systèmes</li>
                <li>Les erreurs ou omissions dans les contenus</li>
                <li>L'interruption ou l'indisponibilité du service</li>
                <li>Les contenus externes auxquels le site renvoie</li>
              </ul>
            </ScrollReveal>
          </div>

          {/* Modifications */}
          <div className="mb-12">
            <ScrollReveal delay={0.65}>
              <h2 className="text-3xl font-bold text-[#FAFAFA] mb-6 mt-0">
                7. Modifications
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.7}>
              <p className="text-[#A3A3A3] leading-relaxed">
                SEA Agency se réserve le droit de modifier ces mentions légales
                à tout moment. Les modifications entrent en vigueur dès leur
                publication sur le site. Votre utilisation continue du site
                constitue votre acceptation de ces modifications.
              </p>
            </ScrollReveal>
          </div>

          {/* Droit Applicable */}
          <div className="mb-12">
            <ScrollReveal delay={0.75}>
              <h2 className="text-3xl font-bold text-[#FAFAFA] mb-6 mt-0">
                8. Droit applicable et juridiction
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.8}>
              <p className="text-[#A3A3A3] leading-relaxed">
                Ces mentions légales et votre utilisation du site sont régies
                par la loi française. En cas de litige, vous acceptez la
                juridiction exclusive des tribunaux compétents du ressort de
                Paris.
              </p>
            </ScrollReveal>
          </div>

          {/* Contact */}
          <div className="mb-12">
            <ScrollReveal delay={0.85}>
              <h2 className="text-3xl font-bold text-[#FAFAFA] mb-6 mt-0">
                9. Contact
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.9}>
              <p className="text-[#A3A3A3] leading-relaxed mb-4">
                Pour toute question concernant ces mentions légales ou le site,
                veuillez nous contacter :
              </p>
              <div className="p-6 bg-[#141414] rounded-lg border border-[#2A2A2A] text-[#FAFAFA]">
                <p className="mb-2">
                  <strong>Email :</strong>{" "}
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="text-[#FF6B2C] hover:text-[#FF8A55] transition-colors"
                  >
                    {SITE_CONFIG.email}
                  </a>
                </p>
                <p>
                  <strong>Téléphone :</strong>{" "}
                  <a
                    href={`tel:${SITE_CONFIG.phone}`}
                    className="text-[#FF6B2C] hover:text-[#FF8A55] transition-colors"
                  >
                    {SITE_CONFIG.phoneDisplay}
                  </a>
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Last Updated */}
          <ScrollReveal delay={0.95}>
            <div className="mt-16 pt-8 border-t border-[#2A2A2A] text-center text-[#888]">
              <p>
                Dernière mise à jour : {new Date().toLocaleDateString("fr-FR")}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PageTransition>
  );
}
