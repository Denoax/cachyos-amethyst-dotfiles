-- Portable session environment; distro-selected GPU drivers are inherited.
local home=os.getenv("HOME")
hl.env("PATH",home.."/.local/bin:"..(os.getenv("PATH") or "/usr/local/bin:/usr/bin"))
hl.env("QT_QPA_PLATFORMTHEME","qt6ct")
hl.env("XDG_CURRENT_DESKTOP","Hyprland")
hl.env("XDG_DATA_DIRS",home.."/.local/share/flatpak/exports/share:/var/lib/flatpak/exports/share:"..(os.getenv("XDG_DATA_DIRS") or "/usr/local/share:/usr/share"))
