# Fix misplaced calculator help text

## What happened
The detailed replacement text for the calculator's "3. Listening & headroom targets (optional)" paragraph was applied to the `Online tools for your amp capability steps` table in `src/pages/Index.tsx` instead of `src/components/hearbyte/AmpCalculator.tsx`.

## What to fix
1. In `src/components/hearbyte/AmpCalculator.tsx`, replace the old paragraph under "3. Listening & headroom targets (optional)" with the requested formula, positive-loss note, genre crest-factor guide, and worked 118 dB SPL example.
2. In `src/pages/Index.tsx`, revert Step 1 of the `Online tools for your amp capability steps` table to a concise description, since the detailed explanation will live in the calculator itself.
3. Run type-check, tests, and a quick Playwright scroll/screenshot check to confirm the calculator shows the new help text and the table renders correctly.

## Files affected
- `src/components/hearbyte/AmpCalculator.tsx`
- `src/pages/Index.tsx`
