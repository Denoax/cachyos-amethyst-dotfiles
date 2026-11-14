# Primary sources and evidence boundaries

Inspected 2026-11-13. Upstream pages can change; the implementation agent must verify installed versions and the exact local commands it uses. These links document the basis for the handoff, not permission to execute third-party instructions blindly.

## Visual references

- [Quickshell homepage](https://quickshell.org/) — large showcase player, creator attribution; all six source MP4s are individually mapped in REFERENCE_ANALYSIS.
- [Soramane](https://quickshell.org/assets/showcase/soramane.mp4)
- [end-4](https://quickshell.org/assets/showcase/end4.mp4)
- [outfoxxed](https://quickshell.org/assets/showcase/outfoxxed.mp4)
- [pfaj / bdeblase](https://quickshell.org/assets/showcase/pfaj-bdeblase.mp4)
- [flicko](https://quickshell.org/assets/showcase/flicko.mp4)
- [Vaxry](https://quickshell.org/assets/showcase/vaxry.mp4)
- [Caelestia shell](https://github.com/caelestia-dots/shell) — native GitHub attachment and project boundary.
- [end-4 dotfiles](https://github.com/end-4/dots-hyprland) — `.github/README.md`, image pairings, disclosures, historical styles.
- [Konata](https://github.com/Denoax/konata-hyprland-dotfiles) — primary user-owned presentation benchmark; current README and rendered gallery inspected.
- [Hyprland](https://hypr.land/) and [Hall of Fame](https://hypr.land/hall_of_fame/) — typography, player scale, chapter spacing and attribution.
- [Amethyst baseline](https://github.com/Denoax/cachyos-amethyst-dotfiles/tree/v0.1.0-alpha.1) — actual implementation, footage and limitations.

The six Quickshell videos were inspected as timestamped samples; no uninterrupted motion approval is asserted. Browser rendering was inspected for Quickshell, Hyprland, Konata and Amethyst. Caelestia/end-4 repository structure and README markup were inspected through primary source retrieval; final local rendered comparison remains part of Codex's work.

## GitHub capabilities

- [GitHub markup rendering pipeline](https://github.com/github/markup/blob/master/README.md) — sanitization removes scripts/styles; README is not an arbitrary web-app canvas.
- [Writing quickstart](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/quickstart-for-writing-on-github) — image/picture and Markdown organization.
- [Collapsed sections](https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/organizing-information-with-collapsed-sections) — supported `details`/`summary` structure.
- [About READMEs](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes) — outline and repository-relative documentation behavior.
- [Attaching files](https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/attaching-files) — native media attachment formats and account-dependent limits; H.264 compatibility recommendation.
- [CLI attachments](https://docs.github.com/en/github-cli/github-cli/attaching-files-with-github-cli) — current `--attach` workflow on supported issue/PR commands. Check installed CLI help.
- [Anonymized URLs](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/about-anonymized-urls) — uploaded media URLs and attachment persistence.
- [Social preview](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/customizing-your-repositorys-social-media-preview) — recommended 1280×640 image and under-1MB requirement.
- [Pages custom workflows](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages) — build/deploy artifact pattern.
- [Pages publishing configuration](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site) — actual repository deployment configuration.
- [Pages limits](https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits) — published site size, bandwidth/build constraints. Keep large masters out of the site bundle.

## Recording and playback

- [wf-recorder manual](https://github.com/ammen99/wf-recorder/blob/master/manpage/wf-recorder.1) — output selection, constant framerate duplication and CPU-copy workaround.
- [wf-recorder usage](https://github.com/ammen99/wf-recorder/blob/master/README.md) — codec/device configuration; verify actual local support.
- [FFmpeg filters](https://ffmpeg.org/ffmpeg-filters.html) — fps, scaling, palettes and dither controls. The experiment is our own measured comparison, not a universal upstream preset.
- [gifski](https://github.com/ImageOptim/gifski) — alternative GIF encoder to compare, not a guaranteed cure for source jitter.
- [HTML video element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/video) — posters, inline playback, preload hints and controls.
- [Browser autoplay](https://developer.mozilla.org/en-US/docs/Web/Media/Guides/Autoplay) — muted media and graceful handling of playback restrictions.

## Rights and accuracy

Reference videos/artwork are research sources, not bundled assets. Preserve attribution and existing license scopes. Amethyst's code license does not automatically relicense the DesktopHut wallpaper or other third-party artwork. Use the actual user-requested wallpaper in the presentation, retain its existing credit, and do not distribute its raw source file. If a concrete publication-rights blocker is discovered, preserve the requested candidate and explain it; do not silently substitute the background or treat speculative uncertainty as a reason to abandon the work.
