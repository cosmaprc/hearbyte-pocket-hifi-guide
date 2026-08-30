# Update the electrical demands table sources

Swap the retired dongles out of the "Sources that drive it" column so the table only references gear still recommended on this page.

## What changes

Remove every mention of the **FiiO KA11** and the **Hidizs S9 Pro Plus (Martha)** from the Headphone electrical demands table, and put the **FiiO JIEZI** and **FiiO QX13** in their place. The Qudelix 5K and Neutron HiFi DAC V1 references stay as they are.

Row by row:

- **Low impedance + low sensitivity (high current):** the QX13 becomes the strongest option here — FiiO publishes 250 mW per channel single-ended and 605 mW balanced into 32 Ω (310/900 mW in desktop mode with the Estick battery attached), which is more than any dongle previously listed. Qudelix 5K balanced stays as the second option, JIEZI is called out as the wrong tool for hard planars, and the "still no substitute for a desktop amp" caveat stays.
- **High impedance + low sensitivity (high voltage):** QX13 balanced replaces the KA11 as the pick, using FiiO's published 125 mW into 300 Ω balanced / 40 mW single-ended figures. The point that a 200 mW-into-32 Ω rating means nothing at 300 Ω is kept, reframed around single-ended dongles like the JIEZI.
- **Low impedance + high sensitivity (noise floor):** no gear removed here, so this row is untouched.
- **Medium impedance + high sensitivity:** the "everything drives it" list becomes Qudelix 5K, FiiO JIEZI, FiiO QX13 and Neutron HiFi DAC V1.
- **High impedance + high sensitivity:** the KA11 sentence becomes a note that a plain single-ended dongle such as the JIEZI is voltage-limited, while the QX13 on 4.4 mm balanced is comfortable.

Also update the note above the table that says the last column only covers gear recommended on this page, so the "same dongle appears in two rows" example reads naturally with the QX13's single-ended and balanced outputs.

## Accuracy note

FiiO publishes no output-power or output-impedance figures for the JIEZI, so the table will describe it qualitatively (a low-power single-ended dongle, fine for easy loads) rather than quote numbers we cannot source. All QX13 numbers come from FiiO's own spec sheet.

## Technical detail

Single file: `src/pages/Index.tsx`, the `rows` array passed to `DataTable` in the `#demands` section (roughly lines 353-467). Only the `sources` fields and one intro paragraph change; profiles, specs, demands, targets, wrong-amp text and examples stay identical. `GearLink` is a plain styling wrapper with no link map, so new gear names need no extra wiring. Verify with `bunx tsgo --noEmit -p tsconfig.app.json` and `bunx vitest run`.
