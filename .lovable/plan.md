# Remove "How I run it" panels from four headphone cards

In the Headphones & Earbuds section, delete the "How I run it" panel from these cards:

- Sennheiser HD 560S (wired) — removes the UAPP + MorphIt note.
- Audio Technica ATH-M50x BT2 — removes the jetAudio note, Bongiovi H/G legend and the Bluetooth/Wired DSP table.
- Moondrop Pill — removes the Moondrop app PEQ note and the InEar/Reference DSP table.
- AKG K371 — removes the Default and Neutron / HiFi DAC V1 rows.

Kept as-is: the "Sennheiser HD 560S + Qudelix 5K" card keeps its panel, and the "My preferred audio chains" section is untouched. Product bullets, links and images on the four cards stay unchanged.

## Technical notes

Single file: `src/pages/Index.tsx`. Remove the four `<div className="mt-4 rounded-lg …">` blocks containing the "How I run it" heading at roughly lines 312-317, 332-350, 409-424 and 439-451. Then check whether the Bongiovi/AM3D legend text or any imports/helpers become unused and clean those up, and run a typecheck.
