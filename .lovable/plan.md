# Add an Apple Music card to the Software section

## What changes

Add a fourth card, "Apple Music", to the Software section alongside jetAudio, Neutron and USB Audio Player Pro. It covers the streaming app as I actually run it:

- Streaming service on iOS and Android, linked to apple.com/apple-music.
- Lossless enabled at 24-bit / 48 kHz.
- Sound Check on for consistent loudness between tracks (links to the Sound Check glossary entry, the streaming equivalent of ReplayGain).
- No other DSP on top — EQ and DSP work happens in the player apps or on the DAC.

The intro paragraph currently says "These three apps"; it will be reworded so it covers a streaming service plus the three players.

## Technical notes

- File: `src/pages/Index.tsx`, Software section.
- Grid becomes `md:grid-cols-2 lg:grid-cols-4` so four cards lay out cleanly instead of leaving a stranded card.
- Reuses existing `Card`, `Bullets`, `ExtLink` and `GlossaryLink` (`soundcheck` term already exists).
