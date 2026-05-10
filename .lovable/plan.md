# HeartByte's Pocket Hi-Fi Guide — Single Page Site

A dark synthwave landing page presenting HeartByte's quick-pick recommendations for headphones, music players, EQ/DSP apps and ReplayGain tagging.

## Page structure (top to bottom)

1. **Hero** — HeartByte wordmark with neon cyan/magenta glow, "Pocket Hi-Fi Guide" tagline, scroll cue, synthwave sun + grid backdrop
2. **TableOfContents** — sticky horizontal bar on mobile/tablet, fixed vertical dot rail on desktop (fades in past the hero)
3. **Source** (cyan) — short paragraph: any modern iPhone/Android phone is fine
4. **Software** (magenta) — three player cards: jetAudio, Neutron, USB Audio Player Pro
5. **Headphones & Earbuds** (purple) — three picks with config & pairing call-outs: Moondrop Pill, Cambridge Audio A100, Cambridge Audio P100 SE
6. **Calculating & Applying ReplayGain** (orange) — foobar2000 on Windows + rsgain on Android via Termux
7. **Glossary** (cyan) — DSP, EQ/PEQ, FRC/AutoEQ, ReplayGain, Crossfeed, Target curve
8. **Links** (magenta) — three category cards: Reviews & Measurements, Community, Music Stores
9. **Footer** — wordmark, tagline, auto year

## Visual design

- Dark synthwave theme, deep navy/black background, magenta + cyan neon accents
- Orbitron display font + Inter body
- Card design: `bg-card-gradient` with thin neon borders that brighten on hover
- Hero backdrop: pure-CSS sun (mobile-shifted below the wordmark) + perspective grid floor
- Mobile-first; viewport tested at 390px

## Technical details

- Stack: React 18 + Vite + Tailwind v3 + TypeScript
- Section components under `src/components/hearbyte/` (Hero, Section, Card, Bullets, ExtLink, Divider, TableOfContents, Footer)
- Semantic theme tokens in `src/index.css` (HSL) and `tailwind.config.ts` (neon-magenta, neon-cyan, neon-purple, neon-orange, grid-line)
- No data file — copy lives inline in `src/pages/Index.tsx`
- Single route `/`, no auth, no backend
- SEO: title/description/OG/Twitter meta + JSON-LD `TechArticle` with `datePublished`/`dateModified`, `robots.txt`, `sitemap.xml`
- Smoke test: `src/pages/Index.test.tsx` (vitest + React Testing Library)
