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
        <Card title="Smartphone">
          <p>Any iPhone or Android smartphone.</p>
        </Card>
      </Section>

      <Section id="software" icon={Sliders} title="Software">
        <div className="grid gap-5 md:grid-cols-3">
          <Card title="JetAudio">
            <Bullets
              items={[
                "Supports ReplayGain and preamp adjustment",
                <>Supports several DSPs such as EQ, <span className="text-neon-cyan">AM3D</span> and <span className="text-neon-cyan">Bongiovi</span> — the last two make a huge difference in how your music sounds.</>,
                "Works on both Android and iPhone",
              ]}
            />
          </Card>
          <Card title="Neutron">
            <Bullets
              items={[
                "Works on both iPhone and Android",
                "Supports ReplayGain and preamp adjustment",
                "Supports several DSPs such as Parametric EQ, Frequency Response Correction (AutoEQ), Crossfeed and Adaptive Loudness Compensation.",
              ]}
            />
          </Card>
          <Card title="USB Audio Player">
            <Bullets
              items={[
                "Works only on Android",
                "Supports ReplayGain and preamp adjustment",
                <>Supports several DSPs such as Parametric EQ and <span className="text-neon-cyan">Toneboosters MorphIt</span>, which has presets you can apply to supported headphones — choose target curves like Harman or its own HiFi ones, and even make one headphone sound like another.</>,
              ]}
            />
          </Card>
        </div>
      </Section>

      <Section id="headphones" icon={Headphones} title="Headphones & Earbuds">
        <div className="grid gap-5 md:grid-cols-3">
          <Card title="Moondrop Pill">
            <Bullets
              items={[
                "On-ear design is more comfortable than headphones, earbuds or IEMs.",
                "You can hear your surroundings, so for the best sound be in a quiet space — otherwise you'll still hear and chat with others while music plays in the background.",
              ]}
            />
            <div className="mt-4 rounded-lg border border-neon-cyan/30 bg-background/40 p-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-neon-cyan">Recommended config & pairings</p>
              <p className="mt-2 text-sm text-foreground/85">
                Moondrop app set to <span className="text-neon-magenta">Herbert's B&amp;K InEar Style</span> official PEQ preset, iPhone, JetAudio with Bongiovi DPS set to <span className="text-neon-magenta">Atlanta Headphones</span> or AM3D on <span className="text-neon-magenta">Dance</span> preset with z-boost on.
              </p>
            </div>
          </Card>

          <Card title="Cambridge Audio P100SE">
            <div className="rounded-lg border border-neon-cyan/30 bg-background/40 p-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-neon-cyan">Recommended config & pairings</p>
              <p className="mt-2 text-sm text-foreground/85">
                Use the <span className="text-neon-magenta">Blues PEQ</span> profile in the Melomania app, with or without the Bongiovi DPS <span className="text-neon-magenta">Boston</span> or <span className="text-neon-magenta">Phoenix</span> profiles, or AM3D on <span className="text-neon-magenta">Ballad</span>.
              </p>
            </div>
          </Card>

          <Card title="Cambridge Audio A100">
            <div className="rounded-lg border border-neon-cyan/30 bg-background/40 p-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-neon-cyan">Recommended config & pairings</p>
              <p className="mt-2 text-sm text-foreground/85">
                Melomania app on <span className="text-neon-magenta">Rock EQ</span> by itself, or on the <span className="text-neon-magenta">Blues</span> EQ preset with JetAudio Bongiovi DPS set to <span className="text-neon-magenta">London</span> or <span className="text-neon-magenta">Boston General</span>.
              </p>
            </div>
          </Card>
        </div>
      </Section>
    </main>
  );
};

export default Index;
