import Hero from "@/components/hearbyte/Hero";
import Footer from "@/components/hearbyte/Footer";
import ExtLink from "@/components/hearbyte/ExtLink";
import { Smartphone, Sliders, Headphones, Volume2, BookOpen } from "lucide-react";

type Tone = "cyan" | "magenta" | "purple" | "orange";

const toneClasses: Record<Tone, { border: string; text: string; glow: string }> = {
  cyan: { border: "border-neon-cyan/50", text: "text-neon-cyan", glow: "text-glow-cyan" },
  magenta: { border: "border-neon-magenta/50", text: "text-neon-magenta", glow: "text-glow-magenta" },
  purple: { border: "border-neon-purple/50", text: "text-neon-purple", glow: "" },
  orange: { border: "border-neon-orange/50", text: "text-neon-orange", glow: "" },
};

const Section = ({
  id,
  icon: Icon,
  title,
  tone = "cyan",
  children,
}: {
  id?: string;
  icon: React.ElementType;
  title: string;
  tone?: Tone;
  children: React.ReactNode;
}) => {
  const t = toneClasses[tone];
  return (
    <section id={id} className="relative px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 flex items-center gap-3">
          <div className={`flex h-10 w-10 items-center justify-center rounded-lg border ${t.border} bg-background/50 ${t.text}`}>
            <Icon className="h-5 w-5" />
          </div>
          <h2 className={`font-display text-3xl font-black uppercase tracking-wide ${t.text} ${t.glow} sm:text-4xl`}>
            {title}
          </h2>
        </div>
        {children}
      </div>
    </section>
  );
};

