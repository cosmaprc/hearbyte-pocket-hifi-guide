# Plan: Update Links section with new resources

## Goal
Add the requested external resources to the Links section, grouped logically.

## Changes

1. **Measurements & EQ tools** card — append two links:
   - OPRA: https://opra.roon.app/
   - RTINGS EQ Repository: https://www.rtings.com/headphones/learn/eq-repository

2. **Reviews** card — append one link:
   - RTINGS Headphones: https://www.rtings.com/headphones

3. **New Learning card** in the Links grid, containing:
   - RTINGS EQ Remeasurements: https://www.rtings.com/headphones/learn/research/eq-remeasurements
   - RTINGS Headphones Table tool: https://www.rtings.com/headphones/tools/table
   - RTINGS Headphones Compare tool: https://www.rtings.com/headphones/tools/compare

## Implementation notes
- Edit only `src/pages/Index.tsx`.
- Use the existing `ExtLink` component and `text-neon-cyan` styling, matching the current Links cards.
- Place the new Learning card after "Streaming & Playlists" so the grid flows left-to-right, top-to-bottom.
- No Table of Contents update is required because the existing `#links` section already covers the category.
