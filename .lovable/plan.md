# Chain 2: show both power calculators

In the chain 2 (HiFiMAN Sundara 2022) "Can it drive it?" panel for the FiiO QX13 + PEQ setup, the "Run the numbers yourself" line lists both calculators instead of one:

- theaudiostuff.com headphone power calculator — pre-filled with the chain's values (92 dB SPL/mW, 32 Ω, 5.37 V, 106 dB, 14 dB headroom), but it does not report current in mA.
- headphones.com headphone power calculator — reports the current draw in mA, but cannot be pre-filled from the URL, so the values have to be typed in.

The line reads as one sentence naming that trade-off, keeping the same styling as the rest of the panel.

Chains 1, 3 and 4 keep the single headphones.com link as they are now.

## Technical notes

Single edit in `src/pages/Index.tsx` (the chain 2 QX13 panel), reusing `ExtLink`. Finish with `bunx tsgo --noEmit -p tsconfig.app.json` and `bunx vitest run`.
