# Project instructions

## Mission

Turn the current working CachyOS desktop into a portable, maintainable public dotfiles distribution and documentary showcase. Act as the Doer: inspect, implement, validate, record and publish. Do not stop after acknowledging or reading this handoff.

Read `START_HERE.md`, `docs/STATE_AND_SCOPE.md`, `docs/EXECUTION_PLAN.md`, and `research/FINDINGS.md` first. Load the relevant `.agents/skills/*/SKILL.md` for each phase. Nested `AGENTS.md` files add requirements for that subtree. The repo-local skills are instruction sources, not proof that any step has run.

## Ownership and scope

- Create a new repo under Denoax; preferred `cachyos-amethyst-dotfiles`. Inspect any existing repository with that name before writing. Never overwrite an unrelated repo; use `cachyos-amethyst-desktop` if the preferred name is occupied by an unrelated project, and report the choice.
- Preserve the old `konata-hyprland-dotfiles` repo and its history. Adapt useful original code with attribution after inspecting its license; do not wholesale import its hardware settings, runtime or artwork.
- Source PC is a production session with other Codex work possibly active. Inspect git/mtime state and avoid concurrent overwrites. Export to staging first; current configuration is the reference, not a destination for experimental installer runs.
- Never copy whole home, `.config`, `.local/share`, `/etc`, browser profiles, clipboard databases, authentication material, SSH/GPG keys, Wi-Fi secrets, Codex sessions or VS Code storage into the repo.
- Do not partition, format, modify boot/crypttab/fstab/kernel flags, replace GPU drivers, change firmware, log out or reboot this production PC for packaging. Use an isolated test machine for disruptive validation.
- Use precise user-owned file manifests. Back up before any necessary live correction, with narrowly scoped rollback. Avoid blanket service masking, process killing and directory replacement.

## Design and sources

Use `$reference-led-design` if available. If missing, apply its essential rules here: inspect real upstream references; adapt the current desktop and existing components; use only owned or appropriately licensed assets; record actual UI; generate no AI images, video, audio or fake screenshots. Do not invent telemetry. For motion, watch continuous playback, including opening/closing and loop boundaries, before claiming smoothness.

Keep black and white dominant. Derive the exact amethyst accent from the actual active Microsoft VS Code profile/theme override and existing desktop configuration. Do not guess a purple or globally recolor all text. Preserve layout and shortcut muscle memory. This project packages the current setup; it is not permission for another redesign.

Use current official documentation and the installed versions. Hyprland here reportedly uses Lua; do not paste legacy `.conf` syntax into Lua. Query available IPC instead of inventing commands. Source/version claims belong in `docs/COMPATIBILITY.md` with a date and evidence.

## Evidence and continuity

Maintain local checkpoint state from `templates/progress.json`: current phase, commit, files changed, executed commands/results, blockers and next action. Keep raw logs/screenshots private until scrubbed. At context recovery, reread checkpoint, applicable instructions and source files; do not infer completion from prior plans.

Statuses are `PASS`, `FAIL`, `NOT_RUN`, `BLOCKED`, or `NOT_APPLICABLE`, each with evidence and reason. A running daemon is not a successful user flow; a dry-run is not a fresh installation; VM success is not physical GPU/suspend proof. Never claim all hardware or universal laptop support.

Prefer standard tools and upstream settings to custom background daemons. Fix material packaging defects, then rerun affected checks. Avoid upgrades solely to make the package inventory look current. No hidden `curl | sh`, disabled package signature checks or arbitrary scripts run as root.

## Completion

Follow `docs/RELEASE.md`. Publish the new repo and release when required gates pass; no extra blanket approval is needed for the already-requested publication. If a gate is genuinely blocked, complete independent work and return a precise blocker plus a draft/prerelease with honest scope rather than false green badges. Never expose private artifacts just because a repo is initially private.
