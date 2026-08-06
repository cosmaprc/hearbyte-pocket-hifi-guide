# Switch streaming preference from Deezer back to Apple Music

## What changes

**Streaming & Playlists card (Links section)**
- Replace the Deezer bullet with Apple Music as the preferred streaming and music discovery app, keeping the "its suggestions helped me build my best playlists" angle.
- Replace the catalogue bullet: large hi-res / lossless catalogue with Spatial Audio tracks and Apple Music's built-in audio normalization at roughly -16 LUFS. Drop the Flow/Mixes mention.
- Swap both playlist links to the provided Apple Music URLs, keeping the same titles:
  - Deze Beats Is Twistin Me Brainz — https://music.apple.com/gb/playlist/deze-beats-is-twistin-me-brainz/pl.u-kv9lbpjC7GxrejK
  - Face Meltin Synths — https://music.apple.com/gb/playlist/face-meltin-synths/pl.u-jV890p9Cd6ExlpN

**My preferred audio chain**
- The "App" line currently names Deezer with "Normalize audio" on. Update it to Apple Music with Sound Check on and every other DSP off (Dolby Atmos included).

**Using ReplayGain — Neutron Volume Normalization card**
- Change the target-loudness example from "-15 LUFS for Deezer" to "-16 LUFS for Apple Music", leaving the -14 LUFS (Spotify/YouTube/Tidal) and -18 LUFS ReplayGain defaults untouched.

Everything else (music stores, gear, headphone sections, glossary) stays as-is.

## Technical notes

- All edits are in `src/pages/Index.tsx`; no new components.
- Playlist links use the provided `music.apple.com` URLs directly.
- Existing `ExtLink` component keeps rel/target and accessibility handling.
