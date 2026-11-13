-- Preferred mode and automatic scale/position. No connector or GPU selection.
hl.monitor({output="",mode="preferred",position="auto",scale="auto"})
hl.window_rule({name="mono-arch-hidden-prepare",match={class="^(MonoArchBtop|MonoArchInfo|MonoArchCava)$"},workspace="special:arch silent",float=true,no_initial_focus=true,no_anim=true})
