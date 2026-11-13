-- CachyOS Amethyst; original preimage is kept by install.sh rollback.
for _, name in ipairs({"animations","colors","decorations","inputs","misc","windowrules","monochrome","binds","portable"}) do
    require("amethyst."..name)
end
local localfile=os.getenv("HOME").."/.config/hypr/amethyst-local.lua"
local f=io.open(localfile,"r"); if f then f:close(); dofile(localfile) end
hl.on("hyprland.start",function()
    hl.exec_cmd("dbus-update-activation-environment --systemd WAYLAND_DISPLAY DISPLAY XDG_CURRENT_DESKTOP HYPRLAND_INSTANCE_SIGNATURE")
    hl.exec_cmd("systemctl --user start amethyst-session.target")
end)
