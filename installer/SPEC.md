# Portable installer contract

## Architecture

Use chezmoi for user-config rendering/application, with an isolated project source/config/state directory and a thin `install.sh` entry point. The entry point must discover its own repo root, run as the target ordinary user, and elevate only explicit package/service operations that require it. If local evidence shows a materially simpler existing tool already meets this contract, document the choice before adopting it; do not introduce two competing managers.

Proposed commands to IMPLEMENT AND TEST before documenting them as usable:

```text
./install.sh doctor
./install.sh plan --profile laptop --with dev-cp,flatpak
./install.sh apply --profile laptop --with dev-cp,flatpak
./install.sh verify
./install.sh rollback --transaction <id>
```

Provide useful `--help`, a read-only `--dry-run` alias, `--config-only`, and explicit component selection. No undocumented network execution in plan/doctor; any network availability lookup must be labeled and must not mutate installed state. A preselected default profile must be visible before apply. Fail clearly if prerequisites are absent. The first-run guide must show how to obtain Git/chezmoi through the distro's full-update-safe package path before any command that needs them.

The dry-run command itself must create no files, caches, backups, checkpoints or logs: print the plan to stdout/stderr. The agent may separately record that command's result in its private checkpoint after it exits. Do not invoke template hooks or a dotfile-manager initialization that writes state just to render a dry-run. Test this boundary explicitly.

Separate chezmoi state does not prevent two managers from owning the same destination. Read-only inventory any existing manager's managed destination set and compare it with the selected manifest. Treat overlaps as conflicts: show them in plan and refuse apply to those paths until an explicit ownership migration is selected. Preserve the other manager's source/config/state; never silently take ownership or use its default apply context. The generic fresh-install flow should have no such overlap, and tests must include it.

## Source inventory and manifests

Create separate manifests for required official packages, reviewed AUR sources, optional apps, developer tools and hardware-specific reference information. Record why each direct dependency exists. Do not treat `pacman -Qqe` as the install list; it is input to curation. Separate versions observed on the source PC from supported constraints and fetch integrity.

Record actual Caelestia shell/CLI/Quickshell/plugin/Qt/Hyprland versions and source revisions. Prefer maintained packages where compatible. For upstream patches, retain base commit, patch hash, license and build recipe. Review PKGBUILDs and dependencies; build AUR packages as an ordinary user. Never run `makepkg` as root or silently replace packages on the working source machine. Avoid partial system upgrades and unsigned/unverified downloads.

## Machine split

- Shared: shell overrides, black/white/amethyst tokens, app choices, binding implementation, templates, supported icons/fonts, launcher metadata and owned user units.
- Local: monitor IDs/modes/positions, main-display preference, GPU selectors, audio devices, sensors, battery identifiers, touchpad capabilities, user paths and wallpaper location.
- Example: workstation profile describing Mani's layout with no serials, UUIDs or secrets. It is never selected automatically just because NVIDIA exists.
- Default: available display preferred mode with safe scale, all useful workspaces reachable on a single panel, no mandatory external output. Make refresh/high-DPI choice configurable; do not force 240 Hz or scale 1 on every laptop.

Detect missing capabilities and degrade predictably: no battery widget on desktops, no brightness helper without a supported device, no hard-coded USB audio, no forced discrete GPU. Document dock/hotplug behavior and test that panels/windows remain reachable. Do not add TLP, auto-cpufreq and power-profiles-daemon together; preserve one compatible power-management owner.

## File transaction semantics

1. Resolve the target user and XDG locations. Reject root execution and unsafe destinations. Validate every source/destination against an explicit owned-path manifest; reject traversal and symlinks escaping the intended home/config roots.
2. Render and validate into staging before touching live configuration. Show package changes, files, symlink conflicts and service actions in plan.
3. Journal the preimage (including absent paths, symlink targets, permissions and service enable/mask states) under a private unique transaction directory. Backups must be excluded from Git and public logs.
4. Apply only selected owned files; atomic rename where appropriate. Preserve unrelated user configuration and mutable app state. Back up collision files; do not turn a directory into a symlink without a reviewed migration.
5. Validate resulting config before reload/start. Preserve a working terminal/session. A reload failure restores only this transaction's changes.
6. Rollback checks whether the managed postimage has since been edited. Preserve newer user edits and surface conflicts rather than overwriting them. Remove only files created by this transaction when unchanged; restore only recorded preimages.
7. A second identical apply must not duplicate lines, bindings, services, Flatpak remotes, desktop entries or start processes again.

State plainly: dotfile rollback does not automatically revert a pacman upgrade or uninstall dependencies. Record package changes; provide careful recovery guidance instead of blind downgrade/removal. Btrfs snapshots may supplement, not replace, this recovery path. Do not touch existing personal chezmoi state; independently test the isolation flags used by the wrapper.

## Session and services

Identify whether this installed release uses native Hyprland session targets, UWSM or another startup path. Use one consistent path and document it. Start exactly one Caelestia, one notification service, one polkit agent and one idle/lock policy. Leave unrelated Noctalia greeter components intact. Disable only identified conflicting user-session owners, reversibly; retaining Noctalia packages for rollback is acceptable.

Do not ship stale display-manager configuration, PAM changes or blanket masks as defaults. Check session environment propagation to systemd/D-Bus/portal apps. Do not duplicate startup in a Lua hook, XDG autostart and a user service. Logouts must stop the selected shell cleanly.

## Required tests

Temporary-home tests: dry-run makes no writes; fresh apply; repeated apply; rollback; restore existing file/symlink/mode; changed-file conflict; unexpected symlink escape; path with spaces; missing dependency; failing template/package stage; interrupted file phase; preserved unrelated systemd/Qt/Hypr files; isolated chezmoi context. Inject failures at meaningful boundaries.

Fresh CachyOS tests: full documented install with selected profiles, successful first login, launcher/portals/auth/audio, repeat apply, upgrade from prior config version, and recovery. Verify no extra service owners or leaked recorder processes. Record ISO/base date and actual package tuple. A VM can verify software integration but not real laptop suspend or GPU-specific behavior; publish that distinction.

For the first release, create an intentionally older controlled fixture/revision containing a representative managed file/service change and a user-modified file. Exercise migration to the candidate and rollback; label it a fixture migration, not an upgrade from a nonexistent public release. Future releases must additionally test the actual previous supported tag.
