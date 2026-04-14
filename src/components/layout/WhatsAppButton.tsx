"use client";

import { MessageCircle } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export default function WhatsAppButton() {
  return (
    <a
      href={SITE_CONFIG.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-30 bg-[#25D366] text-white rounded-full p-4 shadow-lg hover:bg-[#20BA5A] transition-all duration-300 hover:scale-110"
      title="Contactez-nous sur WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
}
