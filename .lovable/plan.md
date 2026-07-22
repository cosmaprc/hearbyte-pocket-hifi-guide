## Goal

Update the product descriptions in the **Phones & Accessories** section to add the user's first-hand notes about the Qudelix 5K and Hidizs S9 Pro Plus Martha.

## Changes

### 1. Update `src/pages/Index.tsx` — Recommended DACs card

In the **Qudelix 5K** card under the *Recommended DACs* subsection, add the following bullets to its existing `Bullets` list:

- Ships with a list of **AutoEQ** profiles, so common headphones are already tuned out of the box.
- Has **independent hardware volume control**.
- The companion app is the best and most responsive the author has used.

### 2. Update `src/pages/Index.tsx` — Other DACs card

In the **Hidizs S9 Pro Plus Martha** card, add a bullet noting it has **independent volume control**.

## Technical notes

- Only `src/pages/Index.tsx` needs to be changed.
- No new components, routes, or TOC updates are required.
- After the edit, run the existing build and test commands to verify nothing breaks.