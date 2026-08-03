# Fix missing HD 560S + Qudelix 5K photos on GitHub Pages

## What's wrong

The two photos are referenced through Lovable's CDN asset pointers (`src/assets/*.asset.json` → `/__l5e/assets-v1/...`). That path only exists on Lovable-hosted previews and publishes. On GitHub Pages (`pockethifiguide.heartbyte.website`) nothing serves `/__l5e/...`, so both `<img>` tags 404 and render empty.

The original JPEGs are still in the repo (`src/assets/IMG_6172.jpeg`, `IMG_6173.jpeg`), so the fix needs no re-upload.

## Fix

Bundle the images with Vite instead of loading them from the CDN, so they ship inside `dist/` and work on any host.

1. Create web-sized copies of the two photos (max ~1400 px wide, quality ~82) as `src/assets/hd560s-qudelix-headband.jpg` and `hd560s-qudelix-front.jpg`. The originals are ~2 MB each; resized they should land well under 300 KB each, which matters on mobile.
2. In `src/pages/Index.tsx`, swap the two `.asset.json` imports for direct image imports and use the imported URL in `src`. Alt text, `loading="lazy"`, and the existing two-up grid layout stay unchanged.
3. Remove the now-unused CDN pointers with `lovable-assets delete` and delete the leftover `IMG_617*.jpeg` originals.

## Notes

- Vite hashes bundled images and prefixes them with the configured `base`, so they resolve correctly both on the custom domain and in the Lovable preview.
- Only `src/pages/Index.tsx` and files under `src/assets/` are touched; no component or section changes.
- After the change, the images will appear on the live site once you merge to `release` and the Pages workflow finishes.
