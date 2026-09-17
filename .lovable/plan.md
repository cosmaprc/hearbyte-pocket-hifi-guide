# Rebuild every "Can it drive it?" panel from the calculator, at an 85 dB target

Three changes at once: the average loudness target drops from 90 to 85 dB SPL (the calculator's reference), every figure is recomputed with the calculator's own formulas, and each panel gains the calculator's saturation ceiling, headroom, and a link that opens the on-page calculator pre-filled.

Formulas used: peak = avg + Sound Check + PEQ preamp + crest; `P = 10^((peak − sens)/10)`; `V = √(P × Z)`; `I = V / Z`; amp ceiling = lower of current cap and voltage rail, then `SPL = sens + 10·log10(P)`; headroom = ceiling − peak.

## New numbers for each panel

| Panel | Peak needed | Power | Voltage | Current | Ceiling | Headroom |
| --- | --- | --- | --- | --- | --- | --- |
| Chain 1 — HD 560S, Qudelix, no EQ (85+7+0+14) | 106 dB | 3.31 mW | ~0.63 V | 5.25 mA | 122.05 dB | +16.05 dB |
| Chain 1 — HD 560S, Qudelix, with PEQ (85+7+10+14) | 116 dB | 33.11 mW | ~1.99 V | 16.61 mA | 122.05 dB | +6.05 dB |
| Chain 2 — Sundara, Qudelix, no EQ (85+7+0+14) | 106 dB | 25.12 mW | ~0.90 V | 28.02 mA | 115.80 dB | +9.80 dB |
| Chain 2 — Sundara, QX13, with PEQ (85+7+9+14) | 115 dB | 199.53 mW | ~2.53 V | 78.96 mA | 121.82 dB | +6.82 dB |
| Chain 3 — K371, JIEZI (85+7+3+14) | 109 dB | 10.00 mW | ~0.57 V | 17.68 mA | 114.31 dB | +5.31 dB |
| Chain 4 — M50x BT2, JIEZI (85+7+0+14) | 106 dB | 5.01 mW | ~0.44 V | 11.48 mA | 113.57 dB | +7.57 dB |

Every panel's "Target average loudness" line becomes 85 dB SPL and the peak arithmetic line is rewritten accordingly. All verdicts stay yes, and at 85 dB none are marginal any more, so no "only X dB spare" caveats are needed.

## Differences found against the current page

- **Chain 1 was slightly under-stated even at 90 dB.** It listed 10 mW / ~1.1 V / 9.13 mA and 100 mW / ~3.46 V / 28.87 mA; the calculator gives 10.47 mW / 9.34 mA and 104.71 mW / 29.54 mA, because the panels were derived from rounded power rather than from peak SPL. Both are replaced by the 85 dB figures above.
- **Chains 2, 3 and 4 matched exactly at 90 dB** (79.43 mW / 1.59 V / 49.82 mA, 631 mW / 4.49 V / 140.42 mA, 31.62 mW / 1.006 V / 31.44 mA, 15.85 mW / 0.776 V / 20.42 mA), so those panels only change because of the new target.
- **At 90 dB, three panels were within 2 dB of clipping** (K371 +0.31 dB, HD 560S with PEQ +1.05 dB, Sundara on QX13 +1.82 dB). Dropping to 85 dB is what removes that risk — worth one short sentence in the intro above the chain cards.

## Two new lines per panel

After the dongle output line, each panel gains:

- Saturation ceiling: X dB SPL
- Headroom left: +X dB

Headroom shown in cyan while positive, mirroring the calculator. Chain 2's no-EQ panel is a single prose sentence rather than a list; it keeps that shape with the same figures appended.

## Link each panel into the on-page calculator

The calculator can't currently be opened pre-filled. Add hash-parameter support so a link carries a complete case and runs it on arrival:

`#calculator?mode=A&pLow=49&zLow=16&pHigh=34&zHigh=32&z=32&sens=99&avg=85&crest=14&gain=3`

On load it fills the fields, calculates immediately, and scrolls the results into view. Each panel's "Run the numbers yourself" line gains a third option — "or open it in the calculator on this page, pre-filled and already worked out" — alongside the existing theaudiostuff.com and headphones.com links.

Amp parameters per dongle, from the tables already on the page:

- Qudelix 5K — Mode B, 4.00 V rail, 240 mW at 32 Ω override
- FiiO QX13 — Mode A, 480 mW at 16 Ω, 125 mW at 300 Ω
- FiiO JIEZI — Mode A, 49 mW at 16 Ω, 34 mW at 32 Ω

The external pre-filled theaudiostuff.com links also get their `spl` values updated from 97/107/106/100 to the new 85 dB averages (92, 102, 101, 95).

## Note on the Qudelix current figure

The page quotes the Qudelix at 32 Ω as 240 mW / 2.77 V / 86.6 mA. The calculator's Mode B default (81.08 mA from Qudelix's spreadsheet) gives 210 mW / 2.59 V instead — about 0.6 dB lower. The links use the 240 mW override so page and calculator agree; say the word if you'd rather follow the spreadsheet figure.

## Technical notes

- `src/pages/Index.tsx` — the five panels: target, peak arithmetic, power/voltage/current, two new result lines, updated calculator links.
- `src/components/hearbyte/AmpCalculator.tsx` — parse the location hash query on mount, seed state, auto-run `calculate`, scroll the results region into view.
- Verify with `bunx tsgo --noEmit -p tsconfig.app.json`, `bunx vitest run`, and a Playwright pass opening two pre-filled links to confirm the ceiling and headroom match the table above.
