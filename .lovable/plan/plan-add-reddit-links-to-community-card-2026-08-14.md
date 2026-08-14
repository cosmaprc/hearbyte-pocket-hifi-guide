# Plan: Add Reddit links to Community card

## Goal
Add the three requested Reddit links to the Community card in the Links section.

## Changes

1. **Community** card in `src/pages/Index.tsx` — append three links:
   - r/headphones: https://www.reddit.com/r/headphones/s/N2EtgyodPs
   - r/oratory1990: https://www.reddit.com/r/oratory1990/s/U4gCItaBjU
   - r/HeadphoneAdvice: https://www.reddit.com/r/HeadphoneAdvice/s/sYWZKVYEjL

## Implementation notes
- Edit only `src/pages/Index.tsx`.
- Use the existing `ExtLink` component and `text-neon-cyan` styling, matching the current Community card entries.
- No Table of Contents or section layout changes are required.
