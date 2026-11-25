# Installation and recovery

This alpha is a post-install user configuration distribution. Supply a working CachyOS x86-64 Hyprland session, network and distro-selected drivers. It does not install an OS, partition disks, configure encryption or change a greeter. Fresh installation and first-login acceptance are pending.

## Prepare

Keep a working terminal available. Complete CachyOS's normal full system update and obtain the initial tools:

```sh
sudo pacman -Syu --needed git chezmoi python
git clone https://github.com/Denoax/cachyos-amethyst-dotfiles.git
cd cachyos-amethyst-dotfiles
git checkout v0.1.0-alpha.2
```

Follow [packages/README.md](../packages/README.md) for the curated official and AUR prerequisites. Do not run `makepkg` as root. The shell patch checks the exact installed package files before writing configuration. If a newer package differs, rebase the patch in a disposable environment or omit `shell-patch` to use upstream shell behavior; the exact custom shell appearance then differs.

## Review and apply

```sh
./install.sh doctor
./install.sh plan --profile laptop --with dev-cp,flatpak,shell-patch
./install.sh apply --profile laptop --with dev-cp,flatpak,shell-patch
./install.sh verify
```

`laptop` is the visible default. Select `workstation` explicitly for the connector layout in [the example](../profiles/workstation.example.lua). Never select that layout automatically on a laptop. `--with ''` selects the core without the precision shell patch or optional apps. `--config-only` deploys declarative files without requiring packages or making service changes; it is useful for disposable-home tests and does not establish a working desktop.

`--install-packages` explicitly permits `sudo pacman -Syu --needed` for selected official dependencies. AUR prerequisites must already be reviewed and installed. The plan does no network lookup and makes no files, caches or logs. `--dry-run` is a plan alias, including when supplied to `apply`.

Each apply renders selected source with a dedicated chezmoi configuration, source, destination, cache and state inside a private transaction. JSON and Python helpers are checked before file promotion. The wrapper validates exact owned paths, backs up existing files and internal symlinks, records permissions and preimages, then promotes rendered files by atomic rename. It rejects symlink parents, escaping leaf symlinks, directory collisions, root invocation and nondefault XDG locations in this alpha.

An existing personal chezmoi source is inventoried read-only. Overlapping paths and existing destination symlinks stop apply. Select each intentional ownership migration with `--migrate-ownership RELATIVE_PATH`. The other manager's source and state remain untouched; remove those destinations from its ownership before using its future apply. TOML/JSON contexts are detected automatically. For YAML or another manager, provide an explicit JSON array of its relative owned paths in `~/.config/cachyos-amethyst/other-managed.json`; The explicit inventory must include the complete selected manager destination set. Complex ignores/templates in other managers may need manual ownership review.

## Start the session

Apply does not restart a live compositor or shell. The shipped Lua starts `amethyst-session.target` on the next Hyprland login. Its units own one Caelestia shell/notification/idle policy, polkit agent, two MIME-specific clipboard watchers, wallpaper player and visual switcher. No unit is globally masked. Existing conflicting shell/notification/idle startup must be resolved on the test machine before that login; this alpha does not automatically migrate every distribution/session variant. Preserve Noctalia's greeter.

First-login, logout cleanup, authentication and suspend acceptance are pending. Do these on a disposable machine before relying on this candidate. Keep the previous configuration or installer backup available from a TTY.

## Recover

```sh
./install.sh rollback --transaction YOUR_TRANSACTION_ID
```

Private journals and backups live below `~/.local/state/cachyos-amethyst/transactions/`. Roll back the latest apply first. Interrupted applies retain enough preimage/postimage information for recovery. Recover an unfinished transaction before another apply. If any managed postimage has been edited, rollback stops before changing files and names the conflicts. Save those edits elsewhere, resolve the changed files against the transaction's `rendered/` versions, and retry.

The wrapper makes no live service changes, so its service journal is intentionally empty. A logout/login after file rollback is the safe session transition; there is no hidden daemon restart. Package upgrades, downloads, VS Code archives, Flatpak apps, mutable palettes and application data are retained. Do not blindly uninstall or downgrade shared dependencies. A Btrfs snapshot is an optional additional recovery method.

## Optional applications and development

Install official Microsoft VS Code with the checksum-verifying [archive helper](../tools/vscode-install), then follow the [profile guide](VSCODE.md). `amethyst-cp-init NEW_FOLDER` copies a new writable CP workspace without replacing an existing project.

The supplied Discover desktop entry shadows the stock entry for this user and explicitly passes `--backends flatpak-backend`. Optional app installation uses an explicit user scope:

```sh
./tools/flatpak-app org.gnome.Calculator
```

It detects an existing system installation and avoids duplicating the app. It validates an existing user `flathub` remote URL. No application is selected by default. Launcher export paths are included in the next session environment; clean-session discovery remains an acceptance check.

## Match the reference wallpaper

The installer supplies a plain background and a live wallpaper player. Copy any wallpaper videos or stills you own to `~/Pictures/Wallpapers/Monochrome/` on the laptop. After signing in, open the library with **Super+Shift+W**, choose **All screens** or a detected output, and select the wallpaper. To match the reference capture, select the Crimson loop if you have a copy of it. The library remembers the selection on this device.

The laptop profile uses the display's preferred mode and automatic scaling. The controls and dock use available displays automatically. For a local display override, use `~/.config/hypr/amethyst-local.lua`. Personal desktop files and state such as wallpapers, screenshots, clipboard history, alerts and focus notes remain on the device where they were saved.
