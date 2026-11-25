# Validation and remaining gates

The original observations below are dated 2026-11-13. The V2 follow-up is dated 2026-11-14 UTC. PASS applies only to the named environment and observation. The release is an **alpha prerelease**. It has no fresh CachyOS/ISO/first-login or physical laptop proof.

| Check | Status | Environment and observation |
|---|---|---|
| source-inventory | **PASS** | source PC: Allowlisted file hashes/runtime metadata saved privately; public direct-package tuple exported |
| file-transactions | **PASS** | disposable homes on source PC: 14 tests: no-write plan; fresh/repeat apply; rollback; mode/symlink preservation; ownership overlap; changed-file conflicts; escape/collision/root rejection; missing renderer; render/interrupted apply; fixture migration; empty files; package-stage failure; contradictory package flags |
| full-profile-files | **PASS** | disposable home on source PC: 387 allowlisted files; real chezmoi 2.74.1; full render/apply, Lua parser, repeat no-op and rollback |
| cpp23-and-runner | **PASS** | source tools, disposable fixtures: C++17/20/23/GNU++23, C, Python, Java, Rust, Go and JS; stale build rejection; timeout/descendant cleanup; bounded streams; comparisons; sanitizer defects |
| typescript | **NOT_RUN** | source tools: Optional task retained; no working tsc on PATH. No additional compiler installation |
| profile-import | **PASS** | isolated official Microsoft VS Code: Actual profile UI import; 46 settings, 9 keybindings, snippets and eight extension IDs; switched through Profiles: Switch Profile |
| vscode-cpp-ui | **PASS** | isolated official Microsoft VS Code: F6, sample task, GDB breakpoint/F10, vector/string/answer=5, new-problem shortcut recorded. Chromium event injection; not a physical-key test on every display |
| vscode-python-java-sanitizer | **PASS** | isolated official Microsoft VS Code: Fresh Python/Java actual output 5 and actual ASan expected failure recorded; source JDK supplied through a private neutral PATH alias |
| window-actions | **PASS** | existing source session: Actual bound gather/restore helper with owned test windows; exported on-demand group opens/closes. Single-monitor, mixed fullscreen/group/dock regressions remain unrun in this execution |
| discover-flatpak | **FAIL (V2 fresh launch)** | Historical alpha.1 launch passed. V2 catalog, configured sources and Calculator 51.1 detail work, but a new normal sandboxed launch fails at a missing document-portal bind path. The retained alpha.1 clip is persistently labeled archival; no portal was disabled for filming |
| qt-dark-palette | **PASS** | existing source session: Discover tested with KDE platform theme; portable KDE/Qt palettes exported. Generic app-by-app theme acceptance pending |
| clipboard | **PASS** | existing source session: Text and PNG roundtrips; prior supported MIME clipboard restored. XWayland interop not exercised |
| files-notification | **PASS** | existing source session: Dolphin disposable folder/ZIP and actual freedesktop demo notification; DND toggles recorded. Notification actions/history and file associations/trash remain unrun |
| screen-share | **FAIL** | isolated Brave/local fixture on source PC: Monitor selection/stream negotiation succeeded but video readyState=0 and videoWidth=0 persisted; default/disabled-GPU browser and temporary documented force_shm tests failed to establish frames. Original portal configuration restored; no successful sharing footage published. |
| secret-portal | **FAIL** | existing source session: Isolated Brave startup reported missing org.freedesktop.portal.Secret. Shipped routing explicitly selects installed gnome-keyring backend; remediation not applied/tested on source portal broker |
| fresh-login-install | **NOT_RUN** | no configured fresh CachyOS VM: KVM present; QEMU executable and ISO unavailable; no source OS or privileged package changes used to provision a VM |
| physical-laptop | **NOT_RUN** | no test laptop: Brightness/battery/lid/dock/suspend/GPU-specific portability unproven |
| audio-mic-bluetooth-auth | **NOT_RUN** | existing source session: No disruptive device/pairing/credential or login tests; active services alone are not a flow pass |
| lock-suspend | **NOT_RUN** | production source session: No lock/logout/suspend/reboot performed; safe disposable-session acceptance required |

The [CSV](verification.csv) is the same machine-readable evidence summary. Raw logs, preimages, recorder masters and source inventories remain private. The retired website’s media catalog is no longer distributed.

Temporary homes use the source PC’s already installed software and cannot establish package provisioning, login startup or hardware portability. The fixture migration deliberately starts with an older managed file and unrelated user edits; it is not an upgrade test from a nonexistent earlier public release.

Before a stable release: provision and verify a fresh CachyOS test base, follow the guide exactly, exercise first login/logout/recovery and all core daily flows, resolve portal failures, test appropriate physical hardware, and review any published motion evidence at normal speed through three loop wraps. A running daemon, hash check, screenshot or contact sheet is not a substitute for those checks.

Historical capture observations above remain scoped to their original environment; they do not certify the current installed environment. Portal failures and fresh-system/laptop acceptance remain open. The README banner is presentation artwork, not installation evidence.


## Alpha.2 desktop sync

On 2026-11-25, the installer applied and verified 407 managed files in a disposable laptop-profile home. The alpha.1-to-alpha.2 upgrade, repeat apply and rollback to 387 alpha.1 files passed. A nested single-display Hyprland session loaded the Caelestia shell and opened the overview, controls, displays, wallpaper, shortcut, focus and alert panels. A wallpaper selection reached the player. This used the desktop’s locally rebuilt `libcava` against the upgraded audio library. Audio routing, first login and physical laptop hardware remain unverified.
