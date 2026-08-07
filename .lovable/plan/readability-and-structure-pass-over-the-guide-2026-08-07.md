# Readability and structure pass over the guide

The content is strong but the page currently reads as nine gear sections with no on-ramp, and a few blocks duplicate or bury the most useful information. These changes are all presentation and copy — no data or behaviour changes.

## 1. Give the page an on-ramp

- Add a short "Start here" block directly under the hero, above Phones & Accessories: three numbered steps (pick your phone/source, pick a player and DSP chain, pick headphones), each linking to the matching section.
- Move **My preferred audio chain** up so it sits right after that block. It is the most actionable content on the page and currently appears fifth, after two long gear sections.

## 2. Fix duplicated and vaguely labelled blocks

- **Recommended DACs** and **Recommended Bluetooth receivers** are both single-card grids for the same Qudelix 5K. Merge into one card that states plainly it covers both roles, with the wired and wireless bullets grouped under labels.
- Rename **Other pairings** to something meaningful (e.g. "Also owned and tested") and group its five cards by form factor the same way the Recommended block is grouped, so both halves of the section read the same way.
- Align the table of contents labels with the actual headings: "Electrical demands" / "Headphone electrical demands", "My chain" / "My preferred audio chain", "Transfer" / "Getting music onto your phone".

## 3. Make the electrical demands table usable on a phone

- The table is seven columns at a 68rem minimum width, so on mobile it is a silent horizontal scroll. Add a visible scroll cue, and stack each row into a labelled card below the `md` breakpoint so nothing needs scrolling sideways.
- On desktop, keep the profile column pinned while scrolling horizontally.
- Add a one-line takeaway above the table for readers who will not parse it, stating that every headphone recommended on this page is comfortably driven by the recommended sources and that the table exists for the edge cases.

## 4. Glossary and jargon

- Add entries for terms already used in the body but missing from the glossary: LDAC / aptX, dB/mW vs dB/V, output impedance and damping factor, SRC resampling, ALC, DynamEQ, Sound Check.
- Link the first occurrence of each glossary term in the body copy to its glossary entry.
- Repeat the Bongiovi H/G legend as a compact one-liner inside the first "How I run it" panel that uses city presets, since the section-level legend is far above by then.

## 5. Visual polish

- The "How I run it" panels use the same cyan border on every card, which flattens the tiering. Give the Recommended cards a stronger accent than the Other cards so the hierarchy is visible at a glance.
- Tighten vertical rhythm: subsection labels currently use ad-hoc `mt-8` / `mt-10` spacing. Standardise on one subsection-label component so the spacing is uniform across sections.

## Technical notes

Changes are confined to `src/pages/Index.tsx`, `src/components/hearbyte/DataTable.tsx` (responsive card fallback plus sticky first column), `src/components/hearbyte/TableOfContents.tsx` (label text), and one new small `SubHeading` component in `src/components/hearbyte/`. No data model, routing or dependency changes.
