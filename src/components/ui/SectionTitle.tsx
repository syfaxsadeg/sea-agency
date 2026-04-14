import ScrollReveal from "@/components/animations/ScrollReveal";

type Props = {
  subtitle?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
};

export default function SectionTitle({
  subtitle,
  title,
  description,
  align = "center",
  light,
}: Props) {
  const alignClass =
    align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-3xl mb-16 ${alignClass}`}>
      <ScrollReveal>
        {subtitle && (
          <span className="inline-block text-sm font-semibold tracking-widest uppercase text-[#FF6B2C] mb-4">
            {subtitle}
          </span>
        )}
        <h2
          className={`font-[family-name:var(--font-heading)] text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 ${
            light ? "text-[#0A0A0A]" : "text-[#FAFAFA]"
          }`}
        >
          {title}
        </h2>
        {description && (
          <p
            className={`text-lg leading-relaxed ${
              light ? "text-gray-600" : "text-[#A3A3A3]"
            }`}
          >
            {description}
          </p>
        )}
      </ScrollReveal>
    </div>
  );
}
