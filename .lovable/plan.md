# Recheck every "Can it drive it?" panel against the new calculator

I re-ran all five panels through the calculator's own formulas (demand: `P = 10^((peak − sens)/10)`, `V = √(P × Z)`, `I = V / Z`; amp ceiling: current cap vs voltage rail, then `SPL = sens + 10·log10(P)`).

## What matches already

| Panel | Page says | Calculator |
| --- | --- | --- |
| Chain 2 — Sundara, Qudelix, no EQ | 79.43 mW / 1.59 V / 49.82 mA | identical |
| Chain 2 — Sundara, QX13, PEQ | 631 mW / ~4.5 V / 140.42 mA | 630.96 mW / 4.49 V / 140.42 mA |
| Chain 3 — K371, JIEZI | 32 mW / ~1.01 V / 31.44 mA | 31.62 mW / 1.006 V / 31.44 mA |
| Chain 4 — M50x BT2, JIEZI | 16 mW / ~776 mV / 20.42 mA | 15.85 mW / 0.776 V / 20.42 mA |

## The two real differences (chain 1, HD 560S)

Both chain 1 panels were worked out from a rounded power figure rather than from the peak SPL, so they read slightly low:

| Chain 1 panel | Page says | Calculator |
| --- | --- | --- |
| Qudelix, no EQ (111 dB peak) | 10 mW / ~1.1 V / 9.13 mA | 10.47 mW / 1.12 V / 9.34 mA |
| Qudelix, with PEQ (121 dB peak) | 100 mW / ~3.46 V / 28.87 mA | 104.71 mW / 3.55 V / 29.54 mA |

Proposed fix: update those six numbers to the calculator's values (10.47 mW / ~1.12 V / 9.34 mA and 104.71 mW / ~3.55 V / 29.54 mA). Verdicts stay yes — the Qudelix gives 133.3 mW / 4.00 V / 33.3 mA at 120 Ω either way.

## Two things worth saying out loud

1. **K371 on the JIEZI is only just enough.** The calculator puts the JIEZI's ceiling at 114.31 dB SPL into 32 Ω against the 114 dB needed — about 0.3 dB spare. Suggest keeping the "yes" but adding a short line: "yes, but with only ~0.3 dB spare — drop the PEQ preamp or the target level for more margin."
2. **Sundara on the QX13 is also tight.** Ceiling 121.8 dB against 120 dB needed, roughly 1.8 dB spare. Suggest the same treatment: "yes, ~1.8 dB spare."

For contrast the comfortable ones: HD 560S no EQ ~11 dB spare, HD 560S with PEQ ~1.0 dB (also tight), M50x ~2.6 dB.

## Optional consistency addition

Add one final line to each of the five panels, "Headroom left: X dB", so every panel reports the same figure the calculator ends on. Say the word if you'd rather leave the panels as they are.

## Note on the Qudelix figures

The page quotes the Qudelix 5K at 32 Ω as 240 mW / 2.77 V / 86.6 mA. The calculator's Mode B default current ceiling (81.08 mA, from Qudelix's spreadsheet) gives 210 mW / 2.59 V instead; you get the page's 86.6 mA only by using the optional "240 mW at 32 Ω" override. Both say yes for the Sundara, so no page change is needed — but the two sources disagree by about 0.6 dB and it may be worth picking one.

## Technical notes

Single file: `src/pages/Index.tsx`, the five panels only. Calculator links keep their existing pre-filled values. Finish with `bunx tsgo --noEmit -p tsconfig.app.json` and `bunx vitest run`.
