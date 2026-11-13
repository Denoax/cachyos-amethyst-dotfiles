# Research and architectural decisions

Research date: 2026-11-13. Links below are primary sources inspected by the Thinker. They are evidence, not commands to execute blindly. Revalidate version-sensitive interfaces on the source and test systems. Recommendations below are engineering decisions for this project, not claims that upstream endorses this exact combination.

## 1. Use Konata's presentation, improve its installation boundary

Inspected [Konata at a9f433ad9cf5b870ee18ceed72d7200f402008e8](https://github.com/Denoax/konata-hyprland-dotfiles/tree/a9f433ad9cf5b870ee18ceed72d7200f402008e8): README, installer, installation guide, motion manifest and third-party notices. Visually inspected its desktop screenshot and the first frame of its animated banner; this is not a continuous-motion assessment of the old GIFs.

The README provides a title/desktop hero, side-by-side feature tours, detailed surface gallery and install links. Its installation guide explicitly targets a three-monitor workstation and leaves native packages/hardware adjustment to the reader. The shell script copies broad config trees, downloads helper runtimes and has backup/dry-run behavior. Keep the real feature-tour idea; improve it with fine-grained ownership, generic hardware defaults, dependency preflight and verified recovery. Do not reuse broad tree-copying or personal monitor assumptions.

Source: [install.sh](https://github.com/Denoax/konata-hyprland-dotfiles/blob/a9f433ad9cf5b870ee18ceed72d7200f402008e8/install.sh), [install guide](https://github.com/Denoax/konata-hyprland-dotfiles/blob/a9f433ad9cf5b870ee18ceed72d7200f402008e8/docs/INSTALL.md), [motion provenance](https://github.com/Denoax/konata-hyprland-dotfiles/blob/a9f433ad9cf5b870ee18ceed72d7200f402008e8/showcase/MOTION_SOURCE.md).

## 2. A post-install distribution fits this goal

Use the official CachyOS installer for storage, encryption, boot and hardware packages, then install this desktop layer. The [CachyOS Hyprland guide](https://wiki.cachyos.org/configuration/desktop_environments/hyprland/) documents distro-specific Hyprland, Noctalia and session configuration. That is the starting point to inspect, not a reason to replace all distro settings. A custom ISO or disk clone would expand maintenance and risk carrying machine secrets, identifiers and drivers into another laptop.

Installer choice:

| Method | Useful property | Decision |
|---|---|---|
| GNU Stow | Straightforward symlink-managed dotfiles | Good for a single uniform setup; machine selection and transactional behavior still need extra logic |
| chezmoi | Templates, ignored files and per-machine data | Recommended for portable user configuration |
| Large custom copy engine | Complete flexibility | Avoid; write only a thin audited plan/transaction wrapper around standard tools |
| Nix/Home Manager | Can describe another package/configuration ecosystem | Do not add a second package ecosystem just to publish this CachyOS installation |
| Disk image/custom ISO | Can reproduce an entire base | Outside the requested first release |

Sources: [GNU Stow](https://www.gnu.org/software/stow/), [chezmoi machine differences](https://www.chezmoi.io/user-guide/manage-machine-to-machine-differences/), [chezmoi setup](https://www.chezmoi.io/user-guide/setup/), [chezmoi scripts](https://www.chezmoi.io/user-guide/use-scripts-to-perform-actions/).

Use a dedicated chezmoi source/config/state context for this distribution so an existing personal chezmoi repo is not overwritten. Verify the installed CLI flags before implementing that isolation. Keep privileged package transactions explicit, outside hidden template hooks. chezmoi is not an atomic OS transaction or package rollback mechanism; the wrapper must journal file and service changes. Its once/on-change scripts still require idempotent design.

## 3. Preserve Caelestia as an upstream dependency

The inspected [Caelestia shell README](https://github.com/caelestia-dots/shell) separates shell-only installation from full dotfiles. It recommends the regular AUR shell package over its bleeding-edge variant for ordinary users, warns against editing package-owned files, and lists Quickshell git/native Qt plugin dependencies. Supported customization lives in `~/.config/caelestia/shell.json`; omitted values inherit defaults. There are per-monitor overrides with limitations.

Use minimal supported overrides first. Inventory the working shell, CLI, Quickshell, QML plugin, Qt and Hyprland tuple. Where local modifications exceed supported settings, retain a small reviewed patch series against an exact upstream commit and rebuild through proper packaging. Never silently install the entire upstream dotfiles over the user's setup. Do not use a generic Quickshell tag merely because it is called stable when the selected Caelestia revision needs a different API.

Sources: [shell](https://github.com/caelestia-dots/shell), [CLI](https://github.com/caelestia-dots/cli), [full dots](https://github.com/caelestia-dots/caelestia). Record the revisions actually selected. A tested tuple is a compatibility record, not proof that rolling binary repositories can reproduce old packages forever.

## 4. Session ownership must match installed Hyprland

Current [Hyprland systemd documentation](https://wiki.hypr.land/configuring/extra/systemd/) says its session target is now integrated; older manual glue can be redundant. [UWSM guidance](https://wiki.hypr.land/useful-utilities/uwsm/) describes an additional session manager with its own quirks. Therefore do not import old Konata session advice or add UWSM automatically. Detect the working login entry and effective targets, choose one startup owner per service, and test logout/login cleanup in the test environment. Preserve the source PC's greeter.

## 5. Discover should manage Flatpaks here

[CachyOS's FAQ](https://wiki.cachyos.org/cachyos_basic/faq/) discourages PackageKit-backed management of native system packages through Discover/GNOME Software, while distinguishing Flatpak use. It recommends pacman and identifies direct pacman GUI alternatives.

Project decision: Discover is the Flatpak software center. Keep native upgrades in the documented pacman/CachyOS path. Inspect the actual Discover build/backends; use its supported backend selection or distribution packaging to avoid exposing PackageKit transactions. Do not remove packages indiscriminately or imply disabling automatic updates alone restricts manual native installs. Verify what the UI actually shows.

## 6. Flatpak scope and desktop entry discovery matter

[Flatpak usage](https://docs.flatpak.org/en/latest/using-flatpak.html) and [Flathub user/system installation](https://docs.flathub.org/docs/for-users/user-vs-system-install) distinguish per-user from system installations. Default optional apps to an explicit user scope, reuse matching existing remotes, and detect mismatched scope to prevent duplicate installations.

[Flatpak conventions](https://docs.flatpak.org/en/latest/conventions.html) document exported desktop entries and the corresponding XDG data directories. An app that installs but is absent from the Caelestia launcher is an integration failure. Validate launch, MIME/file opening and clean-session discovery rather than papering over failures with duplicate desktop files.

## 7. Portal routing is a user-flow requirement

[Hyprland's portal](https://wiki.hypr.land/hypr-ecosystem/user/xdg-desktop-portal-hyprland/) supports screencasting/global shortcuts but needs a file-chooser backend such as GTK alongside it. [Flatpak desktop integration](https://docs.flatpak.org/en/latest/desktop-integration.html) covers portal-mediated files, URIs, notifications and screencasting.

Configure per-interface routing appropriate to the installed versions. Test native and sandboxed apps. Do not globally remove GTK/KDE portals just because more than one package exists. Mixed-GPU failures need observed diagnosis; avoid distributing a permanent shared-memory/renderer workaround to every laptop. Avoid broad `--filesystem=host` or unrestricted D-Bus overrides as a theming shortcut.

## 8. Export the official VS Code profile, not its private runtime

[VS Code Profiles](https://code.visualstudio.com/docs/configure/profiles) supports local `.code-profile` export and selective contents. [Settings](https://code.visualstudio.com/docs/configure/settings) distinguishes user/profile/workspace configuration. Export sanitized settings, shortcuts, snippets and extension IDs plus separate workspace tasks; do not copy profile IDs or storage databases.

[Microsoft's Linux installation guide](https://code.visualstudio.com/docs/setup/linux) identifies its Arch AUR packaging as community-maintained. Verify the actual binary is Microsoft Visual Studio Code rather than Code OSS, and record package provenance. Distribute configuration/install recipes, not repackaged proprietary executables. An extension inventory alone does not prove compiling/debugging works.

## 9. Capture actual Wayland output, then encode derivatives

[wf-recorder](https://github.com/ammen99/wf-recorder) documents output selection, filenames and encoding controls. [wl-screenrec](https://github.com/rosalyntg/wl-screenrec) is another hardware-encoding candidate. Choose from tested local compatibility and capture impact; do not choose an Intel render node by its number or assume NVIDIA VAAPI support.

[FFmpeg filter documentation](https://ffmpeg.org/ffmpeg-filters.html#palettegen) documents palette generation/use and dithering. Use a palette derived from the final trimmed/resized source for GIFs. Keep original full-rate recordings for motion review and readable coding demonstrations. Frame interpolation, repeated stills or speed changes cannot serve as proof of compositor smoothness.

No dedicated showcase tool was exposed to the Thinker. The Doer must discover an existing local capture workflow or implement the small recording/encoding interface in `showcase/STORYBOARD.md`, then actually run it. A cloud screenshot is not this user's desktop.

## 10. Publication needs an asset inventory

The [selected wallpaper page](https://www.desktophut.com/black-and-white-look-live-wallpaper) lists a 4096×2304 video and several use cases. [DesktopHut terms](https://www.desktophut.com/page/terms-of-service) restrict wallpapers to personal use unless an item states otherwise. These pages do not establish an unambiguous open redistribution license for this repo. Keep the raw wallpaper out of the repository/releases; provide its source link and optional local setup. Assess public footage permission separately. If unresolved, record the real shell against an owned/permissively licensed or plain neutral background, disclose that substitution and restore the user's current wallpaper afterward.

[Caelestia's repository](https://github.com/caelestia-dots/shell) labels its shell GPL-3.0. Do not apply a blanket MIT label to copied/modified upstream QML. Prefer integration configuration, keep licenses for any derived material, and track icons/fonts/media independently. Attribution alone is not redistribution permission.

## 11. Keep Git small and presentation readable

[GitHub large-file guidance](https://docs.github.com/en/repositories/working-with-files/managing-large-files/about-large-files-on-github) warns above 50 MiB and blocks ordinary Git files above 100 MiB. Use lightweight README loops and posters; place long videos in release assets or a deliberately configured gallery. Do not commit capture masters, wallpaper libraries, compiler outputs or growing evidence archives. Release hosting does not exempt files from privacy/license checks.

## 12. Agent instructions belong in the project

[OpenAI customization guidance](https://learn.chatgpt.com/docs/customization/overview), [skills](https://learn.chatgpt.com/docs/build-skills), and [AGENTS.md](https://learn.chatgpt.com/docs/agent-configuration/agents-md) describe repo-local `.agents/skills/<name>/SKILL.md` and scoped project instructions. These files should travel with this repo. They are not permission to modify the user's global agent policy, install unrelated plugins or publish secrets.

## Unresolved on purpose

The source host's current effective configuration, exact amethyst hex, hardware-independent dependency tuple, existing showcase commands, current Discover backend behavior, fresh-laptop success and real capture smoothness require local evidence. Resolve them during execution, and write findings into the repository's compatibility and verification records.
