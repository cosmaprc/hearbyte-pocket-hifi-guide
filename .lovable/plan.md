# Technical review: fix broken links and stale references

I checked every outbound link on the page (64 URLs), the in-page anchors, the head metadata, the sitemap and a TypeScript typecheck. Typecheck passes and all in-page section anchors resolve. Five real problems found.

## 1. Three product links return 404

| Product | Current (404) | Replace with |
| --- | --- | --- |
| Qudelix 5K (4 places) | qudelix.com/products/qudelix-5k-dac-amp | https://www.qudelix.com/products/qudelix-5k |
| FiiO JIEZI (3 places) | fiio.com/jiezi | https://fiio.com/newsinfo/1065510.html (FiiO's official JIEZI launch/product page — FiiO has no `/jiezi` page) |
| FiiO eStick (2 places) | fiio.com/estick | https://www.fiio.com/productinfo/1507720.html (official SK-ESTICK + QX13 product page) |

All three replacements were verified to return 200.

## 2. Broken skip link

`index.html`'s "Skip to main content" link points at `#source`, a section that was removed long ago, so keyboard users land nowhere. Repoint it at the first real section, `#chain`.

## 3. Stale dates

`index.html` JSON-LD says `dateModified: 2026-05-13` and `public/sitemap.xml` says `lastmod 2026-05-13`, although the page has changed many times since. Update both to today's date (2026-08-30).

## 4. Glossary entries nobody links to

Seven glossary terms are defined but never referenced from the body text: ALC, ANC, DynamEQ, FRC, IEM, OWS, target curve. They still work as reference entries, so I'd keep them and add inline `GlossaryLink`s where the terms already appear in prose (for example IEM and target curve in the electrical demands and preferences sections), rather than delete them.

## 5. Not a bug — for the record

Apple App Store (429) and Reddit / AKG / Audio-Technica / Bongiovi / Neutron / Headphoneer (403/406) links only reject automated requests; they load fine in a browser. No change needed.

## Technical notes

Files touched: `src/pages/Index.tsx` (link URLs + a few glossary links), `index.html` (skip-link target, `dateModified`), `public/sitemap.xml` (`lastmod`). Finish with a typecheck and the existing Vitest suite.
