# Fold the HD 560S + Qudelix details into the chains section and drop Headphones & Earbuds

## 1. Enrich chain 5 (Sennheiser HD 560S — wireless)

Move the "How I run it" panel and the two photos from the "Sennheiser HD 560S + Qudelix 5K" card into the chain 5 card:

- The panel text (velcro the 5K to the headband, LDAC 990 kbps, stock tuning / no EQ, balanced output for headroom, USB when you want it bit-perfect, link to the electrical demands table).
- The two images in the existing two-up grid, same rounded borders, alt text, lazy loading and desktop cropping fix.
- The chain bullet's cross-link to the old headphone card is replaced (that card no longer exists), the bullets themselves stay as they are.

## 2. New standalone card: "Figuring out your own preferences"

The K371 vs HD 560S / MorphIt A/B advice becomes its own small section (icon + heading, same styling as the other sections), placed directly after "My preferred audio chains". Text unchanged, links to AKG K371, Sennheiser HD 560S, USB Audio Player Pro and ToneBoosters MorphIt kept.

## 3. Remove Headphones & Earbuds entirely

Delete the whole `headphones` section: the intro paragraph, the order/Bongiovi legend panel, and every product card (HD 560S, ATH-M50x BT2, HD 560S + Qudelix 5K, Moondrop U.C.T.S., Moondrop Pill, AKG K371), plus its divider.

Because the section disappears, these references need fixing:

- Table of contents: drop the "Headphones" entry, add the new preferences section entry.
- The three `#headphones` anchors (chain 5 bullet, and two rows in the electrical demands table) are repointed at the new section or the chains section, whichever reads correctly.
- Any imports/helpers that become unused (e.g. the `Headphones` icon, `GearLink`, glossary links only used there) are cleaned up.

## Technical notes

Single file for the content: `src/pages/Index.tsx`, plus `src/components/hearbyte/TableOfContents.tsx` for the nav labels. The two image imports stay, now used by the chains section. Existing `Section` / `Card` / `Bullets` / `SubHeading` components are reused; no new components. Finish with a typecheck and the existing tests (`src/pages/Index.test.tsx` may reference removed copy and will be updated if so).
