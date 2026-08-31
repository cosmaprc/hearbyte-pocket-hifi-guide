# Add an "Online tools for your amp capability steps" guide to "Do you have enough power?"

A new step-by-step block showing readers how to use online tools to check whether a source can drive a headphone, supplementing the existing calculator list in the intersample-clipping callout.

## Where it goes

Inside `#demands`, immediately after the "Current-centric output comparison" table and before the "Important · intersample clipping and headroom" callout. This keeps the theory and comparison table together, then bridges into practical application before the headroom warning and dongle output tables.

```text
Current-first law
Current-centric output comparison
Online tools for your amp capability steps (new)
Important - intersample clipping and headroom
What the dongles actually put out
```

## Content

Heading: **Online tools for your amp capability steps**

Intro line: a one-sentence note that the calculators below turn the numbers above into a yes/no answer.

Step table:

| Step | Objective | Recommended online tool & link |
| --- | --- | --- |
| Step 1 | Target peak loudness (dB SPL calculation) | No specialized web tool needed. Use a standard phone calculator: `[Avg dB] + [PEQ Loss] + [Genre Headroom]`. |
| Step 2 | Calculate required current (mA) | <ExtLink href="https://headphones.com">Headphones.com power calculator</ExtLink> · <ExtLink href="https://headphonesty.com">Headphonesty headphone power calculator</ExtLink> |
| Step 3 | Check amp capabilities (voltage & power caps) | <ExtLink href="https://omnicalculator.com">Omni Headphone Power Calculator</ExtLink> · <ExtLink href="https://moon-audio.com">Moon Audio amp calculator</ExtLink> |

The exact homepage URLs from the provided table are used verbatim, even though the page already links to specific calculator sub-pages elsewhere.

## What does not change

The existing "Important · intersample clipping and headroom" callout and its three calculator links stay exactly as they are. No existing copy, anchors, section ids, metadata or links are modified.

## Technical notes

Single file: `src/pages/Index.tsx`. Reuse the compact `<table>` style already used in the current-centric comparison table: cyan uppercase headers, magenta first column (`scope="row"`), `overflow-x-auto` wrapper, `bg-card-gradient` panel, `text-xs` sizing. The first two columns stay narrow; the third column carries the tool links and wraps naturally. No new components; verify with `bunx tsgo --noEmit -p tsconfig.app.json` and `bunx vitest run`.
