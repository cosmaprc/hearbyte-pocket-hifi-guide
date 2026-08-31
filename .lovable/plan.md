# Move "Do you have enough power?" directly after the chains

The chains section links into `#demands` six times (the `why?` links next to each "Can it drive it?" panel), but that section currently sits two sections later, after Phones & Accessories and Software. Moving it up puts the explanation right where readers are sent.

## New order

```text
My preferred audio chains
Do you have enough power?      <- moved up
Finding your own preferences
Phones & Accessories
Software
Using ReplayGain
Getting music onto your phone
Glossary
Links
```

## Changes

- `src/pages/Index.tsx`: move the whole `<Section id="demands">` block (heading, impedance/sensitivity copy, units note, intersample-clipping callout, and the three dongle output panels) so it renders immediately after the chains section, with its `<Divider />` moved with it. No copy, spec, figure, link or anchor changes.
- `src/components/hearbyte/TableOfContents.tsx`: reorder the `sections` array to match, so the scroll-spy and nav order stay in sync.

## What does not change

Every anchor id stays the same, so all six `why?` links, the HD 560S power-notes cross-link and any external deep links keep working. No content edits.

## Technical notes

Two files, pure move. Verify with `bunx tsgo --noEmit -p tsconfig.app.json` and `bunx vitest run`.
