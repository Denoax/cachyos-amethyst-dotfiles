# Known issues in this alpha

## Screen sharing negotiates but delivers no frames

The isolated local Brave test reached the real Hyprland monitor picker and returned a stream with 1920×1080 settings. The video element remained at readyState 0 / videoWidth 0. That is a failed preview, not working screen sharing. The portal log included `screencopy/pipewire: Out of buffers`.

A clean browser, an isolated software-rendering fallback, explicit video playback, and a temporary `screencopy:force_shm` diagnostic did not establish delivered frames. The source `xdph.conf` was restored byte-for-byte and its existing portal service was refreshed. No driver, compositor, kernel or package downgrade was attempted. These observations do not identify the underlying cause.

The [documented SHM option](https://wiki.hypr.land/0.57.0/hypr-ecosystem/user/xdg-desktop-portal-hyprland/) is **not** a shipped laptop default or a verified fix. Reproduce in a disposable session with the exact compositor/portal/PipeWire tuple before experimenting further. Failed footage and device-identifier-bearing chooser images remain private; no successful portal movie is advertised.

The isolated browser also reported a missing `org.freedesktop.portal.Secret` interface on the existing source session. This repository routes that interface to the installed gnome-keyring backend, but a fresh-session remediation test is pending. The presence of an unlocked Secret Service alone is not a portal or login-persistence acceptance pass.

## A newly installed Flatpak opens as a native app

The source shell initially retained its pre-install desktop-entry selection for Calculator. After refreshing only its existing managed Caelestia shell unit, the launcher selected the user Flatpak. The resulting process was verified to be sandboxed. Both user and system Flatpak export directories were already present in the source shell environment. This repository also sets those paths for its next session; it does not create duplicate application entries to hide a discovery failure.

Use the applicable session's supported refresh or a safe new test login, and verify the actual launched application rather than only its name/icon. Do not restart a production session while it has work that cannot tolerate that interruption.

## A newer shell package fails the patch check

Keep signature verification and the exact base-file guard. Rebase the reviewed patch and revalidate the complete Qt/Quickshell/plugin tuple in isolation. Omitting `shell-patch` selects upstream shell behavior and changes the custom appearance. Never force an old component onto a partially upgraded rolling system.

## Rollback reports edits

That protects newer user work. Save the named edits, compare against that transaction's private `rendered/` postimages and backups, then resolve the conflicts before retrying. Rollback preflights the entire changed set before restoring anything. It cannot undo an OS package upgrade or restore application databases.
