-- Optional presentation preference requested during capture.
-- Add this to amethyst-local.lua if desired; source-PC defaults stay unchanged.
hl.window_rule({name="amethyst-transparent-apps",match={class="^(code|org.kde.dolphin|plasma-discover|org.kde.discover)$"},opacity="0.78 override 0.78 override 1.0 override"})
