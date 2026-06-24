interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export function SectionHeading({
  title,
  subtitle,
  centered = true,
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      <h2
        className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-outfit)] mb-4"
        style={{ color: "var(--text-primary)" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className="text-lg max-w-2xl mx-auto"
          style={{ color: "var(--text-secondary)" }}
        >
          {subtitle}
        </p>
      )}
      <div
        className={`w-16 h-1 mt-6 ${centered ? "mx-auto" : ""}`}
        style={{ backgroundColor: "var(--accent)" }}
      />
    </div>
  );
}
