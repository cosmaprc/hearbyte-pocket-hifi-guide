# Copy edits for preferred audio chains

## Goal
Tighten the wording around the Qudelix 5K power/Bluetooth notes in Chains 1 and 2, and rename the "wireless" label to "untethered" for clarity.

## Changes

1. **Chain 1 (HD 560S) title**
   - Change `1 · Sennheiser HD 560S — wired/wireless` to `1 · Sennheiser HD 560S — wired/untethered`.

2. **Chain 1 (HD 560S) DAC (no EQ) bullet**
   - Remove the parenthetical: `(When I use it as a Bluetooth receiver attached to a headphone, I power it from a FiiO Estick battery instead.)`
   - Keep the USB-C powered / no-EQ wording intact.

3. **Chain 1 (HD 560S) subsection label**
   - Change `<span className="text-neon-magenta">Wireless:</span>` to `<span className="text-neon-magenta">Untethered:</span>`.
   - Leave the FiiO Estick and FiiO Air Link description in the subsection unchanged.

4. **Chain 2 (Sundara) DAC (no EQ) bullet**
   - Remove `, since with the target PEQ profile it can run out of power on some genres. (When I use it as a Bluetooth receiver attached to a headphone, I power it from a FiiO Estick battery instead.)`
   - Replace it with a single full stop `.` so the sentence ends after `no EQ`.
   - Keep the wired USB-C powered wording intact.

## Verification
- Run TypeScript check and Vitest after edits.
- Optionally preview the chains section to confirm the labels and punctuation read cleanly.

## Files touched
- `src/pages/Index.tsx`
