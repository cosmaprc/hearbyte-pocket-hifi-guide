import { Headphones, ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <header className="relative isolate overflow-hidden bg-hero-gradient">
      {/* Sun */}
      <div
        className="pointer-events-none absolute left-1/2 top-[38%] z-0 h-72 w-72 -translate-x-1/2 rounded-full bg-sun-gradient opacity-90 blur-[2px] motion-safe:animate-float-slow"
        aria-hidden
      />
      {/* Sun cutout lines */}
      <div
        className="pointer-events-none absolute left-1/2 top-[38%] z-[1] h-72 w-72 -translate-x-1/2 rounded-full"
        style={{
          backgroundImage:
            "repeating-linear-gradient(180deg, transparent 0 22px, hsl(var(--background) / 0.95) 22px 26px)",
          maskImage: "radial-gradient(circle, black 60%, transparent 62%)",
          WebkitMaskImage: "radial-gradient(circle, black 60%, transparent 62%)",
        }}
        aria-hidden
      />
      {/* Grid floor */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-[55%] synth-grid motion-reduce:[animation:none]" aria-hidden />
      {/* Top fade */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-[3] h-24 bg-gradient-to-b from-background to-transparent" aria-hidden />

      <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-5xl flex-col items-center justify-center px-6 py-20 text-center">
        <div
          className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl border border-neon-cyan/40 bg-background/40 text-neon-cyan shadow-neon-cyan backdrop-blur sm:h-24 sm:w-24"
          aria-hidden
        >
          <Headphones className="h-10 w-10 sm:h-12 sm:w-12" />
        </div>

        <h1 className="whitespace-nowrap font-display text-5xl font-black leading-[0.95] tracking-tight text-foreground sm:text-6xl md:text-7xl">
          <span className="text-glow-magenta">Heart</span>
          <span className="text-neon-cyan text-glow-cyan">Byte</span>
          <span
            aria-hidden
            className="ml-[0.04em] align-baseline text-[0.6em] font-bold text-neon-cyan text-glow-cyan-soft"
          >
            ’s
          </span>
          <span className="sr-only">Byte's Pocket Hi-Fi Guide</span>
        </h1>

        <p className="mt-4 text-sm font-semibold uppercase tracking-[0.35em] text-neon-cyan/90 sm:text-base">
          Pocket Hi-Fi Guide
        </p>

        <p className="mt-6 max-w-2xl text-balance text-lg text-foreground/80 sm:text-xl">
          Quick-pick gear and software pairings to get the most{" "}
          <span className="text-neon-magenta">fun</span> and{" "}
          <span className="text-neon-cyan">engaging</span> sound out of your music.
        </p>

        <a
          href="#source"
          aria-label="Jump to gear section"
          className="mt-10 inline-flex items-center gap-2 rounded-full border border-neon-magenta/60 bg-primary/10 px-6 py-3 text-sm font-semibold uppercase tracking-widest text-foreground transition-smooth hover:bg-primary/20 hover:shadow-neon-magenta focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon-magenta/60"
        >
          Jump to gear
          <ChevronDown className="h-4 w-4 motion-safe:animate-bounce" />
        </a>
      </div>
    </header>
  );
};

export default Hero;