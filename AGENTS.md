# Project instructions

Amethyst packages an existing CachyOS desktop. Read [installation](docs/INSTALL.md), [compatibility](docs/COMPATIBILITY.md), [verification](docs/VERIFICATION.md) and the applicable nested instructions before changing runtime or installer code.

Preserve exact owned-file boundaries, user edits, backups and rollback. Test installation only in disposable homes. Do not change a production desktop's wallpaper, compositor configuration, keybindings, monitor layout, opacity, services or authentication state for showcase work. Capture real UI with isolated demo data; retain raw footage and process records privately. Stop only task-owned processes.

The website lives in `site/src` and `site/public`. Its foundation is Denoax/portfolio at `72a3c7a2a75913de64d8baf1591282acd19d181c`; preserve relevant control, focus, gesture, framebuffer and disposal behavior when adapting it. Keep one R3F/Three.js canvas with semantic DOM controls. Use black/white and the measured `#d559ff` accent. Show actual app opacity and actual animated wallpaper. Respect reduced motion, hidden/offscreen pauses, native inputs and one video decoder.

Research media, source extracts, handoffs, diaries, raw captures and local review reports stay outside the public tree. Preserve scoped licenses and [asset credits](docs/ASSETS.md). Do not imply that the code license grants rights to the existing wallpaper.

Run `python3 tools/check`, installer/showcase tests, and the relevant CP regressions for changes to those paths. For the site run `npm ci --ignore-scripts` and `npm run build` from `site/`, then test the real browser, keyboard/touch, reduced motion, resize, media errors and context-loss fallback. A passing build is not visual approval or fresh-system acceptance.

The current portfolio revision is a review candidate. Do not create a release, merge into production or deploy Pages until the owner approves the visible result. A preview branch may be used to inspect GitHub README rendering. Keep private evidence private even when the preview is public.
