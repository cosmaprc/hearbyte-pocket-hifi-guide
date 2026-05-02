import Hero from "@/components/hearbyte/Hero";
import Section from "@/components/hearbyte/Section";
import SectionHeading from "@/components/hearbyte/SectionHeading";
import PickGroupBlock from "@/components/hearbyte/PickGroupBlock";
import NoteCallout from "@/components/hearbyte/NoteCallout";
import { headphoneGroups, sourceGroups, softwareGroups } from "@/data/picks";
import { FileAudio, Cable, Sliders, Sparkles } from "lucide-react";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero />

      {/* Intro */}
      <Section className="pt-16 sm:pt-20">
        <div className="mx-auto max-w-3xl text-center">
          <Sparkles className="mx-auto mb-4 h-6 w-6 text-neon-magenta" />
          <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
            How to use this guide
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Great sound is a <span className="text-neon-cyan">chain</span>: the right
            headphones, fed by a clean source, with a touch of well-aimed DSP. Pick one
            from each section below and you'll be hearing your favorite tracks like
            it's the first time again.
          </p>
        </div>
      </Section>

      {/* Headphones */}
      <Section id="headphones">
        <SectionHeading
          eyebrow="Step 01"
          title="Headphones & Earbuds"
          description="Quick picks across over-ear, IEM and wireless — tuned for fun, not flat."
        />
        {headphoneGroups.map((g) => (
          <PickGroupBlock key={g.title} group={g} />
        ))}
      </Section>

      {/* Source gear */}
      <Section id="sources" className="border-t border-border/40">
        <SectionHeading
          eyebrow="Step 02"
          title="Source Gear"
          description="Phones, dongle DACs, desktop amps and DAPs that get out of the way."
        />
        {sourceGroups.map((g) => (
          <PickGroupBlock key={g.title} group={g} />
        ))}
      </Section>

      {/* Software */}
      <Section id="software" className="border-t border-border/40">
        <SectionHeading
          eyebrow="Step 03"
          title="Software & DSP"
          description="Apps, EQ presets and effects that turn good gear into great listening."
        />
        {softwareGroups.map((g) => (
          <PickGroupBlock key={g.title} group={g} />
        ))}
      </Section>

      {/* Notes */}
      <Section id="notes" className="border-t border-border/40">
        <SectionHeading
          eyebrow="Good to know"
          title="Two notes worth your time"
          description="The format and connection debates — settled (mostly)."
        />
        <div className="grid gap-6 md:grid-cols-2">
          <NoteCallout icon={FileAudio} title="Lossless vs Lossy" accent="magenta">
            <p>
              For most people on most gear, a high-bitrate AAC or 320 kbps stream is
              already <span className="text-neon-cyan">transparent</span> — you'd struggle
              to ABX it. Chase lossless when you've upgraded the headphones, source and
              room (or quiet listening environment) enough that you can actually hear the
              difference.
            </p>
            <p>
              Rule of thumb: <span className="text-foreground">good headphones first</span>,
              then better source, then lossless. Skipping ahead is wasted budget.
            </p>
          </NoteCallout>

          <NoteCallout icon={Cable} title="Wired vs Wireless" accent="cyan">
            <p>
              Wired still has the higher ceiling — no codec ceiling, no battery, lowest
              latency, and DACs/amps can scale forever. If absolute fidelity is the goal,
              go wired.
            </p>
            <p>
              Modern wireless (LDAC, aptX Lossless, LC3) is{" "}
              <span className="text-neon-magenta">shockingly close</span> for everyday
              listening — and the convenience often wins. Pick wireless for commuting and
              the gym, wired for the couch session.
            </p>
          </NoteCallout>
        </div>

        <div className="mt-10 flex items-center justify-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
          <Sliders className="h-3.5 w-3.5 text-neon-cyan" />
          <span>Tweak. Listen. Tweak again.</span>
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t border-border/40 px-6 py-10 text-center">
        <p className="font-display text-lg font-bold text-foreground">
          <span className="text-glow-magenta">HEAR</span>
          <span className="text-neon-cyan text-glow-cyan">BYTE</span>
        </p>
        <p className="mt-2 text-xs text-muted-foreground">
          © {new Date().getFullYear()} HearByte · Listen louder, listen better.
        </p>
      </footer>
    </main>
  );
};

export default Index;
