# Chain 2: split the DACs and show the power math

In "My preferred audio chains", chain 2 (HiFiMAN Sundara 2022 — wired) currently has one DAC bullet covering both the Qudelix 5K and the FiiO QX13. Split it into two bullets, mirroring chain 1's layout, each with a "Can it drive it?" panel.

## Bullet A — Qudelix 5K (no PEQ only)

Keeps: over USB, powered from USB-C rather than its internal battery, and only with no EQ, since the target PEQ profile can leave it short of power on some genres.

Short "Can it drive it?" line: yes — needs only about 500 mW, roughly 0.5 V, against the DAC's 4 V max.

## Bullet B — FiiO QX13 + Estick (used with the PEQ profile)

Full math block:

```text
Sensitivity                        92 dB SPL/mW
Impedance                          32 ohm
Target average loudness            90 dB SPL
Apple Music Sound Check headroom    7 dB
PEQ preamp headroom                ~9 dB
Crest factor (jazz / acoustic)      14 dB
-------------------------------------------------
Peak SPL required                 120 dB SPL
Amplifier voltage required        ~4.5 V
FiiO QX13, 4.4 mm balanced         6.19 V
Verdict                              Yes
```

Calculator link, pre-filled:
https://theaudiostuff.com/tools/headphone-power-calculator/#sens=92&u=dbmw&z=32&v=6.19&spl=106&hr=14

## Technical notes

- Single file: `src/pages/Index.tsx`, chain 2 card only.
- Same markup as chain 1: `Bullets` items with a nested magenta-bordered panel, magenta labels / cyan values, `ExtLink` for the calculator.
- Note that 90 dB target + 7 dB Sound Check = the 106 dB average used in the link, with 14 dB crest on top = 120 dB peak.
- The EQ bullet stays unchanged.
