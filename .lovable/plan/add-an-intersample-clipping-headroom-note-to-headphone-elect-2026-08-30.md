# Add an intersample clipping / headroom note to "Headphone electrical demands"

The section currently has three short paragraphs (impedance vs sensitivity, the oratory1990 current correction, the dB/mW vs dB/V units note) and no table. This adds one more block after those paragraphs, marked as important, plus a small list of headphone power calculators.

## What gets added

1. **An "Important" callout panel** at the end of the `#demands` section, styled like the existing bordered magenta panels used by the "Can it drive it?" blocks, containing your statement in two paragraphs:
   - Digital audio can't clip in software unless you push volume or EQ too high, but intersample clipping can still happen in hardware when the digital signal is converted back to an analogue waveform and the reconstructed peaks overshoot what the hardware can deliver.
   - Use a headphone power calculator to check you have enough headroom. Rock needs roughly 10 dB, acoustic and jazz roughly 14 dB for sudden peaks like drum hits. That tells you whether your dongle still has output left after loudness normalization (Spotify-style matching) or after you pull the preamp down for an EQ bass boost.

   Key terms get the existing neon-cyan / neon-magenta accent treatment, and `sensitivity`, `dynamic range` / `ReplayGain`-style terms link to the glossary where an entry already exists.

2. **A short list of calculators** under the callout, using the existing `ExtLink` component:
   - theaudiostuff.com headphone power calculator, pre-filled with your example (97 dB/V, 300 Ω, 1.0 V, 85 dB SPL, 10 dB headroom)
   - headphonesty.com headphone power calculator
   - headphones.com headphones power calculator

## What does not change

No gear, spec, number, anchor or layout change elsewhere. The three existing paragraphs, the oratory1990 link and the `#demands` anchor stay as they are. The pre-filled calculator links already used in chains 1-4 are untouched.

## Technical notes

Edit confined to the `#demands` `Section` in `src/pages/Index.tsx`, reusing `ExtLink`, `Bullets` and the existing panel classes. Finish with `bunx tsgo --noEmit -p tsconfig.app.json` and the Vitest suite.
