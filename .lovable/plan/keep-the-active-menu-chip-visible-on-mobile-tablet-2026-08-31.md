# Keep the active menu chip visible on mobile/tablet

## Problem

On phones and tablets the section menu is a horizontal scrolling bar. As you scroll the page, the correct chip gets highlighted, but if that chip sits off-screen to the right, the bar never scrolls it into view — so the active item stays hidden.

## Fix

Auto-scroll the horizontal bar so the active chip is always visible:

- Track the scroll container (the `ul`) and each chip via refs.
- When the active section changes, scroll the container horizontally so the active chip is centred (or nudged just into view), using smooth scrolling.
- Only scroll horizontally — never move the page itself.
- Respect `prefers-reduced-motion` by falling back to an instant jump.

## Technical notes

In `src/components/hearbyte/TableOfContents.tsx`:

- Add `useRef` for the mobile `ul` element and a `Map<string, HTMLAnchorElement>` of chip nodes.
- Add an effect on `active` that computes the chip's `offsetLeft`/`offsetWidth` against the container's `scrollLeft`/`clientWidth` and calls `container.scrollTo({ left, behavior })`. Manual left/width math is used instead of `scrollIntoView` so the page cannot be scrolled vertically as a side effect.
- Desktop vertical nav (xl and up) is unchanged.

## Verification

Screenshot the mobile and tablet viewports at a deep scroll position to confirm the highlighted chip is visible within the bar.
