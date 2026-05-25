import Hero from "@/components/hearbyte/Hero";
import Footer from "@/components/hearbyte/Footer";
import ExtLink from "@/components/hearbyte/ExtLink";
import Section from "@/components/hearbyte/Section";
import Card from "@/components/hearbyte/Card";
import Bullets from "@/components/hearbyte/Bullets";
import Divider from "@/components/hearbyte/Divider";
import TableOfContents from "@/components/hearbyte/TableOfContents";
import { Smartphone, Sliders, Headphones, Volume2, BookOpen, Link } from "lucide-react";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero />
      <TableOfContents />

      <Divider />

      <Section id="source" icon={Smartphone} title="Source" tone="cyan">
        <p className="max-w-2xl text-base text-foreground/90">
          You don't need exotic hardware. Any modern <span className="text-neon-cyan">iPhone</span> or <span className="text-neon-cyan">Android</span> phone is a perfectly good starting point — pair it with a <span className="text-neon-cyan">wired</span> or <span className="text-neon-cyan">wireless</span> headphone of your choice and let the apps below do the heavy lifting. The magic happens in the <span className="text-neon-magenta">software</span>.
        </p>
      </Section>

      <Divider />

      <Section id="software" icon={Sliders} title="Software" tone="magenta">
        <p className="mb-6 max-w-2xl text-base text-foreground/90">
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
        <p className="mb-6 max-w-2xl text-base text-foreground/90">
          A short list of <span className="text-neon-cyan">headphones</span> and <span className="text-neon-cyan">earbuds</span> I keep coming back to, with the exact <span className="text-neon-cyan">app</span>, <span className="text-neon-cyan">EQ</span> and <span className="text-neon-magenta">DSP</span> settings that get the most fun out of each one.
        </p>
        <div className="grid gap-5 md:grid-cols-3">
          <Card title="Moondrop Pill" href="https://moondroplab.com/en/products/pill">
            <Bullets
              items={[
                <><span className="text-neon-cyan">Ear-clip / open-ear earbud</span> (OWS) design — not an in-ear/IEM. Noticeably more comfortable than <span className="text-neon-cyan">over-ears</span>, traditional <span className="text-neon-cyan">earbuds</span> or <span className="text-neon-cyan">IEMs</span>.</>,
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

          <Card title="Audio Technica ATH-M50x BT2" href="https://www.audio-technica.com/en-us/ath-m50xbt2">
            <Bullets
              items={[
                <><span className="text-neon-cyan">Closed-back over-ear</span> with both <span className="text-neon-cyan">Bluetooth</span> and <span className="text-neon-cyan">wired</span> playback via a detachable <span className="text-neon-cyan">3.5mm</span> cable — handy when the battery dies or you want a pure wired chain.</>,
                <><span className="text-neon-magenta">No ANC</span>, but the closed cups offer solid passive isolation. Studio-leaning tuning that responds very well to <span className="text-neon-magenta">DSP</span>.</>,
              ]}
            />
            <div className="mt-4 rounded-lg border border-neon-cyan/30 bg-background/40 p-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-neon-cyan">Recommended config & pairings</p>
              <p className="mt-2 text-sm text-foreground/85">
                Pair with <span className="text-neon-cyan">jetAudio</span> and switch <span className="text-neon-cyan">Bongiovi DPS</span> to the <span className="text-neon-magenta">London</span> profile for an open, lively presentation that lifts the M50x's slightly dark stock signature.
              </p>
            </div>
          </Card>

          <Card title="Cambridge Audio P100SE" href="https://www.cambridgeaudio.com/usa/en/products/melomania/melomania-p100-se">
            <Bullets
              items={[
                <><span className="text-neon-cyan">Over-ear</span> wireless with <span className="text-neon-cyan">ANC</span>, hi-res Bluetooth codecs and <span className="text-neon-cyan">user-replaceable battery and earcups</span> — built to last.</>,
                <>Can also be used <span className="text-neon-cyan">wired</span> via either a <span className="text-neon-cyan">3.5mm</span> jack or <span className="text-neon-cyan">USB-C</span> cable.</>,
                <>Comfortable for long sessions; tuning is warm and <span className="text-neon-magenta">musical</span> rather than analytical.</>,
              ]}
            />
            <div className="mt-4 rounded-lg border border-neon-cyan/30 bg-background/40 p-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-neon-cyan">Recommended config & pairings</p>
              <p className="mt-2 text-sm text-foreground/85">
                Load the <span className="text-neon-magenta">Blues</span> <span className="text-neon-cyan">PEQ profile</span> in the <span className="text-neon-cyan">Melomania app</span>. Run it on its own, or stack with <span className="text-neon-cyan">Bongiovi DPS</span> on <span className="text-neon-magenta">Boston</span> or <span className="text-neon-magenta">Phoenix</span> — or <span className="text-neon-cyan">AM3D</span> on <span className="text-neon-magenta">Ballad</span>.
              </p>
              <p className="mt-3 text-sm text-foreground/85">
                If the <span className="text-neon-magenta">sub-bass</span> feels overwhelming, drop the <span className="text-neon-cyan">leftmost slider</span> of the <span className="text-neon-cyan">Melomania app</span>'s EQ — you'll tame the rumble while keeping plenty of punch. Especially handy on the <span className="text-neon-magenta">Flat</span>, <span className="text-neon-magenta">Electronic</span> and <span className="text-neon-magenta">Rock</span> presets.
              </p>
            </div>
          </Card>
        </div>
      </Section>

      <Divider />

      <Section id="replaygain" icon={Volume2} title="Using ReplayGain" tone="orange">
        <p className="mb-6 max-w-2xl text-base text-foreground/90">
          <span className="text-neon-cyan">ReplayGain</span> is a form of <span className="text-neon-magenta">volume normalization</span> that, when applied correctly, does not affect the <span className="text-neon-magenta">dynamic range</span> of your music. Scan your files once to write <span className="text-neon-cyan">track</span> and <span className="text-neon-cyan">album</span> tags, and the players above will read them and level everything automatically — no more reaching for the volume between songs. If you mostly shuffle across artists, prefer <span className="text-neon-magenta">track</span> mode; if you listen album-first, use <span className="text-neon-magenta">album</span> mode to preserve relative loudness within a record.
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
        <p className="mb-6 max-w-2xl text-base text-foreground/90">
          A few quick definitions for the terms used above, in case anything is new to you.
        </p>
        <div className="grid gap-5 md:grid-cols-2">
          <Card title="DSP">
            <p><span className="text-neon-cyan">Digital Signal Processing</span> — software that reshapes audio in real time (<span className="text-neon-cyan">EQ</span>, <span className="text-neon-cyan">reverb</span>, <span className="text-neon-cyan">crossfeed</span>, <span className="text-neon-cyan">dynamics</span>).</p>
          </Card>
          <Card title="EQ / PEQ">
            <p><span className="text-neon-cyan">EQ</span> is an equalizer that boosts or cuts frequency bands. <span className="text-neon-cyan">PEQ</span> (Parametric EQ) lets you control center frequency, gain and bandwidth (Q) per band — far more precise than a fixed graphic EQ.</p>
          </Card>
          <Card title="FRC / AutoEQ">
            <p><span className="text-neon-cyan">Frequency Response Correction</span> (Neutron's term) and <span className="text-neon-cyan">AutoEQ</span> both apply measured headphone-correction filters so a given headphone matches a chosen <span className="text-neon-cyan">target curve</span>.</p>
          </Card>
          <Card title="ReplayGain">
            <p>A metadata-based <span className="text-neon-magenta">volume normalization</span> standard. Tracks are scanned for perceived loudness, and players use the resulting tags to play everything at a consistent level — without re-encoding or compressing the audio.</p>
          </Card>
          <Card title="Crossfeed">
            <p>Mixes a small amount of each stereo channel into the other to make headphone listening sound less "in-head" and closer to speakers.</p>
          </Card>
          <Card title="Target curve">
            <p>The frequency response a headphone is tuned (or EQ'd) to match — e.g. the <span className="text-neon-cyan">Harman</span> curve or B&amp;K-style in-ear targets.</p>
          </Card>
        </div>
      </Section>

      <Divider />

      <Section id="links" icon={Link} title="Links" tone="magenta">
        <p className="mb-6 max-w-2xl text-base text-foreground/90">
          A curated set of external resources for diving deeper into headphone measurements, community discussion, and high-quality music purchases.
        </p>
        <div className="grid gap-5 md:grid-cols-3">
          <Card title="Reviews & Measurements">
            <Bullets
              items={[
                <><ExtLink href="https://www.pragmaticaudio.com/" className="text-neon-cyan">Pragmatic Audio</ExtLink> — in-depth headphone and IEM reviews with measurement data.</>,
                <><ExtLink href="https://www.audiosciencereview.com/forum/index.php" className="text-neon-cyan">Audio Science Review</ExtLink> — objective measurements, DAC/amp testing and a lively forum.</>,
                <><ExtLink href="https://squig.link/" className="text-neon-cyan">Squig.link</ExtLink> — browse and compare frequency-response graphs from a wide database.</>,
                <><ExtLink href="https://autoeq.app/" className="text-neon-cyan">AutoEQ</ExtLink> — generate parametric EQ presets to match target curves from measurement data.</>,
                <><ExtLink href="https://www.headphoneer.com/" className="text-neon-cyan">Headphoneer</ExtLink> — written reviews of headphones, IEMs, amps and DACs.</>,
                <><ExtLink href="https://peqdb.com/" className="text-neon-cyan">PEQdb</ExtLink> — searchable database of parametric EQ presets for headphones and IEMs.</>,
              ]}
            />
          </Card>
          <Card title="Community">
            <Bullets
              items={[
                <><ExtLink href="https://www.head-fi.org/" className="text-neon-cyan">Head-Fi</ExtLink> — the largest headphone enthusiast forum and discussion hub.</>,
              ]}
            />
          </Card>
          <Card title="Music Stores">
            <Bullets
              items={[
                <><ExtLink href="https://www.qobuz.com/gb-en/shop" className="text-neon-cyan">Qobuz</ExtLink> — hi-res streaming and download store with lossless catalogue.</>,
                <><ExtLink href="https://bandcamp.com/" className="text-neon-cyan">Bandcamp</ExtLink> — buy directly from artists, often in lossless FLAC.</>,
                <><ExtLink href="https://uk.7digital.com/" className="text-neon-cyan">7digital</ExtLink> — hi-res and lossless downloads from a large catalogue.</>,
              ]}
            />
          </Card>
        </div>
      </Section>

      <Footer />
    </main>
  );
};

export default Index;
