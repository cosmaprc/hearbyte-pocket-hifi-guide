# Replace M50x chains with EarFun Wave Pro X

## Goal
Remove the Audio-Technica ATH-M50x BT2 completely and insert a new Chain 4 card for the EarFun Wave Pro X, then renumber the remaining chains.

## Changes

### 1. Remove both M50x cards
Delete the existing Chain 4 (ATH-M50x BT2 — wired) and Chain 5 (ATH-M50x BT2 — wireless) from `src/pages/Index.tsx`.

### 2. Add new EarFun Wave Pro X card as Chain 4
Insert a new card titled `4 · EarFun Wave Pro X — wireless/wired` after Chain 3 (AKG K371). Use the official product link [1](https://www.myearfun.com/eu/headphones/earfun-wave-pro-x-hi-res-hybrid-anc-true-wireless-headphones-black).

Bullets to include (wireless first, wired second, in site style with magenta labels and cyan values):
- Headphones: EarFun Wave Pro X.
- Wireless codecs: Bluetooth with LDAC and aptX Lossless.
- On iPhone: use a FiiO Air Link adapter to get aptX Lossless from the iPhone's USB-C port.
- App: EarFun Audio App — 10-band GEQ, 10-band PEQ, EQ profiles, plus Personalised Sound and My Sound Profile features.
- ANC: hybrid active noise cancellation.
- Controls: physical buttons.
- Physical: comfortable, foldable, includes hard case.
- Wired modes: USB-C digital audio and 3.5 mm analogue.
- Price/value: well under £150 (~€150).
- General verdict: very useful and responsive app.

No "Can it drive it?" panel is needed because the headphone is self-powered over Bluetooth/wired digital.

### 3. Renumber remaining chains
After the insertion, the chain order becomes:
1. Sennheiser HD 560S — untethered
2. HiFiMAN Sundara (2022) — untethered
3. AKG K371 — wired
4. EarFun Wave Pro X — wireless/wired
5. Moondrop × Wuthering Waves U.C.T.S. — wireless
6. Moondrop Pill — wireless

Update the `title` prop of the Moondrop U.C.T.S. card from `6 · ...` to `5 · ...` and the Moondrop Pill card from `7 · ...` to `6 · ...`.

### 4. Update the "What the dongles actually output" intro
The paragraph at line ~541 currently names `ATH-M50x BT2` as a load and lists `32 Ω`, `38 Ω`, `120 Ω`. Replace it with:
- Remove the `ATH-M50x BT2` reference.
- List only `32 Ω` and `120 Ω` as the loads actually used (AKG K371 / HiFiMAN Sundara and Sennheiser HD 560S).

### 5. Remove the 38 Ω rows from the dongle output tables
The `38 Ω` rows in the FiiO JIEZI, Qudelix 5K, and FiiO QX13 tables were only included for the M50x. Remove them so the tables match the headphones that remain in the guide.

## Verification
Run the typecheck, Vitest suite, and a quick Playwright preview check of the chains section to confirm the new card renders and the renumbering is correct.
