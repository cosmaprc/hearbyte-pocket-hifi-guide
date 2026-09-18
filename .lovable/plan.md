# Merge Chain 1 and Chain 5 for Sennheiser HD 560S (wired/wireless)

## Goal
Combine the separate wired HD 560S card (Chain 1) and wireless HD 560S card (Chain 5) into a single Sennheiser HD 560S chain card that covers both use cases.

## Current state
- Chain 1 is titled "Sennheiser HD 560S — wired" and contains two detailed "Can it drive it?" panels for the Qudelix 5K (no EQ and with PEQ).
- Chain 5 is titled "Sennheiser HD 560S — wireless" and contains the LDAC Bluetooth receiver setup, the "How I run it" note, and the two headband photos.

## Plan

1. **Create one merged card** titled "1 · Sennheiser HD 560S — wired/wireless".
   - Keep the existing headphone and EQ bullets from Chain 1.
   - Keep the two existing DAC/"Can it drive it?" panels (Qudelix no EQ and Qudelix with PEQ) unchanged.
   - Add the wireless receiver bullet from Chain 5: Qudelix 5K as LDAC Bluetooth receiver, powered by FiiO Estick battery, fed by FiiO Air Link adapter.
   - Move the "How I run it" panel and the two headband photos from Chain 5 into the merged card.

2. **Remove the old Chain 5 card** entirely.

3. **Renumber the remaining chains** so the sequence is continuous:
   - 1 · Sennheiser HD 560S — wired/wireless
   - 2 · HiFiMAN Sundara (2022) — wired
   - 3 · AKG K371 — wired
   - 4 · Audio-Technica ATH-M50x BT2 — wired
   - 5 · Audio-Technica ATH-M50x BT2 — wireless
   - 6 · Moondrop × Wuthering Waves U.C.T.S. — wireless
   - 7 · Moondrop Pill — wireless

4. **Update the image imports** to stay at the top of `src/pages/Index.tsx`; no new images or components are needed.

## Technical details
- File to edit: `src/pages/Index.tsx`
- Components affected: Chain cards 1–7, image imports already present
- No new components or dependencies needed.
- Verify `bunx tsgo --noEmit -p tsconfig.app.json` and Vitest pass before finishing.
