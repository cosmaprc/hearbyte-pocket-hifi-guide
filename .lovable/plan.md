# Rename the section to "Do you have enough power?"

The section no longer holds the electrical demands table. What's left is: impedance vs sensitivity, the bass/current correction, the dB/mW vs dB/V units note, and the intersample-clipping and headroom callout with calculators. "Do you have enough power?" describes that, and it pairs with the "Can it drive it?" panels that link into it.

## Changes

- **Section heading** in `src/pages/Index.tsx`: `Headphone electrical demands` becomes `Do you have enough power?`. The `#demands` anchor stays, so every existing link keeps working.
- **Table of contents** label in `src/components/hearbyte/TableOfContents.tsx`: `Headphone electrical demands` becomes `Enough power?`.
- **The six "why?" links** in the chains panels: their tooltip/title text updates from "Why these numbers — headphone electrical demands" to "Why these numbers — do you have enough power?".
- **The HD 560S + Qudelix chain paragraph**: "The electrical demands notes explain how much margin this pairing has." becomes "The power notes explain how much margin this pairing has.", still linking to `#demands`.

## What does not change

The `#demands` anchor id, all body copy inside the section, every spec, figure, calculator URL and outbound link, plus the page metadata, JSON-LD and sitemap (they reference the page, not this heading).

## Technical notes

Two files touched: `src/pages/Index.tsx` and `src/components/hearbyte/TableOfContents.tsx`. Finish with `bunx tsgo --noEmit -p tsconfig.app.json` and the Vitest suite (the existing test asserts section headings, so it will confirm the new title renders).
