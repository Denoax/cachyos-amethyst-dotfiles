# Architecture and ownership

`home/` contains selected chezmoi source attributes. The Python wrapper inventories only those files, selected developer files and the explicit Caelestia base-file manifest. It gives chezmoi its own config/source/state/cache and a disposable rendering destination, then promotes validated files transactionally. Personal chezmoi state is never used to apply this distribution.

| Area | Ownership |
|---|---|
| Hyprland | Root `hyprland.lua` and `amethyst/*.lua`; existing root is backed up; unrelated `config/*.lua` remain |
| Local hardware | `amethyst-local.lua` is user-owned and untouched; workstation selection installs a separate example |
| Caelestia | Minimal shell JSON; optional generated user overlay from the exact package base plus 20 modified QML files and the companion panels |
| Session | Named user units and `amethyst-session.target`; start once through Hyprland's start event |
| Palette | Source palette JSON, Kitty/GTK/Qt/KDE colors; runtime scheme state is generated on startup and excluded from Git |
| Wallpaper | Original plain PNG; runtime selections and local media stay outside the manifest |
| VS Code | Declarative profile and workspace source under `.local/share/cachyos-amethyst/vscode`; no live editor storage |
| Recovery | Private per-transaction preimages/postimages/modes; no broad directory replacement or package rollback |

Caelestia supplies notifications and idle/lock behavior. One polkit agent, one wallpaper service and one visual switcher have separate units. The clipboard's text/image watchers serve different MIME types. The shell startup is not duplicated in an XDG autostart entry. A functioning distro Hyprland login/session is a prerequisite; this project does not install UWSM or replace a display-manager/greeter.

The helper's preferred output is read from a small machine file. An empty preference uses the currently focused available display; a specified missing display produces a clear no-op rather than moving windows somewhere unexpected. Generic output rules use preferred mode, automatic position and scale. No GPU selectors, audio device IDs, battery IDs or sensors are copied.

Super+D records window identities and normal-workspace locations, temporarily clears fullscreen where needed, gathers visible applications, and restores surviving matching PID/class identities. Super+Shift+D arranges three owned terminal classes while hidden, then reveals the group once. Recovery state is private and session-bound. The exported system-info pane uses native ASCII rather than the source PC's unlicensed local logo.

The source desktop is the extraction/capture reference. Running the installer in a disposable home on that PC validates files against the installed runtime; it does not demonstrate first login or clean installation.
