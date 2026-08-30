import Hero from "@/components/hearbyte/Hero";
import Footer from "@/components/hearbyte/Footer";
import ExtLink from "@/components/hearbyte/ExtLink";
import Section from "@/components/hearbyte/Section";
import Card from "@/components/hearbyte/Card";
import Bullets from "@/components/hearbyte/Bullets";
import Divider from "@/components/hearbyte/Divider";
import DataTable from "@/components/hearbyte/DataTable";
import SubHeading from "@/components/hearbyte/SubHeading";
import TableOfContents from "@/components/hearbyte/TableOfContents";
import { Smartphone, Sliders, Headphones, Volume2, BookOpen, Link, FolderInput, Zap, Gauge } from "lucide-react";
import hd560sQudelixHeadband from "@/assets/hd560s-qudelix-headband.jpg";
import hd560sQudelixFront from "@/assets/hd560s-qudelix-front.jpg";

const GearLink = ({ children }: { children: React.ReactNode }) => (
  <a href="#phones" className="text-neon-cyan underline-offset-4 hover:underline">
    {children}
  </a>
);

const GlossaryLink = ({ term, children }: { term: string; children: React.ReactNode }) => (
  <a href={`#g-${term}`} className="text-neon-cyan underline decoration-dotted underline-offset-4">
    {children}
  </a>
);

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero />
      <TableOfContents />

      <Divider />

      <Section id="chain" icon={Zap} title="My preferred audio chains" tone="magenta">
        <SubHeading spaced={false}>Shared base · every chain starts here</SubHeading>
        <div className="grid gap-5 md:grid-cols-2">
          <Card title="Source &amp; app">
            <Bullets
              items={[
                <><span className="text-neon-magenta">Source:</span> <span className="text-neon-cyan">iPhone</span>.</>,
                <><span className="text-neon-magenta">App:</span> <ExtLink href="https://music.apple.com/" className="text-neon-cyan">Apple Music</ExtLink> — <span className="text-neon-cyan">Lossless 24-bit / 48 kHz</span>, <GlossaryLink term="soundcheck">Sound Check</GlossaryLink> on.</>,
              ]}
            />
          </Card>
        </div>

        <SubHeading>Chains · in the order I reach for them</SubHeading>
        <div className="grid gap-5 md:grid-cols-2">
          <Card title="1 · Sennheiser HD 560S — wired">
            <Bullets
              items={[
                <><span className="text-neon-magenta">Headphones:</span> <ExtLink href="https://en-uk.sennheiser.com/hd-560s" className="text-neon-cyan">Sennheiser HD 560S</ExtLink>.</>,
                <><span className="text-neon-magenta">DAC:</span> <ExtLink href="https://www.qudelix.com/products/qudelix-5k" className="text-neon-cyan">Qudelix 5K</ExtLink> over <span className="text-neon-cyan">USB</span>, set to draw power from <span className="text-neon-cyan">USB-C</span> rather than its internal battery — or the <ExtLink href="https://www.fiio.com/qx13" className="text-neon-cyan">FiiO QX13</ExtLink> paired with the <ExtLink href="https://www.fiio.com/productinfo/1507720.html" className="text-neon-cyan">FiiO Estick</ExtLink> battery.</>,
                <><span className="text-neon-magenta">EQ:</span> usually none. When I do reach for it, the <ExtLink href="https://www.rtings.com/headphones/learn/eq-repository" className="text-neon-cyan">rtings.com</ExtLink> target preference curve <span className="text-neon-cyan">PEQ</span> profile.</>,
              ]}
            />
          </Card>
          <Card title="2 · HiFiMAN Sundara (2022) — wired">
            <Bullets
              items={[
                <><span className="text-neon-magenta">Headphones:</span> <ExtLink href="https://hifiman.com/products/detail/305" className="text-neon-cyan">HiFiMAN Sundara (2022)</ExtLink>.</>,
                <><span className="text-neon-magenta">DAC:</span> <ExtLink href="https://www.qudelix.com/products/qudelix-5k" className="text-neon-cyan">Qudelix 5K</ExtLink> over <span className="text-neon-cyan">USB</span>, powered from <span className="text-neon-cyan">USB-C</span> rather than its internal battery — or the <ExtLink href="https://www.fiio.com/qx13" className="text-neon-cyan">FiiO QX13</ExtLink> paired with the <ExtLink href="https://www.fiio.com/productinfo/1507720.html" className="text-neon-cyan">FiiO Estick</ExtLink> battery.</>,
                <><span className="text-neon-magenta">EQ:</span> flat most of the time, or the <ExtLink href="https://www.rtings.com/headphones/learn/eq-repository" className="text-neon-cyan">rtings.com</ExtLink> target preference curve <span className="text-neon-cyan">PEQ</span> profile.</>,
              ]}
            />
          </Card>
          <Card title="3 · AKG K371 — wired">
            <Bullets
              items={[
                <><span className="text-neon-magenta">Headphones:</span> <ExtLink href="https://www.akg.com/Headphones/Professional%20Headphones/K371.html" className="text-neon-cyan">AKG K371</ExtLink>.</>,
                <><span className="text-neon-magenta">DAC:</span> <ExtLink href="https://fiio.com/newsinfo/1065510.html" className="text-neon-cyan">FiiO JIEZI</ExtLink>.</>,
                <><span className="text-neon-magenta">EQ:</span> the <ExtLink href="https://www.rtings.com/headphones/learn/eq-repository" className="text-neon-cyan">rtings.com</ExtLink> target preference curve <span className="text-neon-cyan">PEQ</span> profile.</>,
              ]}
            />
          </Card>
          <Card title="4 · Audio-Technica ATH-M50x BT2 — wired">
            <Bullets
              items={[
                <><span className="text-neon-magenta">Headphones:</span> <ExtLink href="https://www.audio-technica.com/en-us/ath-m50xbt2" className="text-neon-cyan">ATH-M50x BT2</ExtLink>, on the <span className="text-neon-cyan">3.5 mm</span> cable.</>,
                <><span className="text-neon-magenta">DAC:</span> <ExtLink href="https://fiio.com/newsinfo/1065510.html" className="text-neon-cyan">FiiO JIEZI</ExtLink>.</>,
                <><span className="text-neon-magenta">EQ:</span> none.</>,
              ]}
            />
          </Card>
          <Card title="5 · Sennheiser HD 560S — wireless">
            <Bullets
              items={[
                <><span className="text-neon-magenta">Headphones:</span> <ExtLink href="https://en-uk.sennheiser.com/hd-560s" className="text-neon-cyan">Sennheiser HD 560S</ExtLink>.</>,
                <><span className="text-neon-magenta">Receiver:</span> <ExtLink href="https://www.qudelix.com/products/qudelix-5k" className="text-neon-cyan">Qudelix 5K</ExtLink> as a <GlossaryLink term="ldac">LDAC</GlossaryLink> Bluetooth receiver, fed by a <ExtLink href="https://www.fiio.com/airlink" className="text-neon-cyan">FiiO Air Link</ExtLink> adapter.</>,
                <><span className="text-neon-magenta">EQ:</span> stock tuning, or the <ExtLink href="https://www.rtings.com/headphones/learn/eq-repository" className="text-neon-cyan">rtings.com</ExtLink> target preference curve <span className="text-neon-cyan">PEQ</span> profile loaded onto the 5K itself.</>,
              ]}
            />
            <div className="mt-4 rounded-lg border border-neon-magenta/40 bg-neon-magenta/5 p-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-neon-cyan">How I run it</p>
              <p className="mt-2 text-sm text-foreground/85">
                The 5K velcros to the headband. I run <span className="text-neon-cyan">LDAC 990 kbps</span> and leave the tuning stock, with <span className="text-neon-magenta">no EQ of any kind</span>. The balanced output gives more headroom if you want it, and plugging in over USB makes it wired and bit-perfect. The <a href="#demands" className="text-neon-cyan underline-offset-4 hover:underline">electrical demands table</a> shows how much margin this pairing has.
              </p>

            </div>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <img
                src={hd560sQudelixHeadband}
                alt="Sennheiser HD 560S with a Qudelix 5K and its cable velcro-strapped to the headband"
                loading="lazy"
                className="h-40 w-full rounded-lg border border-border object-cover object-top md:h-48"
              />
              <img
                src={hd560sQudelixFront}
                alt="Sennheiser HD 560S held up front-on with the Qudelix 5K mounted on the headband"
                loading="lazy"
                className="h-40 w-full rounded-lg border border-border object-cover object-top md:h-48"
              />
            </div>
          </Card>

          <Card title="6 · Audio-Technica ATH-M50x BT2 — wireless">
            <Bullets
              items={[
                <><span className="text-neon-magenta">Headphones:</span> <ExtLink href="https://www.audio-technica.com/en-us/ath-m50xbt2" className="text-neon-cyan">ATH-M50x BT2</ExtLink>.</>,
                <><span className="text-neon-magenta">Connection:</span> Bluetooth <span className="text-neon-cyan">AAC</span> straight from the phone, or <GlossaryLink term="ldac">LDAC</GlossaryLink> via a <ExtLink href="https://www.fiio.com/airlink" className="text-neon-cyan">FiiO Air Link</ExtLink> adapter.</>,
              ]}
            />
          </Card>
          <Card title="7 · Moondrop × Wuthering Waves U.C.T.S. — wireless">
            <Bullets
              items={[
                <><span className="text-neon-magenta">Earphones:</span> <ExtLink href="https://moondroplab.com/en/products/u-c-t-s" className="text-neon-cyan">Moondrop × Wuthering Waves U.C.T.S.</ExtLink> open-ear (<GlossaryLink term="ows">OWS</GlossaryLink>) clip-ons.</>,
                <><span className="text-neon-magenta">Connection:</span> <ExtLink href="https://www.tempotec.net/" className="text-neon-cyan">Tempotec LHDC One</ExtLink> Bluetooth adapter.</>,
              ]}
            />
          </Card>
          <Card title="8 · Moondrop Pill / Pill S — wireless">
            <Bullets
              items={[
                <><span className="text-neon-magenta">Earbuds:</span> <ExtLink href="https://moondroplab.com/en/products/pill" className="text-neon-cyan">Moondrop Pill</ExtLink> or <span className="text-neon-cyan">Pill S</span>.</>,
                <><span className="text-neon-magenta">Connection:</span> Bluetooth <span className="text-neon-cyan">AAC</span> straight from the phone.</>,
              ]}
            />
          </Card>
        </div>
      </Section>

      <Divider />

      <Section id="preferences" icon={Headphones} title="Finding your own preferences" tone="purple">
        <div className="grid gap-5 md:grid-cols-2">
          <Card title="Start with two reference tunings">
            <p>
              If you don't know what you like yet, get two headphones that disagree with each other. The <ExtLink href="https://www.akg.com/Headphones/Professional%20Headphones/K371.html" className="text-neon-cyan">AKG K371</ExtLink> is <span className="text-neon-magenta">closed-back</span> and tuned to the <span className="text-neon-cyan">Harman</span> target; the <ExtLink href="https://en-uk.sennheiser.com/hd-560s" className="text-neon-cyan">Sennheiser HD 560S</ExtLink> is <span className="text-neon-magenta">open-back</span> and closer to <span className="text-neon-cyan">diffuse-field</span>. Load both into <ExtLink href="https://www.extreamsd.com/index.php/products/usb-audio-player-pro" className="text-neon-cyan">USB Audio Player Pro</ExtLink> with <ExtLink href="https://www.toneboosters.com/tb_morphit_v1.html" className="text-neon-cyan">ToneBoosters MorphIt</ExtLink> and swap between <GlossaryLink term="target">target curves</GlossaryLink>. It won't take long to work out which side you sit on.
            </p>

          </Card>
        </div>
      </Section>


      <Divider />

      <Section id="phones" icon={Smartphone} title="Phones & Accessories" tone="cyan">
        <p className="mb-6 max-w-2xl text-base text-foreground/90">
          Any modern <span className="text-neon-cyan">iPhone</span> or <span className="text-neon-cyan">Android</span> phone is a fine starting point. What you plug in matters less than what you run on it, so check what your phone already does before you buy anything. Then add a <span className="text-neon-magenta">DAC</span> or a <span className="text-neon-magenta">Bluetooth transmitter</span> only if it's actually missing something.
        </p>

        <div className="grid gap-5 md:grid-cols-2">
          <Card title="Android phones">
            <Bullets
              items={[
                <>Plenty of mid-range Androids (<span className="text-neon-cyan">Motorola</span>, for one) ship with <span className="text-neon-magenta">Dolby Atmos</span>, <span className="text-neon-cyan">aptX HD</span> or better, and sometimes a <span className="text-neon-cyan">3.5 mm</span> jack that handles <span className="text-neon-cyan">24-bit / 192 kHz</span>.</>,
                <>Read the spec sheet first. You may already have the dongle you were about to buy.</>,
              ]}
            />
          </Card>
          <Card title="iPhones">
            <Bullets
              items={[
                <>Get a <span className="text-neon-cyan">USB-C iPhone</span> (15 and later) if you can — it can feed a USB DAC <span className="text-neon-magenta">directly</span> for hi-res playback.</>,
                <>Older <span className="text-neon-cyan">Lightning</span> iPhones need a <span className="text-neon-cyan">Camera Connection Kit</span> or a Lightning DAC, which is clunkier and pricier.</>,
              ]}
            />
          </Card>
        </div>
        <div className="mt-5 grid gap-5 md:grid-cols-2">
          <Card title="Bluetooth codecs">
            <Bullets
              items={[
                <>The common <GlossaryLink term="ldac">codecs</GlossaryLink>, from lossy to effectively lossless: <span className="text-neon-cyan">AAC</span>, <span className="text-neon-cyan">aptX HD</span>, <span className="text-neon-cyan">aptX Lossless</span>, <span className="text-neon-cyan">LDAC</span> and <span className="text-neon-cyan">LHDC</span>.</>,
                <>In honest blind listening, most people (and most headphones) <span className="text-neon-magenta">can't reliably tell them apart</span>, or tell any of them from a <span className="text-neon-cyan">wired</span> connection.</>,
                <><span className="text-neon-cyan">LHDC</span> has two modes worth knowing about: <span className="text-neon-magenta">LHDC High Resolution</span> up to 24-bit / 192 kHz, and <span className="text-neon-magenta">LHDC Lossless</span> at bit-exact 16-bit / 44.1 kHz CD quality.</>,
                <>Use whatever both ends support. Tuning and EQ will change the sound far more than the codec does.</>,
              ]}
            />
          </Card>
          <Card title="Dolby Atmos on phones">
            <Bullets
              items={[
                <>Many <span className="text-neon-cyan">Android</span> phones include a system-level <span className="text-neon-magenta">Dolby Atmos</span> or spatial processor.</>,
                <>It widens the stage, and stock-tuned headphones often sound more <span className="text-neon-magenta">open</span> with it on.</>,
                <>Treat it as one more DSP layer to A/B against <span className="text-neon-cyan">Bongiovi DPS</span> or <span className="text-neon-cyan">AM3D</span> in jetAudio, not a replacement for them.</>,
              ]}
            />
          </Card>
        </div>
        <div className="mt-5 grid gap-5 md:grid-cols-2">
          <Card title="USB-C DAC dongles">
            <Bullets
              items={[
                <>For phones without a headphone jack, or when you want bit-perfect hi-res out to wired headphones. Paired with <ExtLink href="https://www.extreamsd.com/index.php/products/usb-audio-player-pro" className="text-neon-cyan">USB Audio Player Pro</ExtLink> or <ExtLink href="https://neutronmp.com/" className="text-neon-cyan">Neutron</ExtLink>, a USB DAC receives audio <span className="text-neon-magenta">directly and bit-perfect</span> at full resolution (e.g. <span className="text-neon-cyan">24-bit / 192 kHz</span>), bypassing Android's system mixer and <GlossaryLink term="src">SRC resampling</GlossaryLink>.</>,
              ]}
            />
          </Card>
          <Card title="Bluetooth transmitters">
            <Bullets
              items={[
                <>Plug into the phone's USB-C port to add a codec it doesn't natively support — typically <span className="text-neon-cyan">LDAC</span> or <span className="text-neon-cyan">aptX Lossless</span>. That said, even budget Androids ship with LDAC these days.</>,
                <>Small USB-C dongles like <ExtLink href="https://www.fiio.com/airlink" className="text-neon-cyan">FiiO Air Link style adapters</ExtLink> can transmit high-quality Bluetooth codecs from any phone or laptop to your wireless headphones.</>,
              ]}
            />
          </Card>
        </div>

        <SubHeading>Recommended · one box for both jobs</SubHeading>
        <div className="grid gap-5 md:grid-cols-2">
          <Card title="Qudelix 5K" href="https://www.qudelix.com/products/qudelix-5k">
            <p className="text-sm text-foreground/85">
              If you buy one thing, buy this. It is a <span className="text-neon-cyan">USB DAC</span> and a <span className="text-neon-cyan">Bluetooth receiver</span> in the same small box, so it covers two purchases.
            </p>

            <dl className="mt-4 space-y-3 text-sm">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-widest text-neon-cyan">As a wired USB DAC</dt>
                <dd className="mt-1 text-foreground/85">
                  <span className="text-neon-cyan">3.5mm</span> and <span className="text-neon-cyan">2.5mm balanced</span> outputs with <GlossaryLink term="outputz">independent hardware volume control</GlossaryLink>. The balanced port has real headroom for demanding loads.
                </dd>

              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-widest text-neon-cyan">As a Bluetooth receiver</dt>
                <dd className="mt-1 text-foreground/85">
                  <GlossaryLink term="ldac">LDAC</GlossaryLink>, <span className="text-neon-cyan">aptX Adaptive</span> and every mainstream codec. Its on-device EQ applies to whatever is streaming to it, which turns any wired headphone into a well-tuned wireless one.
                </dd>

              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-widest text-neon-cyan">Either way</dt>
                <dd className="mt-1 text-foreground/85">
                  A <span className="text-neon-magenta">20-band <GlossaryLink term="eq">parametric EQ</GlossaryLink></span> stored on the device itself, <span className="text-neon-cyan">AutoEQ</span> profiles out of the box, and the <span className="text-neon-magenta">most responsive</span> companion app I have used on anything.
                </dd>

              </div>
            </dl>
          </Card>
        </div>

        <div>
          <SubHeading>Other DACs</SubHeading>
          <div className="grid gap-5 md:grid-cols-3">
            <Card title="FiiO JIEZI" href="https://fiio.com/newsinfo/1065510.html">
              <p>A tiny, cheap <span className="text-neon-cyan">USB-C</span> dongle DAC. The easiest way to get clean sound out of a phone with no headphone jack.</p>
            </Card>
            <Card title="FiiO QX13" href="https://www.fiio.com/qx13">
              <Bullets
                items={[
                  <>A compact <span className="text-neon-cyan">USB-C</span> dongle DAC with <span className="text-neon-cyan">3.5mm</span> and <span className="text-neon-cyan">4.4mm balanced</span> outputs.</>,
                  <>You can attach a dedicated <span className="text-neon-magenta">Estick battery</span> to power it, so it draws no charge from your phone.</>,
                ]}
              />
            </Card>
            <Card title="Neutron HiFi DAC V1" href="https://neutronhifi.com/devices/dac/v1/details">
              <p>One of the first dongles to put real <span className="text-neon-cyan">DSP</span> on the device: almost everything from the Neutron Player, plus extras like <span className="text-neon-cyan">THD Compensation</span>. The manual is unusually thorough and worth reading properly.</p>
            </Card>
          </div>
        </div>

      </Section>

      <Divider />

      <Section id="software" icon={Sliders} title="Software" tone="magenta">
        <p className="mb-6 max-w-2xl text-base text-foreground/90">
          Your <span className="text-neon-cyan">streaming service</span>, <span className="text-neon-cyan">player</span> and <GlossaryLink term="dsp">DSP</GlossaryLink> chain will change the sound more than any cable or DAC. These are the apps I use, and what each one is good for.
        </p>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          <Card title="Apple Music" href="https://www.apple.com/apple-music/">
            <Bullets
              items={[
                <>Streaming service on both <ExtLink href="https://apps.apple.com/us/app/apple-music/id1108187390" className="text-neon-cyan">iOS</ExtLink> and <ExtLink href="https://play.google.com/store/apps/details?id=com.apple.android.music" className="text-neon-cyan">Android</ExtLink></>,
                <><span className="text-neon-cyan">Lossless</span> enabled at <span className="text-neon-magenta">24-bit / 48 kHz</span> — plenty for headphones, and easier on battery and bandwidth than higher rates.</>,
                <><GlossaryLink term="soundcheck">Sound Check</GlossaryLink> on, so track-to-track loudness stays consistent — the streaming equivalent of <GlossaryLink term="replaygain">ReplayGain</GlossaryLink>.</>,
                <>No other DSP layered on top here — <span className="text-neon-cyan">EQ</span> and DSP work happens in the player apps or on the <span className="text-neon-cyan">DAC</span>.</>,
              ]}
            />
          </Card>
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
                <>Bundled DSPs include a <span className="text-neon-cyan">graphic EQ</span>, <ExtLink href="https://www.am3d.com/" className="text-neon-magenta">AM3D</ExtLink> and <ExtLink href="https://www.bongioviacoustics.com/" className="text-neon-magenta">Bongiovi DPS</ExtLink>. The last two change the sound dramatically, for better or worse depending on the track.</>,
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
                <>The widest DSP set of the three: <span className="text-neon-magenta">Parametric EQ</span>, <span className="text-neon-magenta">Frequency Response Correction</span> (AutoEQ), <GlossaryLink term="crossfeed">Crossfeed</GlossaryLink> and <span className="text-neon-magenta">Adaptive Loudness Compensation</span>.</>,
              ]}
            />
          </Card>
          <Card title="USB Audio Player Pro" href="https://www.extreamsd.com/index.php/products/usb-audio-player-pro">
            <Bullets
              items={[
                <><ExtLink href="https://play.google.com/store/apps/details?id=com.extreamsd.usbaudioplayerpro" className="text-neon-cyan">Android</ExtLink> only</>,
                <><span className="text-neon-cyan">ReplayGain</span> support with manual <span className="text-neon-cyan">preamp</span> adjustment</>,
                <>Includes <span className="text-neon-magenta">Parametric EQ</span> and <ExtLink href="https://www.toneboosters.com/tb_morphit_v1.html" className="text-neon-magenta">ToneBoosters MorphIt</ExtLink> — apply <GlossaryLink term="target">target curves</GlossaryLink> like <span className="text-neon-cyan">Harman</span> or <span className="text-neon-cyan">HiFi</span> to supported headphones, or make one headphone sound like another.</>,
              ]}
            />
          </Card>
        </div>
      </Section>

      <Divider />

      <Section id="demands" icon={Gauge} title="Headphone electrical demands" tone="purple">
        <p className="mb-6 max-w-2xl text-base text-foreground/90">
          Two numbers decide how fussy a headphone is about its source: <span className="text-neon-cyan">impedance</span> (Ω) and <GlossaryLink term="sensitivity">sensitivity</GlossaryLink> (dB/mW or dB/V). Get the pairing right and you never think about it again. Get it wrong and you get hiss, or clipping, or you simply run out of volume.
        </p>
        <p className="mb-6 max-w-2xl text-sm text-foreground/80">
          One correction before the table, because you will read the opposite everywhere. Impedance is just the <span className="text-neon-cyan">ratio of voltage to current</span>, and that ratio does not change with level, so a headphone does not draw proportionally more current in the bass. If it plays <span className="text-neon-magenta">loud enough, it has enough bass</span>, and vice versa. When an amp runs short of current you get <span className="text-neon-magenta">clipping on peaks</span> across the whole signal, not weak or thin bass. <ExtLink href="https://www.reddit.com/r/headphones/s/vq4C1c1tvn" className="text-neon-cyan">oratory1990 explains it here</ExtLink>.
        </p>
        <p className="mb-6 max-w-2xl text-sm text-foreground/80">
          Watch the units. <span className="text-neon-magenta">dB/mW</span> and <span className="text-neon-magenta">dB/V</span> are not interchangeable, and manufacturers quote whichever flatters the product: a 32 Ω headphone rated 114 dB/V is only about 99 dB/mW. Worth knowing too that <span className="text-neon-cyan">planar magnetic</span> headphones have a flat, resistive impedance, so a mediocre output impedance doesn't colour their tone the way it does dynamic or multi-driver balanced-armature designs. It just wastes power. Planars care about <span className="text-neon-magenta">current</span>, not damping factor.
        </p>
        <p className="mb-6 max-w-2xl text-sm text-foreground/80">
          The last column only covers the <a href="#phones" className="text-neon-cyan underline-offset-4 hover:underline">gear recommended on this page</a>, using each vendor's published <span className="text-neon-cyan">single-ended</span> and <span className="text-neon-cyan">balanced</span> figures. That's why the same dongle shows up in two rows: it depends which output you plug into. <span className="text-neon-magenta">FiiO Air Link style adapters</span> are left out on purpose, since they transmit Bluetooth rather than amplify anything.
        </p>
        <div className="mb-6 max-w-2xl rounded-lg border border-neon-magenta/40 bg-neon-magenta/5 p-4 text-sm text-foreground/85">
          <span className="font-semibold text-neon-magenta">The short version:</span> every headphone on this page is driven comfortably by the sources above, and the <GearLink>Qudelix 5K</GearLink> handles all of them. The table is for the awkward cases: hard-to-drive planars, 300 Ω classics, and sensitive <GlossaryLink term="iem">IEMs</GlossaryLink> that pick up hiss.
        </div>
        <DataTable
          rows={[
            {
              profile: "Low Impedance + Low Sensitivity",
              specs: "< 32 Ω, < 96 dB/mW",
              demand: "High Current (I)",
              target: "High continuous current output at low loads",
              wrongAmp:
                "The amp hits its current limit and clips on peaks. You hear distortion and squashed dynamics across the whole signal, not just the bass, and the amp gets hot and eats the phone battery",
              examples:
                "Hifiman Edition XS (18 Ω / 92 dB/mW), Dan Clark Audio Aeon 2 (13 Ω / ~92 dB/mW)",
              sources: (
                <>
                  <GearLink>FiiO KA11</GearLink> (~200 mW into 32 Ω) and{" "}
                  <GearLink>Hidizs Martha</GearLink> on 4.4mm balanced (~230 mW into 32 Ω) supply the
                  most current, though the KA11 runs very hot and drains the phone under continuous
                  draw. The <GearLink>Qudelix 5K</GearLink> works here only on 2.5mm balanced
                  (~240 mW into 32 Ω); its single-ended output (~80 mW into 32 Ω) runs short. The{" "}
                  <GearLink>Neutron HiFi DAC V1</GearLink> is the wrong tool for this row, clean on
                  voltage but light on current. None of them beat a desktop amp here.
                </>
              ),
            },
            {
              profile: "High Impedance + Low Sensitivity",
              specs: "> 150 Ω, ≲ 97 dB/mW",
              demand: "High Voltage (V)",
              target: "High voltage swing (VRMS) at high loads",
              wrongAmp:
                "Simply too quiet: you run out of volume before the music is loud enough, and there is no headroom left once EQ applies negative pre-amp gain",
              examples:
                "Sennheiser HD 600 (300 Ω / ~97 dB/mW), Beyerdynamic DT 880 (250 Ω / 96 dB/mW), Beyerdynamic DT 990 Pro (250 Ω / 96 dB/mW)",
              sources: (
                <>
                  This row is about volts, not milliwatts: 2 VRMS into 300 Ω is only ~13 mW, fine at
                  average levels and tight on peaks. <GearLink>Qudelix 5K</GearLink> on balanced
                  roughly doubles the swing and is the best of the four.{" "}
                  <GearLink>Neutron HiFi DAC V1</GearLink> runs cleanly at 2 VRMS but has no headroom
                  left once you apply negative pre-amp gain for EQ. The{" "}
                  <GearLink>FiiO KA11</GearLink>'s 200 mW rating means nothing here, because it cannot
                  supply the voltage. A desktop amp is still the right answer.
                </>
              ),
            },
            {
              profile: "Low Impedance + High Sensitivity",
              specs: "< 32 Ω, > 100 dB/mW",
              demand: "Ultra-low Noise Floor",
              target: "Near-zero output impedance (< 1 Ω) and high SNR",
              wrongAmp:
                "Audible background hiss or static; on dynamic and multi-driver balanced-armature loads, bloated, loose or muddy bass from a low damping factor",
              examples: (
                <>
                  Campfire Andromeda (~12.8 Ω / ~113 dB/mW), Shure SE846 (~9 Ω / ~114 dB/mW),{" "}
                  <a href="#preferences" className="text-neon-cyan underline-offset-4 hover:underline">
                    AKG K371
                  </a>{" "}
                  (32 Ω / 114 dB/V, ~99 dB/mW)
                </>
              ),
              sources: (
                <>
                  <GearLink>Neutron HiFi DAC V1</GearLink> (&lt; 0.6 Ω output impedance, switchable
                  1 VRMS mode) first, then <GearLink>Qudelix 5K</GearLink> (&lt; 1 Ω, precise hardware
                  volume control) on single-ended. Power isn't the problem here, hiss and coarse volume
                  steps are. Stay in low gain and keep off the high-power balanced ports.
                </>
              ),
            },
            {
              profile: "Medium Impedance + High Sensitivity",
              specs: "~120 Ω, ~101 dB/mW",
              demand: "Moderate Voltage & Clean Current",
              target: "Clean, linear delivery with low output impedance",
              wrongAmp:
                "May need slightly more volume than a standard phone jack provides; otherwise easy to drive",
              examples: (
                <>
                  <a href="#preferences" className="text-neon-cyan underline-offset-4 hover:underline">
                    Sennheiser HD 560S
                  </a>{" "}
                  (120 Ω / 110 dB/V)
                </>
              ),
              sources: (
                <>
                  The easy row. 120 Ω at 110 dB/V needs a fraction of a volt to play loud, so pick on
                  features rather than power. <GearLink>Qudelix 5K</GearLink> (wired or LDAC),{" "}
                  <GearLink>FiiO KA11</GearLink>, <GearLink>Neutron HiFi DAC V1</GearLink> and{" "}
                  <GearLink>Hidizs Martha</GearLink> all drive it cleanly.
                </>
              ),
            },
            {
              profile: "High Impedance + High Sensitivity",
              specs: "> 150 Ω, > 100 dB/mW",
              demand: "Moderate Voltage (V)",
              target: "Clean, linear voltage delivery",
              wrongAmp: "Volume peaks feel a little restricted on weak sources, and dynamics get squashed",
              examples: "Audio-Technica ATH-R70x (470 Ω / 99 dB/mW, ~102 dB/V)",
              sources: (
                <>
                  <GearLink>Qudelix 5K</GearLink> on balanced or{" "}
                  <GearLink>Neutron HiFi DAC V1</GearLink> in its 2 VRMS mode both do the job. The{" "}
                  <GearLink>FiiO KA11</GearLink> is voltage-limited despite its power rating, and an
                  legacy smartphone headphone jack will feel restricted and quiet.
                </>
              ),
            },
          ]}
        />
      </Section>

      <Divider />

      <Section id="replaygain" icon={Volume2} title="Using ReplayGain" tone="orange">
        <p className="mb-6 max-w-2xl text-base text-foreground/90">
          <GlossaryLink term="replaygain">ReplayGain</GlossaryLink> is <span className="text-neon-magenta">volume normalization</span> done properly: applied correctly it leaves the <span className="text-neon-magenta">dynamic range</span> of your music alone. Scan your files once to write <span className="text-neon-cyan">track</span> and <span className="text-neon-cyan">album</span> tags and the players above will level everything for you. If you mostly shuffle across artists, use <span className="text-neon-magenta">track</span> mode. If you listen album-first, use <span className="text-neon-magenta">album</span> mode so the relative loudness within a record survives.
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
                <>Configurable target loudness — set <GlossaryLink term="lufs">-16 LUFS</GlossaryLink> for <span className="text-neon-magenta">Apple Music</span>, <span className="text-neon-cyan">-14 LUFS</span> to match <span className="text-neon-magenta">Spotify</span>, <span className="text-neon-magenta">YouTube</span> and <span className="text-neon-magenta">Tidal</span>, or the classic <span className="text-neon-cyan">-18 LUFS</span> ReplayGain default.</>,
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
                <>Connect over USB in <GlossaryLink term="mtp">MTP</GlossaryLink> mode and copy folders to internal storage or an <span className="text-neon-cyan">SD card</span> with any file manager.</>,
                <>All three players above will pick the files up from anywhere they have read access — no app-specific sandbox dance.</>,
              ]}
            />
          </Card>
        </div>
      </Section>

      <Divider />

      <Section id="glossary" icon={BookOpen} title="Glossary" tone="cyan">
        <p className="mb-6 max-w-2xl text-base text-foreground/90">
          A few quick definitions for the terms used above, in alphabetical order, in case anything is new to you.
        </p>
        <div className="grid gap-5 md:grid-cols-2">
          <div id="g-alc" className="scroll-mt-24">
            <Card title="ALC">
              <p><span className="text-neon-cyan">Adaptive Loudness Compensation</span> (Neutron) — adjusts tonal balance for how loudly you are listening, so quiet listening keeps its bass and treble instead of thinning out.</p>
            </Card>
          </div>
          <div id="g-anc" className="scroll-mt-24">
            <Card title="ANC">
              <p><span className="text-neon-cyan">Active Noise Cancellation</span> — microphones sample ambient sound and the headphone plays an inverted signal to cancel it, most effective on steady low-frequency noise (planes, trains, HVAC).</p>
            </Card>
          </div>
          <div id="g-ldac" className="scroll-mt-24">
            <Card title="Bluetooth codecs (AAC, aptX, LDAC)">
              <p>The rules used to compress audio for the Bluetooth link. <span className="text-neon-cyan">AAC</span> is the lossy baseline, <span className="text-neon-cyan">aptX HD</span> and <span className="text-neon-cyan">LDAC</span> carry more data (LDAC up to 990 kbps), and <span className="text-neon-cyan">aptX Lossless</span> is bit-exact CD quality. Both ends must support the same codec.</p>
            </Card>
          </div>
          <div id="g-crossfeed" className="scroll-mt-24">
            <Card title="Crossfeed">
              <p>Mixes a small amount of each stereo channel into the other to make headphone listening sound less "in-head" and closer to speakers.</p>
            </Card>
          </div>
          <div id="g-sensitivity" className="scroll-mt-24">
            <Card title="dB/mW vs dB/V">
              <p>Two ways to publish <span className="text-neon-cyan">sensitivity</span>. dB/mW is loudness per milliwatt of power; dB/V is loudness per volt. They are not interchangeable — a 32 Ω headphone rated 114 dB/V is only about 99 dB/mW — and manufacturers quote whichever flatters the product.</p>
            </Card>
          </div>
          <div id="g-dsp" className="scroll-mt-24">
            <Card title="DSP">
              <p><span className="text-neon-cyan">Digital Signal Processing</span> — software that reshapes audio in real time (<span className="text-neon-cyan">EQ</span>, <span className="text-neon-cyan">reverb</span>, <span className="text-neon-cyan">crossfeed</span>, <span className="text-neon-cyan">dynamics</span>).</p>
            </Card>
          </div>
          <div id="g-dynameq" className="scroll-mt-24">
            <Card title="DynamEQ">
              <p>Cambridge Audio's loudness-aware EQ in the Melomania app — it lifts the frequency extremes at low volume and backs off as you turn up, so the tuning stays consistent across listening levels.</p>
            </Card>
          </div>
          <div id="g-eq" className="scroll-mt-24">
            <Card title="EQ / PEQ">
              <p><span className="text-neon-cyan">EQ</span> is an equalizer that boosts or cuts frequency bands. <span className="text-neon-cyan">PEQ</span> (Parametric EQ) lets you control center frequency, gain and bandwidth (Q) per band — far more precise than a fixed graphic EQ.</p>
            </Card>
          </div>
          <div id="g-frc" className="scroll-mt-24">
            <Card title="FRC / AutoEQ">
              <p><span className="text-neon-cyan">Frequency Response Correction</span> (Neutron's term) and <span className="text-neon-cyan">AutoEQ</span> both apply measured headphone-correction filters so a given headphone matches a chosen <span className="text-neon-cyan">target curve</span>.</p>
            </Card>
          </div>
          <div id="g-iem" className="scroll-mt-24">
            <Card title="IEM">
              <p><span className="text-neon-cyan">In-Ear Monitor</span> — a sealed in-ear headphone with silicone or foam tips that sits inside the ear canal, giving strong passive isolation and a consistent low-end response.</p>
            </Card>
          </div>
          <div id="g-lufs" className="scroll-mt-24">
            <Card title="LUFS">
              <p><span className="text-neon-cyan">Loudness Units Full Scale</span> — a perceptual loudness measurement (ITU&nbsp;BS.1770) used by streaming services and ReplayGain to normalize tracks to a common target (e.g. <span className="text-neon-cyan">-14&nbsp;LUFS</span> on Spotify/Tidal).</p>
            </Card>
          </div>
          <div id="g-mtp" className="scroll-mt-24">
            <Card title="MTP">
              <p><span className="text-neon-cyan">Media Transfer Protocol</span> — the USB mode Android phones use to expose their storage to a computer so you can drag and drop files without special drivers.</p>
            </Card>
          </div>
          <div id="g-outputz" className="scroll-mt-24">
            <Card title="Output impedance & damping factor">
              <p>The source's own internal resistance. Divide the headphone's impedance by it to get the <span className="text-neon-cyan">damping factor</span> — aim for 8 or more. A high output impedance changes the tone of loads whose impedance varies with frequency (dynamic drivers, multi-driver balanced armatures); <span className="text-neon-magenta">planar magnetics are flat and resistive</span>, so it only wastes power on them.</p>
            </Card>
          </div>
          <div id="g-ows" className="scroll-mt-24">
            <Card title="OWS">
              <p><span className="text-neon-cyan">Open Wearable Stereo</span> — an open-fit earbud that clips to or rests on the ear without sealing the canal, leaving you aware of your surroundings (e.g. the Moondrop Pill).</p>
            </Card>
          </div>
          <div id="g-replaygain" className="scroll-mt-24">
            <Card title="ReplayGain">
              <p>A metadata-based <span className="text-neon-magenta">volume normalization</span> standard. Tracks are scanned for perceived loudness, and players use the resulting tags to play everything at a consistent level — without re-encoding or compressing the audio.</p>
            </Card>
          </div>
          <div id="g-soundcheck" className="scroll-mt-24">
            <Card title="Sound Check">
              <p>Apple Music's built-in volume normalization — the streaming equivalent of ReplayGain, levelling tracks to roughly <span className="text-neon-cyan">-16&nbsp;LUFS</span> so you stop reaching for the volume between songs.</p>
            </Card>
          </div>
          <div id="g-src" className="scroll-mt-24">
            <Card title="SRC resampling">
              <p><span className="text-neon-cyan">Sample Rate Conversion</span> — Android's system mixer resampling everything to one fixed rate. Feeding a USB DAC directly from a player that supports it bypasses the mixer, so hi-res files reach the DAC untouched.</p>
            </Card>
          </div>
          <div id="g-target" className="scroll-mt-24">
            <Card title="Target curve">
              <p>The frequency response a headphone is tuned (or EQ'd) to match — e.g. the <span className="text-neon-cyan">Harman</span> curve or B&amp;K-style in-ear targets.</p>
            </Card>
          </div>
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
                <><ExtLink href="https://www.rtings.com/headphones" className="text-neon-cyan">RTINGS</ExtLink> — detailed headphone reviews with consistent measurement methodology.</>,
              ]}
            />
          </Card>
          <Card title="Measurements & EQ tools">
            <Bullets
              items={[
                <><ExtLink href="https://squig.link/" className="text-neon-cyan">Squig.link</ExtLink> — browse and compare frequency-response graphs from a wide database.</>,
                <><ExtLink href="https://autoeq.app/" className="text-neon-cyan">AutoEQ</ExtLink> — generate parametric EQ presets to match target curves from measurement data.</>,
                <><ExtLink href="https://peqdb.com/" className="text-neon-cyan">PEQdb</ExtLink> — searchable database of parametric EQ presets for headphones and IEMs.</>,
                <><ExtLink href="https://opra.roon.app/" className="text-neon-cyan">OPRA</ExtLink> — Roon-integrated headphone preference rating explorer.</>,
                <><ExtLink href="https://www.rtings.com/headphones/learn/eq-repository" className="text-neon-cyan">RTINGS EQ Repository</ExtLink> — measured EQ presets for a wide range of headphones.</>,
              ]}
            />
          </Card>
          <Card title="Community">
            <Bullets
              items={[
                <><ExtLink href="https://www.head-fi.org/" className="text-neon-cyan">Head-Fi</ExtLink> — the largest headphone enthusiast forum and discussion hub.</>,
                <><ExtLink href="https://www.audiosciencereview.com/forum/index.php" className="text-neon-cyan">Audio Science Review</ExtLink> — active forum focused on objective audio measurements.</>,
                <><ExtLink href="https://www.reddit.com/r/headphones/s/N2EtgyodPs" className="text-neon-cyan">r/headphones</ExtLink> — general headphone discussion and news.</>,
                <><ExtLink href="https://www.reddit.com/r/oratory1990/s/U4gCItaBjU" className="text-neon-cyan">r/oratory1990</ExtLink> — EQ presets and measurement discussions.</>,
                <><ExtLink href="https://www.reddit.com/r/HeadphoneAdvice/s/sYWZKVYEjL" className="text-neon-cyan">r/HeadphoneAdvice</ExtLink> — purchase advice and recommendations.</>,
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
          <Card title="Streaming & Playlists">
            <Bullets
              items={[
                <><ExtLink href="https://music.apple.com/" className="text-neon-cyan">Apple Music</ExtLink> is my preferred streaming and music discovery app — its suggestions helped me put together my best playlists.</>,
                <>Large <span className="text-neon-cyan">hi-res</span> / <span className="text-neon-cyan">lossless</span> catalogue with <span className="text-neon-magenta">Spatial Audio</span> tracks and built-in audio normalization at roughly <span className="text-neon-cyan">-16 LUFS</span>.</>,
              ]}
            />
            <div className="mt-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-neon-cyan mb-2">Playlists</p>
              <Bullets
                items={[
                  <><ExtLink href="https://music.apple.com/gb/playlist/deze-beats-is-twistin-me-brainz/pl.u-kv9lbpjC7GxrejK" className="text-neon-cyan">Deze Beats Is Twistin Me Brainz</ExtLink></>,
                  <><ExtLink href="https://music.apple.com/gb/playlist/face-meltin-synths/pl.u-jV890p9Cd6ExlpN" className="text-neon-cyan">Face Meltin Synths</ExtLink></>,
                ]}
              />
            </div>
          </Card>
          <Card title="Learning">
            <Bullets
              items={[
                <><ExtLink href="https://www.rtings.com/headphones/learn/research/eq-remeasurements" className="text-neon-cyan">RTINGS EQ Remeasurements</ExtLink> — how they re-measure headphones after applying EQ.</>,
                <><ExtLink href="https://www.rtings.com/headphones/tools/table" className="text-neon-cyan">RTINGS Headphones Table</ExtLink> — sortable comparison table of reviewed headphones.</>,
                <><ExtLink href="https://www.rtings.com/headphones/tools/compare" className="text-neon-cyan">RTINGS Compare Tool</ExtLink> — side-by-side comparison of measurement data.</>,
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
