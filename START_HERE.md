# CachyOS Amethyst: repository and showcase handoff

Prepared for Mani / Denoax on 2026-11-13. This is an implementation brief and reusable repository-local agent workflow, not an installer for the current computer. The Thinker inspected public sources and Konata; the local Doer must inspect, implement, test, record and publish the actual current setup.

## Intended result

A separate public repository, preferred name `Denoax/cachyos-amethyst-dotfiles`, that reproduces Mani's black/white desktop with restrained amethyst accents, Caelestia, migrated shortcuts, daily Linux integrations and official Microsoft VS Code competitive-programming workflow on a fresh supported CachyOS installation.

Ship a **post-install configuration distribution**, not a disk image or custom ISO. Fresh CachyOS installation and hardware drivers are prerequisites. The repo must make the next steps short, reviewable and recoverable. It must not partition disks or reproduce Mani's boot, encryption or account state.

## Read and execute

1. Read `AGENTS.md`, `docs/STATE_AND_SCOPE.md`, and `research/FINDINGS.md`.
2. Use the four repository-local skills in `.agents/skills/` for extraction, installation, recording and release. These are project source files; do not install them into unrelated global skills or change global agent instructions.
3. Follow `docs/EXECUTION_PLAN.md`; keep an accurate checkpoint after each phase.
4. Implement against `installer/SPEC.md`, `vscode/SPEC.md`, `docs/DAILY_LINUX_MATRIX.md`, and `showcase/STORYBOARD.md`.
5. Publish only inspected public-safe material. Return the URL, exact commit/tag, install instructions, real media, validation matrix and remaining limitations.

Copy these instructions into the new repo, preserving their paths and scoped `AGENTS.md` locations for the first version. The proposed `installer/`, `showcase/`, `vscode/` paths are also where implementation belongs. Label these files as maintainer instructions and write the public user manual separately. If later reorganized, update every instruction reference and skill path together. Do not publish private inventories or backups with this pack.

## What this pack does not establish

It does not prove that amethyst accents, the shortcut fixes, VS Code setup or Flatpak integration have been completed on the source PC. It contains no new desktop recordings. Earlier reports are evidence to inspect, not a substitute for current runtime checks. No new GitHub repository was created by the Thinker.

## Deliverables

- Portable source, supported-base instructions, one installer entry point with plan/apply/verify/rollback, and laptop defaults.
- Optional `dev-cp`, Flatpak app and workstation profiles; exact source-machine layout remains opt-in.
- Documented update and recovery paths; dependency provenance and tested compatibility tuple.
- Sanitized official VS Code profile plus real C++23, Python and Java workflows.
- Actual desktop GIFs, readable full-resolution videos, screenshots, capture manifest and a polished GitHub README/gallery.
- CI, meaningful installer tests, fresh-session/fresh-install evidence, licensing and public-data review.

Use `CODEX_PASTE_PROMPT.md` to begin. This task authorizes implementation, local recording and publication of the new configuration repository; it does not authorize replacing the production OS or changing the old Konata repository.
