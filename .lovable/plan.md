# Add dongle power specs to "Do you have enough power?"

Add a new block at the end of the `#demands` section, after the intersample-clipping callout: **"What the dongles actually put out"** — one panel per dongle with the vendor-published output power spec plus a small table of output at 32 Ω, 38 Ω and 120 Ω (the three loads the chains on this page use).

## FiiO JIEZI

Published output power: L+R ≥ 49 mW + 49 mW (16 Ω, THD+N < 1%), L+R ≥ 34 mW + 34 mW (32 Ω, THD+N < 1%).

| Impedance | Power | Voltage | Current | Limited by |
| --- | --- | --- | --- | --- |
| 32 Ω | 34.00 mW | 1.043 Vrms | 32.60 mArms | Current / device |
| 38 Ω | 28.63 mW | 1.043 Vrms | 27.45 mArms | Voltage |
| 120 Ω | 9.07 mW | 1.043 Vrms | 8.69 mArms | Voltage |

## Qudelix 5K (2.5 mm balanced)

Published: max 4 Vrms output, 240 mW per channel.

| Impedance | Power | Voltage | Current | Limited by |
| --- | --- | --- | --- | --- |
| 32 Ω | 240.0 mW | 2.77 Vrms | 86.6 mArms | Current / thermal |
| 38 Ω | 240.0 mW | 3.02 Vrms | 79.5 mArms | Power / thermal |
| 120 Ω | 133.3 mW | 4.00 Vrms | 33.3 mArms | Voltage |

## FiiO QX13 (4.4 mm balanced, USB decoding, desktop mode, high gain)

Published output power: L+R ≥ 480 mW + 480 mW (16 Ω), ≥ 900 mW + 900 mW (32 Ω), ≥ 125 mW + 125 mW (300 Ω), all at THD+N < 1%.

| Impedance | Power | Voltage | Current | Limited by |
| --- | --- | --- | --- | --- |
| 32 Ω | 900.0 mW | 5.37 Vrms | 167.7 mArms | Current limited |
| 38 Ω | 986.8 mW | 6.12 Vrms | 161.2 mArms | Voltage limited |
| 120 Ω | 312.5 mW | 6.12 Vrms | 51.0 mArms | Voltage limited |

A short line above the panels notes these are the figures the "Can it drive it?" panels in the chains section compare against, and that the 32/38/120 Ω rows match the AKG K371 / HiFiMAN Sundara, ATH-M50x BT2 and HD 560S loads.

## Technical notes

Single file: `src/pages/Index.tsx`, inside `<Section id="demands">` after the existing callout. Each dongle gets a `rounded-xl border border-border bg-card-gradient p-4` panel with a magenta title, the published spec line, and a compact `<table>` (cyan uppercase headers, magenta impedance column) that scrolls horizontally on narrow screens. The existing `DataTable` component is shaped for the old headphone-profile rows, so this uses its own small markup rather than being forced through it. No content above changes; anchors, links and metadata untouched. Verify with `bunx tsgo --noEmit -p tsconfig.app.json` and `bunx vitest run`.
