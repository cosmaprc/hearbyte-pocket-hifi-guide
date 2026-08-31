# Update Step 3 link in "Online tools for your amp capability steps" table

## Goal
Replace the two calculator links in Step 3 of the `Online tools for your amp capability steps` table with a single Ohm's Law calculator link.

## Current state (verified)
- File: `src/pages/Index.tsx`, lines 433–438.
- Step 3 currently lists:
  - <ExtLink href="https://www.omnicalculator.com/everyday-life/headphone-power">Omni Headphone Power Calculator</ExtLink>
  - <ExtLink href="https://www.moon-audio.com/pages/headphone-amp-calculator">Moon Audio Amp Calculator</ExtLink>

## Change
Update only the Step 3 tool/link cell to a single ExtLink:
- URL: `https://www.omnicalculator.com/physics/ohms-law`
- Label: `Omni Ohm's Law Calculator`

Keep the existing objective text, table styling, ExtLink `className="text-neon-cyan"`, and surrounding sections unchanged.

## Validation
- Type-check the project after the edit.
- Visually confirm the table renders correctly in the preview.