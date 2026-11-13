-- Shared accent comes from the pinned user palette; no desktop geometry changes.
local palette_file=assert(io.open(os.getenv("HOME").."/.local/share/caelestia-monochrome/palette.json","r"))
local palette_data=palette_file:read("*a");palette_file:close()
local accent_hex=assert(palette_data:match('"primary"%s*:%s*"(%x%x%x%x%x%x)"'),"Missing shared primary accent")
local accent="rgba("..accent_hex.."ff)"
-- Independently authored neutral adaptation of Duma's observed inset composition.
hl.config({
 general={gaps_in=8,gaps_out=16,border_size=2,col={active_border=accent,inactive_border="rgba(383838ff)"}},
 decoration={rounding=13,active_opacity=0.99,inactive_opacity=0.94,fullscreen_opacity=1,blur={enabled=false},shadow={enabled=true,color="rgba(00000055)",range=10}},
 group={col={border_active=accent,border_inactive="rgba(383838ff)",border_locked_active=accent,border_locked_inactive="rgba(383838ff)"},groupbar={col={active=accent,inactive="rgba(383838ff)",locked_active=accent,locked_inactive="rgba(383838ff)"}}},
 misc={col={splash="rgba(f2f2f2ff)"}},
})
-- On-demand terminal/scratch workspace only; no permanent dashboard.
hl.workspace_rule({workspace="special:arch",layout="master",gaps_in=8,gaps_out=16,border_size=1})
