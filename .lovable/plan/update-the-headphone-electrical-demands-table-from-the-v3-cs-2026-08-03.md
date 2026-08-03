# Update the headphone electrical demands table from the v3 CSV

Replace the five rows of the "Headphone electrical demands" table with the fact-checked content from the newly uploaded v3 CSV, keeping the existing look, links and formatting conventions.

## What changes per row

**Low Z + low sensitivity (high current)** — wrong-amp column adds extreme amp heat and rapid battery drain. Sources: Qudelix 5K on balanced, noting it hits current saturation limits under 20 Ω (e.g. Aeon 2), or Hidizs Martha on balanced; FiiO KA11 has the raw power but runs intensely hot and drains the phone battery under continuous draw. Specific mW figures are dropped in favour of the CSV's wording.

**High Z + low sensitivity (high voltage)** — examples add Audio-Technica ATH-R70x. Wrong-amp column adds the loss of volume headroom once EQ is applied. Sources: desktop amps or powerful balanced portables; Qudelix 5K balanced gives decent swing; Neutron HiFi DAC V1 is clean at 2 VRMS but short on headroom with negative pre-amp gain for EQ.

**Low Z + high sensitivity (noise floor)** — bass described as bloated/loose/muddy; Neutron V1 output impedance corrected to under 0.6 Ω. Keeps the AKG K371 in-page link.

**Medium Z + high sensitivity** — wording tightened to "highly versatile: all perform cleanly without bottlenecking dynamics". Keeps the HD 560S in-page link.

**High Z + high sensitivity** — example changes from Audio-Technica ATH-R70x to Beyerdynamic DT 990 Pro (250 Ω); wrong-amp column adds compressed dynamics; sources note a legacy phone jack feels restricted and quiet.

## What stays the same

- Table component, columns, section intro paragraphs and the FiiO Air Link note.
- Ω / dB/mW symbol formatting instead of the CSV's plain "Ohm" text.
- `GearLink` links for Qudelix 5K, FiiO KA11, Hidizs Martha and Neutron HiFi DAC V1, plus the `#headphones` anchors on AKG K371 and Sennheiser HD 560S with their impedance/sensitivity figures.
- Row order (unchanged between CSV and page).

## Technical notes

Single edit to the `rows` array passed to `DataTable` in `src/pages/Index.tsx` (lines ~452-546). No component or schema changes.
