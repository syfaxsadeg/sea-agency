"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/services", label: "Services" },
    { href: "/secteurs", label: "Secteurs" },
    { href: "/methodologie", label: "Méthodologie" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#0A0A0A] border-b border-[#2A2A2A] backdrop-blur-sm bg-opacity-95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="font-bold text-xl text-[#FAFAFA] hover:text-[#FF6B2C] transition-colors">
            SEA Agency
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#A3A3A3] hover:text-[#FF6B2C] transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={SITE_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-[#FF6B2C] text-white rounded-full font-semibold hover:bg-[#FF8A55] transition-colors"
            >
              WhatsApp
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[#FAFAFA] hover:text-[#FF6B2C] transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-2 px-2 text-[#A3A3A3] hover:text-[#FF6B2C] transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={SITE_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block py-2 px-2 bg-[#FF6B2C] text-white rounded font-semibold hover:bg-[#FF8A55] transition-colors text-center"
            >
              WhatsApp
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
