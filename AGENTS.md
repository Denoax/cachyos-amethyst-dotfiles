# Project instructions

Amethyst packages an existing CachyOS desktop. Read [installation](docs/INSTALL.md), [compatibility](docs/COMPATIBILITY.md), [verification](docs/VERIFICATION.md) and the applicable nested instructions before changing runtime or installer code.

Preserve exact owned-file boundaries, user edits, backups and rollback. Test installation only in disposable homes. Do not change a production desktop's wallpaper, compositor configuration, keybindings, monitor layout, opacity, services or authentication state for presentation work. Stop only positively identified task-owned processes.

The Amethyst website and its previous design plans are retired. Do not revive those plans or build a replacement without a new user request. The existing banner lives in `assets/banner/`; preserve its bytes, proportions, reduced-motion poster and source/rights information. Do not create a release or enable Pages as part of documentation maintenance.

Research media, source extracts, handoffs, diaries, raw captures and local review reports stay outside the public tree. Preserve scoped licenses and [asset credits](docs/ASSETS.md). Do not imply that the code license grants rights to the existing wallpaper.

Run `python3 tools/check`, installer tests with real chezmoi in disposable homes, and the CP runner regressions required by CI. A passing test suite is not fresh-system or physical-laptop acceptance. Keep private evidence private.
