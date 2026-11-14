# GitHub presentation and integration

## Two connected surfaces

GitHub's README sanitization removes scripts, inline styles and various HTML attributes. Do not promise to restyle GitHub's navigation or embed an arbitrary interactive app in Markdown. Use supported Markdown/HTML intentionally, then put full control in a static GitHub Pages project site. Official sources are listed in [SOURCES.md](../research/SOURCES.md).

### README order

1. A compact branded title treatment and accurate single-sentence identity.
2. Full-width hero loop or a verified native video attachment. Keep a static poster option and direct film link.
3. A restrained navigation row: **Watch the tour · Explore features · Install · Shortcuts · Source/status**. Make each destination real.
4. A concise visible **alpha** notice linked to full compatibility results.
5. **The desktop:** full-width composition plus paired shell/terminal motion or stills.
6. **Move without thinking:** launcher, Alt+Tab, gather/restore and shortcut guide, shown at readable sizes.
7. **Built for problem solving:** a substantial VS Code film/still, C++23 build/run/debug, templates, saved/interactive input, Python and Java. Keep the app's real theme and wallpaper.
8. **Daily Linux:** large Dolphin/Discover views, verified Flatpak launch, clipboard/audio/notification interactions; use visual pairings and short captions.
9. **More surfaces:** an expandable gallery for additional working panels and session controls. This supplements the visible narrative.
10. **Install and recover:** existing tested commands and requirements, limitations adjacent to the install action, exact rollback scope. Link to detailed docs.
11. Short architecture/customization pointers, upstream and asset credits, release/status links.

Keep important headings as Markdown text for GitHub's generated outline. Do not flatten paragraphs into SVGs. Maintain relative links where suitable so branches/tags work. Use absolute versioned links for external release assets. Link a clipped still to its full-size image or precise clip/chapter, not every thumbnail to the same generic gallery top.

## Feature selection

| GitHub feature | Use | Boundary / test |
| --- | --- | --- |
| Linked SVG/PNG title and CTA assets | Small branded identity and purposeful navigation | Provide descriptive alt text and adjacent text links; test light/dark; no fake controls |
| `<picture>` sources | Alternate light/dark title assets; consider static reduced-motion selection | Verify actual GitHub rendering; retain `<img>` fallback and static-gallery link |
| GIF | A short inline hero and select motion details | No native pause UI; link to controllable video. Do not pack the page with autoplay GIFs |
| GitHub-hosted video attachment | Try one native playable hero as a comparison candidate | Use an actual uploaded URL and confirm README rendering; release MP4 links are not automatically native embeds |
| `<details><summary>` | Deep galleries, optional technical details | Main visual story remains expanded and useful |
| `<kbd>` | Shortcut captions | Must match current generated keybind documentation |
| Two-column image tables | Complementary desktop surfaces | Test mobile; avoid three-column code thumbnails |
| Release / CI / alpha badges | Small factual status row | Link to exact real state; no false compatibility or inflated counters |
| Markdown alerts | One concise alpha/status note and install boundary | No repeated wall of warnings over the visual story |
| Repository About/topics | Accurate identity and verified gallery URL | No spam tags or official-distribution claims |
| Social preview | Original 1280×640 PNG/JPEG under 1MB using actual capture and sparse type | Respect GitHub's crop and download preview before setting it |
| Releases | Versioned high-quality media/archive delivery | Do not replace alpha.1 assets; preserve provenance |
| Pages via Actions | Actual responsive, chaptered video gallery | Deploy only the site output, not the entire repository or private captures |
| Issue forms | Optional useful bug-report links including version/hardware | Not a decorative priority; do not add a maintenance system just to use every feature |
| Star charts, visitor counters, fake terminal typing, giant badge arrays | Omit unless a tested design has a meaningful reason | Not a substitute for showing the actual desktop |

### Native video attachments

Caelestia demonstrates the GitHub-hosted attachment approach. Official current docs support image/video attachments through GitHub web UI and `gh ... --attach` on supported issue/PR commands. Inspect installed CLI help before relying on a newer flag. Use an existing authorized review PR, not an unsolicited issue/comment. Uploaded media is public immediately on a public repo, even before a comment is submitted; inspect it first. Keep account-specific size limits in mind. Never fabricate attachment IDs.

If attachment upload is unavailable, the complete supported fallback is a high-quality linked hero GIF/poster plus the working Pages player. Record that choice, and retain a native-video candidate for future comparison. Do not halt the whole showcase because one hosting method fails.

## Pages gallery specification

Implement with the smallest stack that suits the existing repo: static HTML/CSS/JS or its current generator. A framework migration is unnecessary. Put presentation data in one manifest and generate README gallery fragments and site cards from it where useful.

- Start with a generous desktop player and a small Amethyst title. A restrained page background complements the footage; the actual desktop video remains untouched.
- Include Play/Pause, seek, fullscreen and optional speed controls. Default playback speed is 1×. Keep accessible button names and visible keyboard focus.
- Chapter navigation: Desktop, Navigation, Coding, Daily apps, Details. Clicking changes the real clip/time and updates the URL hash. Back/forward and direct chapter links work.
- Add still/clip toggle or a still gallery. Do not force hover to discover essential controls. Captions identify live behavior and actual shortcuts.
- Use one actively playing video at a time. Pause offscreen/hidden media. Defer other sources until requested; `preload` is only a browser hint, so verify network requests.
- A muted inline hero loop can autoplay if permitted; visible pause remains available. Under reduced-motion or data-saving preference, show a poster and Play button. User Play still starts the real animated recording. These presentation preferences do not replace the source wallpaper.
- Give each clip a meaningful poster, dimensions/aspect ratio, credit and download link. Handle a rejected play promise, missing media and network failure visibly. Do not leave black rectangles.
- Responsive composition: single-column phone, selective pairs on wider screens, readable captions, no horizontal overflow. Keep film controls reachable at 200% zoom.
- No scroll-jacking, forced full-screen, autoplay audio, elaborate page transitions that compete with the desktop, analytics or third-party tracking by default.
- Provide local offline review with bundled optimized media. GitHub Pages uses the repository subpath: test that all relative assets/links work there, not only at localhost `/`.

Use the official Pages Actions deployment pattern with only required token permissions and current reviewed action versions. Build the artifact from the intended site directory. Exclude raw captures, private metadata, install backup data and source wallpaper. Keep optimized site payload well within Pages limits; put larger downloadable masters in a new release. Verify seeking and playback at the real hosted origin, including redirect behavior if videos live in Releases. Do not assume a download URL behaves as a streaming origin.
