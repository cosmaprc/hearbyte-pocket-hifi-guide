# Fix: short sections rarely get highlighted in the menu

## What's wrong

The menu decides which section is "current" using an IntersectionObserver that compares how much of each section is visible. Tall sections almost always win that comparison, so short ones — "Finding your preferences" and "Links" — get skipped as you scroll, and because the highlight never lands on them the bar never scrolls them into view either. "Links" is also the last section, so it can rarely fill enough of the screen to win.

## The fix

Replace the "who is most visible" logic with a simple reading-line rule:

- Pick a horizontal line about a third of the way down the screen (just under the sticky bar).
- The active section is the last one whose top edge has passed that line — regardless of how tall or short it is.
- When the page is scrolled to the bottom, force the final section ("Links") active so it always highlights.
- Recompute on scroll and resize (throttled with requestAnimationFrame), and skip recomputation while a chip click's smooth scroll is settling so the highlight doesn't flicker mid-jump.

The existing auto-scroll of the active chip stays as is; it will now trigger for every section, including the short ones.

## Technical notes

- File: `src/components/hearbyte/TableOfContents.tsx`
- Remove the `IntersectionObserver` effect; add a scroll handler that reads `getBoundingClientRect().top` for each section element and selects the last one with `top <= window.innerHeight * 0.33`, defaulting to the first section.
- Bottom-of-page guard: if `window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 4`, set the last section active.
- No content, layout, or styling changes; both the desktop dot panel and the mobile/tablet chip bar read the same `active` state.
