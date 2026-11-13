# Publication and release requirements

## Public repository contents

Ship concise root README, install/update/recovery guide, hardware boundary, generated shortcut reference, compatibility/verification matrix, daily-use guide, VS Code guide, architecture/ownership map, package manifests, upstream patch provenance, asset ledger, licenses, changelog, contribution instructions, scoped AGENTS and project skills.

Suggested layout: `home/` for chezmoi-managed user source; `profiles/` for shared/profile parameters and sanitized examples; `packages/` for curated manifests; `installer/` and root entry point; `vscode/`; `tools/`; `tests/`; `showcase/`; `docs/`; `.agents/skills/`; `.github/workflows/`. Local machine config, backups, raw recordings and runtime state stay outside this tree or are explicitly ignored. Do not publish this implementation brief as though it is the finished user manual.

## Privacy and asset gates

Use an allowlist export plus secret scanning and manual review. Inspect all staged files, entire new Git history, generated archives, screenshots/video frames, release assets and logs. Check strings and high-entropy candidates; scanners do not prove media is safe. Exclude credentials/tokens/keyrings, Codex/auth/browser sessions, Wi-Fi credentials, host identifiers, hardware serials, IP/MAC/SSID details, private code/content, proprietary bundled binaries and unlicensed media.

Review scripts before executing external installers. Keep required signature/checksum verification enabled. A checksum from the same untrusted origin is integrity evidence, not independent authenticity. Commit sources and hashes of selected upstream patches; do not publish someone's third-party program under the project license.

Choose a license appropriate to Mani's original configuration/code. Keep upstream licenses and notices for any copied/derived components; Caelestia code requires special attention to its GPL terms. Audit font/icon/media licenses separately. Do not claim MIT covers everything. DesktopHut raw wallpaper is not part of distributable assets absent explicit compatible rights; an external download link must not imply the repo grants rights.

## CI and release checks

- Shell/Python/JSON/Lua syntax checks appropriate to actual source, manifest/schema validation, desktop-entry validation and documentation link checks.
- Temporary-home apply/idempotence/rollback/conflict/failure tests from installer contract. Avoid test hooks that could target the runner's real home or require production credentials.
- Static scan for absolute personal paths, forbidden exports, dangerous installer patterns, secrets and oversized blobs; review false positives with reasons.
- Minimum GitHub Actions permissions (`contents: read` for validation); pin third-party actions to reviewed full commit SHAs. Only a narrowly scoped release job needs writes. Never execute untrusted pull-request code with write tokens or secrets.
- Test user-visible commands copied from README in the clean environment. Save exact command/output and package tuple outside public raw logs, then publish a sanitized summary.
- Every advertised feature has evidence or an explicit experimental/untested label. All required errors fixed or honestly scoped. No unconditional 'works everywhere', 'fully optimized', 'zero bugs' or unsupported hardware claims.
- All GIF/video assets have hashes, source commit, measured dimensions/timing, edit notes, permissions and visual review. No 4K claim for 1080p capture; no GIF cadence presented as performance proof.

## Repository creation and publication

Authenticate through the user's existing GitHub connector/CLI without printing tokens. Confirm owner Denoax and check preferred name availability. Prepare locally first. Private staging is acceptable, but still contains only sanitized publishable files. Preserve the unrelated old repo. Do not force-push an existing repository or make unrelated account/profile edits.

The request authorizes publishing this new config repo. Publish after the privacy/license and applicable functionality gates pass. If physical laptop tests are unavailable but a fresh VM and source PC pass, publish with that exact tested scope and explicitly experimental hardware-dependent functions. If clean installation is untested or core daily flows fail, a public **prerelease** is acceptable only with prominent limitations and no stable/install-ready badge; do not misrepresent blocked testing as success.

For an incomplete prerelease, publish only reviewed scenes that actually work, with at least a desktop loop/poster and one demonstrated end-to-end workflow when capture is available. List every missing scene and its blocker. If capture itself is genuinely blocked, a source-only prerelease must say that no new showcase was recorded; the capture task remains unfinished. Do not use the prerelease option as a shortcut around available testing or recording. Stable completion requires the applicable full storyboard and core functionality gates.

Use an immutable tag and source commit, release notes with tested versions, a checksum file for distributed assets, and a small downloadable source/configuration archive. Prefer full-rate showcase videos in release assets to repeated large Git history blobs. README links must work from the published default branch and release, not local paths. Check normal/dark GitHub rendering, alt text, mobile reading width, GIF readability and download weight. A static poster/video link gives readers a motion-free route.

## Return to Mani and the Thinker

Write a local `CODEX_RETURN.md` with repo URL, tag/SHA, what is included, exact shortest install/rollback flow, actual media/gallery URLs, source/fresh-VM/physical-laptop test table, source-host modifications and restoration status, license/asset exceptions, blockers and next steps. Include no secrets. Distinguish unavailable hardware checks from actual failures. Report 'published' only after reading back repository visibility/commit/media links successfully.
