# Copy pass: make the writing sound human

A wording-and-phrasing edit only. No layout, links, gear, numbers or structure change — every claim, spec and recommendation stays exactly as it is. The goal is to strip the tells of AI-written prose: stacked em-dashes, "not just X but Y" constructions, triplet lists, marketing adjectives, and sentences that explain the obvious.

## The recurring tics to remove

1. **Em-dash overload.** Most paragraphs use two or three per sentence. Keep one where it earns its place; turn the rest into full stops or commas.
2. **"It's not just A, it's B" / "far more than" framings.** e.g. "shapes your sound far more than any cable or DAC", "Tuning and EQ matter far more than codec". Say it plainly once.
3. **Rule-of-three padding.** "hiss, clipping, or not enough volume headroom", "widens the stage and can make stock-tuned headphones sound more open and immersive", "loudness normalization, Preamp control and serious DSP power". Trim to what actually matters.
4. **Reviewer adjectives.** "the magic happens in the software", "the headphone sings", "first-class", "serious DSP power", "incredibly well-written manual", "a pioneer in bringing DSP to dongle DACs", "deep DSP toolbox". Replace with concrete description or a flat statement.
5. **Instructional scaffolding no reader needs.** "Worth checking the spec sheet before assuming...", "and stop worrying", "in case anything is new to you", "A curated set of external resources for diving deeper into...".
6. **Straight-to-the-point openers.** Several section intros restate the section title before saying anything. Cut the restatement and start with the actual point.

## Section-by-section

- **Hero / Footer** — the tagline reads like ad copy ("Quick-pick gear and software pairings to get the most fun and engaging sound out of your music"). Rewrite in first person: what this page is and who wrote it. Footer line follows.
- **My preferred audio chains** — the bullets are already terse and mostly fine. Light touches only: "none at all, or the rtings.com target preference curve PEQ profile" repeated verbatim four times reads generated; vary it naturally. The "How I run it" panel loses "See the electrical demands table for why this pairing has plenty of margin" phrasing in favour of something less brochure-like.
- **Finding your own preferences** — one long sentence with four clauses. Break into two or three sentences, drop "before spending big" cliché, keep both headphones and both links.
- **Phones & Accessories** — rewrite the intro (drop "let the apps do the heavy lifting" and "the magic happens in the software"). Trim the codec card's closing bullet. Dolby Atmos card loses "It's a worthwhile bonus". Qudelix card loses "The pick if you only buy one thing" superlative stacking and "travels well".
- **Software** — new intro without the comparative flourish. Neutron/UAPP/jetAudio bullets get plainer verbs; drop "transform how your music sounds" and "Deep DSP toolbox".
- **Headphone electrical demands** — the four intro paragraphs are the most AI-sounding block on the page, especially "almost every guide gets it wrong" and the self-referential "one of the most repeated ideas in audio writing and in AI-generated text". Keep the correction and the oratory1990 source, but say it once, in your own voice, without the meta-commentary about AI. Table cell wording gets the same de-listing treatment; all specs, Ω/dB figures, gear names and links unchanged.
- **Using ReplayGain** — intro keeps the track vs album advice but loses "no more reaching for the volume between songs" (it also appears in the Sound Check glossary entry — one of the two goes).
- **Getting music onto your phone** — "The Android story is boring" is good voice, keep it. Trim "no app-specific sandbox dance".
- **Glossary** — definitions stay technically identical; a handful get shortened where they run on. Drop the intro's "in case anything is new to you".
- **Links** — replace the "curated set of external resources" intro. The per-link one-liners are repetitive in shape ("— X with Y"); vary a few so the list doesn't read as machine-generated, keeping every URL and title.

## One real bug found while reading

The hero button links to `#headphones`, a section that was deleted. It currently scrolls nowhere. I'll repoint it at `#chain` and relabel it to match.

## Technical notes

Edits confined to `src/pages/Index.tsx`, `src/components/hearbyte/Hero.tsx` and `src/components/hearbyte/Footer.tsx`. No component, prop or data-shape changes; all `ExtLink`, `GearLink`, `GlossaryLink` and anchor targets preserved (except the hero fix above). Finishing with a typecheck and the existing Vitest suite.
