# Update the current-first comparison table: sensitivity + electrical demand columns

The "Current-centric output comparison" table in the "Do you have enough power?" section is replaced by the newer seven-column version: Sensitivity comes back, current and voltage get qualifiers, and a final "The electrical demand" column names which metric dominates.

## New table

Target volume: 110 dB SPL peak.


| Headphone type                              | Impedance | Sensitivity           | Target current        | Required voltage   | Resulting power | The electrical demand                                                                            |
| ------------------------------------------- | --------- | --------------------- | --------------------- | ------------------ | --------------- | ------------------------------------------------------------------------------------------------ |
| Low Z / high sensitivity (typical IEMs)     | 16 Ω      | 110 dB/mW (very high) | 7.9 ok mA (tiny flow) | 0.13 V (tiny push) | 1.00 mW         | Ultra easy demand — barely draws voltage or current.                                             |
| Low Z / low sensitivity (planar magnetic)   | 32 Ω      | 90 dB/mW (very low)   | 55.9 mA (massive)     | 1.79 V (moderate)  | 100.00 mW       | Current-dominant demand — needs roughly 7x more current than voltage, which chokes weak dongles. |
| High Z / mid sensitivity (studio open-back) | 300 Ω     | 97 dB/mW (moderate)   | 8.2 mA (tiny flow)    | 2.45 V (high push) | 20.00 mW        | Voltage-dominant demand — needs a high voltage push to squeeze past the high resistance.         |


Everything else in the block — the current-first law prose, the formula panel, and the intersample-clipping callout below — stays as it is.

## Technical notes

Single file: `src/pages/Index.tsx`, table at lines ~328-373. Two extra `<th>`s (Sensitivity, The electrical demand) plus `sens` and `demand` fields with matching `<td>`s on each row object. Bump the table's `min-w-[40rem]` to `min-w-[56rem]` so the seven columns stay readable, keeping the existing `overflow-x-auto` sideways scroll on narrow screens; the demand cell gets a `min-w-[13rem]` so its sentence wraps rather than stretching the row. Verify with `bunx tsgo --noEmit -p tsconfig.app.json` and `bunx vitest run`.