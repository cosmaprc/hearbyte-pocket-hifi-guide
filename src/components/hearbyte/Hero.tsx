import { Headphones, ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <header className="relative isolate overflow-hidden bg-hero-gradient">
      {/* Sun */}
      <div
        className="pointer-events-none absolute left-1/2 top-[38%] z-0 h-72 w-72 -translate-x-1/2 rounded-full bg-sun-gradient opacity-90 blur-[2px] animate-float-slow"
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
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-[55%] synth-grid" aria-hidden />
      {/* Top fade */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-[3] h-24 bg-gradient-to-b from-background to-transparent" aria-hidden />

      <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-5xl flex-col items-center justify-center px-6 py-20 text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-neon-cyan/40 bg-background/40 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-neon-cyan backdrop-blur">
          <Headphones className="h-3.5 w-3.5" />
          <span>HearByte // Pocket Hi-Fi Guide</span>
        </div>

        <h1 className="font-display text-5xl font-black leading-[0.95] text-foreground sm:text-6xl md:text-7xl">
          <span className="block text-glow-magenta">HEART</span>
          <span className="block text-neon-cyan text-glow-cyan">BYTE</span>
        </h1>

        <p className="mt-6 max-w-2xl text-balance text-lg text-foreground/80 sm:text-xl">
          Quick-pick gear and software pairings to get the most{" "}
          <span className="text-neon-magenta">fun</span> and{" "}
          <span className="text-neon-cyan">engaging</span> sound out of your music.
        </p>

        <a
          href="#headphones"
          className="mt-10 inline-flex items-center gap-2 rounded-full border border-neon-magenta/60 bg-primary/10 px-6 py-3 text-sm font-semibold uppercase tracking-widest text-foreground transition-smooth hover:bg-primary/20 hover:shadow-neon-magenta"
        >
          Dive in
          <ChevronDown className="h-4 w-4 animate-bounce" />
        </a>
      </div>
    </header>
  );
};

export default Hero;