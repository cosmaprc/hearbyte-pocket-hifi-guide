# Restructure Chains 1 and 2 to use only the Qudelix 5K, untethered

## Goal

Both Chain 1 (HD 560S) and Chain 2 (Sundara 2022) now use the Qudelix 5K as their only DAC, only in untethered (Bluetooth LDAC receiver) mode. The FiiO QX13 alternative and all wired wording are removed.

## Changes to Chain 1 — Sennheiser HD 560S

1. **Card title**: change `1 · Sennheiser HD 560S — wired/untethered` to `1 · Sennheiser HD 560S — untethered`.
2. **DAC bullet**: replace the two current `DAC (no EQ):` and `DAC (with PEQ):` bullets with one top-level `DAC:` bullet naming the Qudelix 5K.
3. **No EQ / With EQ bullets**: add separate top-level `No EQ:` and `With EQ:` bullets at the same hierarchy as `Headphones:` and `DAC:`. The current `EQ:` bullet becomes `With EQ:` while retaining its original one-line wording, and the existing with-EQ `Can it drive it?` panel moves beneath it. `No EQ:` gets the existing no-EQ panel. Update the panel introductions from wired USB-C power to the Qudelix 5K as a Bluetooth LDAC receiver.
4. **Untethered bullet**: keep the existing `<span className="text-neon-magenta">Untethered:</span>` bullet, but strengthen it to explain that the Qudelix 5K is powered by the FiiO Estick battery so it does not rely on its internal battery.
5. **Keep the "How I run it" panel and photos** in this card.

## Changes to Chain 2 — HiFiMAN Sundara (2022)

1. **Card title**: change `2 · HiFiMAN Sundara (2022) — wired` to `2 · HiFiMAN Sundara (2022) — untethered`.
2. **DAC bullet**: replace the current `DAC (no EQ):` (Qudelix 5K over USB) and `DAC (with PEQ):` (FiiO QX13) bullets with one top-level `DAC:` bullet naming the Qudelix 5K.
3. **No EQ bullet**: add a top-level `No EQ:` bullet at the same hierarchy as `Headphones:` and `DAC:`. Keep the existing no-EQ `Can it drive it?` panel beneath it and update its source description to the Qudelix 5K as a Bluetooth LDAC receiver.
4. **With EQ bullet**: rename the current top-level `EQ:` bullet to `With EQ:`, retain its original one-line wording, and place a recalculated Qudelix 5K `Can it drive it?` panel beneath it using the existing Sundara inputs:
   - Sensitivity: 92 dB SPL/mW
   - Impedance: 32 Ω
   - Target average loudness: 85 dB SPL
   - Sound Check headroom: 7 dB
   - PEQ preamp headroom: ~9 dB
   - Crest factor, jazz/acoustic: 14 dB
   - Peak needed: 85 + 7 + 9 + 14 = 115 dB SPL
   - Power / voltage / current needed: 199.53 mW / ~2.53 V / 78.96 mA
   - Qudelix 5K on 2.5 mm balanced: use the same 4.00 V rail / 81.08 mA limit as the no-EQ panel
   - Saturation ceiling: 115.23 dB SPL
   - Headroom left: +0.23 dB
   - Verdict: yes, but with only 0.23 dB remaining headroom
   - Include the pre-filled `#calculator` link and the usual `theaudiostuff.com` / `headphones.com` links.
5. **Untethered bullet**: add a new `<span className="text-neon-magenta">Untethered:</span>` bullet matching Chain 1's wording: Qudelix 5K as an LDAC Bluetooth receiver, powered by the FiiO Estick battery and fed by the FiiO Air Link adapter.

## Files touched

- `src/pages/Index.tsx` — single file for all content changes.

## Verification

- Run TypeScript type-check.
- Run Vitest tests.
- Optionally open the two updated calculator links in Playwright to confirm the computed values match the panels.
