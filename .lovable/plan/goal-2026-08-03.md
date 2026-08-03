## Goal

Split the **Recommended headphones / earbuds** block in the Headphones & Earbuds section into three clearly labelled groups, and add photos of the HD 560S running off the Qudelix 5K.

## New structure

```text
Recommended
  Bluetooth earbuds      -> Creative Aurvana Ace 3
  Wired headphones       -> Sennheiser HD 560S
  Bluetooth headphones   -> Sennheiser HD 560S + Qudelix 5K (with photos)
                            Audio Technica ATH-M50x BT2
Other pairings           -> AirPods Pro 2, AKG K371
```

- Each group gets its own small uppercase subheading, same style as the existing "Recommended DACs" labels.
- Ordering stays alphabetical by model within each group.
- The ATH-M50x BT2 card moves out of **Other pairings** into **Bluetooth headphones**, keeping its existing bullets and "How I run it" DSP table unchanged. **Other pairings** then holds AirPods Pro 2 and AKG K371 (grid drops to 2 columns).

## New card: HD 560S + Qudelix 5K

A dedicated card under Bluetooth headphones describing the HD 560S turned into a wireless setup by clipping the Qudelix 5K to it:

- Form factor: wired open-back over-ear made wireless via a Bluetooth DAC/amp
- Codec: LDAC up to 990 kbps, independent hardware volume, AutoEQ profiles from the Qudelix app
- How I run it: stock tuning, no EQ; balanced output on the 5K for extra headroom, or wired USB when you want bit-perfect
- Links to the existing Qudelix 5K entry under Phones & accessories and to the demands table row for the 560S

## Photos

The two uploaded photos (560S with the 5K velcro-mounted to the headband, and the pair held up front-on) are added inside that card as a small two-up image grid, with rounded borders matching the card style, descriptive alt text, and `loading="lazy"`. They are registered as CDN assets rather than committed binaries.

## Technical notes

- Files touched: `src/pages/Index.tsx` only; `Card.tsx` already accepts arbitrary children so no component change is needed.
- Images registered via `lovable-assets create` from `/mnt/user-uploads/`, producing `src/assets/*.asset.json` pointers imported in `Index.tsx`.
- No new sections or TOC entries; verified afterwards with the existing build and test commands.
