# Correct the "bass needs more current" misconception in the electrical demands section

Taking your comments as ground truth: a headphone's impedance is a fixed voltage-to-current ratio that does not change with level, so bass does not draw "extra" current of its own. If the amp is inside its limits, louder means louder bass; if it runs out, the whole signal clips, not the bass specifically. Several cells in the section currently repeat the misconception.

## What is wrong and how it changes

1. **Intro paragraph ("mismatch them and you get hiss, thin bass, or not enough volume headroom")** — "thin bass" implies a frequency-selective failure. Replace with "hiss, clipping, or not enough volume headroom".

2. **Low Z + low sensitivity, "wrong amp" cell** — currently "Soft or compressed bass, harsh transients, extreme amp heat, rapid battery drain, amp clipping". Rewrite so the failure is level-based, not bass-based: the amp reaches its current limit and clips on peaks — audible as distortion and compressed dynamics across the whole signal — plus real heat and battery drain. Drop "soft or compressed bass" and "harsh transients" as symptoms of insufficient current.

3. **High Z + low sensitivity, "wrong amp" cell** — currently "Quiet, dry, thin, lifeless sound". "Thin" again reads as bass roll-off. Change to plainly "Simply too quiet; you run out of volume before the music is loud enough, and there is no headroom left once EQ applies negative pre-amp gain."

4. **Add an explicit correction line to the intro** stating the rule outright, since the section is what readers reason from: impedance is the ratio of voltage to current and it does not vary with level, so a headphone does not need proportionally more current in the bass. Loud enough means enough bass, and enough bass means loud enough. Running short of current shows up as clipping on peaks, not as weak bass. Note that this is one of the most repeated claims in audio writing and in AI-generated text, and that it is still wrong.

## What stays

- **The "bloated, loose or muddy bass from a low damping factor" cell stays**, scoped as it already is to dynamic and multi-driver balanced-armature loads. That is a genuinely different mechanism: those loads have a frequency-dependent impedance peak, so a high source output impedance produces a real level change around resonance. It is not a level-dependent current claim, and the planar caveat above it already says planars are flat and resistive so they are unaffected.
- All impedance, sensitivity and dongle output figures, the table structure, row order, examples and `GearLink` targets are untouched.

## Technical notes

Edits are confined to the three intro paragraphs and two `wrongAmp` strings inside the `#demands` section of `src/pages/Index.tsx` (lines ~446-499), plus one added sentence in the intro. No component, data-shape or styling changes.
