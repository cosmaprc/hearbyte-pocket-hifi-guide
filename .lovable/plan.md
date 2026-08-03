# Update the headphone electrical demands table from the new CSV

Replace the five rows of the "Headphone electrical demands" table with the fact-checked content from the uploaded CSV, keeping the existing look, links and formatting conventions.

## What changes

For each of the five profiles, update:
- **Amplifier target spec** — e.g. the low-impedance/low-sensitivity row now also calls for robust thermal dissipation.
- **What happens with the wrong amp** — now includes extreme amp heat, rapid battery drain and clipping where relevant.
- **Common examples** — the CSV adds Audio-Technica ATH-R70x to the high-current row, Beyerdynamic DT 880 (250/600 Ω) detail, and Focal Clear (55 Ω, highly sensitive) plus Sennheiser HD 660S2 to the last row.
- **Sources that drive it** — corrected figures and caveats: Qudelix 5K quoted as 160-210 mW real-world (current-limited) rather than 240 mW/ch, plus the note that the FiiO KA11 has the raw power but runs hot and drains the source battery under continuous high current; Qudelix 5K's 4 VRMS balanced swing called out on the high-voltage row.

## What stays the same

- Table component, columns, section intro paragraphs and the note about FiiO Air Link adapters.
- Ω / dB/mW symbol formatting instead of the CSV's plain "Ohm" text.
- Existing in-page links: `GearLink` for Qudelix 5K, FiiO KA11, Hidizs Martha and Neutron HiFi DAC V1, and the `#headphones` anchors on AKG K371 and Sennheiser HD 560S (kept with their impedance/sensitivity figures appended, as today).
- Row order (unchanged between the CSV and the page).

## Technical notes

Single edit to the `rows` array passed to `DataTable` in `src/pages/Index.tsx` (lines ~452-546). No component or schema changes; the new `sources` copy is longer, so it renders as the same JSX fragments with wrapped `GearLink` elements.
