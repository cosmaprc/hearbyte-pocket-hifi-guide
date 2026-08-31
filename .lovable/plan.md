# Punctuation consistency pass

A read-through of the page turned up a handful of small punctuation inconsistencies. All fixes are in `src/pages/Index.tsx` (copy only, no logic).

## 1. Full stops on bullets

Most bullets end with a full stop, a few short ones don't. Add stops to:

- "Streaming service on both iOS and Android"
- "Available on both iOS and Android" (3 occurrences)
- "ReplayGain support with manual preamp adjustment" (3 occurrences)
- "Android only"
- "Low Ω / high sensitivity (typical IEMs)"
- The two calculator bullets in the Links section ("Headphonesty headphone power calculator", "Headphones.com power calculator")

Playlist name bullets ("Deze Beats Is Twistin Me Brainz", "Face Meltin Synths") stay without stops, since they are titles rather than sentences.

## 2. "Can it drive it?" spec lists

Inside every calculation panel the lines are label/value pairs with no terminal punctuation, except the last one: "Verdict: yes." Drop that full stop so all four panels read consistently.

## 3. Formula list

The three formulas use a non-breaking space before the em dash (`&nbsp;—`). Replace with a normal spaced em dash so the spacing matches every other dash on the page.

## 4. Slashes

The page mixes tight and spaced slashes. Standardise:

- Tight when both sides are single words or units: `jazz/acoustic`, `headphone/source`, `yes/no`, `dB/mW`, `DAC/amp`, `EQ/PEQ`, `FRC/AutoEQ` (already tight in most places).
- Spaced only when a side is multi-word or a product name: `Moondrop Pill / Pill S`, `24-bit / 48 kHz`, `133.3 mW / 4.00 V / 33.3 mA`.

The concrete change is "Crest factor, jazz / acoustic" to "jazz/acoustic" in all four panels, plus "headphone / source pairing" to "headphone/source pairing" and the two table row labels ("Low Ω / low sensitivity", "High Ω / mid sensitivity") which keep spacing because the sides are multi-word.

## 5. Amp-capability steps table

Step 1's cells use title case and full stops; steps 2 and 3 use sentence case and none. Make all three objectives sentence case ("Target peak loudness (dB SPL calculation)") and keep the explanatory sentences in Step 1 punctuated as sentences.

## 6. Spelling consistency (spotted alongside)

"Volume Normalisation Loss" in the Step 1 formula uses British -s while the rest of the page uses "normalization". Change to "normalization" for consistency.

## Not changed

Em dashes (spaced, used consistently), the `·` separator in card titles and callout headings, `e.g.` followed by lowercase, semicolons joining related clauses, and hyphenated compounds (`24-bit`, `single-ended`, `open-back`, `USB-C`) are all already consistent.
