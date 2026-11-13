# Installer implementation scope

Read `SPEC.md` before editing. Never run apply/rollback experiments against the source user's real home. Use disposable homes for file behavior and a fresh CachyOS VM/test device for integration.

The installer owns only its allowlisted paths and service changes. Treat symlink escapes, existing user edits, partial failures and accidental root invocation as first-class cases. Do not use broad directory deletion, `sudo chezmoi`, recursive home ownership fixes or a whole-home restore. Package installation and configuration deployment are different phases and require different recovery reporting.

Use the actual installed Hyprland Lua API and supported Caelestia configuration. Implement local hardware overrides separately. Preserve package-manager signature validation. Tests must assert filesystem and service outcomes, including failures, not merely snapshot script output.
