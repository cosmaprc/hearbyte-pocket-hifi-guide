# Update Step 1 in "Online tools for your amp capability steps" table

## Goal
Replace the current Step 1 cell in the `Online tools for your amp capability steps` table with the user's expanded instructions for calculating target peak loudness.

## Current state (verified)
- File: `src/pages/Index.tsx`, lines 386–417.
- Step 1 currently reads: "Target peak loudness (dB SPL calculation)" / "No specialized web tool needed. Simply use a standard phone calculator: `[Avg dB] + [PEQ Loss] + [Genre Headroom]`."
- Steps 2 and 3 remain unchanged and match the user's reference.

## Change
Update only the Step 1 row (lines 400–404) to:
- Objective: `Target Peak Loudness (dB SPL Calculation)`
- Tool / link cell: prose explaining that no specialized web tool is needed, using a standard phone calculator to add four terms:
  - `[Desired Base (Avg) Listening Volume dB]`
  - `[PEQ Preamp Reduction Loss dB]`
  - `[Volume Normalisation Loss dB]`
  - `[Genre Dynamic Headroom Peaks dB]`

Preserve existing table styling, `ExtLink` usage for Steps 2 and 3, and surrounding sections.

## Validation
- Type-check the project after the edit.
- Visually confirm the table renders correctly in the preview.