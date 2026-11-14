# Measured encoding comparison

The current project source was encoded three additional ways using the same first six seconds. The variants are research trials, not final showcase assets.

| Version | Dimensions / rate | Palette treatment | Size |
| --- | --- | --- | --- |
| Published hero | 640×360 / 10fps | 32 colors, no dithering | 2,708,771 bytes |
| Trial A | 960×540 / 25fps | 256 colors, error diffusion | 30,180,622 bytes |
| Trial B | 960×540 / 25fps | 256 colors, ordered Bayer dithering | 26,570,264 bytes |
| Trial C | 960×540 / 25fps | 256 colors, no dithering | 25,726,885 bytes |

At the one-second sampled frame, the published GIF's maximum RGB channel spread was 5; each full-palette trial reached 158 and visibly retained the purple workspace indicator. The comparison image shows the published GIF on the left, scaled for equal display size, and Trial A on the right. This confirms that the existing encode loses a meaningful part of the actual theme.

All three richer GIFs are large. The original 1920×1080 MP4 contains nearly twelve seconds in 9,093,381 bytes. This supports using native video as the main motion delivery and treating GIFs as selective teasers. It does not justify replacing the animated background to reduce transfer size.

The three trials preserve the original segment's staging and ending. None has been approved for continuous motion or seamless looping. No trial GIF is bundled as finished media. Full experimental hashes and sampled measurements are in `ENCODING_EXPERIMENT.json`; only the static comparison is included for diagnosis.

Original project footage/asset credits:
https://github.com/Denoax/cachyos-amethyst-dotfiles/blob/v0.1.0-alpha.1/docs/ASSETS.md

The comparison does not grant new rights to the underlying wallpaper. Reference-project videos and the wallpaper's original source file are not included.
