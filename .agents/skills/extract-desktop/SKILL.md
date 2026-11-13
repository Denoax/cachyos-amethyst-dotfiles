---
name: extract-desktop
description: Export Mani's current CachyOS Hyprland and Caelestia setup into a portable public configuration repository. Use for source inventory, machine-boundary extraction, dependency curation and VS Code profile export.
---

# Extract the working desktop

Resolve the project root from the current repository. Read root `AGENTS.md`, `docs/STATE_AND_SCOPE.md`, `research/FINDINGS.md`, and `vscode/SPEC.md` before extracting.

1. Locate current reports and effective runtime/configuration; distinguish reported state, actual observed state and unimplemented requests. Detect concurrent edits and preserve them.
2. Inventory config owners, versions, Lua bindings, shell startup, wallpaper provider, portals, auth agents and application identity. Read only necessary technical state; keep raw inventory private.
3. Resolve the exact current theme and amethyst value from effective VS Code/desktop settings. Preserve the user's design rather than inventing new tokens.
4. Build an explicit export allowlist. Copy selected source files into staging; inspect each for secrets, personal paths and third-party provenance. Never export entire config or state directories.
5. Split shared defaults from local hardware parameters. Keep workstation monitors/GPU/audio/sensors as opt-in examples; default to a usable generic laptop profile.
6. Curate direct package/extension/Flatpak dependencies from actual used features. Record package origin and compatible shell/CLI/plugin/runtime tuple, not just a list of every installed package.
7. Export and sanitize official VS Code profile/workspace data. Verify no private storage or credentials travel with it. Preserve task/shortcut behavior and document unavailable historical chords.
8. Commit reviewed portable source and a sanitized inventory. Save unresolved items and next action in the private checkpoint. Continue with installer implementation.

Output: source-owned file manifest, dependency/provenance manifests, theme tokens, portable profile data and evidence-backed feature status. Do not claim fresh-install support or real capture completion at this phase.
