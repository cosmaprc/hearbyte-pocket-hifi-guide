# Hero wording + two DAC caveat notes

## 1. Hero line

Replace the hero paragraph text with: "The gear and software I use to make music sound fun on a phone." (drops "actually" and ", and why"). Keyword highlighting on "fun" and "phone" stays as is.

## 2. Note: check USB DAC compatibility with your phone model

Add as a new bullet inside the existing "USB-C DAC dongles" card in Phones & Accessories, worded in the page's first-person voice:

- Check compatibility and known issues for your specific phone model before buying. USB DAC behaviour is not consistent across handsets.
- Examples from my own use: the FiiO KA11 works fine on Android and a Lightning iPhone 14, but goes monophonic on an iPhone 17 Pro Max in a way that looks potentially unsafe. The Hidizs S9 Pro Plus on firmware 1.0 broke on first use on an iPhone 17 Pro Max, having worked fine on Android and the Lightning iPhone 14.

## 3. Note: FiiO PEQ software bugs

Add as a bullet in the "Other DACs" group so it applies to both FiiO dongles — a shared note line under the JIEZI and QX13 cards (or a bullet added to each card, whichever reads cleaner in the grid):

- FiiO's PEQ software is buggy. At the time of writing, on both the JIEZI and the QX13, Q values on some bands shifted their decimals on their own, and the preamp field would only accept whole numbers.

## Technical notes

Edits confined to `src/components/hearbyte/Hero.tsx` and `src/pages/Index.tsx`. No new components, no link or spec changes elsewhere. Existing `ExtLink` / `GearLink` / `GlossaryLink` usage preserved; new gear names referenced in prose only. Finish with a typecheck and the Vitest suite.
