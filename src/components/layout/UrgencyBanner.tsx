"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";

export default function UrgencyBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show banner after 2 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed top-16 left-0 right-0 z-30 bg-gradient-to-r from-[#FF6B2C] to-[#FF8A55] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        <p className="text-sm md:text-base font-semibold">
          💥 Offre limitée : 1200€ de crédits Google Ads pour vos 3 premiers mois
        </p>
        <button
          onClick={() => setIsVisible(false)}
          className="ml-4 flex-shrink-0 hover:opacity-80 transition-opacity"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
