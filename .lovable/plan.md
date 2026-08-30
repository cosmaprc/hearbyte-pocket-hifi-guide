# Chain 1: split the DACs and show the power math

In the "My preferred audio chains" section, chain 1 (Sennheiser HD 560S — wired) currently has a single DAC bullet listing both the Qudelix 5K and the FiiO QX13. Split it into two DAC bullets, each keeping its existing notes and gaining a nested "Can it drive it?" sub-point.

## Bullet A — Qudelix 5K

Keeps: over USB, set to draw power from USB-C rather than its internal battery.

Adds a nested "Can it drive it?" block with the math:

```text
Sensitivity                       100.8 dB SPL/mW
Impedance                         120 ohm
Target average loudness            90 dB SPL
Apple Music Sound Check headroom    7 dB
PEQ preamp headroom               ~10 dB
Crest factor (jazz / acoustic)      14 dB
-------------------------------------------------
Peak SPL required                 121 dB SPL
Amplifier voltage required        ~3.6 V
Qudelix 5K, 2.5 mm balanced          4 V
Verdict                              Yes
```

Plus a link to the calculator, pre-filled with those values:
https://theaudiostuff.com/tools/headphone-power-calculator/#sens=100.8&u=dbmw&z=120&v=4&spl=107&hr=14

## Bullet B — FiiO QX13

Keeps: paired with the FiiO Estick battery.

Same "Can it drive it?" structure — same headphone figures and required ~3.6 V, with the QX13's balanced (4.4 mm) output voltage in the comparison line and its own pre-filled calculator link. I'll confirm the QX13's published output voltage from FiiO's spec page before writing the number, rather than guessing it; if a trustworthy figure isn't available I'll leave that line out and only state the ~3.6 V requirement.

## Technical notes

- Single file: `src/pages/Index.tsx`, chain 1 card only. Other chains untouched.
- Presented with the existing `Bullets` component; the math lines as a small nested list inside each DAC bullet, magenta labels / cyan values, matching the rest of the page.
- Calculator links use the existing `ExtLink` component.
- Note in the math that the 90 dB target plus 7 dB Sound Check gives the 107 dB average used in the calculator link, with 14 dB crest on top = 121 dB peak.
