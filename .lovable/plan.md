# Add a "Power synergy" note and example table to "Do you have enough power?"

A new block explaining how power, voltage, current and impedance lock together, plus a three-row worked example table at a 110 dB SPL peak target.

## Where it goes

Inside `#demands`, after the dB/mW vs dB/V units note and before the intersample-clipping callout, so the reader gets the physics first, then the headroom warning, then the dongle output tables.

```text
impedance vs sensitivity intro
bass/current correction
units note
Power synergy (new)        <- voltage/current/impedance + formulas
Electrical output comparison (new table)
Important - intersample clipping
What the dongles actually put out
```

## Content

**How power, voltage and current fit together**

- A driver needs power (mW); power is what happens when voltage pushes current through the headphone's impedance.
- Sensitivity sets the total power or voltage needed for your target volume, calculated here at a loud 110 dB SPL peak so dynamics stay clean.
- Impedance then decides the current/voltage split for that power:
  - Low impedance (<= 32 Ω): little voltage, high current — the amp needs current reserves.
  - High impedance (>= 150 Ω): restricts current, needs a lot of voltage to push the signal through.

**The maths**, as three short formula lines:

- `V = sqrt(P(mW) x R(Ω) / 1000)`
- `I(mA) = V / R x 1000`
- `P(mW) = V x I(mA)` (verification)

**Electrical output comparison** — target volume 110 dB SPL peak:

| Headphone type | Impedance | Sensitivity | Target power | Voltage | Current | Amp bottleneck |
| --- | --- | --- | --- | --- | --- | --- |
| Low Z / high sensitivity (typical IEMs) | 16 Ω | 110 dB/mW (very high) | 1.00 mW | 0.13 V | 7.9 mA | None — any phone or dongle drives it |
| Low Z / low sensitivity (planar magnetic) | 32 Ω | 90 dB/mW (very low) | 100.00 mW | 1.79 V | 55.9 mA | Current bottleneck — tiny dongles clip on peaks |
| High Z / mid sensitivity (studio open-back) | 300 Ω | 97 dB/mW (moderate) | 20.00 mW | 2.45 V | 8.2 mA | Voltage bottleneck — thin and too quiet |

One wording change from the source note: the planar row's "clip/distort bass" becomes "clip on peaks", to stay consistent with the correction already made higher up in this section (running short of current clips peaks across the whole signal, it does not thin out bass specifically).

## Technical notes

Single file: `src/pages/Index.tsx`. A `SubHeading` for the note, prose paragraphs and a small bullet list, formulas in `font-mono` inside a bordered `bg-background/40` panel, and a compact table reusing the same markup style as the dongle output tables (cyan uppercase headers, magenta first column, `overflow-x-auto` on narrow screens). No anchors, links, metadata or existing copy change beyond the placement. Verify with `bunx tsgo --noEmit -p tsconfig.app.json` and `bunx vitest run`.
