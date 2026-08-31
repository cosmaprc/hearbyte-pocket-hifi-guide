# Add the Sensitivity column back to the current-first comparison table

The "Current-centric output comparison" table in the "Do you have enough power?" section gains a Sensitivity column between Impedance and Physical target current, matching the final reference note.

## New table

Target volume: 110 dB SPL peak.

| Headphone type | Impedance | Sensitivity | Physical target current | Required voltage | Resulting power |
| --- | --- | --- | --- | --- | --- |
| Low Z / high sensitivity (typical IEMs) | 16 Ω | 110 dB/mW (very high) | 7.9 mA (low flow) | 0.13 V | 1.00 mW |
| Low Z / low sensitivity (planar magnetic) | 32 Ω | 90 dB/mW (very low) | 55.9 mA (critical flow) | 1.79 V | 100.00 mW |
| High Z / mid sensitivity (studio open-back) | 300 Ω | 97 dB/mW (moderate) | 8.2 mA (low flow) | 2.45 V | 20.00 mW |

Everything else in the block — the current-first law prose, the formula panel, and the intersample-clipping callout below — stays as it is.

## Technical notes

Single file: `src/pages/Index.tsx`, table at lines ~328-373. Add a sixth `<th>` and a `sens` field on each row object plus its `<td>`, and bump the table's `min-w-[40rem]` to `min-w-[48rem]` so the extra column doesn't crush on narrow screens. Verify with `bunx tsgo --noEmit -p tsconfig.app.json` and `bunx vitest run`.
