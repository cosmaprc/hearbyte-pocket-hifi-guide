- HearByte Music Listening Guide — Single Page Site

A dark, neon synthwave landing page presenting HearByte's quick-pick recommendations for getting the best sound out of headphones and earbuds across modern genres (pop, synthwave, metal).

## Page structure (top to bottom)

1. **Hero**
  - HearByte wordmark/logo (text-based, neon glow)
  - Tagline: "Tips for the best listening experience from your headphones & earbuds"
  - Short intro paragraph + scroll cue
  - Animated synthwave backdrop (CSS gradient sun + grid horizon, subtle)
2. **Intro / How to use this guide**
  - 2–3 sentences on HearByte's philosophy: pair good gear with the right source and a touch of DSP
3. **Headphones & Earbuds — Quick Picks**
  - Grid of cards grouped into tabs or columns: Over-ear, In-ear (IEMs), Wireless
  - Each card: product name + 1-line reason + small genre tag chips (Pop / Synthwave / Metal)
4. **Source Gear — Phones, DACs & DAPs**
  - Three sub-sections (Phones, Portable DACs/dongles, DAPs)
  - Same quick-pick card style; each card hints at a recommended pairing from section 3
5. **Software & DSP — Apps, EQ, Effects**
  - Cards for music apps, EQ/parametric apps, spatial/crossfeed plugins
  - One-liner per pick
6. **Note: Lossless vs Lossy**
  - Short callout panel explaining when it matters and when it doesn't
  - "Good enough" baseline + when to chase lossless
7. **Note: Wired vs Wireless**
  - Callout panel on tradeoffs (latency, codecs, convenience, sound ceiling)
8. **Footer**
  - HearByte mark, small tagline, year

## Visual design

- **Aesthetic:** dark synthwave — deep navy/black background, magenta + cyan neon accents, subtle purple gradient glows
- **Typography:** bold geometric display font for headings (with subtle text-glow), clean sans for body
- **Cards:** dark glass panels with thin neon borders that brighten on hover; small glow on accent text
- **Backdrop accents:** CSS-only sun + horizon grid in the hero, faint scanline/grid overlay in section dividers
- **Motion:** light fade-in on scroll, hover lifts on cards — nothing distracting
- **Mobile-first:** single-column stacking, tap-friendly cards, viewport tested at 390px

## Content handling

Since you'll provide the actual list, the page will ship with clearly labeled placeholder picks (e.g. "[Headphone pick #1]" with a sample one-liner) so the layout is fully realized. You can then send me your list and I'll drop the real names and one-liners in.

## Technical details

- New `src/pages/Index.tsx` replacing the placeholder
- Section components under `src/components/hearbyte/` (Hero, PicksGrid, PickCard, GearSection, SoftwareSection, NoteCallout, Footer)
- Picks data lives in a typed `src/data/picks.ts` file — easy to edit later
- Synthwave theme tokens added to `src/index.css` (HSL) and `tailwind.config.ts` (neon magenta, cyan, deep purple, grid line color); no inline colors
- Hero backdrop and grid built with pure CSS/SVG (no images required)
- Genre tags use the existing `Badge` component; cards use existing `Card` primitives where possible
- Single route `/`, no routing changes
- Fully responsive, accessible color contrast on neon text verified against dark background