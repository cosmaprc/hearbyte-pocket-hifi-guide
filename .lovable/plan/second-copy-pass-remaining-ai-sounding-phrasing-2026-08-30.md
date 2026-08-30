# Second copy pass: remaining AI-sounding phrasing

The last pass cleaned up most of the em-dash pile-ups. What's left is subtler: repeated sentence shapes, stock "guide voice" flourishes, and a few lines that repeat something said elsewhere on the page. Wording only — no gear, specs, numbers, links, anchors or layout changes.

## Patterns still showing up

1. **Repeated snappy closers.** Nearly every card ends on a short verdict sentence in the same rhythm: "If you buy one thing, buy this.", "The easy row.", "It won't take long to work out which side you sit on.", "None of them beat a desktop amp here.", "A desktop amp is still the right answer.", "Power isn't the problem here, hiss and coarse volume steps are." Keep two or three of the best; fold the rest into the sentence before so the section stops sounding like a series of punchlines.
2. **The same PEQ sentence four times.** The four wired chains each end with a variant of "or the rtings.com target preference curve PEQ profile" plus a different hedge ("usually none", "flat most of the time", "stock tuning"). Say the option once in the shared base card, then let each chain state only what it actually does.
3. **"X matters more than Y" framing, still twice.** Software intro ("will change the sound more than any cable or DAC") and codecs ("Tuning and EQ will change the sound far more than the codec does"). One of the two goes.
4. **Guide-voice second person.** "Get the pairing right and you never think about it again", "Read the spec sheet first. You may already have the dongle you were about to buy.", "if you want a recommendation for your budget", "if someone has already done the work". Rewrite in plain statement or first person.
5. **Duplicated facts.** dB/mW vs dB/V and the 32 Ω / 114 dB/V example appear in the demands prose and again verbatim in the glossary. The planar / damping-factor point also appears in both places plus a table cell. Keep the full explanation in one spot and shorten the other to a pointer.
6. **Adjective padding.** "unusually thorough and worth reading properly", "the most responsive companion app I have used on anything", "decades of enthusiast impressions, for better and worse", "which makes comparisons actually mean something", "pays the artist properly". Trim to the claim.
7. **Link one-liners still in one shape.** In Reviews, Measurements and Community the em-dash gloss pattern returns for most entries. Vary roughly half.

## Section notes

- **My preferred audio chains** — move the EQ option into the shared base, drop the four near-identical EQ bullets to short ones. "Chains · in the order I reach for them" subheading loses the explanatory tail.
- **Finding your own preferences** — trim the closer; keep both headphones, both links and the MorphIt instruction.
- **Phones & Accessories** — reword the intro's three-clause ending. Android/iPhone card closers get plainer. Codecs card drops one of the two "matters more than" lines. USB DAC card: the compatibility warning and its two examples stay factually identical, just shorter.
- **Recommended (Qudelix 5K)** — "If you buy one thing, buy this" and "so it covers two purchases" say the same thing twice; keep one. Drop the "most responsive app I have used on anything" superlative to something flatter.
- **Software** — new intro without the comparative. Neutron's "The widest DSP set of the three" stays (it's a real comparison), Neutron HiFi DAC V1 manual line loses the adjectives.
- **Headphone electrical demands** — four intro paragraphs still read as a lecture. Compress the units paragraph now that the glossary carries the detail; keep the oratory1990 correction and its link intact. Table cells lose the verdict-sentence rhythm; every Ω, dB, mW and VRMS figure unchanged.
- **ReplayGain / Transfer** — light touches only; both read well already.
- **Glossary** — Sound Check keeps its definition but loses "so you stop reaching for the volume between songs" if the ReplayGain intro keeps the equivalent idea. dB/mW entry becomes the canonical explanation.
- **Links** — vary the one-liner shapes; every URL and title preserved.

## Technical notes

Edits confined to `src/pages/Index.tsx`, plus `src/components/hearbyte/Footer.tsx` if the tagline needs matching. No component, prop or data-shape changes; all `ExtLink`, `GearLink`, `GlossaryLink` and `#anchor` targets preserved. Finish with a typecheck and the existing Vitest suite.
