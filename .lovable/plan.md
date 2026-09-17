# Recheck every "Can it drive it?" panel against the new calculator

I re-ran all five panels through the calculator's own formulas (demand: `P = 10^((peak − sens)/10)`, `V = √(P × Z)`, `I = V / Z`; amp ceiling: current cap vs voltage rail, then `SPL = sens + 10·log10(P)`, headroom = ceiling − peak).

## What already matches

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
| Qudelix, no EQ (111 dB peak) | 10 mW / ~1.1 V / 9.13 mA | 10.47 mW / ~1.12 V / 9.34 mA |
| Qudelix, with PEQ (121 dB peak) | 100 mW / ~3.46 V / 28.87 mA | 104.71 mW / ~3.55 V / 29.54 mA |

Fix: update those six numbers to the calculator's values. Verdicts stay yes.

## Add the ceiling and headroom to every panel

Each panel gains two lines after the dongle output line, matching the calculator's own result labels:

| Panel | Peak needed | Saturation ceiling | Headroom left |
| --- | --- | --- | --- |
| Chain 1 — Qudelix, no EQ | 111 dB | 122.05 dB SPL | +11.05 dB |
| Chain 1 — Qudelix, with PEQ | 121 dB | 122.05 dB SPL | +1.05 dB |
| Chain 2 — Sundara, Qudelix, no EQ | 111 dB | 115.80 dB SPL | +4.80 dB |
| Chain 2 — Sundara, QX13, PEQ | 120 dB | 121.82 dB SPL | +1.82 dB |
| Chain 3 — K371, JIEZI | 114 dB | 114.31 dB SPL | +0.31 dB |
| Chain 4 — M50x BT2, JIEZI | 111 dB | 113.57 dB SPL | +2.57 dB |

Headroom in cyan when positive, as in the calculator. Chain 2's no-EQ panel is currently one prose sentence rather than a list; it keeps that shape with the two figures appended.

Three of these are tighter than the flat "yes" suggests, so the verdict line gets the margin attached:

- Chain 3 (K371 on the JIEZI): "yes, but only ~0.3 dB spare — trim the PEQ preamp or the target level for real margin."
- Chain 1 with PEQ: "yes, ~1.0 dB spare."
- Chain 2 with PEQ on the QX13: "yes, ~1.8 dB spare."

## Link each panel straight into the calculator

The calculator currently has no way to be opened pre-filled. Add hash-parameter support so a link can carry a full case and run it on arrival:

`#calculator?mode=A&pLow=49&zLow=16&pHigh=34&zHigh=32&z=32&sens=99&avg=97&crest=14&gain=3`

On load the component reads those parameters, fills the matching fields, calculates immediately, and scrolls the results into view. Each panel's "Run the numbers yourself" line then gains a third option: "or open it in the calculator on this page, pre-filled and already worked out." The two external calculators stay.

Per-panel amp parameters, taken from the dongle tables already on the page:

- Qudelix 5K — Mode B, 4.00 V rail, 240 mW at 32 Ω override
- FiiO QX13 — Mode A, 480 mW at 16 Ω, 125 mW at 300 Ω
- FiiO JIEZI — Mode A, 49 mW at 16 Ω, 34 mW at 32 Ω

## Note on the Qudelix current figure

The page quotes the Qudelix at 32 Ω as 240 mW / 2.77 V / 86.6 mA. The calculator's Mode B default (81.08 mA from Qudelix's spreadsheet) instead gives 210 mW / 2.59 V, about 0.6 dB lower. The links above use the 240 mW override so the calculator and the page agree; say the word if you'd rather the page follow the spreadsheet figure.

## Technical notes

- `src/pages/Index.tsx` — the five panels: number corrections, two new lines each, verdict wording, extra calculator link.
- `src/components/hearbyte/AmpCalculator.tsx` — parse the location hash query on mount, seed state, auto-run `calculate`, focus/scroll the results region.
- Verify with `bunx tsgo --noEmit -p tsconfig.app.json`, `bunx vitest run`, and a Playwright pass opening two of the pre-filled links to confirm the ceiling and headroom match the table above.
