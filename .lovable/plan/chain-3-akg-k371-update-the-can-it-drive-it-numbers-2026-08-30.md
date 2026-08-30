# Chain 3 (AKG K371) — update the "Can it drive it?" numbers

Three edits inside the K371 FiiO JIEZI panel in `src/pages/Index.tsx`:

- Power / voltage needed: `~800 mW / ~0.8 V` becomes `~1.01 V` (the stale `~800 mW` figure is dropped, since it no longer matches the new voltage).
- FiiO JIEZI on 3.5 mm single-ended: `1 V` becomes `1.04 V`.
- Calculator link updated to the new pre-filled URL (`sens=99`, `z=32`, `v=1.04`, `spl=100`, `hr=14`).

## Note

The panel currently says the Sound Check line leaves "98 dB average at the amp", while the new calculator link uses `spl=100`. Nothing else in the panel changes unless you want that line updated too.
