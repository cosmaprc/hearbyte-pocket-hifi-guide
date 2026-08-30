# LHDC codec details

The LHDC bullet is already live in the "Bluetooth codecs" card: it lists LHDC High Resolution (up to 24-bit / 192 kHz) and LHDC Lossless (bit-exact 16-bit / 44.1 kHz).

## Proposed follow-up

Keep the bullet where it is, and mirror the same detail in the glossary so readers hitting LHDC from anywhere on the page get the definition:

- Rename the glossary entry "Bluetooth codecs (AAC, aptX, LDAC)" to include LHDC.
- Add one sentence to that entry covering LHDC's two modes (High Resolution up to 24-bit / 192 kHz, Lossless at 16-bit / 44.1 kHz), matching the wording style of the existing LDAC / aptX Lossless sentence.

## Technical notes

- File: `src/pages/Index.tsx`, glossary card at the `#g-ldac` anchor.
- No new components, links, or table-of-contents changes needed.
