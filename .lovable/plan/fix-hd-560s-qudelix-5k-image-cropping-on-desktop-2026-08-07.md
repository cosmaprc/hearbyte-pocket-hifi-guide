# Fix HD 560S + Qudelix 5K image cropping on desktop

## What changes

`src/pages/Index.tsx` — the two photos inside the "Sennheiser HD 560S + Qudelix 5K" card.

The images currently use `object-cover` with the default center crop, which hides the top of each photo on desktop. On mobile the crop is narrower, so the top stays visible.

- Change the image crop anchor from center to top so the headband / Qudelix mount stays in view on desktop.
- Adjust desktop height to give the photos a bit more room (`md:h-48` or similar) so the crop is less aggressive.
- Keep the existing two-column grid, lazy loading, and rounded styling.

## What does not change

- Image files, aspect ratios, and alt text remain the same.
- Mobile layout remains unchanged.
- Other cards are unaffected.

## Files to edit

- `src/pages/Index.tsx` — update the two `<img>` tags in the HD 560S + Qudelix 5K card.
