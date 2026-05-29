## Goal

Weave six new pieces of advice into the existing single-page guide so each one lands in the most relevant section, rather than adding one big "tips" dump at the bottom.

## Where each note goes

### 1. Source section — expand into "Source & Connection"

The current Source section is a single sentence. Expand it (still concise) with three sub-topics, presented as short Cards in a `md:grid-cols-3`:

- **Bluetooth codecs** — Card explaining AAC, aptX HD, aptX Lossless, LDAC. Note that they range from lossy to effectively lossless, but in blind listening most people (and most headphones) won't reliably tell them apart, nor reliably tell them from a wired connection. Pick what your phone and headphones both support; don't lose sleep over it.

- **USB DAC dongles** — Card covering two related cases:
  - Phone missing the codec you want (especially LDAC or aptX Lossless): a Bluetooth transmitter dongle like the **FiiO BT11 / LA11 / Air-style adapters** can add it, though today even budget Androids ship with LDAC.
  - Phone missing a headphone jack, or you want a better DAC with higher sample-rate support: a USB-C DAC dongle like the **FiiO KA11** is cheap and excellent. Mention that **UAPP** and **Neutron** can stream hi-res PCM/DSD straight to the DAC bit-perfect (no Android resampling).

- **Dolby Atmos on phones** — Short Card. On many Android phones (and on iPhone with Apple Music spatial tracks) the system-level Dolby Atmos / spatial processor is a worthwhile bonus — it widens the stage and can make stock-tuned headphones sound more open. Treat it as another DSP layer to A/B against jetAudio's Bongiovi/AM3D, not a replacement.

### 2. ReplayGain section — add a third Card

Currently two cards (foobar2000, rsgain). Add a third:

- **Neutron's built-in Volume Normalization** — Neutron can compute and apply ReplayGain-style tags on-device with a configurable target LUFS (e.g. -14 LUFS to match Tidal/Spotify/YouTube, -16 for Apple Music, -18 for the classic ReplayGain default). Link to the official guide: `https://neutroncode.com/feature_normalization`. This is the easiest path for users who only listen in Neutron and don't want a separate scanner.

Grid becomes `md:grid-cols-3`.

### 3. New short section — "Getting music onto your phone"

Insert between **ReplayGain** and **Glossary**, with its own icon (e.g. `FolderInput` or `Smartphone`) and a single Card (or two if Android grows later):

- **iPhone (via iTunes on Windows)** — Plug the iPhone in, open iTunes, go to the device's **Files** tab, and drag a folder of music straight onto one of the player apps listed above (jetAudio, Neutron, UAPP). The files land in that app's sandboxed Documents folder where it can play them. You can also move files between apps later from the iOS Files app — handy for trying the same album in different players.
- (Optional future bullet for Android: just copy to internal storage or SD card with any file manager — no dance required.)

## Technical notes

- All new content lives in `src/pages/Index.tsx`, using existing `Section`, `Card`, `Bullets`, `ExtLink` components — no new components needed.
- Add the new section id (e.g. `transfer`) to `TableOfContents.tsx` so it appears in the TOC.
- Pick icons from `lucide-react` already imported pattern: e.g. `Radio` or `Bluetooth` for codecs, `Usb` for DAC, `Sparkles` for Atmos, `FolderInput` for transfer.
- Keep the neon-cyan / neon-magenta highlight pattern consistent with the rest of the page.
- No business logic, no new dependencies.

## Open question

Should the three Source sub-topics be **three Cards in a grid** (matches the Software/Headphones sections visually) or kept as **inline prose paragraphs** (matches the current minimal Source section)? My default is grid of Cards for scannability — confirm if you'd prefer prose.
