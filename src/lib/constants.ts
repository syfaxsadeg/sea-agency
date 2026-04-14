export const SITE_CONFIG = {
  name: "SEA Agency",
  tagline: "Agence Google Ads Paris",
  url: "https://sea-agency.fr",
  email: "syfaxads@gmail.com",
  phone: "+33646334777",
  phoneDisplay: "06 46 33 47 77",
  whatsappUrl: "https://wa.me/33646334777?text=Bonjour,%20je%20souhaite%20un%20audit%20Google%20Ads%20gratuit",
  address: {
    street: "78, Avenue des Champs-Élysées",
    city: "Paris",
    zip: "75008",
    country: "France",
    full: "78, Avenue des Champs-Élysées, 75008 Paris"
  },
  formspreeId: "xpwzgkvq", // placeholder, will be replaced with real ID
  social: {
    linkedin: "#",
    instagram: "#"
  }
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Accueil" },
  { href: "/agence", label: "Notre Agence" },
  { href: "/services", label: "Services" },
  { href: "/secteurs", label: "Secteurs" },
  { href: "/methodologie", label: "Méthodologie" },
  { href: "/audit-gratuit", label: "Audit Gratuit" },
  { href: "/contact", label: "Contact" },
] as const;
