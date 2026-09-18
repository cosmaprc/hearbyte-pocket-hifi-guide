# Restructure Chains 1 and 2 to use only the Qudelix 5K, untethered

## Goal

Both Chain 1 (HD 560S) and Chain 2 (Sundara 2022) now use the Qudelix 5K as their only DAC, only in untethered (Bluetooth LDAC receiver) mode. The FiiO QX13 alternative and all wired wording are removed.

## Changes to Chain 1 — Sennheiser HD 560S

1. **Card title**: change `1 · Sennheiser HD 560S — wired/untethered` to `1 · Sennheiser HD 560S — untethered`.
2. **DAC section**: replace the two current `DAC (no EQ):` and `DAC (with PEQ):` bullets with a single `DAC:` bullet naming the Qudelix 5K as the source.
3. **No EQ / With EQ sub-bullets**: under the new `DAC:` bullet, keep the two existing `Can it drive it?` panels but relabel them `No EQ:` and `With EQ:`. Update the one-line source description inside each panel from wired USB-C power to the Qudelix 5K as a Bluetooth LDAC receiver.
4. **Untethered bullet**: keep the existing `<span className="text-neon-magenta">Untethered:</span>` bullet, but strengthen it to explain that the Qudelix 5K is powered by the FiiO Estick battery so it does not rely on its internal battery.
5. **Keep the "How I run it" panel and photos** in this card.

## Changes to Chain 2 — HiFiMAN Sundara (2022)

1. **Card title**: change `2 · HiFiMAN Sundara (2022) — wired` to `2 · HiFiMAN Sundara (2022) — untethered`.
2. **DAC section**: replace the current `DAC (no EQ):` (Qudelix 5K over USB) and `DAC (with PEQ):` (FiiO QX13) bullets with a single `DAC:` bullet naming the Qudelix 5K as a Bluetooth LDAC receiver.
3. **No EQ sub-bullet**: keep the existing no-EQ `Can it drive it?` panel, relabeled `No EQ:`, and update its source description to the Qudelix 5K as a Bluetooth LDAC receiver.
4. **With EQ sub-bullet**: add a new `With EQ:` `Can it drive it?` panel using the Qudelix 5K output. Compute the values with the on-page calculator and the existing Sundara inputs:
   - Sensitivity: 92 dB SPL/mW
   - Impedance: 32 Ω
   - Target average loudness: 85 dB SPL
   - Sound Check headroom: 7 dB
   - PEQ preamp headroom: ~9 dB
   - Crest factor, jazz/acoustic: 14 dB
   - Peak needed: 85 + 7 + 9 + 14 = 115 dB SPL
   - Power / voltage / current needed: from calculator
   - Qudelix 5K on 2.5 mm balanced: from calculator (same output row used in the no-EQ panel)
   - Saturation ceiling / headroom left: from calculator
   - Verdict: yes
   - Include the pre-filled `#calculator` link and the usual `theaudiostuff.com` / `headphones.com` links.
5. **Untethered bullet**: add a new `<span className="text-neon-magenta">Untethered:</span>` bullet matching Chain 1's wording: Qudelix 5K as an LDAC Bluetooth receiver, powered by the FiiO Estick battery and fed by the FiiO Air Link adapter.

## Files touched

- `src/pages/Index.tsx` — single file for all content changes.

## Verification

- Run TypeScript type-check.
- Run Vitest tests.
- Optionally open the two updated calculator links in Playwright to confirm the computed values match the panels.
