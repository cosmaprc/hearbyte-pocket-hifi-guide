## Goal

Add a "Headphone Electrical Demands" reference table to the site, using the user's provided CSV as the initial data, so readers can match a headphone profile to the right amplifier/DAC requirement. The table will also include the **Sennheiser HD 560S** and **AKG K371** headphones already reviewed on the site.


## Changes

### 1. Create `src/components/hearbyte/DataTable.tsx`

Build a small, responsive table component that matches the site's neon/card aesthetic. It should:

- Accept a typed array of rows and render a clean HTML `<table>` with semantic `<thead>` / `<tbody>`.
- Use the existing design tokens (`border-border`, `bg-card-gradient`, `text-neon-cyan`, `text-neon-magenta`, etc.) so it feels native to the dark theme.
- Be readable on mobile: each row should wrap or use a horizontal scroll container rather than squashing the content.
- Allow the first column to be visually distinct (profile name) and multi-line bullet cells to preserve the list formatting from the CSV.

### 2. Add a new section in `src/pages/Index.tsx`

Insert a new section between **Headphones** and **My chain** titled **Headphone electrical demands**. It will:

- Open with a short paragraph explaining why the table matters (impedance + sensitivity determines whether a phone, dongle, or dedicated amp is needed).
- Render the table using the new `DataTable` component.
- Keep the data inline as a typed array for now, derived from the uploaded CSV.

### 3. Update `src/components/hearbyte/TableOfContents.tsx`

Add the new section to the TOC list, for example `{ id: "demands", label: "Electrical demands" }`, placed between Headphones and My chain.

### 4. Verify the build and tests

Run the existing `bun run build` and `bun run test` commands to confirm the new component and section compile and the smoke test still passes.

## Table data

The table will use the data from the uploaded CSV:

| Headphone Profile | Key Specifications | Primary Electrical Demand | Amplifier Target Spec | What Happens with the Wrong Amp | Common Examples |
|---|---|---|---|---|---|
| Low Impedance + Low Sensitivity | < 32 Ω, < 96 dB/mW | High Current (I) | High continuous current output at low loads | Soft/compressed bass, harsh transients, amp clipping | Hifiman Edition XS, Dan Clark Audio Aeon 2 |
| High Impedance + Low Sensitivity | > 150 Ω, < 96 dB/mW | High Voltage (V) | High voltage swing (VRMS) at high loads | Quiet, dry, thin, lifeless sound | Sennheiser HD600, Beyerdynamic DT 880 |
| Low Impedance + High Sensitivity | < 32 Ω, > 100 dB/mW | Ultra-low Noise Floor | Near-zero output impedance (< 1 Ω) & high SNR | Hiss/static; bloated/loose bass | Campfire Andromeda, Shure SE846 |
| High Impedance + High Sensitivity | > 150 Ω, > 100 dB/mW | Moderate Voltage (V) | Clean, linear voltage delivery | Slightly restricted volume on weak sources | Audio-Technica ATH-R70x |

## Technical notes

- Only `src/pages/Index.tsx`, `src/components/hearbyte/TableOfContents.tsx`, and one new component file are affected.
- No new routes or backend dependencies are needed.
- The table content is static; if the user later wants to expand it (e.g., adding reviewed headphones), the data can be moved to a separate file or the rows can be extended inline.
