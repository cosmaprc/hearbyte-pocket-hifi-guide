# Fact-check and correct the "Headphone electrical demands" section

I checked every headphone and spec claim in the table against manufacturer figures, with extra attention to planar magnetics (Hifiman Edition XS) and the two headphones you own that appear in the table (HD 560S, AKG K371). The structure is sound, but several numbers and one physics claim are wrong or mixing units.

## Confirmed correct

- Hifiman Edition XS — 18 Ω, 92 dB/mW: correctly placed in low impedance + low sensitivity (high current).
- Dan Clark Aeon 2 — 13 Ω, ~92 dB/mW: correct for the same row.
- Sennheiser HD 600 (300 Ω) and Beyerdynamic DT 880 (250 Ω, 96 dB/mW): correct as high-voltage examples.
- Campfire Andromeda (~12.8 Ω, ~113 dB/mW) and Shure SE846 (~9 Ω, ~114 dB/mW): correct as noise-floor-sensitive examples.
- Sennheiser HD 560S — 120 Ω, 110 dB/V: figure and row are correct.

## Errors to fix

1. **AKG K371 sensitivity is mislabelled.** AKG publishes 114 dB SPL/V, not 114 dB/mW. At 32 Ω that is about 99 dB/mW — sensitive, but nowhere near IEM territory. Change the cell to "32 Ω / 114 dB/V (~99 dB/mW)" so it no longer reads as a hiss-prone IEM-class load.

2. **Beyerdynamic DT 990 Pro does not belong in ">150 Ω, >100 dB/mW".** Beyer publishes 96 dB/mW at 250 Ω (~102 dB/V). Replace it in the high-impedance + high-sensitivity row with the Audio-Technica ATH-R70x (470 Ω, 99 dB/mW ≈ 102 dB/V), which genuinely is a high-impedance, easy-voltage load, and move the DT 990 Pro up into the high-voltage row alongside the DT 880.

3. **The ATH-R70x is currently in the wrong row.** It sits under "< 96 dB/mW" although it is 99 dB/mW; the swap in point 2 resolves this.

4. **The high-impedance + low-sensitivity threshold reads as stricter than its own examples.** The HD 600 is ~97 dB/mW, just above the stated "< 96 dB/mW". Loosen the spec cell to "> 150 Ω, ≲ 97 dB/mW".

5. **The muddy-bass claim needs a planar caveat.** "Bloated, loose or muddy bass" from a high output impedance comes from a low damping factor and from impedance swing in multi-driver balanced-armature IEMs. Planar magnetics have an essentially flat, resistive impedance, so a mediocre output impedance does not colour their frequency response — it just wastes power. I will scope the wording to dynamic and multi-BA loads and add one line to the section intro noting that planars are resistive and flat, so they care about current, not damping.

6. **Unverifiable source claim.** "Qudelix 5K hits current saturation limits under 20 Ω, like the Aeon 2" is not in Qudelix's published specs. I will reword to what is publishable and true: the 5K's balanced output helps, but very low impedance, low sensitivity planars are where any pocket dongle or Bluetooth amp runs out of headroom first, and a desktop amp is the better answer.

## Also worth adding

- Give Edition XS its numbers in the examples cell (18 Ω / 92 dB/mW) so readers can see why it lands in the current-hungry row, matching how the K371 and HD 560S are already annotated.
- One sentence in the intro explaining that dB/mW and dB/V are not interchangeable and that manufacturers publish whichever flatters them — this is the root cause of most of the mistakes above.

## Technical notes

All changes are confined to the `rows` array passed to `DataTable` and the two intro paragraphs inside the `#demands` section of `src/pages/Index.tsx` (lines ~445-551). No component, schema or styling changes; existing `GearLink` and `#headphones` anchors are preserved.

## Dongle and receiver specs: audit and corrections

The current "Sources that drive it" column mostly describes the four sources qualitatively and only quotes hard numbers for the Neutron V1. I will pin every recommendation to the vendor-published output figure that actually matters for that row (mW at low impedance, VRMS at high impedance), re-verifying each against the vendor pages already linked on the page before writing:

- **Qudelix 5K** — ~2 VRMS / ~80 mW into 32 Ω single-ended (3.5mm), roughly double the voltage and ~240 mW into 32 Ω on 2.5mm balanced, output impedance under 1 Ω. Balanced is what makes it viable for demanding loads; single-ended is the one that runs short.
- **FiiO KA11** — 3.5mm only, ~200 mW into 32 Ω, no balanced output, low output impedance. Strongest current per pound of the four, but voltage-limited, so it is the wrong pick for 250-600 Ω headphones and it does run hot.
- **Hidizs S9 Pro Plus Martha** — ~125 mW into 32 Ω on 3.5mm and ~230 mW into 32 Ω on 4.4mm balanced, dual ES9038Q2M, independent volume.
- **Neutron HiFi DAC V1** — 3.5mm only, switchable ~1 VRMS / ~2 VRMS output, output impedance under 0.6 Ω. The cleanest, quietest of the four and the best match for sensitive low-impedance loads; the least current for planars.

### How this changes each row

- **Low Z + low sensitivity (Edition XS, Aeon 2)** — lead with the KA11 and Martha balanced as the highest-current portables, note the 5K only on balanced, mark the Neutron V1 as not the right tool here, and say plainly that all four are compromises versus a desktop amp. Replaces the unpublished "current saturation under 20 Ω" claim.
- **High Z + low sensitivity (HD 600, DT 880, DT 990 Pro)** — this row is about voltage, so frame it that way: 2 VRMS into 300 Ω is only ~13 mW, which is enough for average listening but leaves little for peaks or EQ. The 5K on balanced roughly doubles the swing and is the best of the four; the KA11's 200 mW rating is irrelevant here because it cannot supply the voltage.
- **Low Z + high sensitivity (Andromeda, SE846, K371)** — keep the Neutron V1 first for its sub-0.6 Ω output and 1 VRMS low-gain mode, and the 5K second, and add the explicit warning to stay off the high-power balanced ports and out of high gain, since here the risk is hiss and too-coarse volume steps, not lack of power.
- **Medium Z + high sensitivity (HD 560S)** — keep "all four work", but say why: 120 Ω at 110 dB/V needs only a fraction of a volt for loud listening, so this is the profile where the choice is about features rather than power.
- **High Z + high sensitivity (ATH-R70x)** — 5K balanced or Neutron V1 at 2 VRMS, both adequate; note the KA11 is voltage-limited and a legacy phone jack will feel quiet.

I will also make the note above the table say that the figures are the vendors' published single-ended versus balanced ratings, so readers understand a single dongle can appear in two different rows depending on which output they plug into.
