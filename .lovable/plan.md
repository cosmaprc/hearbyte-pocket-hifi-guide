# Add a "Can it drive it?" panel to chain 3 (AKG K371)

Match the format already used in chains 1 and 2: keep the FiiO JIEZI DAC bullet, and add a bordered panel underneath it with the power math and a pre-filled calculator link.

## Panel contents

- Sensitivity: 99 dB SPL/mW
- Impedance: 32 Ω
- Target average loudness: 90 dB SPL
- Sound Check headroom: 7 dB
- PEQ preamp headroom: ~3 dB
- Crest factor, jazz / acoustic: 14 dB
- Peak needed: 90 + 7 + 3 + 14 = 114 dB SPL
- Power / voltage needed: ~800 mW / ~0.8 V
- FiiO JIEZI on 3.5 mm single-ended: 1 V
- Verdict: yes
- Link: pre-filled headphone power calculator (`sens=99`, `z=32`, `v=1`, `spl=98`, `hr=14`)

## Technical notes

Single edit in `src/pages/Index.tsx`, inside the `3 · AKG K371 — wired` card: the DAC bullet becomes a fragment with the existing text plus the same `rounded-md border border-neon-magenta/25 bg-neon-magenta/5` panel and `<ul>` list used in chains 1 and 2. No other content changes.
