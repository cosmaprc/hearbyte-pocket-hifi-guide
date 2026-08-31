# Fix floating TOC visual issue on tablets

## Problem
On Amazon tablets (and similar mid-size screens), the floating table-of-contents menu can render as a large, translucent vertical oval. This comes from the desktop nav style: a `rounded-full` pill with `bg-background/60` and `backdrop-blur-md` that looks out of place when it appears on a tablet viewport.

## Proposed changes

### 1. Redesign the desktop floating TOC container
- Replace the tall `rounded-full` pill with a compact `rounded-2xl` card.
- Use a more opaque background (`bg-background/85` or higher) and a subtle border so the shape reads as a deliberate panel, not a smudged oval.
- Keep the individual dot indicators but make the active dot clearly filled and the inactive dots higher-contrast.
- Ensure the label tooltip on hover remains readable.

### 2. Adjust the breakpoint so tablets use the horizontal bar
- Move the switch from `lg` to `xl` (or add an intermediate `md`/`lg` state) so landscape tablets show the horizontal sticky bar instead of the vertical floating dots.
- The horizontal bar already exists and works well for mobile; widening its reach prevents the desktop oval from appearing on tablet-sized screens.

### 3. Clean up the mobile horizontal bar
- Remove the top border or make it subtler so it does not look like a separate strip.
- Keep overflow scrolling hidden (`[scrollbar-width:none]`) and padding consistent.

## Files to edit
- `src/components/hearbyte/TableOfContents.tsx`
- Possibly `src/index.css` if new utility tokens are needed (unlikely; Tailwind utilities should suffice).

## Outcome
The TOC will look intentional on all screen sizes: a clean horizontal chip bar on phones and tablets, and a compact, higher-contrast floating card on large desktops.
