# Updates

Use CachyOS's normal native package route, `sudo pacman -Syu`, after reading relevant distribution news. Avoid partial upgrades. The supplied Discover entry explicitly loads only its Flatpak backend; it does not manage native CachyOS updates. Invoking an unrestricted system executable outside this project is outside that launcher guarantee.

For user-scope Flatpak apps, use Discover's user remote or `flatpak update --user`. Do not install a second user copy of an existing system app just to make its icon appear. The session environment includes both exported application directories. Test launcher discovery after refreshing the applicable session when creating a previously nonexistent export directory.

Before changing this repository revision, keep the current transaction ID, review `git diff OLD..NEW`, run plan, then apply and verify. Roll back the latest file transaction if needed.
An existing alpha.1 checkout can fetch the new tag with `git fetch --tags origin` and switch with `git checkout v0.1.0-alpha.2`. Reapply the same profile and optional components you want on the laptop. The installer backs up managed files that are already present.

Rebase the shell patch when Caelestia package files change. The installer stops on base drift, including assets. Do not bypass the hash guard, apply with fuzz or downgrade only Qt/Quickshell on a rolling system. Test the updated tuple on a disposable CachyOS instance before promoting it.

Microsoft archive updates are explicit: check metadata with `tools/vscode-install --check`, download/verify a new version with the helper, test with separate user-data **and** extensions roots, close existing Microsoft windows, then switch only the stable user-owned symlink. Keep the old version for recovery. Code OSS, editor accounts and existing extension storage are untouched by the repository installer.
