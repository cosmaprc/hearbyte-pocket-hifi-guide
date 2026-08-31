# Use the Ω symbol in the current-centric comparison table

## Goal
Make the current-centric output comparison table consistent with the "What the dongles actually output" table by using the ohm symbol `Ω` instead of the letter `Z`.

## Changes
1. In `src/pages/Index.tsx`, update the three rows in the current-centric output comparison table:
   - `Low Z / high sensitivity (typical IEMs)` → `Low Ω / high sensitivity (typical IEMs)`
   - `Low Z / low sensitivity (planar magnetic)` → `Low Ω / low sensitivity (planar magnetic)`
   - `High Z / mid sensitivity (studio open-back)` → `High Ω / mid sensitivity (studio open-back)`

## Verification
- Run `bun run test` and `bun run build` to confirm no regressions.
- Visually confirm the table displays the Ω symbol correctly.