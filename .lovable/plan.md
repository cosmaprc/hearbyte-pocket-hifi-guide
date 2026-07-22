## Goal

Restructure the Headphones section into curated tiers, split DACs and Bluetooth receivers out of "Phones & Accessories" into their own tiered subsections, and swap Tidal for Apple Music in the Streaming card.

## 1. Headphones & Earbuds — split into two subsections

Inside the existing `#headphones` Section, add a short intro paragraph directly under the existing legend/ordering panel (before either subsection heading) that recommends trying the **AKG K371** (closed-back, Harman) and **Sennheiser HD 560S** (open-back, diffuse-field / flat) via **USB Audio Player Pro**'s **ToneBoosters MorphIt** plugin to figure out your own preferences (open vs closed, Harman vs diffuse-field / flat) before investing further.

Then group cards under two labeled subsections (h3-style headings matching the "Playlists" sub-heading pattern already used in the Streaming card):

- **Recommended headphones / earbuds**
  - **Creative Aurvana Ace 3** — new Card. Bullets: Form Factor `in-ear (true wireless)`; ANC `Yes`; Wired `N/A`; Others `xMEMS solid-state tweeters, LDAC, aptX Lossless, Mimi sound personalisation`. "How I run it": the **Mimi sound personalisation** in the Creative app makes a huge difference — run the hearing test once and leave it on; stack a light jetAudio Bongiovi chain only if desired.
  - **Sennheiser HD 560S** — new Card. Bullets: Form Factor `wired over-ear (open-back)`; ANC `No`; Wired `3.5mm (6.3mm adapter)`; Others `diffuse-field / neutral tuning, open-back soundstage, easy to drive`. "How I run it": pair with **USB Audio Player Pro** + **ToneBoosters MorphIt** to try target curves; otherwise stock is already reference-flat.

- **Other pairings** — everything currently in the section stays here unchanged, including **AKG K371**: AirPods Pro 2, AKG K371, ATH-M50x BT2, Cambridge Audio A100, Cambridge Audio P100SE, Moondrop Pill.

Alphabetical order preserved within each subsection. The existing legend/order panel stays at the top of the section; its ordering note is tweaked to say "alphabetical within each subsection".

## 2. Phones & Accessories — extract DACs and Bluetooth receivers

Current "USB-C DAC dongles" and "Bluetooth transmitters" cards get slimmed to conceptual explanations only (no product picks). Product picks move to new subsections rendered inside the same `#phones` Section, below the current grid, using the same sub-heading pattern:

### Recommended DACs
- **Qudelix 5K** — new Card, linked to `https://www.qudelix.com/products/qudelix-5k-dac-amp`. Reference USB-DAC + Bluetooth receiver with a first-class 20-band PEQ app; the pick if you only buy one.

### Other DACs
- **FiiO KA11** — moved from existing "USB-C DAC dongles" box.
- **Neutron HiFi DAC V1** — moved from existing box.
- **Hidizs S9 Pro Plus Martha** — new entry, linked to `https://www.hidizs.net/products/hidizs-s9pro-plus-martha-balanced-mini-hifi-dac-amp`. Dual ES9038Q2M, 3.5mm SE + 4.4mm balanced out, powerful for a dongle.

### Recommended Bluetooth receivers
- **Qudelix 5K** — same product, listed here too because it doubles as a BT receiver (LDAC, aptX Adaptive, on-device PEQ over Bluetooth).

The existing "Bluetooth transmitters" card (FiiO Air Link) stays as-is under the concept card — transmitters and receivers are different use cases, so no merge.

## 3. Streaming & Playlists card — swap Tidal → Apple Music

In the Links section's "Streaming & Playlists" card:
- Replace the Tidal blurb with Apple Music: preferred streaming and music discovery app, hi-res / lossless catalogue, spatial audio, volume normalization at **-16 LUFS**.
- Replace both playlist links with the Apple Music equivalents:
  - `https://music.apple.com/gb/playlist/deze-beats-is-twistin-me-brainz/pl.u-gxblgE4C5ve93Gz` — "Deze Beats is Twistin Me Brainz"
  - `https://music.apple.com/gb/playlist/face-meltin-synths/pl.u-jV890p9Cd6ExlpN` — "Face Meltin Synths"

Also update the ReplayGain "Neutron Volume Normalization" card copy: `-14 LUFS` example currently says "match Tidal, Spotify and YouTube" — swap to "Spotify, YouTube and Tidal" (drop Tidal-first framing), keep `-16 LUFS` labelled as Apple Music.

## Technical notes

- All edits in `src/pages/Index.tsx`. No new components, no TOC changes.
- Subsection headings use the existing pattern: `<p className="text-xs font-semibold uppercase tracking-widest text-neon-cyan">…</p>` above each grid. Grids stay `md:grid-cols-3` (headphones) / `md:grid-cols-2` (DACs, BT receivers).
- Reuse `Card`, `Bullets`, `ExtLink`. Existing imported icons are sufficient.

## Open questions

1. For **Other DACs**, prefer `md:grid-cols-3` of three Cards (KA11, Neutron V1, Martha), or a single Card with a definition list? Default: three Cards.
2. For **Aurvana Ace 3** and **HD 560S**, add Bongiovi/AM3D pairing rows now, or leave "How I run it" as the short note until dialed in? Default: short note only.
