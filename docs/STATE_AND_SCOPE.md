# Source state, assumptions and boundaries

## Reported working state, not reverified by the Thinker

- Installed CachyOS, Hyprland with Lua configuration, Caelestia/Quickshell. Noctalia retained for rollback and its greeter reportedly unchanged.
- i5-14600K, approximately 64 GB, RTX 4070 plus Intel UHD 770, encrypted Btrfs root and systemd-boot. These describe one host, not installer requirements.
- Samsung left 1080p60; Pixio middle 1080p240.299; Acer right 1080p119.982, scale 1. Connector names previously HDMI-A-1 / DP-4 / HDMI-A-5; discover current values rather than defaulting laptops to them.
- Kitty, Dolphin, PipeWire/WirePlumber, NetworkManager, Bluetooth, portals and keyring were present.
- Monochrome Caelestia and 104 migrated old chords were reported installed. Super+A, Super+Ctrl+P and Super+Ctrl+M were unavailable without the old Kona stack.

## Completion has NOT been reported for these later requests

- Exact VS Code-matched amethyst tertiary accents.
- Super+D gathering/desktop behavior and Super+Shift+D shaking while arranging windows. Read the current scripts and the user's previous fix report. Do not assign a new behavior based only on shortcut names.
- Replacement wallpaper from DesktopHut and its cleanup/persistence.
- Official VS Code migration from Code OSS and the full competitive-programming environment.
- Fresh login, lock/unlock, suspend, screen sharing and several audio/device interactions.
- Discover/Flatpak integration on the current machine.

Inspect actual state. Finish missing work that is necessary for the requested packaged feature, preserving existing preferences. If a shortcut's intended behavior is still ambiguous after reading the prior report and original binding, ask one specific behavior question while doing unrelated work. Do not silently reinterpret it.

## Local evidence to locate on Mani's PC

Read these if present; absence is not a failure or proof of nonimplementation:

- `~/CAELESTIA_SETUP_REPORT.md`
- `~/MONOCHROME_CAELESTIA_REPORT.md`
- `~/KEYBIND_MIGRATION.md`
- `~/CAELESTIA_SHORTCUT_WALLPAPER_FIX_REPORT.md`
- `CP_SETUP_REPORT.md` in the actual competitive-programming workspace or prior handoff output.
- Reports/rollback scripts beneath `~/.local/state/caelestia-*`.

Capture only allowlisted technical metadata: OS/version, package provenance, compositor/shell/CLI/plugin versions, relevant enabled services, effective config paths, installed desktop entries, exported keybindings, extension IDs, Flatpak IDs/remotes/scope and public license files. Redact local usernames, hostnames, monitor serials, MAC addresses, SSIDs, workspace names and private paths from public reports. Do not dump broad environment variables or credential-bearing settings.

## Target support tiers

| Tier | Meaning | Initial policy |
|---|---|---|
| Supported base | Fresh x86-64 CachyOS with a working Hyprland session, network and distro-selected drivers | Test the exact ISO/base date and package tuple |
| Generic laptop | One internal display, portable apps, keyboard/touchpad, appropriate brightness/power controls | No workstation connectors or GPU overrides |
| Mani workstation | Existing triple-monitor arrangement and preferred main display | Explicit opt-in profile only |
| Other Arch derivatives / ARM / other compositors | Different packaging or session assumptions | Out of initial support scope |

A fresh laptop need not use Mani's filesystem, encryption or bootloader. Configuration deployment should work atop a functioning supported installation. Do not require Btrfs snapshots as the only rollback method.
