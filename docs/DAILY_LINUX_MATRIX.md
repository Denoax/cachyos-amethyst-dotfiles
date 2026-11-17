# Daily Linux integration acceptance matrix

For each row save status, environment, date, exact observation and sanitized evidence path. Distinguish source PC, fresh VM and physical laptop. Fix scoped configuration defects; mark missing hardware as NOT_APPLICABLE or NOT_RUN with reason, not PASS. A screenshot of a settings panel does not prove the underlying operation.

| Area | Implement/verify | Flow evidence |
|---|---|---|
| Login/session | Fresh login in test environment; one shell/notification/polkit/idle owner; clean logout; no new failed units | Session identity and sanitized startup result |
| Launcher | Kitty, Dolphin, official VS Code, browser and Discover open from current launcher | Search, select and launch |
| Shortcuts/help | Compare actual registered bindings with migration inventory; generate documentation from one structured source or validated extraction | Scroll shortcut window, search category, trigger matching action |
| Super+D / Super+Shift+D | Confirm intended behavior from prior source/report; repeat open/close, mixed tiled/floating/fullscreen and multi/single monitor; bounded arrangement with no oscillation | Uncut fixed-rate before/after action evidence; do not edit out defects |
| Workspaces/window menu | Focus/move/resize/fullscreen, switcher/menu selection, special workspace return, all windows reachable | Short actual workflow |
| Flatpak/Discover | Discover displays Flathub apps; native PackageKit transactions excluded by a verified supported method; explicit user scope; no duplicate remote/install | Search, app details, install a benign chosen demo app, launch, remove demo if newly installed |
| Native package updates | Document and validate a supported pacman/CachyOS route without triggering source-host upgrades for the camera | Instructions and safe status view, not a fake update |
| Flatpak launcher integration | Exported desktop files visible after supported environment refresh/new test login; file associations and opening work | Launch installed demo through Caelestia |
| Portals | GTK/Qt file picker, native/browser and sandbox screen-share flow; select correct monitor/window and stop sharing | Local test screen-share, no meeting participants |
| Notifications | Real test notification, action, history, DND and fullscreen behavior | Benign 'Demo notification' content, never real private history |
| Clipboard | Text/image roundtrip among Wayland and XWayland apps; no duplicate manager | Isolated demo clipboard only; preserve/delete private data neither accidentally |
| Audio/media | Speaker output, mic recording/playback, mute and device selection; MPRIS using owned audio | Volume/media UI; local permission-safe sample |
| Network/Bluetooth | Connection usable; tray/panel controls; pairing/audio with available device | Hide SSID, MAC and private device names; do not disconnect active work |
| Auth/keyring | User-visible polkit prompt and keyring access without duplicate agents; app secret storage survives test login | Prompt boundary only; no passwords/codes captured |
| Files/archives | Dolphin, open-with, URI handling, archives, trash/restore and removable storage if present | Disposable files with neutral names |
| Screenshots/recording | Area/full-output capture, saved location, cancellation and process cleanup | Demonstrate owned image/neutral window |
| Theme | Black/white base plus exact amethyst tokens across shell, Kitty, Qt/GTK apps and VS Code; readable contrast | Matched surfaces; don't force all sandbox apps through broad permissions |
| Wallpaper | Actual provider, loop, codec, decoded dimensions, startup ownership, no stale process; publication rights separately | Permitted footage only; disclose neutral fallback |
| Laptop power | Brightness, Fn/media keys, touchpad, battery reporting, one power policy, lid/dock behavior | Physical laptop evidence if available |
| Lock/idle/suspend | Lock established before sleep, manual unlock, idle timeout, resume and external-monitor recovery | Test on disposable environment/available laptop; never record credentials |
| Optional devices | Webcam, printing/scanner, Bluetooth battery etc. only where needed/available | Do not install every optional daemon to fill a checklist |
| Developer workflow | All required flows in `vscode/SPEC.md` | Real build/run/debug/template sequence |

Minimum acceptance for a public installable release: working base/profile installation and recovery, session/launcher/keybindings, file/portal/auth/audio functions, advertised Flatpak integration and developer workflows. Physical laptop-specific tests must be reported accurately; without real laptop evidence, advertise a portable laptop profile tested in a VM rather than 'fully tested on laptops'. A source-PC capture never substitutes for clean-install evidence.
