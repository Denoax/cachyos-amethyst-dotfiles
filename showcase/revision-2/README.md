# Reproduce the public showcase

[Play the gallery](https://denoax.github.io/cachyos-amethyst-dotfiles/) · [Review and limits](REVIEW.md) · [Media manifest](media.json) · [Film edit decisions](film.json)

This is a presentation revision. The installation baseline remains `v0.1.0-alpha.1`. The new presentation release is `showcase-v2-preview.1`; its name does not certify the desktop for fresh installations or laptops.

## Build the gallery from verified optimized media

Python 3 and Git are sufficient. From the repository root:

```sh
python3 tools/showcase site --fetch-media
python3 -m http.server --directory .build/showcase-site 8080
```

Open `http://localhost:8080`. The builder fetches missing derivatives only from this repository's named release, verifies every size and SHA-256, and copies an explicit public allowlist. It refuses private paths, symlinks, output outside `.build`, and a payload above 450 MiB. It never copies a home directory or raw capture folder. A release download is a build input; the player streams the copied same-origin MP4 on Pages.

The review ZIP contains that standalone gallery, all final optimized videos and images, manifests, credits, and review evidence. Serve its `gallery/` directory with the same local-server command. Do not open the HTML with `file://`: browsers restrict its manifest fetch.

## Capture and encode again

Use a real Wayland session with the installed `wf-recorder`, FFmpeg, Hyprland and current desktop. Start with `tools/showcase doctor`. Read the [capture contract](brief/spec/CAPTURE_AND_ENCODING.md) and [recording skill](../../.agents/skills/record-showcase/SKILL.md). Raw sources are private and are **not included** in the review ZIP, source archive, or repository. Reproducing these exact derivative hashes requires the immutable private take with the recorded source hash; a new recording will have a new hash.

```sh
amethyst_captures="${XDG_STATE_HOME:-$HOME/.local/state}/cachyos-amethyst-showcase-v2/captures"
tools/showcase record --scene example-01 --output YOUR_OUTPUT --seconds 12 --fps 60 --capture-root "$amethyst_captures"
# Inspect the complete take before asserting privacy review.
tools/showcase encode --scene example-01 --asset-id example --capture-root "$amethyst_captures" --assets-dir showcase/revision-2/assets --in 0 --out 10 --poster-at 4 --privacy-reviewed
tools/showcase compare --scene hero-clean --capture-root "$amethyst_captures" --assets-dir .build/palette-review --gif-start 0.5 --gif-seconds 10 --privacy-reviewed
tools/showcase film --edl showcase/revision-2/film.json --capture-root "$amethyst_captures" --assets-dir showcase/revision-2/assets --fps 30 --privacy-reviewed
tools/showcase verify --assets-dir showcase/revision-2/assets --decode
```

Each take uses a nonblocking capture lock and a bounded owned recorder. Failed/interrupted takes and changed source hashes are rejected by encoding. Per-asset JSON records the source hash, capture configuration commit, exact trim/poster timestamp, recorder arguments, encoding commands and derivative hashes. The film has a separate EDL and hash lineage, hard cuts and normal-speed actions. The persistent archival caption identifies the historical Flatpak shot throughout; no successful new launch is fabricated.

The capture output is native 1920×1080 at scale 1. New footage requests 60 fps through the established CPU-copy, no-dmabuf/no-damage path. The film is 30 fps because it includes an older 30 fps source. Downsampling is documented; interpolation is absent. Cadence labels and decoded frame counts do not establish perceived smoothness.

## Encoding choices

The four controlled GIF trials use the same ten-second source interval. The three modern variants use the same 960px / 25fps / 256 colors. [Comparison measurements](review/encoding-comparison.json) and sampled frames record the loss of purple under the legacy 640px / 10fps / 32-color preset.

The full-palette, no-dither GIF preserves the sparse accent and avoids the visible ordered-dither texture. Its moving grayscale background still makes it expensive. The final delivery comparison also tests a full-color animated WebP at the same dimensions, cadence and natural wallpaper period; the selected README image is verified on GitHub. The large GIF remains an explicit release/review derivative rather than adding its transfer to every README visit. MP4 remains the controllable primary viewing surface. GIF and WebP are actual changing captured frames, with no artificial wallpaper compositing, reversing or repeated-still animation.

The palette-weighted alternative modifies only a palette-analysis branch, reserving the installed theme's sparse colors; it does not paint UI pixels onto the delivered frames. It is retained as a measured comparison, not silently substituted for the actual accent.

## Review boundaries

Automated integrity, source-action assertions, sampled visual inspection and actual browser playback are reported separately in [REVIEW.md](REVIEW.md). Continuous human 1× review of every film and three wraps of each looping delivery remains `MOTION_REVIEW_PENDING`. The private uncut sources remain available locally for diagnosis. Do not change that status merely because decoding succeeds.
