import Hero from "@/components/hearbyte/Hero";
import Footer from "@/components/hearbyte/Footer";
import ExtLink from "@/components/hearbyte/ExtLink";
import Section from "@/components/hearbyte/Section";
import Card from "@/components/hearbyte/Card";
import Bullets from "@/components/hearbyte/Bullets";
import Divider from "@/components/hearbyte/Divider";
import TableOfContents from "@/components/hearbyte/TableOfContents";
import { Smartphone, Sliders, Headphones, Volume2, BookOpen, Link, FolderInput } from "lucide-react";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero />
      <TableOfContents />

      <Divider />

      <Section id="source" icon={Smartphone} title="Source" tone="cyan">
        <p className="mb-6 max-w-2xl text-base text-foreground/90">
          You don't need exotic hardware. Any modern <span className="text-neon-cyan">iPhone</span> or <span className="text-neon-cyan">Android</span> phone is a perfectly good starting point — pair it with a <span className="text-neon-cyan">wired</span> or <span className="text-neon-cyan">wireless</span> headphone of your choice and let the apps below do the heavy lifting. The magic happens in the <span className="text-neon-magenta">software</span>.
        </p>
        <div className="grid gap-5 md:grid-cols-3">
          <Card title="Bluetooth codecs">
            <Bullets
              items={[
                <>The common ones, from lossy to effectively lossless: <span className="text-neon-cyan">AAC</span>, <span className="text-neon-cyan">aptX HD</span>, <span className="text-neon-cyan">aptX Lossless</span> and <span className="text-neon-cyan">LDAC</span>.</>,
                <>In honest blind listening, most people — and most headphones — <span className="text-neon-magenta">can't reliably tell them apart</span>, or tell any of them from a <span className="text-neon-cyan">wired</span> connection.</>,
                <>Pick whatever your phone and headphones both support and stop worrying. Tuning and EQ matter far more than codec.</>,
              ]}
            />
          </Card>
          <Card title="USB Dongle DAC">
            <Bullets
              items={[
                <>Paired with an app such as <ExtLink href="https://www.extreamsd.com/index.php/products/usb-audio-player-pro" className="text-neon-cyan">USB Audio Player Pro</ExtLink> or <ExtLink href="https://neutronmp.com/" className="text-neon-cyan">Neutron</ExtLink>, a USB DAC can receive audio <span className="text-neon-magenta">directly and bit-perfect</span> — letting you play hi-res tracks at their full resolution (e.g. <span className="text-neon-cyan">24-bit / 192 kHz</span>), bypassing Android's system mixer and <span className="text-neon-magenta">SRC resampling</span>.</>,
                <>Missing a codec you want (typically <span className="text-neon-cyan">LDAC</span> or <span className="text-neon-cyan">aptX Lossless</span>)? A small Bluetooth transmitter like the <ExtLink href="https://www.fiio.com/airlink" className="text-neon-magenta">FiiO Air-style adapters</ExtLink> adds it over USB-C. That said, even budget Androids ship with LDAC these days.</>,
              ]}
            />
            <div className="mt-3 rounded-lg border border-neon-cyan/20 bg-neon-cyan/5 p-3">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-neon-cyan">Suggested DACs</p>
              <dl className="space-y-2 text-sm leading-relaxed text-foreground/90">
                <div>
                  <dt className="font-semibold text-neon-magenta">
                    <ExtLink href="https://www.fiio.com/newsinfo/893399.html" className="text-neon-magenta">FiiO KA11</ExtLink>
                  </dt>
                  <dd>A powerful single-piece dongle DAC (fixed cable) with incredible audio quality at a very low price.</dd>
                </div>
                <div>
                  <dt className="font-semibold text-neon-magenta">
                    <ExtLink href="https://neutronhifi.com/devices/dac/v1/details" className="text-neon-magenta">Neutron HiFi DAC V1</ExtLink>
                  </dt>
                  <dd>A pioneer in bringing DSP to dongle DACs — includes almost every DSP from the Neutron Player plus extras like <span className="text-neon-cyan">THD Compensation</span>. Read the incredibly well-written manual to discover everything it can do.</dd>
                </div>
              </dl>
            </div>
          </Card>
          <Card title="Dolby Atmos on phones">
            <Bullets
              items={[
                <>Many <span className="text-neon-cyan">Android</span> phones (and <span className="text-neon-cyan">iPhone</span> with Apple Music spatial tracks) include a system-level <span className="text-neon-magenta">Dolby Atmos</span> / spatial processor.</>,
                <>It's a worthwhile bonus — widens the stage and can make stock-tuned headphones sound more <span className="text-neon-magenta">open and immersive</span>.</>,
                <>Treat it as another DSP layer to A/B against <span className="text-neon-cyan">Bongiovi DPS</span> or <span className="text-neon-cyan">AM3D</span> in jetAudio, not a replacement.</>,
              ]}
            />
          </Card>
        </div>
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
        <div className="mb-6 max-w-2xl space-y-2 rounded-lg border border-neon-cyan/20 bg-neon-cyan/5 p-4 text-sm text-foreground/80">
          <p>
            <span className="font-semibold text-neon-cyan">Order:</span> by <span className="text-neon-cyan">form factor</span> — in-ear / open-ear first, then wireless over-ear, then wired over-ear — and <span className="text-neon-cyan">alphabetically</span> within each group.
          </p>
          <p>
            <span className="font-semibold text-neon-cyan">Legend:</span> Bongiovi DPS city profiles come in two flavours — <span className="text-neon-cyan">H</span> (Headphones) and <span className="text-neon-cyan">G</span> (General). Both are worth A/B'ing; G often has nicer highs, H is usually safer.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          <Card title="AirPods Pro 2" href="https://www.apple.com/airpods-pro/">
            <Bullets
              items={[
                <><span className="text-neon-cyan">True wireless</span> in-ear with class-leading <span className="text-neon-cyan">ANC</span> and tight Apple-ecosystem integration.</>,
                <>Included here because, with <span className="text-neon-cyan">ANC off</span> and the right DSP, it punches well above its travel-friendly form factor.</>,
              ]}
            />
            <div className="mt-4 rounded-lg border border-neon-cyan/30 bg-background/40 p-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-neon-cyan">How I run it</p>
              <dl className="mt-3 space-y-2 text-sm">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-widest text-neon-cyan">Mode: ANC Off</dt>
                  <dd className="text-foreground/85"><span className="text-neon-magenta">Bongiovi:</span> AirPods Pro</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-widest text-neon-cyan">Source: Neutron Player / HiFi DAC V1</dt>
                  <dd className="text-foreground/85"><span className="text-neon-magenta">FRC:</span> Crinacle on 711 (passive mode) preset · <span className="text-neon-magenta">Crossfeed:</span> jMeier · <span className="text-neon-magenta">EQ:</span> Deep · <span className="text-neon-magenta">ALC:</span> preset #3 (optional)</dd>
                </div>
              </dl>
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
              <p className="text-xs font-semibold uppercase tracking-widest text-neon-cyan">How I run it</p>
              <p className="mt-2 text-sm text-foreground/85">
                Set the EQ in the <span className="text-neon-cyan">Melomania app</span>, then stack with <span className="text-neon-cyan">jetAudio</span> <span className="text-neon-cyan">Bongiovi DPS</span>.
              </p>
              <dl className="mt-3 space-y-2 text-sm">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-widest text-neon-cyan">EQ: Blues</dt>
                  <dd className="text-foreground/85"><span className="text-neon-magenta">Bongiovi:</span> London H</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-widest text-neon-cyan">EQ: Rock</dt>
                  <dd className="text-foreground/85"><span className="text-neon-magenta">Bongiovi:</span> Boston G, Las Vegas G</dd>
                </div>
              </dl>
            </div>
          </Card>

          <Card title="Moondrop Pill" href="https://moondroplab.com/en/products/pill">
            <Bullets
              items={[
                <><span className="text-neon-cyan">Ear-clip / open-ear earbud</span> (OWS) design — not an in-ear/IEM. Noticeably more comfortable than <span className="text-neon-cyan">over-ears</span>, traditional <span className="text-neon-cyan">earbuds</span> or <span className="text-neon-cyan">IEMs</span>.</>,
                <><span className="text-neon-magenta">Open</span> to your surroundings — best enjoyed in a <span className="text-neon-cyan">quiet space</span>. Handy when you still want to hear (or chat with) people around you while music plays in the background.</>,
              ]}
            />
            <div className="mt-4 rounded-lg border border-neon-cyan/30 bg-background/40 p-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-neon-cyan">How I run it</p>
              <p className="mt-2 text-sm text-foreground/85">
                In the <span className="text-neon-cyan">Moondrop app</span>, load the official <span className="text-neon-magenta">Herbert's B&amp;K InEar Style</span> <span className="text-neon-cyan">PEQ preset</span>, then stack one of the jetAudio DSP chains below.
              </p>
              <dl className="mt-3 space-y-2 text-sm">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-widest text-neon-cyan">EQ: InEar</dt>
                  <dd className="text-foreground/85"><span className="text-neon-magenta">AM3D:</span> Dance · <span className="text-neon-magenta">Bongiovi:</span> Atlanta H</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-widest text-neon-cyan">EQ: Reference</dt>
                  <dd className="text-foreground/85"><span className="text-neon-magenta">AM3D:</span> Rock, Dance · <span className="text-neon-magenta">Bongiovi:</span> London H, Atlanta G, Huadu G, Phoenix G, Portland G</dd>
                </div>
              </dl>
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
              <p className="text-xs font-semibold uppercase tracking-widest text-neon-cyan">How I run it</p>
              <p className="mt-2 text-sm text-foreground/85">
                Drive it from <span className="text-neon-cyan">jetAudio</span> and pick a DSP chain by connection.
              </p>
              <dl className="mt-3 space-y-2 text-sm">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-widest text-neon-cyan">Connection: Bluetooth</dt>
                  <dd className="text-foreground/85"><span className="text-neon-magenta">AM3D:</span> Dance, Rock · <span className="text-neon-magenta">Bongiovi:</span> London H, Atlanta H, Boston G, Portland G, New Orleans G, Phoenix G/H (G has nicer highs)</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-widest text-neon-cyan">Connection: Wired</dt>
                  <dd className="text-foreground/85"><span className="text-neon-magenta">Bongiovi:</span> Atlanta H</dd>
                </div>
              </dl>
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
              <p className="text-xs font-semibold uppercase tracking-widest text-neon-cyan">How I run it</p>
              <p className="mt-2 text-sm text-foreground/85">
                Over Bluetooth, set the <span className="text-neon-cyan">Melomania app</span> EQ to <span className="text-neon-magenta">Normal</span> and toggle between the <span className="text-neon-magenta">Blues</span> and <span className="text-neon-magenta">Voice</span> tone presets, then stack a jetAudio chain.
              </p>
              <dl className="mt-3 space-y-2 text-sm">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-widest text-neon-cyan">EQ: Normal + Blues</dt>
                  <dd className="text-foreground/85"><span className="text-neon-magenta">AM3D:</span> Ballad · <span className="text-neon-magenta">Bongiovi:</span> New York H</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-widest text-neon-cyan">EQ: Normal + Voice</dt>
                  <dd className="text-foreground/85"><span className="text-neon-magenta">Bongiovi:</span> London H, Atlanta H, New York H</dd>
                </div>
              </dl>
              <p className="mt-3 text-sm text-foreground/85">
                If the <span className="text-neon-magenta">sub-bass</span> feels overwhelming, drop the <span className="text-neon-cyan">leftmost slider</span> of the <span className="text-neon-cyan">Melomania app</span>'s EQ — you'll tame the rumble while keeping plenty of punch. Especially handy on the <span className="text-neon-magenta">Flat</span>, <span className="text-neon-magenta">Electronic</span> and <span className="text-neon-magenta">Rock</span> presets.
              </p>
            </div>
          </Card>

          <Card title="AKG K371" href="https://www.akg.com/Headphones/Professional%20Headphones/K371.html">
            <Bullets
              items={[
                <><span className="text-neon-cyan">Closed-back over-ear</span>, wired only. Famously close to the <span className="text-neon-cyan">Harman</span> target out of the box — one of the safest budget picks.</>,
                <>Slightly polite up top; a touch of Bongiovi opens it up nicely.</>,
              ]}
            />
            <div className="mt-4 rounded-lg border border-neon-cyan/30 bg-background/40 p-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-neon-cyan">How I run it</p>
              <dl className="mt-3 space-y-2 text-sm">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-widest text-neon-cyan">Mode: Default</dt>
                  <dd className="text-foreground/85"><span className="text-neon-magenta">Bongiovi:</span> London H</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-widest text-neon-cyan">Source: Neutron Player / HiFi DAC V1</dt>
                  <dd className="text-foreground/85"><span className="text-neon-magenta">FRC:</span> Rtings on HMS II.3 preset · <span className="text-neon-magenta">Crossfeed:</span> jMeier · <span className="text-neon-magenta">EQ:</span> Deep</dd>
                </div>
              </dl>
            </div>
          </Card>
        </div>
      </Section>

      <Divider />

      <Section id="replaygain" icon={Volume2} title="Using ReplayGain" tone="orange">
        <p className="mb-6 max-w-2xl text-base text-foreground/90">
          <span className="text-neon-cyan">ReplayGain</span> is a form of <span className="text-neon-magenta">volume normalization</span> that, when applied correctly, does not affect the <span className="text-neon-magenta">dynamic range</span> of your music. Scan your files once to write <span className="text-neon-cyan">track</span> and <span className="text-neon-cyan">album</span> tags, and the players above will read them and level everything automatically — no more reaching for the volume between songs. If you mostly shuffle across artists, prefer <span className="text-neon-magenta">track</span> mode; if you listen album-first, use <span className="text-neon-magenta">album</span> mode to preserve relative loudness within a record.
        </p>
        <div className="grid gap-5 md:grid-cols-3">
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
          <Card title="Neutron Volume Normalization" href="https://neutroncode.com/feature_normalization">
            <Bullets
              items={[
                <>Built into <span className="text-neon-cyan">Neutron</span>: scans your library and writes <span className="text-neon-cyan">ReplayGain</span>-compatible tags <span className="text-neon-magenta">on-device</span>, no PC required.</>,
                <>Configurable target loudness — set <span className="text-neon-cyan">-14 LUFS</span> to match <span className="text-neon-magenta">Tidal</span>, <span className="text-neon-magenta">Spotify</span> and <span className="text-neon-magenta">YouTube</span>, <span className="text-neon-cyan">-16 LUFS</span> for <span className="text-neon-magenta">Apple Music</span>, or the classic <span className="text-neon-cyan">-18 LUFS</span> ReplayGain default.</>,
                <>The simplest path if you only listen in Neutron and don't want a separate scanner. See the <ExtLink href="https://neutroncode.com/feature_normalization" className="text-neon-magenta">official guide</ExtLink> for the full options.</>,
              ]}
            />
          </Card>
        </div>
      </Section>

      <Divider />

      <Section id="transfer" icon={FolderInput} title="Getting music onto your phone" tone="purple">
        <p className="mb-6 max-w-2xl text-base text-foreground/90">
          Once your files are tagged and gain-scanned, you need them on the device. The Android story is boring — drag and drop to internal storage or an SD card with any file manager. iPhone takes one extra step.
        </p>
        <div className="grid gap-5 md:grid-cols-2">
          <Card title="iPhone via iTunes on Windows" href="https://www.apple.com/itunes/">
            <Bullets
              items={[
                <>Plug the iPhone in and open <span className="text-neon-cyan">iTunes</span> (still the supported path on Windows; macOS uses Finder's device view).</>,
                <>Select the device, open the <span className="text-neon-cyan">Files</span> tab, then <span className="text-neon-magenta">drag a folder of music straight onto one of the player apps</span> — <span className="text-neon-cyan">jetAudio</span> or <span className="text-neon-cyan">Neutron</span>.</>,
                <>The files land inside that app's sandboxed Documents folder, where it can scan and play them directly — no library import, no conversion.</>,
                <>You can later move or copy files between apps from the iOS <span className="text-neon-cyan">Files</span> app — handy for trying the same album in a different player.</>,
              ]}
            />
          </Card>
          <Card title="Android">
            <Bullets
              items={[
                <>Connect over USB in <span className="text-neon-cyan">MTP</span> mode and copy folders to internal storage or an <span className="text-neon-cyan">SD card</span> with any file manager.</>,
                <>All three players above will pick the files up from anywhere they have read access — no app-specific sandbox dance.</>,
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
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          <Card title="Reviews">
            <Bullets
              items={[
                <><ExtLink href="https://www.pragmaticaudio.com/" className="text-neon-cyan">Pragmatic Audio</ExtLink> — in-depth headphone and IEM reviews with measurement data.</>,
                <><ExtLink href="https://www.headphoneer.com/" className="text-neon-cyan">Headphoneer</ExtLink> — written reviews of headphones, IEMs, amps and DACs.</>,
                <><ExtLink href="https://www.head-fi.org/" className="text-neon-cyan">Head-Fi</ExtLink> — long-running headphone enthusiast reviews.</>,
                <><ExtLink href="https://www.audiosciencereview.com/forum/index.php" className="text-neon-cyan">Audio Science Review</ExtLink> — objective, measurement-led gear reviews.</>,
              ]}
            />
          </Card>
          <Card title="Measurements & EQ tools">
            <Bullets
              items={[
                <><ExtLink href="https://squig.link/" className="text-neon-cyan">Squig.link</ExtLink> — browse and compare frequency-response graphs from a wide database.</>,
                <><ExtLink href="https://autoeq.app/" className="text-neon-cyan">AutoEQ</ExtLink> — generate parametric EQ presets to match target curves from measurement data.</>,
                <><ExtLink href="https://peqdb.com/" className="text-neon-cyan">PEQdb</ExtLink> — searchable database of parametric EQ presets for headphones and IEMs.</>,
              ]}
            />
          </Card>
          <Card title="Community">
            <Bullets
              items={[
                <><ExtLink href="https://www.head-fi.org/" className="text-neon-cyan">Head-Fi</ExtLink> — the largest headphone enthusiast forum and discussion hub.</>,
                <><ExtLink href="https://www.audiosciencereview.com/forum/index.php" className="text-neon-cyan">Audio Science Review</ExtLink> — active forum focused on objective audio measurements.</>,
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
