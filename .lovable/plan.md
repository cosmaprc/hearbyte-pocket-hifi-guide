# Link the "Can it drive it?" panels to the electrical demands section

Each chain's "Can it drive it?" panel does the power math but never points at the section that explains the reasoning behind it (impedance vs sensitivity, the current misconception, units, and the new intersample clipping / headroom note).

## The change

In each of the six "Can it drive it?" panels — chain 1 (Qudelix 5K and FiiO QX13), chain 2 (Qudelix 5K and FiiO QX13 + Estick), chain 3 (AKG K371 / FiiO JIEZI) and chain 4 (ATH-M50x BT2 wired / FiiO JIEZI) — add an anchor link to `#demands`.

The link is a small label sitting next to the "Can it drive it?" heading — a compact `why?` link in neon cyan at a smaller size, pointing at `#demands`, with an accessible title/aria-label such as "Why these numbers — headphone electrical demands".

- **Full panels** (the four with the bulleted math): the heading row becomes "Can it drive it?  why?" with the label right-aligned or immediately after the title on the same line.
- **One-line panels** (chain 1's QX13, chain 2's Qudelix): the same small label follows the "Can it drive it?" label so all six behave identically.

The link uses the same in-page anchor style already used elsewhere on the page (`<a href="#demands" className="text-neon-cyan underline-offset-4 hover:underline">`), matching the existing "electrical demands notes" link in the HD 560S + Qudelix chain card.

## What does not change

No number, verdict, calculator URL, gear name, panel layout or section heading changes. Purely an added cross-reference in each panel.

## Technical notes

Edits confined to the six panel blocks in the chains section of `src/pages/Index.tsx`. Finish with `bunx tsgo --noEmit -p tsconfig.app.json` and the Vitest suite.
