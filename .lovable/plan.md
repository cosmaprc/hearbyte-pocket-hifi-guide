# Add the "Universal Amplifier & Saturation Calculator" as a native page section

The uploaded `main.html` calculator is rebuilt as a React component in the site's synthwave style and inserted as a new section immediately after "Do you have enough power?" (`#demands`), before "Finding your own preferences". No iframe, no external file; the light theme, system fonts, and blue/green result colors are replaced with the site's design tokens.

## Placement

```text
My preferred audio chains
Do you have enough power?                  (#demands)
Universal Amplifier & Saturation Calculator  (new #calculator)
Finding your own preferences
Phones & Accessories
...
```

## What gets built

**New component `src/components/hearbyte/AmpCalculator.tsx`** — one `bg-card-gradient` panel containing:

1. **Amplifier input mode** — two radio options, restyled as neon-accented selector cards:
   - *Mode A: Multi-Power Specs* — low-impedance spec (power mW + rated load Ω → current cap `I = √(P/Z)`) and high-impedance spec (→ voltage rail `V = √(P×Z)`). Defaults: 480 mW @ 16 Ω, 125 mW @ 300 Ω.
   - *Mode B: Direct Rail & Current Limit* — max RMS voltage rail (default 4.0 V), max current (default 81.08 mA, Qudelix spreadsheet), plus the optional dashed override box that recalculates current from a power spec and load.
2. **Headphone specifications** — impedance Ω (default 37) and sensitivity dB SPL/mW (default 94).
3. **Listening & headroom targets** — target avg volume (85), crest factor (12), digital gain reduction (0), keeping the helper text with the per-genre crest guidance (6 dB EDM/hip-hop … 18 dB classical).
4. **Calculate** button and **results panel** (revealed after submit, as in the original):
   - Derived amp hardware limits (voltage rail, current cap).
   - Output results: limiting wall (Current Saturation vs Voltage Rail Cap), max clean voltage/power/current, saturation ceiling dB SPL.
   - Listening target analysis: target peak volume and remaining headroom — headroom shown in cyan when positive, magenta/destructive when negative (replacing the original green/red).
   - The four-step "Calculation & Formula Breakdown" panel, rendered as the same mono-formula steps (`font-mono` formulas in bordered panels, like the current-first law block).
5. **Reference Verification Bench** — the permanent table of the six verified headphones (Sundara original & 2022, K371, HD 560S, HD 660S, HD 600 × Mode A/B) restyled to match the dongle output tables: cyan uppercase headers, `overflow-x-auto` wrapper, magenta model names.

All logic is ported 1:1 to TypeScript (`I_cap = √(P/Z)`, `V_rail = √(P×Z)`, bottleneck comparison `V = I×R` vs rail, `P = V²/R`, `SPL = sens + 10·log10(P)`, target = avg + crest + gain, headroom = ceiling − target). Results compute on submit like the original; `alert()` calls become inline validation messages.

**Section in `src/pages/Index.tsx`** — existing `Section` component, id `calculator`, `Calculator` lucide icon, cyan tone, with a one-line intro tying it to the `#demands` theory above it.

**Table of contents** — add a `{ id: "calculator", label: "Calculator" }` chip in `src/components/hearbyte/TableOfContents.tsx`, between "Enough power?" and "Phones & Accessories" (note: the chips list "phones" before "preferences" even though the sections render in the opposite order; the new chip follows the visual page order, inserted after "demands").

## Accessibility

Real `<label htmlFor>` on every input, `aria-live="polite"` on the results region, inputs usable at mobile width, Ω/√ symbols preserved.

## Technical notes

- New file: `src/components/hearbyte/AmpCalculator.tsx`; edits: `src/pages/Index.tsx`, `src/components/hearbyte/TableOfContents.tsx`.
- No dependencies, routing, or metadata changes.
- Verify: `bunx tsgo --noEmit -p tsconfig.app.json`, `bunx vitest run`, plus a Playwright pass checking Mode A and Mode B results against the verification bench values (e.g. Sundara 37 Ω/94 dB → Mode A 124.06 dB, Mode B 117.86 dB) on desktop and mobile widths.
