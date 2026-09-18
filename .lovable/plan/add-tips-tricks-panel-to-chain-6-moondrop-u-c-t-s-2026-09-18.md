# Add tips & tricks panel to Chain 6 (Moondrop U.C.T.S.)

## What changes

Add a new **Tips & tricks** panel inside the existing **6 · Moondrop × Wuthering Waves U.C.T.S. — wireless** card, placed after the `Bullets` list. The panel reuses the existing note-panel styling (`rounded-lg border border-neon-magenta/40 bg-neon-magenta/5 p-4`) and keeps the same uppercase tracking-widest cyan heading style used for the **How I run it** panels.

### Panel content

Heading: `Tips & tricks`

Three tips follow as paragraphs in `text-sm text-foreground/85`:

1. **HiRes on iPhone**
   > To get hi-res on an iPhone, try the **Tempotec LHDC One** USB-C Bluetooth dongle. Select *Other device* when first plugging in and raise the iPhone volume to max. Then open the Moondrop app and set a touch control for volume up and one for volume down. You now have hi-res with upsampling to 192 kHz and independent earphone hardware volume control on iPhone.

   - Link **Tempotec LHDC One** to the existing `https://www.tempotec.net/` URL used in the chain bullet.

2. **Not enough volume?**
   > Try setting the standard tuning profile, then set all the default PEQ bands to the max **+3 dB** while using the minimum **Q value 0.20**. You should see the same frequency-response shape move up the graph, so you have now increased its overall volume/loudness — though I can't say for sure if or how much distortion this may introduce.

3. **Want more bass?**
   > Try this manual, easy-to-set-up PEQ:

   A 3-column inline table with columns **Freq**, **Gain**, **Q**:

   ```text
   | Freq | Gain   | Q   |
   | 20 Hz | -12 dB | 0.71 |
   | 30 Hz |  +3 dB | 0.71 |
   | 50 Hz |  +3 dB | 0.71 |
   | 60 Hz |  +3 dB | 0.71 |
   | 70 Hz |  +3 dB | 0.71 |
   ```

   - Table uses the same styling as existing project tables: `w-full border-collapse text-left text-xs`, header row `border-b border-border` with `text-neon-cyan` uppercase tracking-widest headings, body rows `border-b border-border/60 last:border-b-0`, gain values in `text-neon-cyan`.

## Notes

- The existing Chain 6 EQ bullet stays unchanged; the new panel presents the same +3 dB PEQ trick in a troubleshooting context, plus the caveat about distortion.
- Minor casing/normalization edits from the raw text to match site conventions: `hires` → `hi-res`, `it's` → `its`, `192khz` → `192 kHz`.
- No other chains or sections change.

## Files to edit

- `src/pages/Index.tsx` — add the new panel inside the Chain 6 `<Card>`.

## Verification

- Run `bunx tsgo --noEmit -p tsconfig.app.json`.
- Run `bunx vitest run --reporter=verbose`.
- Visually confirm the Chain 6 card shows the **Tips & tricks** panel, three tips, and the PEQ table, without breaking card height alignment in the 2-column grid.
