# Dependencies

[dependencies.json](dependencies.json) is the direct feature-based manifest; [observed-source.json](observed-source.json) is the source PC's observed tuple. An observed version is not a promise that a rolling mirror can reconstruct it forever.

Bootstrap with `sudo pacman -Syu --needed git chezmoi python base-devel`. Review the official package list from `./install.sh plan`. Once the AUR prerequisites are available, `apply --install-packages` installs selected official packages with a full-upgrade-safe transaction. It never runs a downloaded shell script as root, changes signature verification, or invokes `makepkg` as root.

The recorded AUR recipe revisions and PKGBUILD hashes are in [aur-lock.json](aur-lock.json). Build dependencies in this order when absent: `python-materialyoucolor`, `libcava`, `ttf-rubik-vf`, `quickshell-git`, `qt6-m3shapes-git`, `caelestia-cli`, `caelestia-shell`. For each package, clone its listed AUR URL as an ordinary user, check out its recorded recipe commit, compare the PKGBUILD hash, review the recipe, `.SRCINFO`, install hooks and dependencies, then use `makepkg -si`. Dependencies from official repositories remain signed pacman packages.

For example, after inspecting the corresponding locked revision:

```sh
git clone https://aur.archlinux.org/caelestia-shell.git
cd caelestia-shell
git checkout d2c7b31bef7009c8e63a5e73ad38896671237659
sha256sum PKGBUILD
less PKGBUILD
makepkg -si
```

Git-sourced AUR packages can roll even when their packaging recipe is pinned. The observed Quickshell commit is `9b0f339`; the native M3 shapes package is `r50.8a6fe89`. Revalidate their Qt/API compatibility rather than forcing old binaries onto an updated system. Caelestia 2.5.0's installed source and assets are checked against [the base manifest](../patches/caelestia-base.json); 19 QML file modifications are retained as one reviewed patch, applied without fuzz to that base.

Do not install multiple power-policy owners. Caelestia's upstream package dependencies include power-profiles-daemon; assess an existing TLP/other policy before changing it. This project does not enable competing policies or distribute GPU/device overrides.

`dev-cp` adds GCC/GDB/clang-format, Python and JDK 21. Microsoft's proprietary editor is installed separately from its official archive using `tools/vscode-install`; it is never repackaged here. C, Rust, Go, Node, TypeScript and PyPy workflows remain optional; [optional.json](optional.json) does not trigger mass installation.
