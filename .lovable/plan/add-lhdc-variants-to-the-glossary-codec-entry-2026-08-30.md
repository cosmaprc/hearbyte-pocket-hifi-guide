# Add LHDC variants to the glossary codec entry

## What changes

In the Glossary, the "Bluetooth codecs (AAC, aptX, LDAC)" card gains LHDC's two modes alongside the existing codecs:

- Rename the card to "Bluetooth codecs (AAC, aptX, LDAC, LHDC)".
- Extend the explanation with: LHDC High Resolution carries up to 24-bit / 192 kHz, and LHDC Lossless is bit-exact 16-bit / 44.1 kHz.
- Keep the closing point that both ends must support the same codec.

## Technical notes

Single edit in `src/pages/Index.tsx` inside the `#g-ldac` glossary card (around lines 564-568). No new components, links, or anchors; LHDC names use the same `text-neon-cyan` highlight style as the other codec names.
