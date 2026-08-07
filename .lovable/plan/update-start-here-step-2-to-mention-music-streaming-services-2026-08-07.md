# Update Start here step 2 to mention music streaming services

## What changes

`src/pages/Index.tsx` — Start here section.

The second step currently tells readers to "Pick a player and a DSP chain" but skips the music streaming service, even though the user's preferred audio chain (Apple Music) is the core of the listening experience.

- Rewrite step 2 of the `startSteps` array so the title and body explicitly mention both the music streaming service and the player/DSP chain.
- Keep the link target as `#software` (or split to `#chain` / `#software` if needed) so it still points to the relevant sections.
- Mention Apple Music as the preferred streaming service, with Sound Check on and other DSP off, then note the player/EQ chain as a follow-up decision.
- Slightly adjust step 3's wording so it does not imply every headphone needs EQ, matching the HD 560S / no-EQ preference in the chain.

## What does not change

- "My preferred audio chain" content stays the same; it already uses Apple Music.
- TOC labels, component structure, and styling are unchanged.

## Files to edit

- `src/pages/Index.tsx` — update `startSteps` copy only.
