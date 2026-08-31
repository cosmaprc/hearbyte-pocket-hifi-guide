# Chain 2 current figure + switch the calculator links

## Chain 2 (HiFiMAN Sundara 2022) — Qudelix 5K, no EQ

Replace the current "only needs about 500 mW, so roughly 0.5 V against the DAC's 4 V max" line with the real figures: without EQ it needs 1.59 V / 79.43 mW / 49.82 mA, against the Qudelix 5K's 32 Ω output from the dongle table in "Do you have enough power?" — 240.0 mW / 2.77 Vrms / 86.6 mArms. Verdict stays yes.

## Chain 2 — QX13 + PEQ panel

Add one line under "Voltage needed: ~4.5 V":

- Current pushed: 140.42 mA

And extend the dongle line with the current from the QX13 table in "Do you have enough power?" (32 Ω row):

- FiiO QX13 on 4.4 mm balanced: 900 mW / 5.37 V / 167.7 mA

Everything else in the panel stays as-is.


## Calculator links

Point the "Run the numbers yourself" link in all four "Can it drive it?" panels (chains 1, 2, 3, 4) to
https://headphones.com/pages/headphones-power-calculator

Since that calculator takes no pre-filled parameters in the URL, the "(pre-filled)" note is dropped from those four lines.

The Links section and the intersample-clipping callout already list all three calculators, so those stay unchanged.

## Technical notes

Single file: `src/pages/Index.tsx`. Finish with `bunx tsgo --noEmit -p tsconfig.app.json` and `bunx vitest run`.
