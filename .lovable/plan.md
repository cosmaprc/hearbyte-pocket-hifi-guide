# Add FiiO Estick battery note to Qudelix 5K mentions

## Goal
Distinguish how the Qudelix 5K is powered in each chain: USB-C bus power when acting as a wired DAC, and a FiiO Estick battery when acting as a Bluetooth receiver attached to a headphone.

## Current state
- Chain 1 (HD 560S wired) and Chain 2 (Sundara wired) describe the Qudelix 5K as a DAC over USB, drawing power from USB-C.
- Chain 5 (HD 560S wireless) describes the Qudelix 5K as an LDAC Bluetooth receiver velcroed to the headband, but does not mention how it is powered.
- The FiiO Estick battery link already exists in Chain 2 (`https://www.fiio.com/productinfo/1507720.html`).

## Plan
1. **Chains 1 and 2** — Keep the existing wired-DAC USB-C power wording, and append a short clause/note explaining that when the Qudelix 5K is used as a Bluetooth receiver attached to a headphone, it is powered by the FiiO Estick battery.
2. **Chain 5** — Update the receiver bullet to state that the Qudelix 5K is powered by the FiiO Estick battery while acting as the LDAC Bluetooth receiver velcroed to the headband.
3. Use the existing FiiO Estick link (`https://www.fiio.com/productinfo/1507720.html`) for consistency.
4. Run type-check and tests after editing.

## Technical details
- File to edit: `src/pages/Index.tsx`
- Components affected: Chain 1 card, Chain 2 card, Chain 5 card
- No new components or dependencies needed.
- Verify `bunx tsgo --noEmit -p tsconfig.app.json` and Vitest pass before finishing.
