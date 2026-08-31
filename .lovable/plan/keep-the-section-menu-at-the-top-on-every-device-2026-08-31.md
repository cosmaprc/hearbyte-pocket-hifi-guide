# Keep the section menu at the top on every device

## Change

- Remove the desktop-only floating vertical table-of-contents panel, including its translucent container.
- Use the existing sticky horizontal chip menu at every viewport width, including Amazon tablets and desktop browser tabs.
- Preserve the current active-section highlighting and automatic left/right scrolling that keeps the active chip visible.
- Keep the menu attached to the top of the page while scrolling, with horizontal overflow available when all chips do not fit.

## Technical details

In `src/components/hearbyte/TableOfContents.tsx`:

- Delete the `xl:block` floating navigation variant.
- Remove the `xl:hidden` restriction from the sticky navigation.
- Remove state and scroll-listener code used only to reveal the floating panel after scrolling.
- Leave the reading-line section tracking, click navigation, reduced-motion behavior, and chip auto-scrolling unchanged.

## Verification

Check phone, Amazon-tablet-sized, and desktop viewports at deep scroll positions to confirm the menu remains at the top, the active chip is highlighted and visible, and no floating translucent panel appears.
