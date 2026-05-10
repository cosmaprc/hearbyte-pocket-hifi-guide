import Hero from "@/components/hearbyte/Hero";
import { Smartphone, Sliders, Headphones } from "lucide-react";

const Section = ({
  id,
  icon: Icon,
  title,
  children,
}: {
  id?: string;
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
}) => (
  <section id={id} className="relative px-6 py-16 sm:py-20">
    <div className="mx-auto max-w-5xl">
      <div className="mb-8 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-neon-cyan/50 bg-background/50 text-neon-cyan">
          <Icon className="h-5 w-5" />
        </div>
        <h2 className="font-display text-3xl font-black uppercase tracking-wide text-neon-cyan text-glow-cyan sm:text-4xl">
          {title}
        </h2>
      </div>
      {children}
    </div>
  </section>
);

const Card = ({
  title,
  children,
}: {
  title: string;
  children?: React.ReactNode;
}) => (
  <article className="rounded-xl border border-border bg-card-gradient p-6 transition-smooth hover:border-neon-magenta/60 hover:shadow-card-glow">
    <h3 className="font-display text-xl font-bold text-neon-magenta text-glow-magenta">
      {title}
    </h3>
    {children && <div className="mt-4 space-y-2 text-sm leading-relaxed text-foreground/85">{children}</div>}
  </article>
);

const Bullets = ({ items }: { items: React.ReactNode[] }) => (
  <ul className="space-y-2">
    {items.map((item, i) => (
      <li key={i} className="flex gap-2">
        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neon-cyan" aria-hidden />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero />

      <Section id="source" icon={Smartphone} title="Source">
        <p className="mb-6 max-w-2xl text-base text-foreground/80">
          You don't need exotic hardware. Any modern iPhone or Android phone is a perfectly good starting point — the magic happens in the software.
        </p>
        <Card title="Your Smartphone">
          <p>Any iPhone or Android phone works. Pair it with a wired or wireless headphone of your choice and let the apps below do the heavy lifting.</p>
        </Card>
      </Section>

      <Section id="software" icon={Sliders} title="Software">
        <p className="mb-6 max-w-2xl text-base text-foreground/80">
          The right player and DSP chain shapes your sound far more than any cable or DAC. These three apps give you ReplayGain, preamp control and serious DSP power.
        </p>
        <div className="grid gap-5 md:grid-cols-3">
          <Card title="JetAudio">
            <Bullets
              items={[
                "Available on both iOS and Android",
                "ReplayGain support with manual preamp adjustment",
                <>Bundled DSPs include a graphic EQ, <span className="text-neon-cyan">AM3D</span> and <span className="text-neon-cyan">Bongiovi DPS</span> — the last two transform how your music sounds.</>,
              ]}
            />
          </Card>
          <Card title="Neutron">
            <Bullets
              items={[
                "Available on both iOS and Android",
                "ReplayGain support with manual preamp adjustment",
                <>Deep DSP toolbox: <span className="text-neon-cyan">Parametric EQ</span>, Frequency Response Correction (AutoEQ), Crossfeed and Adaptive Loudness Compensation.</>,
              ]}
            />
          </Card>
          <Card title="USB Audio Player Pro">
            <Bullets
              items={[
                "Android only",
                "ReplayGain support with manual preamp adjustment",
                <>Includes Parametric EQ and <span className="text-neon-cyan">ToneBoosters MorphIt</span> — apply target curves like Harman or HiFi to supported headphones, or make one headphone sound like another.</>,
              ]}
            />
          </Card>
        </div>
      </Section>

      <Section id="headphones" icon={Headphones} title="Headphones & Earbuds">
        <p className="mb-6 max-w-2xl text-base text-foreground/80">
          A short list of headphones we keep coming back to, with the exact app, EQ and DSP settings that get the most fun out of each one.
        </p>
        <div className="grid gap-5 md:grid-cols-3">
          <Card title="Moondrop Pill">
            <Bullets
              items={[
                "On-ear design is noticeably more comfortable than over-ears, earbuds or IEMs.",
                "Open to your surroundings — best enjoyed in a quiet space. Handy when you still want to hear (or chat with) people around you while music plays in the background.",
              ]}
            />
            <div className="mt-4 rounded-lg border border-neon-cyan/30 bg-background/40 p-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-neon-cyan">Recommended config & pairings</p>
              <p className="mt-2 text-sm text-foreground/85">
                In the Moondrop app, load the official <span className="text-neon-magenta">Herbert's B&amp;K InEar Style</span> PEQ preset. Feed it from an iPhone running JetAudio with Bongiovi DPS set to <span className="text-neon-magenta">Atlanta Headphones</span>, or AM3D on the <span className="text-neon-magenta">Dance</span> preset with z-Boost on.
              </p>
            </div>
          </Card>

          <Card title="Cambridge Audio P100SE">
            <div className="rounded-lg border border-neon-cyan/30 bg-background/40 p-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-neon-cyan">Recommended config & pairings</p>
              <p className="mt-2 text-sm text-foreground/85">
                Load the <span className="text-neon-magenta">Blues</span> PEQ profile in the Melomania app. Run it on its own, or stack with Bongiovi DPS on <span className="text-neon-magenta">Boston</span> or <span className="text-neon-magenta">Phoenix</span> — or AM3D on <span className="text-neon-magenta">Ballad</span>.
              </p>
            </div>
          </Card>

          <Card title="Cambridge Audio A100">
            <div className="rounded-lg border border-neon-cyan/30 bg-background/40 p-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-neon-cyan">Recommended config & pairings</p>
              <p className="mt-2 text-sm text-foreground/85">
                In the Melomania app, use the <span className="text-neon-magenta">Rock</span> EQ on its own — or switch to <span className="text-neon-magenta">Blues</span> and pair with JetAudio Bongiovi DPS set to <span className="text-neon-magenta">London</span> or <span className="text-neon-magenta">Boston General</span>.
              </p>
            </div>
          </Card>
        </div>
      </Section>
    </main>
  );
};

export default Index;
