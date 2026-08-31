Standardize chain-card DAC labels by PEQ state

## Goal
Make every wired chain card use the same wording for its DAC bullet(s), so it is immediately clear whether the listed DAC is running with the target PEQ profile or with no EQ.

## Plan
1. In `src/pages/Index.tsx`, update the DAC bullet labels in chains 1–4:
   - If the chain uses the target PEQ profile (PEQ preamp headroom > 0 dB), label the bullet `DAC (with PEQ):`.
   - If the chain runs with no EQ (PEQ preamp headroom = 0 dB), label the bullet `DAC (no EQ):`.
2. Replace the existing inconsistent phrasing:
   - Chain 1: `DAC:` → `DAC (with PEQ):`; `DAC, alternative:` → `DAC (no EQ):`.
   - Chain 2: `DAC:` → `DAC (no EQ):`; `DAC, with the PEQ profile:` → `DAC (with PEQ):`.
   - Chain 3: `DAC:` → `DAC (with PEQ):`.
   - Chain 4: `DAC:` → `DAC (no EQ):`.
3. Leave wireless chains (5–8) untouched, since they do not list a wired DAC.
4. Preserve the existing math, links, and punctuation in each bullet; only change the label text.

## Result
All chain cards that mention a DAC will use one of two consistent labels: `DAC (with PEQ):` or `DAC (no EQ):`. No more `DAC, alternative:` or `DAC, with the PEQ profile:` variants.