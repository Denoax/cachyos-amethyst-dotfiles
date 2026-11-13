---
name: publish-desktop
description: Publish and maintain the separate Denoax CachyOS desktop repository and release. Use for README assembly, privacy and license checks, validation gates, GitHub publication and exact release reporting.
---

# Publish the verified repository

Read root `AGENTS.md`, `docs/RELEASE.md`, `docs/EXECUTION_PLAN.md`, and the current checkpoint/evidence matrix.

1. Reconcile source files, installer tests, clean-environment results and capture provenance against the exact candidate commit. Do not promote old claims from previous reports without evidence.
2. Assemble concise install/update/rollback/shortcuts/hardware/VS Code docs. Clearly distinguish experimental hardware and blocked checks. Ensure all advertised commands exist and were tested.
3. Audit staged content, all new history and every release asset for private data and licensing. Verify third-party code/assets are not mislabeled as project-owned. Keep raw local reports and backups out.
4. Run appropriate CI and link/media checks. Review GitHub workflow permissions and external action pins. Do not give untrusted PR code secrets or write credentials.
5. Confirm Denoax account authority and target name; never overwrite the old Kona repo or an unrelated existing repo. Create/publish the new sanitized repo as authorized. Use stable or prerelease status according to the actual evidence gate.
6. Publish tag/release with exact commit and artifact checksums. Inspect hosted README/media and repository visibility after publication. Fix broken links through ordinary commits, not force-pushing unrelated history.
7. Return `CODEX_RETURN.md` with URLs, tag/SHA, install and rollback commands, real media, verified environments, source-host changes and unresolved limitations.

Output: reachable repository/release with accurate evidence and support claims. When authentication or an approval block prevents publication, complete independent work and state the exact blocker; do not invent a remote URL or a successful push.
