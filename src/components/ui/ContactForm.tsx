"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import Button from "./Button";

type Props = {
  formId?: string;
  compact?: boolean;
};

export default function ContactForm({
  formId = "xpwzgkvq",
  compact,
}: Props) {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.currentTarget);

    try {
      const res = await fetch(`https://formspree.io/f/${formId}`, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12"
      >
        <div className="text-5xl mb-4">✓</div>
        <h3 className="text-2xl font-bold text-[#FAFAFA] mb-2">
          Message envoyé !
        </h3>
        <p className="text-[#A3A3A3]">Nous vous recontactons sous 24h.</p>
      </motion.div>
    );
  }

  const inputClasses =
    "w-full bg-[#141414] border border-[#2A2A2A] rounded-xl px-5 py-4 text-[#FAFAFA] placeholder-[#666] focus:border-[#FF6B2C] focus:outline-none focus:ring-1 focus:ring-[#FF6B2C]/50 transition-colors";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div
        className={
          compact
            ? "space-y-4"
            : "grid grid-cols-1 md:grid-cols-2 gap-5"
        }
      >
        <input
          name="name"
          type="text"
          placeholder="Votre nom *"
          required
          className={inputClasses}
        />
        <input
          name="email"
          type="email"
          placeholder="Email professionnel *"
          required
          className={inputClasses}
        />
        <input
          name="phone"
          type="tel"
          placeholder="Téléphone"
          className={inputClasses}
        />
        <input
          name="company"
          type="text"
          placeholder="Entreprise"
          className={inputClasses}
        />
      </div>

      {!compact && (
        <select name="budget" className={inputClasses}>
          <option value="">Budget mensuel estimé</option>
          <option value="< 1000€">&lt; 1 000 €/mois</option>
          <option value="1000-3000€">1 000 - 3 000 €/mois</option>
          <option value="3000-10000€">3 000 - 10 000 €/mois</option>
          <option value="> 10000€">&gt; 10 000 €/mois</option>
        </select>
      )}

      <textarea
        name="message"
        placeholder="Décrivez votre projet et vos objectifs *"
        required
        rows={compact ? 3 : 5}
        className={inputClasses}
      />

      {/* Honeypot for spam */}
      <input type="text" name="_gotcha" style={{ display: "none" }} />

      <Button type="submit" variant="primary" size="lg" className="w-full">
        {status === "sending"
          ? "Envoi en cours..."
          : "Demander mon audit gratuit"}
      </Button>

      {status === "error" && (
        <p className="text-red-400 text-sm text-center">
          Une erreur est survenue. Réessayez ou contactez-nous par téléphone.
        </p>
      )}
    </form>
  );
}
