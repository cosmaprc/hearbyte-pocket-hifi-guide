# Switch streaming preference from Apple Music to Deezer

## What changes

**Streaming & Playlists card (Links section)**
- Replace the Apple Music bullet with Deezer as the preferred streaming and discovery app, keeping the "its suggestions helped me build my best playlists" angle.
- Replace the catalogue bullet: large hi-res/lossless (FLAC) catalogue with Flow/Mixes for discovery and built-in audio normalization at roughly -15 LUFS. Drop the Spatial Audio mention since Deezer has no equivalent.
- Swap both playlist links to the resolved Deezer URLs, keeping the same titles:
  - Deze Beats Is Twistin Me Brainz — https://www.deezer.com/playlist/15583940003
  - Face Meltin Synths — https://www.deezer.com/playlist/15569033283

**My preferred audio chain**
- The "App" line currently names Apple Music with Sound Check on. Update it to Deezer with its "Normalize audio" setting on and every other DSP off (Dolby Atmos included).

**Using ReplayGain — Neutron Volume Normalization card**
- Change the target-loudness example from "-16 LUFS for Apple Music" to "-15 LUFS for Deezer", leaving the -14 LUFS (Spotify/YouTube/Tidal) and -18 LUFS ReplayGain defaults untouched.

Everything else (music stores, gear, headphone sections, glossary) stays as-is.

## Technical notes

- All edits are in `src/pages/Index.tsx`; no new components.
- Playlist links use canonical `deezer.com/playlist/<id>` URLs rather than `link.deezer.com` short links (tracking params stripped) so they stay stable and clean.
- Existing `ExtLink` component keeps rel/target and accessibility handling.
