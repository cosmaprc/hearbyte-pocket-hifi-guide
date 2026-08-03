## Goal

Extend the **Headphone electrical demands** table with a new column that names which of the recommended USB-C DACs and Bluetooth adapters can drive each headphone profile, so readers can go straight from a profile to a source they can buy.

## Changes

### 1. New column in the demands table

Add a **"Sources that drive it"** column as the last column of the table in `src/pages/Index.tsx`, populated per profile from the gear already recommended in **Phones & accessories**:

- Qudelix 5K (recommended DAC / Bluetooth receiver)
- FiiO KA11
- Neutron HiFi DAC V1
- Hidizs S9 Pro Plus Martha
- FiiO Air Link style Bluetooth adapters

Each cell lists the fitting sources, and each name links down to `#phones` so readers can jump to its card. Where a source is a poor fit for a profile (for example a high-output-impedance dongle with an ultra-sensitive IEM), the cell says so briefly rather than listing it.

The Air Link style adapters get an explicit caveat: they transmit Bluetooth to wireless headphones and do not amplify wired ones, so they only appear on the profiles where that makes sense.

### 2. Table component

`src/components/hearbyte/DataTable.tsx` gains a `sources` field on its row type plus the matching header cell. The minimum table width grows a little (roughly `min-w-[68rem]`) so the seven columns stay readable, keeping the existing horizontal scroll on mobile.

### 3. Short lead-in note

One sentence added under the existing intro paragraph explaining that the last column only covers the gear recommended on this page, and that the specs come from each vendor's published figures.

## Spec research

Before writing the cells I will read the published output specs for each source — output power into 32 Ω, voltage swing into higher loads, and output impedance where the vendor states it — from the vendor pages already linked on the site (Qudelix, FiiO, Neutron HiFi, Hidizs). The profile-to-source mapping will follow those numbers; if a vendor does not publish a figure I need, the cell will use a qualitative fit ("plenty of headroom", "volume-limited") instead of inventing a number.

## Technical notes

- Files touched: `src/pages/Index.tsx` and `src/components/hearbyte/DataTable.tsx`.
- No new sections, routes, or backend work; table of contents stays as is.
- Verified afterwards with the existing build and test commands.
