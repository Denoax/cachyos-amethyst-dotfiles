---
name: portable-install
description: Implement and verify the CachyOS desktop post-install installer. Use for profile rendering, package integration, idempotence, rollback, clean VM testing and laptop portability checks.
---

# Build and verify installation

Read root `AGENTS.md`, `installer/AGENTS.md`, `installer/SPEC.md`, `docs/DAILY_LINUX_MATRIX.md`, and `vscode/SPEC.md` from the project root.

1. Confirm a functioning supported base and source inventory. Preserve distro boot/drivers; never use the production host as a destructive clean-install target.
2. Implement the proposed doctor/plan/apply/verify/rollback interface with explicit manifests and isolated chezmoi state. Keep privileged package steps visible and separate from user configuration.
3. Define conflict, file ownership, service ownership and partial-failure behavior before applying. Back up preimages privately; rollback must preserve newer user edits and unrelated files.
4. Test temporary homes: fresh/repeat apply, no-write plan, rollback, failure injection, symlinks, collisions, paths with spaces, existing dotfile-manager state and changed-after-apply conflicts. Fix failures before integration tests.
5. Verify one shell/polkit/notification/idle owner; installed-version session integration; portal routing; Flatpak launcher exports and Discover's actual backend scope. Do not mask unrelated services as a shortcut.
6. Install the candidate commit on a disposable fresh CachyOS environment using the user guide exactly. Record base/version tuple, first login and core daily flows. Repeat installation and recovery.
7. Test physical laptop features only on available appropriate hardware. Separate VM-supported software proof from actual suspend/dock/GPU proof. Mark absent tests honestly.
8. Update compatibility and validation records with exact environment, status, evidence and limitations. Commit source/test fixes and rerun affected paths.

Output: actual tested installer, recovery procedure and evidence matrix. A list of green services or a source-session screenshot does not satisfy this skill's clean-install stage.
