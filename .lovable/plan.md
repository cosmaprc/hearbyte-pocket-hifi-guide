# Add worst-case note to calculator section 3

In `src/components/hearbyte/AmpCalculator.tsx`, under **3. Listening & headroom targets (optional)**, append the user's note to the existing help text after the worked 118 dB SPL example:

> Note: The target calculated above is a worst-case scenario. Due to how real music crest factors and digital attenuation overlap, your actual peak volume in daily listening will likely be roughly 5 to 6 dB lower than this number.

## Placement

Insert at the end of the `<span className={subtextCls}>` block that already contains the formula explanation, genre crest-factor guide, and worked example.

## Files affected

- `src/components/hearbyte/AmpCalculator.tsx`

## Verification

- Run `bunx tsgo --noEmit -p tsconfig.app.json`.
- Run `bunx vitest run`.
- Visually confirm the note renders directly under the worked example in the calculator panel.
