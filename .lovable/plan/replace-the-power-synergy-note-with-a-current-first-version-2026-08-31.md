# Replace the power-synergy note with a current-first version

The "How power, voltage and current fit together" block and the "Electrical output comparison" table in `#demands` get replaced by the current-first framing: current is the physical thing the driver needs, voltage and power are what the amp has to do to deliver it.

## What the new block says

**The current-first law** (replaces the old subheading and prose)

- To reach a given volume (dB SPL), the driver needs a definite amount of electrical flow: current (mA). Current creates the magnetic force that moves the diaphragm.
- The current target comes from sensitivity and impedance — how efficiently the voice coil turns milliamps into force, measured at a loud 110 dB SPL peak so dynamics stay clean.
- The amplifier's challenge, as two bullets:
  - Low impedance: needs a large current volume (high mA). Little voltage pressure required, but the amp's current reserves must be big or it clips.
  - High impedance: needs very little current, because the tightly wound coil multiplies the magnetic force. But the wire resists electricity, so the amp needs a lot of voltage to force those few milliamps through.

**The current-first mathematical pipeline** (replaces the old three formula lines, same bordered mono panel)

- Required current: `I(mA) = √( P(mW) × 1000 / R(Ω) )`
- Required voltage: `V = I(mA) × R(Ω) / 1000`
- Total power: `P(mW) = V × I(mA)`

One correction to the note as written: `I(mA) = √(P(mW) / R(Ω)) × 1000` gives 250 mA for the 16 Ω / 1 mW row, not 7.9 mA. The 1000 belongs inside the root (`√(1 × 1000 / 16) = 7.9 mA`), which reproduces all three table rows exactly. The plan uses the corrected form; every quoted figure stays as supplied.

**Current-centric output comparison** — target volume 110 dB SPL peak, columns reordered so current leads:

| Headphone type | Impedance | Physical target current | Required voltage | Resulting power |
| --- | --- | --- | --- | --- |
| Low Z / high sensitivity (typical IEMs) | 16 Ω | 7.9 mA (low flow) | 0.13 V | 1.00 mW |
| Low Z / low sensitivity (planar magnetic) | 32 Ω | 55.9 mA (critical flow) | 1.79 V | 100.00 mW |
| High Z / mid sensitivity (studio open-back) | 300 Ω | 8.2 mA (low flow) | 2.45 V | 20.00 mW |

The old Sensitivity and Amp bottleneck columns go away, since the new table is five columns as supplied.

## What stays untouched

The three intro paragraphs above (impedance/sensitivity, the bass-current correction, the dB/mW vs dB/V units note), the intersample-clipping callout below, and the dongle output tables after it.

## Technical notes

Single file: `src/pages/Index.tsx`, replacing lines ~298-383. Same markup vocabulary as now — `SubHeading`, `Bullets`, `font-mono` formulas in a bordered `bg-background/40` panel, and the compact `overflow-x-auto` table with cyan uppercase headers and a magenta row header. Verify with `bunx tsgo --noEmit -p tsconfig.app.json` and `bunx vitest run`.
