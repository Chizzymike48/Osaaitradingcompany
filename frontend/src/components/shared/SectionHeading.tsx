interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  inverse?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  centered = true,
  inverse = false,
}: SectionHeadingProps) {
  return (
    <div className={centered ? "text-center" : ""}>
      <div className={`mb-5 flex items-center gap-3 ${centered ? "justify-center" : ""}`}>
        <span className="h-px w-8 bg-accent" />
        <span className="eyebrow">OSSAI COLLECTION</span>
        <span className="h-px w-8 bg-accent" />
      </div>
      <h2 className={`font-serif text-3xl font-bold tracking-[-0.045em] md:text-5xl lg:text-6xl mb-5 ${inverse ? "text-white" : "text-foreground"}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`max-w-2xl text-base mx-auto leading-7 md:text-lg ${inverse ? "text-white/70" : "text-neutral-dark"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
