# Bring chains 1, 3 and 4 in line with chain 2

Apply the same three changes chain 2 got to the "Can it drive it?" panels of chains 1, 3 and 4.

## 1. Add the current figures

Each panel gains a "Current pushed" line under "Voltage needed", and the dongle output line gains its current from the dongle tables in "Do you have enough power?":

- Chain 1 (HD 560S, 120 Ω, with PEQ) — Current pushed: 28.87 mA; Qudelix 5K on 2.5 mm balanced becomes 133.3 mW / 4.00 V / 33.3 mA
- Chain 3 (AKG K371, 32 Ω, with PEQ) — Current pushed: 31.44 mA; FiiO JIEZI on 3.5 mm single-ended becomes 34 mW / 1.04 V / 32.60 mA
- Chain 4 (ATH-M50x BT2, 38 Ω, no PEQ) — Current pushed: 20.42 mA; FiiO JIEZI on 3.5 mm single-ended becomes 28.63 mW / 1.043 V / 27.45 mA

Verdicts stay "yes" in all three.

## 2. Chain 1's QX13 panel gets real figures

The short "Yes — max output is 6.19 V" line becomes the same style as chain 2's Qudelix line: with the PEQ profile the HD 560S needs ~3.6 V / 105 mW / 28.87 mA, against the QX13's 120 Ω figures from the dongle table — 312.5 mW / 6.12 Vrms / 51.0 mArms. Verdict yes.

Note: the page's own QX13 table caps voltage at 6.12 Vrms, so this line uses 6.12 V rather than the 6.19 V previously quoted. Say the word if you'd rather keep 6.19 V.

## 3. Both calculators on the "Run the numbers yourself" line

Same sentence as chain 2: theaudiostuff.com opens pre-filled but doesn't report current, headphones.com gives the mA figure but has to be filled in by hand. Pre-filled links reused:

- Chain 1: `sens=100.8&u=dbmw&z=120&v=4&spl=107&hr=14`
- Chain 3: `sens=99&u=dbmw&z=32&v=1.04&spl=100&hr=14`
- Chain 4: `sens=99&u=dbmw&z=38&v=1&spl=97&hr=14`

## Technical notes

Single file: `src/pages/Index.tsx`, chains 1, 3 and 4 cards only. Finish with `bunx tsgo --noEmit -p tsconfig.app.json` and `bunx vitest run`.
