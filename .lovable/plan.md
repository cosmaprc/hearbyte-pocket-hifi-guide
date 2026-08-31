Standardize chain-card DAC labels by PEQ state

## Goal
Make every wired chain card use the same wording for its DAC bullet(s), so it is immediately clear whether the listed DAC is running with the target PEQ profile or with no EQ.

## Plan
1. In `src/pages/Index.tsx`, update the DAC bullet labels in chains 1–4:
   - If the chain uses the target PEQ profile (PEQ preamp headroom > 0 dB), label the bullet `DAC (with PEQ):`.
   - If the chain runs with no EQ (PEQ preamp headroom = 0 dB), label the bullet `DAC (no EQ):`.
2. Replace the existing inconsistent phrasing, and where both no-EQ and with-PEQ points appear on the same card, place the no-EQ point first:
   - Chain 1: reorder so the no-EQ Qudelix 5K bullet comes first, then the with-PEQ Qudelix 5K bullet; use `DAC (no EQ):` and `DAC (with PEQ):`.
   - Chain 2: already has no-EQ first; relabel to `DAC (no EQ):` and `DAC (with PEQ):`.
   - Chain 3: `DAC:` → `DAC (with PEQ):`.
   - Chain 4: `DAC:` → `DAC (no EQ):`.
3. Leave wireless chains (5–8) untouched, since they do not list a wired DAC.
4. Preserve the existing math, links, and punctuation in each bullet; only change the label text.

## Result
All chain cards that mention a DAC will use one of two consistent labels: `DAC (with PEQ):` or `DAC (no EQ):`. Where a card lists both, the no-EQ option appears first. No more `DAC, alternative:` or `DAC, with the PEQ profile:` variants.