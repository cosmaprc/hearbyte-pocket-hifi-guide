# Consistency pass: highlights, numbers, order

A full read-through of the page turned up a set of small inconsistencies. Grouped by type, with the fix for each.

## 1. Wrong derived numbers in the "Can it drive it?" panels

Each panel lists `Sound Check headroom: 7 dB (so X dB average at the amp)`. That figure should always be target average + 7 = 97 dB, but:

- Chain 1 (HD 560S): 97 dB — correct
- Chain 2 (Sundara): says 106 dB — wrong, should be 97
- Chain 3 (K371): says 98 dB — wrong, should be 97
- Chain 4 (M50x BT2): 97 dB — correct

Chain 1 also lists `Current pushed: 28.87 mA`, but 105 mW into 120 Ω is 3.55 V / 29.6 mA. Fix to 29.6 mA (or tell me the value you want kept and I'll leave it).

The pre-filled `spl=` value in the theaudiostuff links is also inconsistent between chains (107, 106, 100, 97). Each should be the average-at-amp figure, i.e. `spl=97` for all four, with `hr=14`. Chain 4's link also passes `v=1` while the text quotes 1.043 V — align to 1.043.

Also: drop the parenthetical "(so X dB average at the amp)" from every chain card. The preceding "Sound Check headroom: 7 dB" already says enough; the raw target average can go into the expanded calculation list only.

## 2. Two panel styles for the same thing

Chain 1 shows the detailed bullet list for the Qudelix and a one-line summary for the QX13; chain 2 does the opposite (one-liner for Qudelix, list for QX13). Chains 3 and 4 use the list only.

Fix: keep one detailed list per chain (the DAC that chain actually leads with) and one compact one-liner for the alternative, in the same order everywhere — detailed first, alternative second. Also give the one-liner panels the same `Can it drive it? / why?` heading row on its own line as the list panels, so the "why?" link sits in the same place in all eight panels.

## 3. Highlight and formatting inconsistencies

- `3.5mm`, `2.5mm`, `4.4mm` in the Qudelix 5K and FiiO QX13 cards under Phones & Accessories; everywhere else it is `3.5 mm` / `2.5 mm` / `4.4 mm`. Standardise on the spaced form.
- The Qudelix 5K "Recommended" card highlights `AutoEQ` in cyan; the Links section calls it AutoEQ as a link. Fine, but the same card writes "20-band parametric EQ" with the glossary link nested inside a magenta span — the nested colours fight each other. Flatten to a single magenta label plus the glossary link.
- `IEM` appears in the current-centric table and in Links with no glossary link, although a `#g-iem` entry exists. Link the first mention (in the power section).
- `Adaptive Loudness Compensation` in the Neutron software card is plain text although `#g-alc` exists. Link it.
- Chain 5's "How I run it" panel says "no EQ of any kind" while the chain's own EQ bullet says stock tuning *or* the PEQ profile on the 5K. Reword the panel so it doesn't contradict the bullet.

## 4. Glossary clean-up

The intro says "definitions for the terms used above", but two entries are orphans:

- `DynamEQ` — describes the Cambridge Audio Melomania app, which no longer appears anywhere on the page. Remove.
- `ANC` — no longer mentioned anywhere since the headphones section was removed. Remove (or keep it if you want it as general reference — say so and I'll leave it).

Also: the `OWS` entry uses "e.g. the Moondrop Pill" as its example, but the Pill is a sealed-fit earbud and the page's actual OWS product is the Moondrop × Wuthering Waves U.C.T.S. Change the example.

Alphabetical order itself is correct and stays as-is.

## 5. Section order and table of contents

Current order: chains → enough power → finding your preferences → phones → software → ReplayGain → transfer → glossary → links.

Two changes:

- Move **Finding your own preferences** to sit directly after **Software**. Its content is about loading target curves in USB Audio Player Pro with MorphIt, so it only makes sense once the reader has met those apps. New order: chains → enough power → phones → software → finding your preferences → ReplayGain → transfer → glossary → links. The table of contents is updated to match.
- **Finding your own preferences** currently uses the same `purple` tone as **Enough power?** right above it, so the two sections read as one block. Give it `orange`'s sibling treatment — retone it to `cyan` and keep Phones on cyan but non-adjacent, or retone Preferences to `magenta`. I'll use `magenta` since it will then sit between Software (magenta) and ReplayGain (orange) — say the word if you'd rather I pick a different tone.

## 6. Dead code

- `GearLink` is defined in `src/pages/Index.tsx` and never used — delete.
- `src/components/hearbyte/DataTable.tsx` is no longer imported anywhere (the electrical-demands table it powered was removed) — delete the file.

## Technical notes

All content edits are in `src/pages/Index.tsx`; the section order change also touches the `sections` array in `src/components/hearbyte/TableOfContents.tsx`. No logic or data-model changes. Verification: typecheck, test suite, plus a Playwright pass over the reordered page to confirm anchors (`#chain`, `#demands`, `#preferences`, `#g-iem`, `#g-alc`) still resolve.