const Card = ({
  title,
  href,
  children,
}: {
  title: string;
  href?: string;
  children?: React.ReactNode;
}) => (
  <article className="rounded-xl border border-border bg-card-gradient p-6 transition-smooth hover:border-neon-magenta/60 hover:shadow-card-glow">
    <h3 className="font-display text-xl font-bold text-neon-magenta text-glow-magenta">
      {href ? (
        <ExtLink
          href={href}
          showIcon
          className="text-neon-magenta underline-offset-4 hover:underline"
        >
          {title}
        </ExtLink>
      ) : (
        title
      )}
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

const Divider = () => (
  <div className="mx-auto max-w-5xl px-6">
    <div className="section-divider" aria-hidden />
  </div>
);

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero />

      <Section id="source" icon={Smartphone} title="Source" tone="cyan">
        <p className="max-w-2xl text-base text-foreground/80">
          You don't need exotic hardware. Any modern <span className="text-neon-cyan">iPhone</span> or <span className="text-neon-cyan">Android</span> phone is a perfectly good starting point — pair it with a <span className="text-neon-cyan">wired</span> or <span className="text-neon-cyan">wireless</span> headphone of your choice and let the apps below do the heavy lifting. The magic happens in the <span className="text-neon-magenta">software</span>.
        </p>
      </Section>

      <Divider />

      <Section id="software" icon={Sliders} title="Software" tone="magenta">
        <p className="mb-6 max-w-2xl text-base text-foreground/80">
          The right <span className="text-neon-cyan">player</span> and <span className="text-neon-magenta">DSP</span> chain shapes your sound far more than any <span className="text-neon-cyan">cable</span> or <span className="text-neon-cyan">DAC</span>. These three apps give you <span className="text-neon-cyan">ReplayGain support</span>, <span className="text-neon-cyan">Preamp control</span> and serious <span className="text-neon-magenta">DSP power</span>.
        </p>
        <div className="grid gap-5 md:grid-cols-3">
          <Card title="jetAudio" href="https://www.jetaudio.com/">
            <Bullets
              items={[
                <>
                  Available on both{" "}
                  <ExtLink href="https://apps.apple.com/us/app/jetaudio-hi-res-music-player/id894888135" className="text-neon-cyan">iOS</ExtLink>
                  {" "}and{" "}
                  <ExtLink href="https://play.google.com/store/apps/details?id=com.jetappfactory.jetaudioplus" className="text-neon-cyan">Android</ExtLink>
                </>,
                <><span className="text-neon-cyan">ReplayGain</span> support with manual <span className="text-neon-cyan">preamp</span> adjustment</>,
                <>Bundled DSPs include a <span className="text-neon-cyan">graphic EQ</span>, <ExtLink href="https://www.am3d.com/" className="text-neon-magenta">AM3D</ExtLink> and <ExtLink href="https://www.bongioviacoustics.com/" className="text-neon-magenta">Bongiovi DPS</ExtLink> — the last two transform how your music sounds.</>,
                <>Note: within jetAudio, AM3D, Bongiovi DPS and Crystalizer are <span className="text-neon-magenta">paid in-app purchases</span>, not free with the app.</>,
              ]}
            />
          </Card>
          <Card title="Neutron" href="https://neutronmp.com/">
            <Bullets
              items={[
                <>
                  Available on both{" "}
                  <ExtLink href="https://apps.apple.com/us/app/neutron-music-player/id978831442" className="text-neon-cyan">iOS</ExtLink>
                  {" "}and{" "}
                  <ExtLink href="https://play.google.com/store/apps/details?id=com.neutroncode.mp" className="text-neon-cyan">Android</ExtLink>
                </>,
                <><span className="text-neon-cyan">ReplayGain</span> support with manual <span className="text-neon-cyan">preamp</span> adjustment</>,
                <>Deep DSP toolbox: <span className="text-neon-magenta">Parametric EQ</span>, <span className="text-neon-magenta">Frequency Response Correction</span> (AutoEQ), <span className="text-neon-magenta">Crossfeed</span> and <span className="text-neon-magenta">Adaptive Loudness Compensation</span>.</>,
              ]}
            />
          </Card>
          <Card title="USB Audio Player Pro" href="https://www.extreamsd.com/index.php/products/usb-audio-player-pro">
            <Bullets
              items={[
                <><ExtLink href="https://play.google.com/store/apps/details?id=com.extreamsd.usbaudioplayerpro" className="text-neon-cyan">Android</ExtLink> only</>,
                <><span className="text-neon-cyan">ReplayGain</span> support with manual <span className="text-neon-cyan">preamp</span> adjustment</>,
                <>Includes <span className="text-neon-magenta">Parametric EQ</span> and <ExtLink href="https://www.toneboosters.com/tb_morphit_v1.html" className="text-neon-magenta">ToneBoosters MorphIt</ExtLink> — apply target curves like <span className="text-neon-cyan">Harman</span> or <span className="text-neon-cyan">HiFi</span> to supported headphones, or make one headphone sound like another.</>,
              ]}
            />
          </Card>
        </div>
      </Section>

      <Divider />

      <Section id="headphones" icon={Headphones} title="Headphones & Earbuds" tone="purple">
        <p className="mb-6 max-w-2xl text-base text-foreground/80">
          A short list of headphones I keep coming back to, with the exact <span className="text-neon-cyan">app</span>, <span className="text-neon-cyan">EQ</span> and <span className="text-neon-magenta">DSP</span> settings that get the most fun out of each one.
        </p>
        <div className="grid gap-5 md:grid-cols-3">
          <Card title="Moondrop Pill" href="https://moondroplab.com/en/products/pill">
            <Bullets
              items={[
                <><span className="text-neon-cyan">On-ear</span> design is noticeably more comfortable than <span className="text-neon-cyan">over-ears</span>, <span className="text-neon-cyan">earbuds</span> or <span className="text-neon-cyan">IEMs</span>.</>,
                <><span className="text-neon-magenta">Open</span> to your surroundings — best enjoyed in a <span className="text-neon-cyan">quiet space</span>. Handy when you still want to hear (or chat with) people around you while music plays in the background.</>,
              ]}
            />
            <div className="mt-4 rounded-lg border border-neon-cyan/30 bg-background/40 p-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-neon-cyan">Recommended config & pairings</p>
              <p className="mt-2 text-sm text-foreground/85">
                In the <span className="text-neon-cyan">Moondrop app</span>, load the official <span className="text-neon-magenta">Herbert's B&amp;K InEar Style</span> <span className="text-neon-cyan">PEQ preset</span>. Feed it from an <span className="text-neon-cyan">iPhone</span> running <span className="text-neon-cyan">jetAudio</span> with <span className="text-neon-cyan">Bongiovi DPS</span> set to <span className="text-neon-magenta">Atlanta Headphones</span>, or <span className="text-neon-cyan">AM3D</span> on the <span className="text-neon-magenta">Dance</span> preset with <span className="text-neon-cyan">z-Boost</span> on.
              </p>
            </div>
          </Card>

          <Card title="Cambridge Audio A100" href="https://www.cambridgeaudio.com/usa/en/products/melomania/melomania-a100">
            <Bullets
              items={[
                <><span className="text-neon-cyan">True wireless</span> in-ear with <span className="text-neon-cyan">ANC</span> and an unusually neutral, detailed tuning for the price.</>,
                <>Great for commutes — pocketable, long battery life and an <span className="text-neon-magenta">open, lively</span> top end once EQ'd.</>,
              ]}
            />
            <div className="mt-4 rounded-lg border border-neon-cyan/30 bg-background/40 p-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-neon-cyan">Recommended config & pairings</p>
              <p className="mt-2 text-sm text-foreground/85">
                In the <span className="text-neon-cyan">Melomania app</span>, use the <span className="text-neon-magenta">Rock</span> <span className="text-neon-cyan">EQ</span> on its own — or switch to <span className="text-neon-magenta">Blues</span> and pair with <span className="text-neon-cyan">jetAudio</span> <span className="text-neon-cyan">Bongiovi DPS</span> set to <span className="text-neon-magenta">London</span> or <span className="text-neon-magenta">Boston General</span>.
              </p>
            </div>
          </Card>

          <Card title="Cambridge Audio P100SE" href="https://www.cambridgeaudio.com/usa/en/products/melomania/melomania-p100-se">
            <Bullets
              items={[
                <><span className="text-neon-cyan">Over-ear</span> wireless with <span className="text-neon-cyan">ANC</span>, hi-res Bluetooth codecs and a user-replaceable battery — built to last.</>,
                <>Comfortable for long sessions; tuning is warm and <span className="text-neon-magenta">musical</span> rather than analytical.</>,
              ]}
            />
            <div className="mt-4 rounded-lg border border-neon-cyan/30 bg-background/40 p-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-neon-cyan">Recommended config & pairings</p>
              <p className="mt-2 text-sm text-foreground/85">
                Load the <span className="text-neon-magenta">Blues</span> <span className="text-neon-cyan">PEQ profile</span> in the <span className="text-neon-cyan">Melomania app</span>. Run it on its own, or stack with <span className="text-neon-cyan">Bongiovi DPS</span> on <span className="text-neon-magenta">Boston</span> or <span className="text-neon-magenta">Phoenix</span> — or <span className="text-neon-cyan">AM3D</span> on <span className="text-neon-magenta">Ballad</span>.
              </p>
            </div>
          </Card>
        </div>
      </Section>

      <Divider />

      <Section id="replaygain" icon={Volume2} title="Calculating & Applying ReplayGain" tone="orange">
        <p className="mb-6 max-w-2xl text-base text-foreground/80">
          <span className="text-neon-cyan">ReplayGain</span> is a form of <span className="text-neon-magenta">volume normalization</span> that, when applied correctly, does not affect the <span className="text-neon-magenta">dynamic range</span> of your music. Applying <span className="text-neon-cyan">ReplayGain tags</span> to your files lets you shuffle through tracks without manually adjusting the volume for each one.
        </p>
        <p className="mb-6 max-w-2xl text-base text-foreground/80">
          You can scan your music files and apply <span className="text-neon-cyan">track</span> and <span className="text-neon-cyan">album</span> ReplayGain tags that are then read by the players above, which adjust the gain automatically. If you want to shuffle through any of your tracks regardless of artist or album, I recommend applying <span className="text-neon-magenta">track ReplayGain</span>.
        </p>
        <div className="grid gap-5 md:grid-cols-2">
          <Card title="foobar2000 on Windows" href="https://www.foobar2000.org/">
            <Bullets
              items={[
                <>Free, powerful audio player and toolkit — primarily for <span className="text-neon-cyan">Windows</span>, with official <span className="text-neon-cyan">macOS</span> and beta <span className="text-neon-cyan">iOS</span> / <span className="text-neon-cyan">Android</span> builds.</>,
                <>Right-click your music library or playlist → <span className="text-neon-cyan">Utilities</span> → <span className="text-neon-magenta">ReplayGain Scanner</span>.</>,
                <>Choose <span className="text-neon-cyan">Track</span> or <span className="text-neon-cyan">Album</span> scanning mode, then apply tags to the files.</>,
              ]}
            />
          </Card>
          <Card title="rsgain on Android (via Termux)" href="https://github.com/complexlogic/rsgain">
            <Bullets
              items={[
                <>A fast, <span className="text-neon-magenta">open-source</span> command-line ReplayGain 2.0 scanner (no standalone Android app).</>,
                <>On Android, install <ExtLink href="https://f-droid.org/packages/com.termux/" className="text-neon-magenta">Termux</ExtLink> from F-Droid, then run <span className="text-neon-cyan">pkg install rsgain</span>.</>,
                <>Point it at your music folder and let it write <span className="text-neon-cyan">track</span> and <span className="text-neon-cyan">album</span> gain tags directly on the device.</>,
                <>Great for tagging files <span className="text-neon-cyan">on-device</span> before loading them into your player of choice.</>,
              ]}
            />
          </Card>
        </div>
      </Section>

      <Divider />

      <Section id="glossary" icon={BookOpen} title="Glossary" tone="cyan">
        <p className="mb-6 max-w-2xl text-base text-foreground/80">
          A few quick definitions for the terms used above, in case anything is new to you.
        </p>
        <div className="grid gap-5 md:grid-cols-2">
          <Card title="DSP">
            <p>Digital Signal Processing — software that reshapes audio in real time (EQ, reverb, crossfeed, dynamics).</p>
          </Card>
          <Card title="EQ / PEQ">
            <p><span className="text-neon-cyan">EQ</span> is an equalizer that boosts or cuts frequency bands. <span className="text-neon-cyan">PEQ</span> (Parametric EQ) lets you control center frequency, gain and bandwidth (Q) per band — far more precise than a fixed graphic EQ.</p>
          </Card>
          <Card title="ReplayGain">
            <p>A metadata-based <span className="text-neon-magenta">volume normalization</span> standard. Tracks are scanned for perceived loudness, and players use the resulting tags to play everything at a consistent level — without re-encoding or compressing the audio.</p>
          </Card>
          <Card title="AutoEQ">
            <p>An open project (and Neutron feature) that applies measured headphone-correction filters so a given headphone matches a chosen <span className="text-neon-cyan">target curve</span>.</p>
          </Card>
          <Card title="Crossfeed">
            <p>Mixes a small amount of each stereo channel into the other to make headphone listening sound less "in-head" and closer to speakers.</p>
          </Card>
          <Card title="Target curve">
            <p>The frequency response a headphone is tuned (or EQ'd) to match — e.g. the <span className="text-neon-cyan">Harman</span> curve or B&amp;K-style in-ear targets.</p>
          </Card>
        </div>
      </Section>

      <Footer />
    </main>
  );
};

export default Index;
