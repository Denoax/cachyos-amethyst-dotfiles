# Project instructions

Amethyst packages an existing CachyOS desktop. Read [installation](docs/INSTALL.md), [compatibility](docs/COMPATIBILITY.md), [verification](docs/VERIFICATION.md) and the applicable nested instructions before changing runtime or installer code.

Preserve exact owned-file boundaries, user edits, backups and rollback. Test installation only in disposable homes. Do not change a production desktop's wallpaper, compositor configuration, keybindings, monitor layout, opacity, services or authentication state for presentation work. Stop only positively identified task-owned processes.

The interactive showcase is served from the gh-pages branch. The README links to Pages using the shared river banner and its reduced-motion still in assets/banner/. Keep download and setup documentation aligned with the tagged installer.

Research media, source extracts, handoffs, diaries, raw captures and local review reports stay outside the public tree. Preserve scoped licenses and [asset credits](docs/ASSETS.md). Do not imply that the code license grants rights to the existing wallpaper.

Run `python3 tools/check`, installer tests with real chezmoi in disposable homes, and the CP runner regressions required by CI. A passing test suite is not fresh-system or physical-laptop acceptance. Keep private evidence private.
