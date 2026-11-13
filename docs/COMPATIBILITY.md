# Compatibility

Observed 2026-11-13 on an existing x86-64 CachyOS desktop. Exact direct-package observations are in [observed-source.json](../packages/observed-source.json).

| Component | Observed |
|---|---|
| Hyprland | 0.57.2, Lua configuration; commit `11cbc6c577b84ffb1edf4df3fc5b6128c3ae6947` |
| Caelestia shell | 2.5.0-1; reference revision `fd630ffedd45eb31817e9a1726a0f567e79f65e2` |
| Caelestia CLI | 1.1.3-1 |
| Quickshell | 0.3.2.r11.g9b0f339-1 |
| Qt base/declarative | 6.12.0 |
| M3 shapes | r50.8a6fe89-1 |
| Microsoft VS Code | 1.146.0, official stable archive |
| g++ / GDB / Python | GCC 16.2.1 / GDB 18.1 / Python 3.14.9 |
| Java | Existing portable JDK 21, supplied to isolated demo through PATH; distro recipe uses jdk21-openjdk |
| Installer rendering | chezmoi 2.74.1 with verified separate context flags |
| Capture | wf-recorder CPU libx264, 1920×1080, requested 30 fps, no audio |

| Environment | Status and boundary |
|---|---|
| Existing source desktop | Extracted; config parser, file transactions, CP flows and selected daily use/captures exercised |
| Disposable home on source PC | Apply/repeat/verify/rollback/failure tests; uses host packages, not a clean distro |
| Fresh CachyOS VM | **NOT_RUN**: KVM device exists, but no configured VM, QEMU executable or CachyOS ISO was available; no privileged package/OS provisioning was performed |
| Physical laptop | **NOT_RUN**: no test device; brightness, battery, lid, suspend and docking remain unproven |
| Alternate GPUs/Arch derivatives/ARM | Outside this candidate's tested scope |

This is an alpha candidate for a working CachyOS Hyprland base. There is no tested ISO date and no fresh-install success claim. Source workstation observations do not establish generic laptop behavior. Keep the package tuple and patch-base hashes together when evaluating updates.

Version-sensitive interfaces were checked against the installed help/source and primary documentation: [Hyprland Lua](https://wiki.hypr.land/0.57.0/configuring/core/), [dispatchers](https://wiki.hypr.land/configuring/core/dispatchers/), [chezmoi context flags](https://www.chezmoi.io/reference/command-line-flags/common/), [Caelestia shell](https://github.com/caelestia-dots/shell), [Microsoft profiles](https://code.visualstudio.com/docs/configure/profiles), and [CachyOS package-manager guidance](https://wiki.cachyos.org/cachyos_basic/faq/).
