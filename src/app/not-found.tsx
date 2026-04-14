import Link from "next/link";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-[#0A0A0A]">
      <div className="max-w-4xl mx-auto text-center py-12">
        <AlertCircle className="w-20 h-20 text-[#FF6B2C] mx-auto mb-6" />
        <h1 className="text-6xl sm:text-7xl font-bold text-[#FAFAFA] mb-4">
          404
        </h1>
        <h2 className="text-2xl sm:text-3xl font-bold text-[#FAFAFA] mb-4">
          Page non trouvée
        </h2>
        <p className="text-lg text-[#A3A3A3] mb-8">
          Désolé, la page que vous cherchez n'existe pas ou a été déplacée.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="px-6 py-3 bg-[#FF6B2C] text-white rounded-full font-semibold hover:bg-[#FF8A55] transition-colors inline-block"
          >
            Retour à l'accueil
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 border border-[#FF6B2C] text-[#FF6B2C] rounded-full font-semibold hover:bg-[#FF6B2C]/10 transition-colors inline-block"
          >
            Nous contacter
          </Link>
        </div>
      </div>
    </div>
  );
}
