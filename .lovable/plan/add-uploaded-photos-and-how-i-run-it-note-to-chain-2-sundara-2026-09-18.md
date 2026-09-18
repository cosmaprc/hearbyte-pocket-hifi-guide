# Add uploaded photos and "How I run it" note to Chain 2 (Sundara)

## What changes

Add the four uploaded photos to the **Chain 2 · HiFiMAN Sundara (2022) — untethered** card and include the same “How I run it” note that Chain 1 uses.

### Images

Create web-sized copies of the four uploaded JPEGs (max ~1400 px wide, quality ~82) and save them under `src/assets/`:

- `sundara-qudelix-back.jpg` (from `IMG_0221.jpeg`)
- `sundara-qudelix-side.jpg` (from `IMG_0220.jpeg`)
- `sundara-front-stand.jpg` (from `IMG_0219.jpeg`)
- `sundara-back-stand.jpg` (from `IMG_0218.jpeg`)

Import all four in `src/pages/Index.tsx` and display them in a two-column grid under the new “How I run it” panel, using the same styling as Chain 1:

- `loading="lazy"`
- rounded corners (`rounded-lg`)
- border (`border border-border`)
- `object-cover object-top`
- `h-40 md:h-48`
- `2` grid columns with `gap-3`

### "How I run it" note

Add the same panel that Chain 1 has, placed immediately before the image grid inside the Sundara card:

```
How I run it
The 5K velcros to the headband. I run LDAC 990 kbps.
```

Styling matches Chain 1: `rounded-lg border border-neon-magenta/40 bg-neon-magenta/5 p-4`, uppercase tracking-widest heading in `text-neon-cyan`, body in `text-sm text-foreground/85`.

### Chain 1

No changes. The existing HD 560S images and wording stay exactly as they are.

## Files to edit

- `src/pages/Index.tsx` — add four image imports, the "How I run it" panel, and the image grid inside the Chain 2 card.

## Verification

- Run `bunx tsgo --noEmit -p tsconfig.app.json`.
- Run `bunx vitest run --reporter=verbose`.
- Visually confirm the Sundara card now shows the note and four images, while the HD 560S card is unchanged.
