## Goal

Add a new section titled **“My preferred audio chain”** that summarizes the user’s go-to personal setup in a single card, placed between the existing **Headphones & Earbuds** and **ReplayGain** sections.

## Changes

### 1. Update `src/components/hearbyte/TableOfContents.tsx`

Insert a new entry `{ id: "chain", label: "My chain" }` between **Headphones** and **ReplayGain** so the TOC remains ordered and the new anchor is reachable.

### 2. Update `src/pages/Index.tsx`

Add a new `Section` after the `#headphones` `Section` and before the `#replaygain` `Section`:

- **id:** `chain`
- **title:** `My preferred audio chain`
- **tone:** `cyan` (or another unused tone if preferred; the current site uses cyan, magenta, purple, orange — `cyan` is still appropriate here).
- **icon:** Import a suitable `lucide-react` icon such as `Zap` or `Music`.
- **Intro paragraph:** One sentence explaining that this is the setup the guide author reaches for when everything else is stripped away.
- **Card:** A single `Card` titled something like `The chain` or `Go-to setup`, containing a `Bullets` list with the following items, linking known products to their existing URLs:
  1. **Source:** Android phone with LDAC.
  2. **App:** Apple Music — Sound Check on, all other DSP (including Dolby Atmos) off.
  3. **Headphones:** Sennheiser HD 560S — no EQ of any kind (link to the existing Sennheiser HD 560S product URL).
  4. **DAC / Bluetooth receiver:** Qudelix 5K — either Bluetooth via LDAC at 990 kbps, or wired (link to the existing Qudelix 5K product URL).

### 3. Styling / behavior

- Reuse the existing `Section`, `Card`, `Bullets`, and `ExtLink` components.
- Keep the section visually consistent with the rest of the page: single card inside a `md:grid-cols-1` or `md:grid-cols-2` grid, matching the existing spacing and typography.
- No new route or TOC navigation changes beyond the single new entry.

## Technical notes

- Only `src/pages/Index.tsx` and `src/components/hearbyte/TableOfContents.tsx` need changes.
- No new components are required.
- The new section will appear after the Headphones section and before the ReplayGain section, so the existing `<Divider />` between Headphones and ReplayGain will be replaced with the new section followed by a fresh `<Divider />`.