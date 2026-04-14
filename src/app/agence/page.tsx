import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Agence - SEA Agency",
  description: "Découvrez notre agence spécialisée en stratégies d'acquisition de clients.",
};

export default function Agence() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <section className="py-20 px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">À Propos de Notre Agence</h1>
            <div className="prose prose-lg">
              <p className="text-xl text-gray-600 mb-8">
                Fondée sur la conviction que chaque entreprise mérite une stratégie d'acquisition
                digitale sur mesure, notre agence accompagne des PME et des ETI dans leur
                transformation digitale.
              </p>
              <h2 className="text-2xl font-bold mt-8 mb-4">Notre Approche</h2>
              <p className="text-gray-600 mb-4">
                Nous croyons en une approche basée sur les données, la transparence et l'engagement
                continu. Chaque stratégie est développée après une analyse approfondie de vos
                besoins spécifiques et du marché.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
