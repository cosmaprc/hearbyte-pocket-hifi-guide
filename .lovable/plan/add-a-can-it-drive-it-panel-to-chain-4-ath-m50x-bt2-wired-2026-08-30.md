# Add a "Can it drive it?" panel to chain 4 (ATH-M50x BT2 — wired)

Match the panel style already used in chains 1, 2 and 3.

## What gets added

Under the DAC bullet (FiiO JIEZI) of chain 4, a bordered magenta panel titled "Can it drive it?" listing:

- Sensitivity: 99 dB SPL/mW
- Impedance: 38 Ω
- Target average loudness: 90 dB SPL
- Sound Check headroom: 7 dB (so 97 dB average at the amp)
- PEQ preamp headroom: 0 dB (no PEQ)
- Crest factor, jazz / acoustic: 14 dB
- Peak needed: 90 + 7 + 0 + 14 = 111 dB SPL
- Power / voltage needed: ~800 mW / ~0.8 V
- FiiO JIEZI on 3.5 mm single-ended: 1 V
- Verdict: yes

Followed by the pre-filled calculator link:
`https://theaudiostuff.com/tools/headphone-power-calculator/#sens=99&u=dbmw&z=38&v=1&spl=97&hr=14`

## Technical detail

Single edit in `src/pages/Index.tsx`, chain 4 card: the DAC bullet becomes a fragment containing the existing JIEZI link plus the same panel markup (`rounded-md border border-neon-magenta/25 bg-neon-magenta/5 p-3 text-sm`) used in chains 1–3. Nothing else changes; the "EQ: none." bullet stays.
