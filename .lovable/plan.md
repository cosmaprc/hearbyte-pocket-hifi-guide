# Chain 1: make the no-EQ alternative a Qudelix 5K

In the "My preferred audio chains" section, chain 1 (Sennheiser HD 560S — wired) currently lists a "DAC, alternative" of the FiiO QX13 paired with the FiiO Estick battery and no EQ. Replace that alternative with the Qudelix 5K and no EQ.

## Changes

- Change the bullet label from `DAC, alternative:` to describe the Qudelix 5K over USB, drawing power from USB-C, with no EQ.
- Keep the existing no-EQ math panel values:
  - Peak needed: `111 dB SPL`
  - Power needed: `10 mW`
  - Voltage needed: `~1.1 V`
  - Current pushed: `9.13 mA`
- Replace the device output line in the math panel so it reads: `Qudelix 5K on 2.5 mm balanced: 133.3 mW / 4.00 V / 33.3 mA`.
- Add the same dual calculator links used in the main Qudelix bullet for consistency, pre-filling the no-EQ values.
- Remove the FiiO Estick battery mention from this alternative bullet.

## Scope

Single file: `src/pages/Index.tsx`, inside the first chain card only. Other chains untouched.
