export type Genre = "Pop" | "Synthwave" | "Metal";

export interface Pick {
  name: string;
  blurb: string;
  genres?: Genre[];
  pairing?: string;
}

export interface PickGroup {
  title: string;
  subtitle?: string;
  items: Pick[];
}

// Headphones & earbuds — placeholder picks (swap in HearByte's real list)
export const headphoneGroups: PickGroup[] = [
  {
    title: "Over-Ear",
    subtitle: "Open & closed-back picks for home and travel",
    items: [
      { name: "[Over-ear pick #1]", blurb: "Wide soundstage, addictive bass slam — synthwave's best friend.", genres: ["Synthwave", "Pop"] },
      { name: "[Over-ear pick #2]", blurb: "Fast, articulate drivers that keep up with double-kicks.", genres: ["Metal"] },
      { name: "[Over-ear pick #3]", blurb: "Warm, fun-tuned all-rounder for long sessions.", genres: ["Pop", "Synthwave", "Metal"] },
    ],
  },
  {
    title: "In-Ear (IEMs)",
    subtitle: "Pocketable detail and isolation",
    items: [
      { name: "[IEM pick #1]", blurb: "Punchy lows with sparkling highs — pop and synth shimmer.", genres: ["Pop", "Synthwave"] },
      { name: "[IEM pick #2]", blurb: "Clean midrange and tight bass for guitar-heavy genres.", genres: ["Metal"] },
      { name: "[IEM pick #3]", blurb: "Energetic V-tuning that makes everything feel bigger.", genres: ["Pop", "Synthwave", "Metal"] },
    ],
  },
  {
    title: "Wireless",
    subtitle: "Best-sounding cable-free picks",
    items: [
      { name: "[Wireless pick #1]", blurb: "LDAC + great tuning — the closest wireless gets to wired.", genres: ["Pop", "Synthwave"] },
      { name: "[Wireless pick #2]", blurb: "Active noise cancelling with surprisingly fun low end.", genres: ["Pop"] },
      { name: "[Wireless pick #3]", blurb: "True wireless with aptX Lossless for grab-and-go listening.", genres: ["Pop", "Synthwave", "Metal"] },
    ],
  },
];

export const sourceGroups: PickGroup[] = [
  {
    title: "Phones",
    subtitle: "Daily drivers that don't choke your headphones",
    items: [
      { name: "[Phone pick #1]", blurb: "Strong codec support and clean output via USB-C.", pairing: "Pairs with any IEM via dongle DAC" },
      { name: "[Phone pick #2]", blurb: "Solid wireless codec stack for high-bitrate Bluetooth.", pairing: "Great with LDAC headphones" },
    ],
  },
  {
    title: "Portable DACs & Dongles",
    subtitle: "Tiny power-ups for any phone or laptop",
    items: [
      { name: "[Dongle DAC #1]", blurb: "Pocket-sized, drives demanding IEMs with authority.", pairing: "Best with [IEM pick #1]" },
      { name: "[Dongle DAC #2]", blurb: "Balanced output, low noise floor — sensitive IEMs sing.", pairing: "Great for sensitive multi-BA IEMs" },
      { name: "[Desktop DAC/AMP]", blurb: "Home base with enough juice for hard-to-drive cans.", pairing: "Pairs with [Over-ear pick #2]" },
    ],
  },
  {
    title: "DAPs",
    subtitle: "Dedicated players for distraction-free listening",
    items: [
      { name: "[DAP pick #1]", blurb: "Clean, neutral output that lets your headphones be the star.", pairing: "Pairs with [IEM pick #2]" },
      { name: "[DAP pick #2]", blurb: "Warmer signature, perfect for long synthwave drives.", pairing: "Pairs with [Over-ear pick #1]" },
    ],
  },
];

export const softwareGroups: PickGroup[] = [
  {
    title: "Music Apps",
    subtitle: "Where the magic starts",
    items: [
      { name: "[Streaming app #1]", blurb: "Lossless tier + great catalog for modern genres." },
      { name: "[Local player #1]", blurb: "Bit-perfect playback of your own FLAC/ALAC library." },
    ],
  },
  {
    title: "EQ & Parametric",
    subtitle: "Shape any headphone toward your taste",
    items: [
      { name: "[EQ app #1]", blurb: "System-wide parametric EQ with target curves and presets." },
      { name: "[EQ app #2]", blurb: "AutoEq presets — get half-decent cans 80% of the way to greatness." },
    ],
  },
  {
    title: "DSP & Spatial",
    subtitle: "Add space, weight and energy",
    items: [
      { name: "[Crossfeed plugin]", blurb: "Tames hard-panned guitars and makes metal less fatiguing." },
      { name: "[Bass DSP]", blurb: "Subtle low-shelf magic for synthwave bass without mud." },
      { name: "[Spatial / convolution]", blurb: "Speaker-like staging that makes pop mixes breathe." },
    ],
  },
];