import Hero from "@/components/hearbyte/Hero";
import Footer from "@/components/hearbyte/Footer";
import ExtLink from "@/components/hearbyte/ExtLink";
import Section from "@/components/hearbyte/Section";
import Card from "@/components/hearbyte/Card";
import Bullets from "@/components/hearbyte/Bullets";
import Divider from "@/components/hearbyte/Divider";
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

const dongleOutputs = [
  {
    name: "FiiO JIEZI",
    output: "3.5 mm single-ended",
    published: "Published: L+R ≥ 49 mW + 49 mW (16 Ω), L+R ≥ 34 mW + 34 mW (32 Ω), both at THD+N < 1%.",
    rows: [
      { z: "16 Ω", power: "49.00 mW", voltage: "0.885 Vrms", current: "55.34 mArms", limit: "Current limit" },
      { z: "32 Ω", power: "34.00 mW", voltage: "1.043 Vrms", current: "32.60 mArms", limit: "Voltage rail" },
      { z: "38 Ω", power: "28.63 mW", voltage: "1.043 Vrms", current: "27.45 mArms", limit: "Voltage rail" },
      { z: "120 Ω", power: "9.07 mW", voltage: "1.043 Vrms", current: "8.69 mArms", limit: "Voltage rail" },
    ],
  },
  {
    name: "Qudelix 5K",
    output: "2.5 mm balanced",
    published: "Published: max 4 Vrms output, 240 mW per channel.",
    rows: [
      { z: "32 Ω", power: "240.0 mW", voltage: "2.77 Vrms", current: "86.6 mArms", limit: "Official power ceiling" },
      { z: "38 Ω", power: "240.0 mW", voltage: "3.02 Vrms", current: "79.5 mArms", limit: "Official power ceiling" },
      { z: "120 Ω", power: "133.3 mW", voltage: "4.00 Vrms", current: "33.3 mArms", limit: "Official voltage ceiling" },
    ],
  },
  {
    name: "FiiO QX13",
    output: "4.4 mm balanced, USB decoding, desktop mode, high gain",
    published: "Published: L+R ≥ 480 mW + 480 mW (16 Ω), ≥ 900 mW + 900 mW (32 Ω), ≥ 125 mW + 125 mW (300 Ω), all at THD+N < 1%.",
    rows: [
      { z: "16 Ω", power: "480.0 mW", voltage: "2.77 Vrms", current: "173.2 mArms", limit: "Current / thermal" },
      { z: "32 Ω", power: "900.0 mW", voltage: "5.37 Vrms", current: "167.7 mArms", limit: "Current limited" },
      { z: "38 Ω", power: "986.8 mW", voltage: "6.12 Vrms", current: "161.2 mArms", limit: "Voltage limited" },
      { z: "120 Ω", power: "312.5 mW", voltage: "6.12 Vrms", current: "51.0 mArms", limit: "Voltage limited" },
      { z: "300 Ω", power: "125.0 mW", voltage: "6.12 Vrms", current: "20.4 mArms", limit: "Voltage limited" },
    ],
  },
];

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero />
      <TableOfContents />

      <Divider />

      <Section id="chain" icon={Zap} title="My preferred audio chains" tone="magenta">
        <SubHeading spaced={false}>Shared base</SubHeading>
        <div className="grid gap-5 md:grid-cols-2">
          <Card title="Source &amp; app">
            <Bullets
              items={[
                <><span className="text-neon-magenta">Source:</span> <span className="text-neon-cyan">iPhone</span>.</>,
                <><span className="text-neon-magenta">App:</span> <ExtLink href="https://music.apple.com/" className="text-neon-cyan">Apple Music</ExtLink> — <span className="text-neon-cyan">Lossless 24-bit / 48 kHz</span>, <GlossaryLink term="soundcheck">Sound Check</GlossaryLink> on.</>,
                <><span className="text-neon-magenta">EQ:</span> when a chain below uses one, it's the <ExtLink href="https://www.rtings.com/headphones/learn/eq-repository" className="text-neon-cyan">rtings.com</ExtLink> target preference curve <span className="text-neon-cyan">PEQ</span> profile.</>,
              ]}
            />
          </Card>
        </div>

        <SubHeading>Chains</SubHeading>
        <div className="grid gap-5 md:grid-cols-2">
          <Card title="1 · Sennheiser HD 560S — wired">
            <Bullets
              items={[
                <><span className="text-neon-magenta">Headphones:</span> <ExtLink href="https://en-uk.sennheiser.com/hd-560s" className="text-neon-cyan">Sennheiser HD 560S</ExtLink>.</>,
                <><span className="text-neon-magenta">EQ:</span> none, otherwise the <span className="text-neon-cyan">PEQ</span> profile above.</>,
                <>
                  <span className="text-neon-magenta">DAC:</span> <ExtLink href="https://www.qudelix.com/products/qudelix-5k" className="text-neon-cyan">Qudelix 5K</ExtLink> over <span className="text-neon-cyan">USB</span>, set to draw power from <span className="text-neon-cyan">USB-C</span> rather than its internal battery.
                  <div className="mt-2 rounded-md border border-neon-magenta/25 bg-neon-magenta/5 p-3 text-sm">
                    <div className="flex items-baseline gap-2"><span className="text-neon-magenta">Can it drive it?</span> <a href="#demands" title="Why these numbers — do you have enough power?" className="text-xs text-neon-cyan underline-offset-4 hover:underline">why?</a></div>
                    <ul className="mt-1 space-y-0.5">
                      <li>Sensitivity: <span className="text-neon-cyan">100.8 dB SPL/mW</span></li>
                      <li>Impedance: <span className="text-neon-cyan">120 Ω</span></li>
                      <li>Target average loudness: <span className="text-neon-cyan">90 dB SPL</span></li>
                      <li>Sound Check headroom: <span className="text-neon-cyan">7 dB</span> (so <span className="text-neon-cyan">97 dB</span> average at the amp)</li>
                      <li><span className="text-neon-cyan">PEQ</span> preamp headroom: <span className="text-neon-cyan">~10 dB</span></li>
                      <li>Crest factor, jazz / acoustic: <span className="text-neon-cyan">14 dB</span></li>
                      <li>Peak needed: 90 + 7 + 10 + 14 = <span className="text-neon-cyan">121 dB SPL</span></li>
                      <li>Power needed: <span className="text-neon-cyan">105 mW</span></li>
                      <li>Voltage needed: <span className="text-neon-cyan">~3.6 V</span></li>
                      <li>Current pushed: <span className="text-neon-cyan">28.87 mA</span></li>
                      <li>Qudelix 5K on <span className="text-neon-cyan">2.5 mm balanced</span>: <span className="text-neon-cyan">133.3 mW / 4.00 V / 33.3 mA</span></li>
                      <li>Verdict: <span className="text-neon-cyan">yes</span>.</li>
                    </ul>
                    <div className="mt-1">
                      Run the numbers yourself: <ExtLink href="https://theaudiostuff.com/tools/headphone-power-calculator/#sens=100.8&u=dbmw&z=120&v=4&spl=107&hr=14" className="text-neon-cyan">theaudiostuff.com</ExtLink> opens pre-filled with these values but doesn't report current, while <ExtLink href="https://headphones.com/pages/headphones-power-calculator" className="text-neon-cyan">headphones.com</ExtLink> gives you the <span className="text-neon-cyan">mA</span> figure but has to be filled in by hand.
                    </div>
                  </div>
                </>,
                <>
                  <span className="text-neon-magenta">DAC, alternative:</span> the <ExtLink href="https://www.fiio.com/qx13" className="text-neon-cyan">FiiO QX13</ExtLink> paired with the <ExtLink href="https://www.fiio.com/productinfo/1507720.html" className="text-neon-cyan">FiiO Estick</ExtLink> battery.
                  <div className="mt-2 rounded-md border border-neon-magenta/25 bg-neon-magenta/5 p-3 text-sm">
                    <span className="text-neon-magenta">Can it drive it?</span> <a href="#demands" title="Why these numbers — do you have enough power?" className="text-xs text-neon-cyan underline-offset-4 hover:underline">why?</a> <span className="text-neon-cyan">Yes</span> — with the <span className="text-neon-cyan">PEQ</span> profile it needs <span className="text-neon-cyan">~3.6 V</span> / <span className="text-neon-cyan">105 mW</span> / <span className="text-neon-cyan">28.87 mA</span>, against the QX13's <span className="text-neon-cyan">312.5 mW / 6.12 Vrms / 51.0 mArms</span> at <span className="text-neon-cyan">120 Ω</span>.
                  </div>
                </>,

              ]}
            />
          </Card>
          <Card title="2 · HiFiMAN Sundara (2022) — wired">
            <Bullets
              items={[
                <><span className="text-neon-magenta">Headphones:</span> <ExtLink href="https://hifiman.com/products/detail/305" className="text-neon-cyan">HiFiMAN Sundara (2022)</ExtLink>.</>,
                <><span className="text-neon-magenta">EQ:</span> none, otherwise the <span className="text-neon-cyan">PEQ</span> profile above.</>,
                <>
                  <span className="text-neon-magenta">DAC:</span> <ExtLink href="https://www.qudelix.com/products/qudelix-5k" className="text-neon-cyan">Qudelix 5K</ExtLink> over <span className="text-neon-cyan">USB</span>, powered from <span className="text-neon-cyan">USB-C</span> rather than its internal battery — only with <span className="text-neon-cyan">no EQ</span>, since with the target <span className="text-neon-cyan">PEQ</span> profile it can run out of power on some genres.
                  <div className="mt-2 rounded-md border border-neon-magenta/25 bg-neon-magenta/5 p-3 text-sm">
                    <span className="text-neon-magenta">Can it drive it?</span> <a href="#demands" title="Why these numbers — do you have enough power?" className="text-xs text-neon-cyan underline-offset-4 hover:underline">why?</a> <span className="text-neon-cyan">Yes</span> — without EQ it needs <span className="text-neon-cyan">1.59 V</span> / <span className="text-neon-cyan">79.43 mW</span> / <span className="text-neon-cyan">49.82 mA</span>, against the Qudelix 5K's <span className="text-neon-cyan">240.0 mW / 2.77 Vrms / 86.6 mArms</span> at <span className="text-neon-cyan">32 Ω</span>.
                  </div>
                </>,
                <>
                  <span className="text-neon-magenta">DAC, with the PEQ profile:</span> the <ExtLink href="https://www.fiio.com/qx13" className="text-neon-cyan">FiiO QX13</ExtLink> paired with the <ExtLink href="https://www.fiio.com/productinfo/1507720.html" className="text-neon-cyan">FiiO Estick</ExtLink> battery.
                  <div className="mt-2 rounded-md border border-neon-magenta/25 bg-neon-magenta/5 p-3 text-sm">
                    <div className="flex items-baseline gap-2"><span className="text-neon-magenta">Can it drive it?</span> <a href="#demands" title="Why these numbers — do you have enough power?" className="text-xs text-neon-cyan underline-offset-4 hover:underline">why?</a></div>
                    <ul className="mt-1 space-y-0.5">
                      <li>Sensitivity: <span className="text-neon-cyan">92 dB SPL/mW</span></li>
                      <li>Impedance: <span className="text-neon-cyan">32 Ω</span></li>
                      <li>Target average loudness: <span className="text-neon-cyan">90 dB SPL</span></li>
                      <li>Sound Check headroom: <span className="text-neon-cyan">7 dB</span> (so <span className="text-neon-cyan">106 dB</span> average at the amp)</li>
                      <li><span className="text-neon-cyan">PEQ</span> preamp headroom: <span className="text-neon-cyan">~9 dB</span></li>
                      <li>Crest factor, jazz / acoustic: <span className="text-neon-cyan">14 dB</span></li>
                      <li>Peak needed: 90 + 7 + 9 + 14 = <span className="text-neon-cyan">120 dB SPL</span></li>
                      <li>Power needed: <span className="text-neon-cyan">631 mW</span></li>
                      <li>Voltage needed: <span className="text-neon-cyan">~4.5 V</span></li>
                      <li>Current pushed: <span className="text-neon-cyan">140.42 mA</span></li>
                      <li>FiiO QX13 on <span className="text-neon-cyan">4.4 mm balanced</span>: <span className="text-neon-cyan">900 mW / 5.37 V / 167.7 mA</span></li>
                      <li>Verdict: <span className="text-neon-cyan">yes</span>.</li>
                    </ul>
                    <div className="mt-1">
                      Run the numbers yourself: <ExtLink href="https://theaudiostuff.com/tools/headphone-power-calculator/#sens=92&u=dbmw&z=32&v=5.37&spl=106&hr=14" className="text-neon-cyan">theaudiostuff.com</ExtLink> opens pre-filled with these values but doesn't report current, while <ExtLink href="https://headphones.com/pages/headphones-power-calculator" className="text-neon-cyan">headphones.com</ExtLink> gives you the <span className="text-neon-cyan">mA</span> figure but has to be filled in by hand.
                    </div>
                  </div>
                </>,
              ]}
            />
          </Card>
          <Card title="3 · AKG K371 — wired">
            <Bullets
              items={[
                <><span className="text-neon-magenta">Headphones:</span> <ExtLink href="https://www.akg.com/Headphones/Professional%20Headphones/K371.html" className="text-neon-cyan">AKG K371</ExtLink>.</>,
                <><span className="text-neon-magenta">EQ:</span> the <span className="text-neon-cyan">PEQ</span> profile above, always on.</>,
                <>
                  <span className="text-neon-magenta">DAC:</span> <ExtLink href="https://fiio.com/newsinfo/1065510.html" className="text-neon-cyan">FiiO JIEZI</ExtLink>.
                  <div className="mt-2 rounded-md border border-neon-magenta/25 bg-neon-magenta/5 p-3 text-sm">
                    <div className="flex items-baseline gap-2"><span className="text-neon-magenta">Can it drive it?</span> <a href="#demands" title="Why these numbers — do you have enough power?" className="text-xs text-neon-cyan underline-offset-4 hover:underline">why?</a></div>
                    <ul className="mt-1 space-y-0.5">
                      <li>Sensitivity: <span className="text-neon-cyan">99 dB SPL/mW</span></li>
                      <li>Impedance: <span className="text-neon-cyan">32 Ω</span></li>
                      <li>Target average loudness: <span className="text-neon-cyan">90 dB SPL</span></li>
                      <li>Sound Check headroom: <span className="text-neon-cyan">7 dB</span> (so <span className="text-neon-cyan">98 dB</span> average at the amp)</li>
                      <li><span className="text-neon-cyan">PEQ</span> preamp headroom: <span className="text-neon-cyan">~3 dB</span></li>
                      <li>Crest factor, jazz / acoustic: <span className="text-neon-cyan">14 dB</span></li>
                      <li>Peak needed: 90 + 7 + 3 + 14 = <span className="text-neon-cyan">114 dB SPL</span></li>
                      <li>Power needed: <span className="text-neon-cyan">32 mW</span></li>
                      <li>Voltage needed: <span className="text-neon-cyan">~1.01 V</span></li>
                      <li>Current pushed: <span className="text-neon-cyan">31.44 mA</span></li>
                      <li>FiiO JIEZI on <span className="text-neon-cyan">3.5 mm single-ended</span>: <span className="text-neon-cyan">34 mW / 1.04 V / 32.60 mA</span></li>
                      <li>Verdict: <span className="text-neon-cyan">yes</span>.</li>
                    </ul>
                    <div className="mt-1">
                      Run the numbers yourself: <ExtLink href="https://theaudiostuff.com/tools/headphone-power-calculator/#sens=99&u=dbmw&z=32&v=1.04&spl=100&hr=14" className="text-neon-cyan">theaudiostuff.com</ExtLink> opens pre-filled with these values but doesn't report current, while <ExtLink href="https://headphones.com/pages/headphones-power-calculator" className="text-neon-cyan">headphones.com</ExtLink> gives you the <span className="text-neon-cyan">mA</span> figure but has to be filled in by hand.
                    </div>

                  </div>
                </>,
              ]}
            />
          </Card>
          <Card title="4 · Audio-Technica ATH-M50x BT2 — wired">
            <Bullets
              items={[
                <><span className="text-neon-magenta">Headphones:</span> <ExtLink href="https://www.audio-technica.com/en-us/ath-m50xbt2" className="text-neon-cyan">ATH-M50x BT2</ExtLink>, on the <span className="text-neon-cyan">3.5 mm</span> cable.</>,
                <><span className="text-neon-magenta">EQ:</span> none.</>,
                <>
                  <span className="text-neon-magenta">DAC:</span> <ExtLink href="https://fiio.com/newsinfo/1065510.html" className="text-neon-cyan">FiiO JIEZI</ExtLink>.
                  <div className="mt-2 rounded-md border border-neon-magenta/25 bg-neon-magenta/5 p-3 text-sm">
                    <div className="flex items-baseline gap-2"><span className="text-neon-magenta">Can it drive it?</span> <a href="#demands" title="Why these numbers — do you have enough power?" className="text-xs text-neon-cyan underline-offset-4 hover:underline">why?</a></div>
                    <ul className="mt-1 space-y-0.5">
                      <li>Sensitivity: <span className="text-neon-cyan">99 dB SPL/mW</span></li>
                      <li>Impedance: <span className="text-neon-cyan">38 Ω</span></li>
                      <li>Target average loudness: <span className="text-neon-cyan">90 dB SPL</span></li>
                      <li>Sound Check headroom: <span className="text-neon-cyan">7 dB</span> (so <span className="text-neon-cyan">97 dB</span> average at the amp)</li>
                      <li><span className="text-neon-cyan">PEQ</span> preamp headroom: <span className="text-neon-cyan">0 dB</span> (no PEQ)</li>
                      <li>Crest factor, jazz / acoustic: <span className="text-neon-cyan">14 dB</span></li>
                      <li>Peak needed: 90 + 7 + 0 + 14 = <span className="text-neon-cyan">111 dB SPL</span></li>
                      <li>Power needed: <span className="text-neon-cyan">16 mW</span></li>
                      <li>Voltage needed: <span className="text-neon-cyan">~776 mV</span></li>
                      <li>Current pushed: <span className="text-neon-cyan">20.42 mA</span></li>
                      <li>FiiO JIEZI on <span className="text-neon-cyan">3.5 mm single-ended</span>: <span className="text-neon-cyan">28.63 mW / 1.043 V / 27.45 mA</span></li>
                      <li>Verdict: <span className="text-neon-cyan">yes</span>.</li>
                    </ul>
                    <div className="mt-1">
                      Run the numbers yourself: <ExtLink href="https://theaudiostuff.com/tools/headphone-power-calculator/#sens=99&u=dbmw&z=38&v=1&spl=97&hr=14" className="text-neon-cyan">theaudiostuff.com</ExtLink> opens pre-filled with these values but doesn't report current, while <ExtLink href="https://headphones.com/pages/headphones-power-calculator" className="text-neon-cyan">headphones.com</ExtLink> gives you the <span className="text-neon-cyan">mA</span> figure but has to be filled in by hand.
                    </div>

                  </div>
                </>,
              ]}
            />
          </Card>
          <Card title="5 · Sennheiser HD 560S — wireless">
            <Bullets
              items={[
                <><span className="text-neon-magenta">Headphones:</span> <ExtLink href="https://en-uk.sennheiser.com/hd-560s" className="text-neon-cyan">Sennheiser HD 560S</ExtLink>.</>,
                <><span className="text-neon-magenta">EQ:</span> stock tuning, or the <span className="text-neon-cyan">PEQ</span> profile above loaded onto the 5K itself.</>,
                <><span className="text-neon-magenta">Receiver:</span> <ExtLink href="https://www.qudelix.com/products/qudelix-5k" className="text-neon-cyan">Qudelix 5K</ExtLink> as a <GlossaryLink term="ldac">LDAC</GlossaryLink> Bluetooth receiver, fed by a <ExtLink href="https://www.fiio.com/airlink" className="text-neon-cyan">FiiO Air Link</ExtLink> adapter.</>,
              ]}
            />
            <div className="mt-4 rounded-lg border border-neon-magenta/40 bg-neon-magenta/5 p-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-neon-cyan">How I run it</p>
              <p className="mt-2 text-sm text-foreground/85">
                The 5K velcros to the headband. I run <span className="text-neon-cyan">LDAC 990 kbps</span> and leave the tuning stock, with <span className="text-neon-magenta">no EQ of any kind</span>. The balanced output gives more headroom if you want it, and plugging in over USB makes it wired and bit-perfect. The <a href="#demands" className="text-neon-cyan underline-offset-4 hover:underline">power notes</a> explain how much margin this pairing has.
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
                <><span className="text-neon-magenta">EQ:</span> in the <span className="text-neon-cyan">Moondrop app</span> I keep the default bands, drop every Q to the minimum (<span className="text-neon-cyan">0.20</span>), then push all bands to max. That works out as a flat <span className="text-neon-cyan">+3 dB</span> lift across the board — on iPhone it buys about one volume step, so <span className="text-neon-cyan">85%</span> gets me where 100% used to.</>,
                <><span className="text-neon-magenta">Connection:</span> <ExtLink href="https://www.tempotec.net/" className="text-neon-cyan">Tempotec LHDC One</ExtLink> Bluetooth adapter.</>,
              ]}
            />
          </Card>
          <Card title="8 · Moondrop Pill / Pill S — wireless">
            <Bullets
              items={[
                <><span className="text-neon-magenta">Earbuds:</span> <ExtLink href="https://moondroplab.com/en/products/pill" className="text-neon-cyan">Moondrop Pill</ExtLink> or <span className="text-neon-cyan">Pill S</span>.</>,
                <><span className="text-neon-magenta">EQ:</span> in the <span className="text-neon-cyan">Moondrop app</span> I keep the default bands, drop every Q to the minimum (<span className="text-neon-cyan">0.20</span>), then push all bands to max. That works out as a flat <span className="text-neon-cyan">+3 dB</span> lift across the board — on iPhone it buys about one volume step, so <span className="text-neon-cyan">85%</span> gets me where 100% used to.</>,
                <><span className="text-neon-magenta">Connection:</span> Bluetooth <span className="text-neon-cyan">AAC</span> straight from the phone.</>,
              ]}
            />
          </Card>
        </div>
      </Section>

      <Divider />

      <Section id="demands" icon={Gauge} title="Do you have enough power?" tone="purple">
        <p className="mb-6 max-w-2xl text-base text-foreground/90">
          Two numbers decide how fussy a headphone is about its source: <span className="text-neon-cyan">impedance</span> (Ω) and <GlossaryLink term="sensitivity">sensitivity</GlossaryLink> (dB/mW or dB/V). Mismatch them and you get hiss, clipping, or not enough volume.
        </p>
        <p className="mb-6 max-w-2xl text-sm text-foreground/80">
          One correction before the table, because you will read the opposite everywhere. Impedance is just the <span className="text-neon-cyan">ratio of voltage to current</span>, and that ratio does not change with level, so a headphone does not draw proportionally more current in the bass. If it plays <span className="text-neon-magenta">loud enough, it has enough bass</span>, and vice versa. When an amp runs short of current you get <span className="text-neon-magenta">clipping on peaks</span> across the whole signal, not weak or thin bass. <ExtLink href="https://www.reddit.com/r/headphones/s/vq4C1c1tvn" className="text-neon-cyan">oratory1990 explains it here</ExtLink>.
        </p>
        <p className="mb-6 max-w-2xl text-sm text-foreground/80">
          Watch the units: <span className="text-neon-magenta">dB/mW</span> and <span className="text-neon-magenta">dB/V</span> are not interchangeable, and vendors quote whichever number flatters the product (<GlossaryLink term="sensitivity">how they convert</GlossaryLink>).
        </p>

        <SubHeading>The current-first law</SubHeading>
        <p className="mb-4 max-w-2xl text-sm text-foreground/80">
          To reach a given volume (dB SPL), a headphone's driver needs a definite amount of electrical flow: <span className="text-neon-cyan">current</span> (mA). Current is what creates the magnetic force that moves the diaphragm and vibrates the air.
        </p>
        <p className="mb-4 max-w-2xl text-sm text-foreground/80">
          How much current it takes comes from <GlossaryLink term="sensitivity">sensitivity</GlossaryLink> and impedance — how efficiently the voice coil turns milliamps into force. The figures below use a loud <span className="text-neon-magenta">110 dB SPL peak</span> so musical dynamics stay clean. Once the driver's target current is fixed, impedance decides how hard the amp has to work to deliver it:
        </p>
        <Bullets
          items={[
            <>
              <span className="text-neon-magenta">Low impedance</span> needs a big volume of current (high mA). The amp doesn't need much voltage pressure, but its <span className="text-neon-cyan">current reserves</span> have to be large or it clips.
            </>,
            <>
              <span className="text-neon-magenta">High impedance</span> needs very little current, because the tightly wound coil multiplies the magnetic force. But the wire resists electricity, so the amp needs a lot of <span className="text-neon-cyan">voltage</span> to force those few milliamps through.
            </>,
          ]}
        />
        <div className="mt-5 max-w-2xl rounded-md border border-border bg-background/40 p-4 text-sm">
          <p className="font-display text-neon-cyan">The current-first pipeline</p>
          <ul className="mt-2 space-y-1 font-mono text-xs text-foreground/90">
            <li>I(mA) = √( P(mW) × 1000 / R(Ω) ) &nbsp;— required current</li>
            <li>V = I(mA) × R(Ω) / 1000 &nbsp;— pressure to force it through</li>
            <li>P(mW) = V × I(mA) &nbsp;— total power</li>
          </ul>
        </div>

        <SubHeading>Current-centric output comparison</SubHeading>
        <p className="mb-4 max-w-2xl text-sm text-foreground/80">
          Target volume: <span className="text-neon-cyan">110 dB SPL peak</span>.
        </p>
        <div className="overflow-x-auto rounded-xl border border-border bg-card-gradient p-4">
          <table className="w-full min-w-[56rem] border-collapse text-left text-xs">
            <thead>
              <tr className="border-b border-border">
                <th scope="col" className="py-2 pr-3 font-semibold uppercase tracking-widest text-neon-cyan">Headphone type</th>
                <th scope="col" className="py-2 pr-3 font-semibold uppercase tracking-widest text-neon-cyan">Impedance</th>
                <th scope="col" className="py-2 pr-3 font-semibold uppercase tracking-widest text-neon-cyan">Sensitivity</th>
                <th scope="col" className="py-2 pr-3 font-semibold uppercase tracking-widest text-neon-cyan">Target current</th>
                <th scope="col" className="py-2 pr-3 font-semibold uppercase tracking-widest text-neon-cyan">Required voltage</th>
                <th scope="col" className="py-2 pr-3 font-semibold uppercase tracking-widest text-neon-cyan">Resulting power</th>
                <th scope="col" className="min-w-[13rem] py-2 font-semibold uppercase tracking-widest text-neon-cyan">The electrical demand</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  type: "Low Z / high sensitivity (typical IEMs)",
                  z: "16 Ω",
                  sens: "110 dB/mW (very high)",
                  i: "7.9 mA (tiny flow)",
                  v: "0.13 V (tiny push)",
                  power: "1.00 mW",
                  demand: "Ultra easy demand — barely draws voltage or current.",
                },
                {
                  type: "Low Z / low sensitivity (planar magnetic)",
                  z: "32 Ω",
                  sens: "90 dB/mW (very low)",
                  i: "55.9 mA (massive)",
                  v: "1.79 V (moderate)",
                  power: "100.00 mW",
                  demand: "Current-dominant demand — needs roughly 7x more current than voltage, which chokes weak dongles.",
                },
                {
                  type: "High Z / mid sensitivity (studio open-back)",
                  z: "300 Ω",
                  sens: "97 dB/mW (moderate)",
                  i: "8.2 mA (tiny flow)",
                  v: "2.45 V (high push)",
                  power: "20.00 mW",
                  demand: "Voltage-dominant demand — needs a high voltage push to squeeze past the high resistance.",
                },
              ].map((r) => (
                <tr key={r.z} className="border-b border-border/60 last:border-b-0">
                  <th scope="row" className="py-2 pr-3 font-semibold text-neon-magenta">{r.type}</th>
                  <td className="py-2 pr-3 text-foreground/90">{r.z}</td>
                  <td className="py-2 pr-3 text-foreground/90">{r.sens}</td>
                  <td className="py-2 pr-3 text-foreground/90">{r.i}</td>
                  <td className="py-2 pr-3 text-foreground/90">{r.v}</td>
                  <td className="py-2 pr-3 text-foreground/90">{r.power}</td>
                  <td className="min-w-[13rem] py-2 text-foreground/90">{r.demand}</td>
                </tr>
              ))}

            </tbody>
          </table>
        </div>

        <SubHeading>Online tools for your amp capability steps</SubHeading>
        <p className="mb-4 max-w-2xl text-sm text-foreground/80">
          These calculators turn the numbers above into a straight yes/no answer for any headphone / source pairing.
        </p>
        <div className="overflow-x-auto rounded-xl border border-border bg-card-gradient p-4">
          <table className="w-full min-w-[36rem] border-collapse text-left text-xs">
            <thead>
              <tr className="border-b border-border">
                <th scope="col" className="py-2 pr-3 font-semibold uppercase tracking-widest text-neon-cyan">Step</th>
                <th scope="col" className="py-2 pr-3 font-semibold uppercase tracking-widest text-neon-cyan">Objective</th>
                <th scope="col" className="py-2 font-semibold uppercase tracking-widest text-neon-cyan">Recommended online tool &amp; link</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border/60 last:border-b-0">
                <th scope="row" className="py-2 pr-3 font-semibold text-neon-magenta">Step 1</th>
                <td className="py-2 pr-3 text-foreground/90">Target Peak Loudness (dB SPL Calculation)</td>
                <td className="py-2 text-foreground/90">
                  No specialized web tool needed.
                  <br />
                  Simply use a standard phone calculator to add your manual targets:
                  <div className="mt-1 space-y-0.5 font-mono">
                    <div>[Desired Base (Avg) Listening Volume dB]</div>
                    <div>+ [PEQ Preamp Reduction Loss dB]</div>
                    <div>+ [Volume Normalisation Loss dB]</div>
                    <div>+ [Genre Dynamic Headroom Peaks dB]</div>
                  </div>
                </td>
              </tr>
              <tr className="border-b border-border/60 last:border-b-0">
                <th scope="row" className="py-2 pr-3 font-semibold text-neon-magenta">Step 2</th>
                <td className="py-2 pr-3 text-foreground/90">Calculate required current (mA)</td>
                <td className="py-2 text-foreground/90"><ExtLink href="https://headphones.com/pages/headphones-power-calculator" className="text-neon-cyan">Headphones.com Power Calculator</ExtLink><br /><ExtLink href="https://www.headphonesty.com/headphone-power-calculator/" className="text-neon-cyan">Headphonesty Power Calculator</ExtLink></td>
              </tr>
              <tr className="border-b border-border/60 last:border-b-0">
                <th scope="row" className="py-2 pr-3 font-semibold text-neon-magenta">Step 3</th>
                <td className="py-2 pr-3 text-foreground/90">Check amp capabilities (voltage &amp; power caps)</td>
                <td className="py-2 text-foreground/90"><ExtLink href="https://www.omnicalculator.com/everyday-life/headphone-power" className="text-neon-cyan">Omni Headphone Power Calculator</ExtLink><br /><ExtLink href="https://www.moon-audio.com/pages/headphone-amp-calculator" className="text-neon-cyan">Moon Audio Amp Calculator</ExtLink></td>
              </tr>
            </tbody>
          </table>
        </div>


        <div className="mt-10 max-w-2xl rounded-md border border-neon-magenta/25 bg-neon-magenta/5 p-4 text-sm text-foreground/90">

          <div className="font-display text-neon-magenta">Important · intersample clipping and headroom</div>
          <p className="mt-2">
            Playing music from a computer or phone, the sound cannot distort or clip <span className="text-neon-cyan">digitally</span> unless you push the volume or EQ too high in software. Even when your software settings look safe, a hidden kind of distortion called <span className="text-neon-magenta">intersample clipping</span> can still happen inside the hardware. It occurs when the digital audio is turned back into a real waveform and the peaks of that waveform overshoot what the hardware can handle.
          </p>
          <p className="mt-2">
            To stay clear of it, run the numbers through a free <span className="text-neon-cyan">headphone power calculator</span>. Different music needs different amounts of breathing room, or <span className="text-neon-magenta">headroom</span>: rock wants around <span className="text-neon-cyan">10 dB</span>, while acoustic and jazz want around <span className="text-neon-cyan">14 dB</span> for sudden peaks like a drum hit. The calculator tells you whether your portable DAC/amp dongle has enough output left to handle your genres cleanly — after <GlossaryLink term="replaygain">loudness normalization</GlossaryLink> pulls the level down, and after you lower the preamp yourself to make room for an <span className="text-neon-cyan">EQ</span> bass boost.
          </p>
          <p className="mt-3 text-neon-magenta">Calculators</p>
          <ul className="mt-1 space-y-1">
            <li><ExtLink href="https://theaudiostuff.com/tools/headphone-power-calculator/#sens=97&u=dbv&z=300&v=1.0&spl=85&hr=10" className="text-neon-cyan">theaudiostuff.com headphone power calculator</ExtLink> — pre-filled with a 300 Ω, 97 dB/V example at 1.0 V and 10 dB headroom.</li>
            <li><ExtLink href="https://www.headphonesty.com/headphone-power-calculator/" className="text-neon-cyan">Headphonesty headphone power calculator</ExtLink></li>
            <li><ExtLink href="https://headphones.com/pages/headphones-power-calculator" className="text-neon-cyan">Headphones.com power calculator</ExtLink></li>
          </ul>
        </div>

        <SubHeading>What the dongles actually put out</SubHeading>
        <p className="mb-4 max-w-2xl text-sm text-foreground/80">
          These are the figures the <span className="text-neon-magenta">Can it drive it?</span> panels in the <a href="#chain" className="text-neon-cyan underline-offset-4 hover:underline">chains section</a> compare against. The <span className="text-neon-cyan">32 Ω</span>, <span className="text-neon-cyan">38 Ω</span> and <span className="text-neon-cyan">120 Ω</span> rows are there because they are the loads I actually use: <span className="text-neon-magenta">AKG K371</span> / <span className="text-neon-magenta">HiFiMAN Sundara</span>, <span className="text-neon-magenta">ATH-M50x BT2</span> and <span className="text-neon-magenta">Sennheiser HD 560S</span>.
        </p>
        <div className="grid gap-5 lg:grid-cols-3">
          {dongleOutputs.map((d) => (
            <article
              key={d.name}
              className="rounded-xl border border-border bg-card-gradient p-4"
            >
              <h3 className="font-display text-base font-bold text-neon-magenta">{d.name}</h3>
              <p className="mt-1 text-xs text-foreground/70">{d.output}</p>
              <p className="mt-2 text-sm text-foreground/90">{d.published}</p>
              <div className="mt-3 overflow-x-auto">
                <table className="w-full min-w-[20rem] border-collapse text-left text-xs">
                  <thead>
                    <tr className="border-b border-border">
                      <th scope="col" className="py-2 pr-3 font-semibold uppercase tracking-widest text-neon-cyan">Ω</th>
                      <th scope="col" className="py-2 pr-3 font-semibold uppercase tracking-widest text-neon-cyan">Power</th>
                      <th scope="col" className="py-2 pr-3 font-semibold uppercase tracking-widest text-neon-cyan">Voltage</th>
                      <th scope="col" className="py-2 pr-3 font-semibold uppercase tracking-widest text-neon-cyan">Current</th>
                      <th scope="col" className="py-2 font-semibold uppercase tracking-widest text-neon-cyan">Limited by</th>
                    </tr>
                  </thead>
                  <tbody>
                    {d.rows.map((r) => (
                      <tr key={r.z} className="border-b border-border/60 last:border-b-0">
                        <th scope="row" className="py-2 pr-3 font-semibold text-neon-magenta">{r.z}</th>
                        <td className="py-2 pr-3 text-foreground/90">{r.power}</td>
                        <td className="py-2 pr-3 text-foreground/90">{r.voltage}</td>
                        <td className="py-2 pr-3 text-foreground/90">{r.current}</td>
                        <td className="py-2 text-foreground/80">{r.limit}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </article>
          ))}
        </div>

      </Section>

      <Divider />

      <Section id="preferences" icon={Headphones} title="Finding your own preferences" tone="purple">
        <div className="grid gap-5 md:grid-cols-2">
          <Card title="Start with two reference tunings">
            <p>
              If you don't know what you like yet, get two headphones that disagree with each other. The <ExtLink href="https://www.akg.com/Headphones/Professional%20Headphones/K371.html" className="text-neon-cyan">AKG K371</ExtLink> is <span className="text-neon-magenta">closed-back</span> and tuned to the <span className="text-neon-cyan">Harman</span> target; the <ExtLink href="https://en-uk.sennheiser.com/hd-560s" className="text-neon-cyan">Sennheiser HD 560S</ExtLink> is <span className="text-neon-magenta">open-back</span> and closer to <span className="text-neon-cyan">diffuse-field</span>. Load both into <ExtLink href="https://www.extreamsd.com/index.php/products/usb-audio-player-pro" className="text-neon-cyan">USB Audio Player Pro</ExtLink> with <ExtLink href="https://www.toneboosters.com/tb_morphit_v1.html" className="text-neon-cyan">ToneBoosters MorphIt</ExtLink> and swap between <GlossaryLink term="target">target curves</GlossaryLink> until you can tell which side you're on.
            </p>

          </Card>
        </div>
      </Section>


      <Divider />

      <Section id="phones" icon={Smartphone} title="Phones & Accessories" tone="cyan">
        <p className="mb-6 max-w-2xl text-base text-foreground/90">
          Any modern <span className="text-neon-cyan">iPhone</span> or <span className="text-neon-cyan">Android</span> phone is a fine starting point. Find out what yours already does first; a <span className="text-neon-magenta">DAC</span> or a <span className="text-neon-magenta">Bluetooth transmitter</span> is only worth buying to fill a gap.
        </p>

        <div className="grid gap-5 md:grid-cols-2">
          <Card title="Android phones">
            <Bullets
              items={[
                <>Plenty of mid-range Androids (<span className="text-neon-cyan">Motorola</span>, for one) ship with <span className="text-neon-magenta">Dolby Atmos</span>, <span className="text-neon-cyan">aptX HD</span> or better, and sometimes a <span className="text-neon-cyan">3.5 mm</span> jack that handles <span className="text-neon-cyan">24-bit / 192 kHz</span>.</>,
                <>The spec sheet often lists whatever a dongle would have added.</>,
                <>Volume control is the catch: most Androids give you a coarse slider of roughly <span className="text-neon-cyan">15 steps</span>, so the right listening level often sits between two of them. You get finer control only if the headphones or the dongle have their own <span className="text-neon-magenta">independent volume</span>. <span className="text-neon-cyan">Samsung</span> phones sometimes ship extra volume tools of their own; failing that, an app like <ExtLink href="https://play.google.com/store/apps/details?id=com.phascinate.precisevolume" className="text-neon-cyan">Precise Volume 2.0</ExtLink> can split the steps up.</>,
              ]}
            />
          </Card>
          <Card title="iPhones">
            <Bullets
              items={[
                <>Get a <span className="text-neon-cyan">USB-C iPhone</span> (15 and later) if you can — it can feed a USB DAC <span className="text-neon-magenta">directly</span> for hi-res playback.</>,
                <>Older <span className="text-neon-cyan">Lightning</span> iPhones need a <span className="text-neon-cyan">Camera Connection Kit</span> or a Lightning DAC, which is clunkier and pricier.</>,
                <>iOS has the same problem — the system slider moves in coarse steps, so with sensitive headphones the level you want falls between two of them. <span className="text-neon-magenta">Independent volume</span> on the headphones or dongle fixes it, and the <ExtLink href="https://apps.apple.com/us/app/volume-control/id6608975062" className="text-neon-cyan">Volume Control</ExtLink> app may give you finer steps on the phone itself.</>,
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
                <>Use whatever both ends already support.</>,
              ]}
            />
          </Card>
          <Card title="Dolby Atmos on phones">
            <Bullets
              items={[
                <>Many <span className="text-neon-cyan">Android</span> phones include a system-level <span className="text-neon-magenta">Dolby Atmos</span> or spatial processor.</>,
                <>It widens the stage, and stock-tuned headphones often sound more <span className="text-neon-magenta">open</span> with it on.</>,
                
              ]}
            />
          </Card>
        </div>
        <div className="mt-5 grid gap-5 md:grid-cols-2">
          <Card title="USB-C DAC dongles">
            <Bullets
              items={[
                <>For phones without a headphone jack, or when you want bit-perfect hi-res out to wired headphones. Paired with <ExtLink href="https://www.extreamsd.com/index.php/products/usb-audio-player-pro" className="text-neon-cyan">USB Audio Player Pro</ExtLink> or <ExtLink href="https://neutronmp.com/" className="text-neon-cyan">Neutron</ExtLink>, a USB DAC receives audio <span className="text-neon-magenta">directly and bit-perfect</span> at full resolution (e.g. <span className="text-neon-cyan">24-bit / 192 kHz</span>), bypassing Android's system mixer and <GlossaryLink term="src">SRC resampling</GlossaryLink>.</>,
                <>USB DAC behaviour is not consistent across handsets, so check <span className="text-neon-magenta">compatibility and known issues for your exact phone model</span> before buying.</>,
                <>Two of mine: the <span className="text-neon-cyan">FiiO KA11</span> is fine on Android and a Lightning iPhone 14, but goes <span className="text-neon-magenta">monophonic</span> on an iPhone 17 Pro Max in a way that looks potentially unsafe. The <span className="text-neon-cyan">Hidizs S9 Pro Plus</span> on firmware 1.0 broke on first use on that same iPhone 17 Pro Max, after working fine on Android and the Lightning 14.</>,
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

        <SubHeading>Recommended</SubHeading>
        <div className="grid gap-5 md:grid-cols-2">
          <Card title="Qudelix 5K" href="https://www.qudelix.com/products/qudelix-5k">
            <p className="text-sm text-foreground/85">
              A <span className="text-neon-cyan">USB DAC</span> and a <span className="text-neon-cyan">Bluetooth receiver</span> in the same small box, which is why it's the one thing I'd buy first.
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
                  A <span className="text-neon-magenta">20-band <GlossaryLink term="eq">parametric EQ</GlossaryLink></span> stored on the device itself, <span className="text-neon-cyan">AutoEQ</span> profiles out of the box, and a companion app that responds instantly.
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
              <p>One of the first dongles to put real <span className="text-neon-cyan">DSP</span> on the device: almost everything from the Neutron Player, plus extras like <span className="text-neon-cyan">THD Compensation</span>. Read the manual; it documents all of it.</p>
            </Card>
          </div>
          <p className="mt-4 text-sm text-foreground/85">
            <span className="font-semibold text-neon-magenta">A warning on FiiO's PEQ software:</span> it is buggy. At the time of writing, on both the JIEZI and the QX13, <span className="text-neon-cyan">Q</span> values on some bands shifted their decimals on their own, and the <span className="text-neon-cyan">preamp</span> field would only accept whole numbers.
          </p>
        </div>

      </Section>

      <Divider />

      <Section id="software" icon={Sliders} title="Software" tone="magenta">
        <p className="mb-6 max-w-2xl text-base text-foreground/90">
          This is where most of the sound gets decided: the <span className="text-neon-cyan">streaming service</span>, the <span className="text-neon-cyan">player</span> and whatever <GlossaryLink term="dsp">DSP</GlossaryLink> sits between them.
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
                <>All three players will find the files anywhere they have read access. No per-app folders to worry about.</>,
              ]}
            />
          </Card>
        </div>
      </Section>

      <Divider />

      <Section id="glossary" icon={BookOpen} title="Glossary" tone="cyan">
        <p className="mb-6 max-w-2xl text-base text-foreground/90">
          Definitions for the terms used above, in alphabetical order.
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
            <Card title="Bluetooth codecs (AAC, aptX, LDAC, LHDC)">
              <p>The rules used to compress audio for the Bluetooth link. <span className="text-neon-cyan">AAC</span> is the lossy baseline, <span className="text-neon-cyan">aptX HD</span> and <span className="text-neon-cyan">LDAC</span> carry more data (LDAC up to 990 kbps), and <span className="text-neon-cyan">aptX Lossless</span> is bit-exact CD quality. <span className="text-neon-cyan">LHDC High Resolution</span> goes up to 24-bit / 192 kHz, while <span className="text-neon-cyan">LHDC Lossless</span> is bit-exact 16-bit / 44.1 kHz. Both ends must support the same codec.</p>
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
              <p>Apple Music's built-in volume normalization — the streaming equivalent of ReplayGain, levelling tracks to roughly <span className="text-neon-cyan">-16&nbsp;LUFS</span>.</p>
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
          The sites I keep going back to for measurements, arguments and music worth buying.
        </p>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          <Card title="Reviews">
            <Bullets
              items={[
                <><ExtLink href="https://www.pragmaticaudio.com/" className="text-neon-cyan">Pragmatic Audio</ExtLink> — long headphone and IEM reviews, always with the measurements.</>,
                <><ExtLink href="https://www.headphoneer.com/" className="text-neon-cyan">Headphoneer</ExtLink> covers headphones, IEMs, amps and DACs in writing rather than video.</>,
                <>Twenty-odd years of enthusiast impressions sit on <ExtLink href="https://www.head-fi.org/" className="text-neon-cyan">Head-Fi</ExtLink>.</>,
                <><ExtLink href="https://www.audiosciencereview.com/forum/index.php" className="text-neon-cyan">Audio Science Review</ExtLink> starts from the measurements and argues from there.</>,
                <><ExtLink href="https://www.rtings.com/headphones" className="text-neon-cyan">RTINGS</ExtLink> runs the same tests on everything, so their comparisons hold up.</>,
              ]}
            />
          </Card>
          <Card title="Measurements & EQ tools">
            <Bullets
              items={[
                <><ExtLink href="https://squig.link/" className="text-neon-cyan">Squig.link</ExtLink> — overlay frequency-response graphs from a huge database.</>,
                <><ExtLink href="https://autoeq.app/" className="text-neon-cyan">AutoEQ</ExtLink> builds a parametric EQ preset from measurement data to hit a target curve.</>,
                <>Someone has often already built the preset you want; <ExtLink href="https://peqdb.com/" className="text-neon-cyan">PEQdb</ExtLink> is searchable by headphone and IEM.</>,
                <><ExtLink href="https://opra.roon.app/" className="text-neon-cyan">OPRA</ExtLink> — Roon's headphone preference rating explorer.</>,
                <>The preference-curve profiles I use come from the <ExtLink href="https://www.rtings.com/headphones/learn/eq-repository" className="text-neon-cyan">RTINGS EQ Repository</ExtLink>.</>,
              ]}
            />
          </Card>
          <Card title="Online tools">
            <Bullets
              items={[
                <>Power calculators tell you whether a dongle has the <span className="text-neon-cyan">voltage</span> and <span className="text-neon-magenta">headroom</span> for a given headphone — see <a href="#demands" className="text-neon-cyan underline-offset-4 hover:underline">Do you have enough power?</a></>,
                <><ExtLink href="https://theaudiostuff.com/tools/headphone-power-calculator/#sens=97&u=dbv&z=300&v=1.0&spl=85&hr=10" className="text-neon-cyan">theaudiostuff.com headphone power calculator</ExtLink> — the one the <span className="text-neon-magenta">Can it drive it?</span> panels use, pre-filled with a 300 Ω, 97 dB/V example.</>,
                <><ExtLink href="https://www.headphonesty.com/headphone-power-calculator/" className="text-neon-cyan">Headphonesty headphone power calculator</ExtLink></>,
                <><ExtLink href="https://headphones.com/pages/headphones-power-calculator" className="text-neon-cyan">Headphones.com power calculator</ExtLink></>,
              ]}
            />
          </Card>

          <Card title="Community">
            <Bullets
              items={[
                <><ExtLink href="https://www.head-fi.org/" className="text-neon-cyan">Head-Fi</ExtLink> — the biggest headphone forum there is.</>,
                <><ExtLink href="https://www.audiosciencereview.com/forum/index.php" className="text-neon-cyan">Audio Science Review</ExtLink>'s forum, where the measurements get picked apart.</>,
                <><ExtLink href="https://www.reddit.com/r/headphones/s/N2EtgyodPs" className="text-neon-cyan">r/headphones</ExtLink> for general discussion and news.</>,
                <><ExtLink href="https://www.reddit.com/r/oratory1990/s/U4gCItaBjU" className="text-neon-cyan">r/oratory1990</ExtLink> — EQ presets, and straight answers about how any of this works.</>,
                <>Budget recommendations get answered on <ExtLink href="https://www.reddit.com/r/HeadphoneAdvice/s/sYWZKVYEjL" className="text-neon-cyan">r/HeadphoneAdvice</ExtLink>.</>,
              ]}
            />
          </Card>
          <Card title="Music Stores">
            <Bullets
              items={[
                <><ExtLink href="https://www.qobuz.com/gb-en/shop" className="text-neon-cyan">Qobuz</ExtLink> — hi-res downloads as well as streaming, all lossless.</>,
                <><ExtLink href="https://bandcamp.com/" className="text-neon-cyan">Bandcamp</ExtLink> gives the artist a much bigger cut, and usually offers FLAC.</>,
                <><ExtLink href="https://uk.7digital.com/" className="text-neon-cyan">7digital</ExtLink> — big catalogue of hi-res and lossless downloads.</>,
              ]}
            />
          </Card>
          <Card title="Streaming & Playlists">
            <Bullets
              items={[
                <><ExtLink href="https://music.apple.com/" className="text-neon-cyan">Apple Music</ExtLink> is what I stream on, mostly because its suggestions are good. My best playlists came out of them.</>,
                <>Big <span className="text-neon-cyan">hi-res</span> / <span className="text-neon-cyan">lossless</span> catalogue, some <span className="text-neon-magenta">Spatial Audio</span> tracks, and normalization built in at roughly <span className="text-neon-cyan">-16 LUFS</span>.</>,
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
