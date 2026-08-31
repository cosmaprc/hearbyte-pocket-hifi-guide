# Add an "Online tools" card to the Links section

A new card in the Links grid collecting the three headphone power calculators currently only listed inside the intersample-clipping callout.

## The card

Title: **Online tools**, placed after "Measurements & EQ tools" so the two tool cards sit together.

Bullets:
- theaudiostuff.com headphone power calculator — the one used by the "Can it drive it?" panels; the link keeps the pre-filled 300 Ω / 97 dB/V example.
- Headphonesty headphone power calculator.
- Headphones.com power calculator.

A short line notes these tell you whether a dongle has enough voltage and headroom for a given headphone, linking back to the power section (`#demands`).

## What does not change

The calculator list inside the intersample-clipping callout stays where it is — it is the explanation readers are sent to from six places on the page. This card just makes the tools findable from Links too.

## Technical notes

Single edit in `src/pages/Index.tsx`, inside the `#links` grid, reusing `Card`, `Bullets` and `ExtLink`. Finish with `bunx tsgo --noEmit -p tsconfig.app.json` and `bunx vitest run`.
