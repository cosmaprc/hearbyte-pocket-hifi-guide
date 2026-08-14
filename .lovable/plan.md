# Plan: Cite oratory1990's Reddit comment in the electrical demands section

## Goal
Add a source link to oratory1990's Reddit comment that debunks the "headphones need more current in the bass" misconception, located in the "Headphone electrical demands" section.

## Changes

1. In `src/pages/Index.tsx`, at the end of the "One correction first" paragraph (currently line 525), append a citation link:
   - URL: https://www.reddit.com/r/headphones/s/vq4C1c1tvn
   - Label: "Source: oratory1990's comment on r/headphones"
   - Use the existing `ExtLink` component with `text-neon-cyan` styling.

## Implementation notes
- Edit only `src/pages/Index.tsx`.
- Keep the existing paragraph text intact; add the citation as a separate sentence at the end.
- Match the surrounding typography (`text-sm text-foreground/80`).
- No Table of Contents or section layout changes are required.
