# Chain 2 current figure + switch the calculator links

## Chain 2 (HiFiMAN Sundara 2022) — QX13 + PEQ panel

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
