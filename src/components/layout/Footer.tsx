import Link from "next/link";
import { Mail, Phone, MapPin, Linkedin, Twitter } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A0A0A] border-t border-[#2A2A2A] text-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <h3 className="font-bold text-xl text-[#FAFAFA] mb-4">SEA Agency</h3>
            <p className="text-[#A3A3A3] leading-relaxed">
              Experts en Google Ads à Paris. Nous créons des campagnes SEA performantes pour maximiser votre ROI.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-[#FAFAFA] mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-[#A3A3A3] hover:text-[#FF6B2C] transition-colors"
                >
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-[#A3A3A3] hover:text-[#FF6B2C] transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/secteurs"
                  className="text-[#A3A3A3] hover:text-[#FF6B2C] transition-colors"
                >
                  Secteurs
                </Link>
              </li>
              <li>
                <Link
                  href="/methodologie"
                  className="text-[#A3A3A3] hover:text-[#FF6B2C] transition-colors"
                >
                  Méthodologie
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-[#A3A3A3] hover:text-[#FF6B2C] transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold text-[#FAFAFA] mb-4">Ressources</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/agence"
                  className="text-[#A3A3A3] hover:text-[#FF6B2C] transition-colors"
                >
                  À Propos
                </Link>
              </li>
              <li>
                <Link
                  href="/audit-gratuit"
                  className="text-[#A3A3A3] hover:text-[#FF6B2C] transition-colors"
                >
                  Audit Gratuit
                </Link>
              </li>
              <li>
                <Link
                  href="/mentions-legales"
                  className="text-[#A3A3A3] hover:text-[#FF6B2C] transition-colors"
                >
                  Mentions Légales
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-[#FAFAFA] mb-4">Contact</h4>
            <div className="space-y-3">
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="flex items-center gap-2 text-[#A3A3A3] hover:text-[#FF6B2C] transition-colors"
              >
                <Phone className="w-4 h-4" />
                {SITE_CONFIG.phoneDisplay}
              </a>
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="flex items-center gap-2 text-[#A3A3A3] hover:text-[#FF6B2C] transition-colors"
              >
                <Mail className="w-4 h-4" />
                {SITE_CONFIG.email}
              </a>
              <div className="flex items-start gap-2 text-[#A3A3A3]">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>
                  {SITE_CONFIG.address.street}
                  <br />
                  {SITE_CONFIG.address.zip} {SITE_CONFIG.address.city}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-[#2A2A2A] pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#888] text-sm">
              © {currentYear} SEA Agency. Tous droits réservés.
            </p>
            <div className="flex gap-4">
              <a
                href={SITE_CONFIG.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#A3A3A3] hover:text-[#FF6B2C] transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={SITE_CONFIG.socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#A3A3A3] hover:text-[#FF6B2C] transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
