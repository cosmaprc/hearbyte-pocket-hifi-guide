# Replace "Current pushed" with "Current needed" in chain "Can it drive it?" panels

In all five "Can it drive it?" panels under the chain cards, change the label `Current pushed:` to `Current needed:`.

## Occurrences to update

- Chain 1 (HD 560S — Qudelix 5K no EQ): `Current pushed: 9.13 mA`
- Chain 1 (HD 560S — Qudelix 5K with PEQ): `Current pushed: 28.87 mA`
- Chain 2 (Sundara 2022 — QX13 with PEQ): `Current pushed: 140.42 mA`
- Chain 3 (AKG K371 — FiiO JIEZI): `Current pushed: 31.44 mA`
- Chain 4 (ATH-M50x BT2 wired — FiiO JIEZI): `Current pushed: 20.42 mA`

## Scope

Single file: `src/pages/Index.tsx`. No number, verdict, calculator link, or layout changes.

## Verification

- `bunx tsgo --noEmit -p tsconfig.app.json`
- `bunx vitest run`
