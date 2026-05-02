interface Props {
  eyebrow: string;
  title: string;
  description?: string;
}

const SectionHeading = ({ eyebrow, title, description }: Props) => (
  <div className="mx-auto mb-12 max-w-3xl text-center">
    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-neon-cyan">
      {eyebrow}
    </p>
    <h2 className="font-display text-3xl font-black text-foreground text-glow-magenta sm:text-4xl md:text-5xl">
      {title}
    </h2>
    {description && (
      <p className="mt-4 text-base text-muted-foreground sm:text-lg">{description}</p>
    )}
  </div>
);

export default SectionHeading;