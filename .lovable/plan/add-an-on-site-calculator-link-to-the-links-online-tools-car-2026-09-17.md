# Add an on-site calculator link to the Links > Online tools card

The Online tools card in the Links section currently points to external power calculators and to the `#demands` section. It does not link to the native `Universal amplifier & saturation calculator` that now lives at `#calculator`.

## Change

Add a new bullet at the top of the Online tools card in `src/pages/Index.tsx`:

- Link text: "Universal Amplifier & Saturation Calculator" (or similar plain-language label).
- Destination: `#calculator` (same-page anchor, styled with the existing internal-link pattern used for `#demands`).
- Tone/style: cyan/magenta highlights consistent with the existing bullet.

Keep all existing external calculator links and the `#demands` link unchanged.

## Validation

- Type-check with `bunx tsgo --noEmit -p tsconfig.app.json`.
- Run `bunx vitest run`.
- Spot-check the Links section visually to confirm the new bullet appears and the anchor scrolls to the calculator section.