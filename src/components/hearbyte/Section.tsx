import type { ElementType, ReactNode } from "react";

export type Tone = "cyan" | "magenta" | "purple" | "orange";

const toneClasses: Record<
  Tone,
  { border: string; text: string; glow: string; shadow: string }
> = {
  cyan: {
    border: "border-neon-cyan/50",
    text: "text-neon-cyan",
    glow: "text-glow-cyan",
    shadow: "shadow-neon-cyan",
  },
  magenta: {
    border: "border-neon-magenta/50",
    text: "text-neon-magenta",
    glow: "text-glow-magenta",
    shadow: "shadow-neon-magenta",
  },
  purple: {
    border: "border-neon-purple/50",
    text: "text-neon-purple",
    glow: "",
    shadow: "",
  },
  orange: {
    border: "border-neon-orange/50",
    text: "text-neon-orange",
    glow: "",
    shadow: "",
  },
};

type Props = {
  id?: string;
  icon: ElementType;
  title: string;
  tone?: Tone;
  children: ReactNode;
};

const Section = ({ id, icon: Icon, title, tone = "cyan", children }: Props) => {
  const t = toneClasses[tone];
  return (
    <section id={id} className="relative px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 flex items-center gap-3">
          <div
            className={`flex h-10 w-10 items-center justify-center rounded-lg border ${t.border} bg-background/50 ${t.text} ${t.shadow}`}
          >
            <Icon className="h-5 w-5" />
          </div>
          <h2
            className={`font-display text-3xl font-black uppercase tracking-wide ${t.text} ${t.glow} sm:text-4xl`}
          >
            {title}
          </h2>
        </div>
        {children}
      </div>
    </section>
  );
};

export default Section;