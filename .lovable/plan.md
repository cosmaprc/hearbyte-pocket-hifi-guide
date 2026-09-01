# Chain-card fixes: Chain 5 note, Moondrop U.C.T.S. link, Moondrop Pill title

## 1. Shorten the Chain 5 "How I run it" note
In `src/pages/Index.tsx`, inside the Chain 5 card ("Sennheiser HD 560S — wireless"), trim the "How I run it" paragraph so only the first sentence remains.

Current full text:
"The 5K velcros to the headband. I run LDAC 990 kbps and usually leave the tuning stock. If you want correction, load the PEQ profile onto the 5K itself rather than relying on the phone. The balanced output gives more headroom if you want it, and plugging in over USB makes it wired and bit-perfect. The power notes explain how much margin this pairing has."

Keep only:
"The 5K velcros to the headband."

## 2. Fix the Moondrop × Wuthering Waves U.C.T.S. link
Replace the broken URL `https://moondroplab.com/en/products/u-c-t-s` with the verified working URL:
`https://moondroplab.com/en/products/ucts`

## 3. Drop "Pill S" from Chain 8
- Change the card title from "8 · Moondrop Pill / Pill S — wireless" to "8 · Moondrop Pill — wireless".
- Change the first bullet from "Moondrop Pill or Pill S" to just "Moondrop Pill".

## Verification
After the edits, run a typecheck and the existing Vitest suite, then do a quick preview check of the chains section.
