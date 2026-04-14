import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import UrgencyBanner from "@/components/layout/UrgencyBanner";
import { generateLocalBusinessSchema } from "@/lib/metadata";
import { SITE_CONFIG } from "@/lib/constants";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: "SEA Agency | Agence Google Ads Paris — Experts SEA",
    template: "%s | SEA Agency",
  },
  description: "Agence Google Ads à Paris. Experts en référencement payant SEA, nous concevons et optimisons vos campagnes Google Ads pour maximiser votre ROI. Audit gratuit.",
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = generateLocalBusinessSchema();

  return (
    <html lang="fr" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-[family-name:var(--font-body)] bg-[#0A0A0A] text-[#FAFAFA] antialiased">
        <UrgencyBanner />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
