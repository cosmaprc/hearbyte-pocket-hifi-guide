import Hero from "@/components/hearbyte/Hero";
import Footer from "@/components/hearbyte/Footer";
import { Smartphone, Sliders, Headphones, Volume2 } from "lucide-react";

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
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="underline-offset-4 hover:underline"
        >
          {title}
        </a>
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

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero />

      <Section id="source" icon={Smartphone} title="Source">
        <p className="mb-6 max-w-2xl text-base text-foreground/80">
          You don't need exotic hardware. Any modern <span className="text-neon-cyan">iPhone</span> or <span className="text-neon-cyan">Android</span> phone is a perfectly good starting point — the magic happens in the <span className="text-neon-magenta">software</span>.
        </p>
        <Card title="Your Smartphone">
          <p>Any <span className="text-neon-cyan">iPhone</span> or <span className="text-neon-cyan">Android</span> phone works. Pair it with a wired or wireless headphone of your choice and let the apps below do the heavy lifting.</p>
        </Card>
      </Section>

      <Section id="software" icon={Sliders} title="Software">
        <p className="mb-6 max-w-2xl text-base text-foreground/80">
          The right player and DSP chain shapes your sound far more than any cable or DAC. These three apps give you <span className="text-neon-cyan">ReplayGain support</span>, <span className="text-neon-cyan">Preamp control</span> and serious <span className="text-neon-magenta">DSP power</span>.
        </p>
        <div className="grid gap-5 md:grid-cols-3">
          <Card title="jetAudio" href="https://www.jetaudio.com/">
            <Bullets
              items={[
                <>
                  Available on both{" "}
                  <a href="https://apps.apple.com/us/app/jetaudio-hi-res-music-player/id894888135" target="_blank" rel="noopener noreferrer" className="text-neon-cyan underline-offset-4 hover:underline">iOS</a>
                  {" "}and{" "}
                  <a href="https://play.google.com/store/apps/details?id=com.jetappfactory.jetaudioplus" target="_blank" rel="noopener noreferrer" className="text-neon-cyan underline-offset-4 hover:underline">Android</a>
                </>,
                <><span className="text-neon-cyan">ReplayGain</span> support with manual <span className="text-neon-cyan">preamp</span> adjustment</>,
                <>Bundled DSPs include a <span className="text-neon-cyan">graphic EQ</span>, <a href="https://www.am3d.com/" target="_blank" rel="noopener noreferrer" className="text-neon-magenta underline-offset-4 hover:underline">AM3D</a> and <a href="https://www.bongioviacoustics.com/" target="_blank" rel="noopener noreferrer" className="text-neon-magenta underline-offset-4 hover:underline">Bongiovi DPS</a> — the last two transform how your music sounds.</>,
                <>Note: AM3D, Bongiovi DPS and Crystalizer are <span className="text-neon-magenta">paid in-app purchases</span>, not free with the app.</>,
              ]}
            />
          </Card>
          <Card title="Neutron" href="https://neutronmp.com/">
            <Bullets
              items={[
                <>
                  Available on both{" "}
                  <a href="https://apps.apple.com/us/app/neutron-music-player/id978831442" target="_blank" rel="noopener noreferrer" className="text-neon-cyan underline-offset-4 hover:underline">iOS</a>
                  {" "}and{" "}
                  <a href="https://play.google.com/store/apps/details?id=com.neutroncode.mp" target="_blank" rel="noopener noreferrer" className="text-neon-cyan underline-offset-4 hover:underline">Android</a>
                </>,
                <><span className="text-neon-cyan">ReplayGain</span> support with manual <span className="text-neon-cyan">preamp</span> adjustment</>,
                <>Deep DSP toolbox: <span className="text-neon-magenta">Parametric EQ</span>, <span className="text-neon-magenta">Frequency Response Correction</span> (AutoEQ), <span className="text-neon-magenta">Crossfeed</span> and <span className="text-neon-magenta">Adaptive Loudness Compensation</span>.</>,
              ]}
            />
          </Card>
          <Card title="USB Audio Player Pro" href="https://www.extreamsd.com/index.php/products/usb-audio-player-pro">
            <Bullets
              items={[
                <><a href="https://play.google.com/store/apps/details?id=com.extreamsd.usbaudioplayerpro" target="_blank" rel="noopener noreferrer" className="text-neon-cyan underline-offset-4 hover:underline">Android</a> only</>,
                <><span className="text-neon-cyan">ReplayGain</span> support with manual <span className="text-neon-cyan">preamp</span> adjustment</>,
                <>Includes <span className="text-neon-magenta">Parametric EQ</span> and <a href="https://www.toneboosters.com/tb_morphit_v1.html" target="_blank" rel="noopener noreferrer" className="text-neon-magenta underline-offset-4 hover:underline">ToneBoosters MorphIt</a> — apply target curves like <span className="text-neon-cyan">Harman</span> or <span className="text-neon-cyan">HiFi</span> to supported headphones, or make one headphone sound like another.</>,
              ]}
            />
          </Card>
        </div>
      </Section>

      <Section id="replaygain" icon={Volume2} title="Calculating & Applying ReplayGain">
        <p className="mb-6 max-w-2xl text-base text-foreground/80">
          <span className="text-neon-cyan">ReplayGain</span> is a form of <span className="text-neon-magenta">volume normalization</span> that, when applied correctly, does not affect the <span className="text-neon-magenta">dynamic range</span> of your music. Applying <span className="text-neon-cyan">ReplayGain tags</span> to your files lets you shuffle through tracks without manually adjusting the volume for each one.
        </p>
        <p className="mb-6 max-w-2xl text-base text-foreground/80">
          You can scan your music files and apply <span className="text-neon-cyan">track</span> and <span className="text-neon-cyan">album</span> ReplayGain tags that are then read by the players above, which adjust the gain automatically. If you want to shuffle through any of your tracks regardless of artist or album, I recommend applying <span className="text-neon-magenta">track ReplayGain</span>.
        </p>
        <div className="grid gap-5 md:grid-cols-2">
          <Card title="Foobar2000 on Windows" href="https://www.foobar2000.org/">
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
                <>On Android, install <a href="https://f-droid.org/packages/com.termux/" target="_blank" rel="noopener noreferrer" className="text-neon-magenta underline-offset-4 hover:underline">Termux</a> from F-Droid, then run <span className="text-neon-cyan">pkg install rsgain</span>.</>,
                <>Point it at your music folder and let it write <span className="text-neon-cyan">track</span> and <span className="text-neon-cyan">album</span> gain tags directly on the device.</>,
                <>Great for tagging files <span className="text-neon-cyan">on-device</span> before loading them into your player of choice.</>,
              ]}
            />
          </Card>
        </div>
      </Section>

      <Section id="headphones" icon={Headphones} title="Headphones & Earbuds">
        <p className="mb-6 max-w-2xl text-base text-foreground/80">
          A short list of headphones I keep coming back to, with the exact <span className="text-neon-cyan">app</span>, <span className="text-neon-cyan">EQ</span> and <span className="text-neon-magenta">DSP</span> settings that get the most fun out of each one.
        </p>
        <div className="grid gap-5 md:grid-cols-3">
          <Card title="Moondrop Pill" href="https://moondroplab.com/en/products/pill">
            <Bullets
              items={[
                <><span className="text-neon-cyan">On-ear</span> design is noticeably more comfortable than over-ears, earbuds or IEMs.</>,
                <><span className="text-neon-magenta">Open</span> to your surroundings — best enjoyed in a quiet space. Handy when you still want to hear (or chat with) people around you while music plays in the background.</>,
              ]}
            />
            <div className="mt-4 rounded-lg border border-neon-cyan/30 bg-background/40 p-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-neon-cyan">Recommended config & pairings</p>
              <p className="mt-2 text-sm text-foreground/85">
                In the Moondrop app, load the official <span className="text-neon-magenta">Herbert's B&amp;K InEar Style</span> PEQ preset. Feed it from an iPhone running JetAudio with Bongiovi DPS set to <span className="text-neon-magenta">Atlanta Headphones</span>, or AM3D on the <span className="text-neon-magenta">Dance</span> preset with z-Boost on.
              </p>
            </div>
          </Card>

          <Card title="Cambridge Audio P100SE" href="https://www.cambridgeaudio.com/usa/en/products/melomania/melomania-p100-se">
            <div className="rounded-lg border border-neon-cyan/30 bg-background/40 p-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-neon-cyan">Recommended config & pairings</p>
              <p className="mt-2 text-sm text-foreground/85">
                Load the <span className="text-neon-magenta">Blues</span> PEQ profile in the Melomania app. Run it on its own, or stack with Bongiovi DPS on <span className="text-neon-magenta">Boston</span> or <span className="text-neon-magenta">Phoenix</span> — or AM3D on <span className="text-neon-magenta">Ballad</span>.
              </p>
            </div>
          </Card>

          <Card title="Cambridge Audio A100" href="https://www.cambridgeaudio.com/usa/en/products/melomania/melomania-a100">
            <div className="rounded-lg border border-neon-cyan/30 bg-background/40 p-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-neon-cyan">Recommended config & pairings</p>
              <p className="mt-2 text-sm text-foreground/85">
                In the Melomania app, use the <span className="text-neon-magenta">Rock</span> EQ on its own — or switch to <span className="text-neon-magenta">Blues</span> and pair with JetAudio Bongiovi DPS set to <span className="text-neon-magenta">London</span> or <span className="text-neon-magenta">Boston General</span>.
              </p>
            </div>
          </Card>
        </div>
      </Section>

      <Footer />
    </main>
  );
};

export default Index;
