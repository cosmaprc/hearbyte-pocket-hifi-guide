# Add a "Universal Amplifier & Saturation Calculator" section

A new interactive section on the main page, placed immediately after "Do you have enough power?" (`#demands`) and before "Finding your own preferences". The calculator's HTML form and JavaScript are rebuilt as a native React component in the site's neon style — no iframe, no external file.

## Placement

```text
My preferred audio chains
Do you have enough power?          (#demands)
Amplifier & Saturation Calculator  (new #calculator section)
Finding your own preferences
Phones & Accessories
...
```

## What gets built

1. **New component** `src/components/hearbyte/AmpCalculator.tsx`:
   - The calculator's form fields (inputs, dropdowns, buttons) rebuilt with React state, styled with the existing design tokens: `bg-card-gradient` panel, `border-border`, cyan/magenta accents, matching the "Can it drive it?" panels and dongle output tables.
   - The JavaScript calculation logic ported to a plain TypeScript function, run on input change (no form submit / page reload).
   - Results area styled like the dongle output tables (cyan uppercase labels, magenta highlights for key figures).
2. **New section in `src/pages/Index.tsx`** using the existing `Section` component with id `calculator`, a `Calculator` lucide icon, and cyan tone. One intro sentence links it back to the theory in `#demands`.
3. **Table of contents** in `src/components/hearbyte/TableOfContents.tsx`: add a "Calculator" chip between "Enough power?" and "Preferences" so scroll highlighting stays in order.
4. **Accessibility**: every input gets a real `<label>`, results announced via `aria-live="polite"`, and the form works on mobile widths like the rest of the page.

## What is not decided yet

The exact fields, formulas, and result wording come from your HTML file. Once you paste or upload it, the plan's component skeleton is filled in with your real inputs and maths — the placement, styling, and navigation work above stays the same. If the script uses anything unusual (e.g. canvas plots or external libraries), that may adjust step 1.

## Technical notes

- New file: `src/components/hearbyte/AmpCalculator.tsx`.
- Edits: `src/pages/Index.tsx` (insert section after `#demands`), `src/components/hearbyte/TableOfContents.tsx` (new chip).
- No routing, data, or dependency changes expected; page metadata and JSON-LD unchanged.
- Verify with `bunx tsgo --noEmit -p tsconfig.app.json`, `bunx vitest run`, and a Playwright pass on desktop and mobile widths.
