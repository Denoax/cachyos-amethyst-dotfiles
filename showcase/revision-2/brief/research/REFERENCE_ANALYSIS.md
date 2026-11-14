# Reference analysis and adaptation map

Inspection date: 2026-11-13. Repository Markdown and actual rendered pages were inspected. All six MP4s listed on Quickshell's homepage were downloaded through the browser, probed, and visually inspected as eight evenly spaced timestamped frames each. This supports composition/coverage analysis, **not a claim of uninterrupted playback or motion-quality certification**. Codex must watch the references and its own candidates continuously on the local machine.

## Quickshell's presentation system

Source: https://quickshell.org/

The homepage gives the desktop demonstration most of the canvas: a large widescreen video, simple adjacent navigation, and creator attribution. The surrounding typography explains the tool without overwhelming the footage. The useful lesson is media scale and focus. Build a similarly generous player for Amethyst, but give this single product meaningful chapters instead of copying a carousel of unrelated projects. Keep the creator/upstream credit visible. Do not reproduce Quickshell branding or imply an endorsement.

### Soramane / Caelestia — 49.42 seconds, 1920×1080

Source: https://quickshell.org/assets/showcase/soramane.mp4

Observed samples: 0s clean pale wallpaper and edge rail; 7s music application and media surface; 21s edge control; 28s dashboard/performance plus wallpaper selection over a dark scene; 35s terminal; 42s another coherent palette; 49s returns to its opening wallpaper. The shell is demonstrated in context and the composition returns to a recognizable resting state. For Amethyst, borrow the controlled reveal and desktop→surface→desktop rhythm. Keep the user's current wallpaper and palette instead of copying the reference's theme changes. A single good demonstration can cover much more than an idle screenshot without becoming a frantic montage.

### end-4 — 48.28 seconds, 1920×1080

Source: https://quickshell.org/assets/showcase/end4.mp4

Observed samples: settings over expressive wallpaper at 0s; sidebar at 7s; configuration controls at 14s; editor and file browser at 21s; selection/overview at 28s; coordinated purple appearance with settings and side controls at 34–41s; session UI at 48s. This is especially relevant to Mani: it demonstrates customization, real applications, and the surrounding shell together. Borrow the variety and deliberate change of focus. Include actual VS Code, Dolphin and Discover workflows rather than replacing them with terminal-only “rice” shots. Do not import end-4's AI, wallpaper, menus, or unsupported features merely to reproduce its film.

### outfoxxed — 47.91 seconds, 1920×1080

Source: https://quickshell.org/assets/showcase/outfoxxed.mp4

Observed samples: left rail and empty geometric desktop; media context menu around 7s; application list around 14s; music card around 21s; notifications around 27s; lock at 34s; terminal/menu demonstrations near the end. One consistent stage makes numerous small utilities legible. Adapt this to a dedicated daily-controls chapter with real audio, clipboard, notifications and tray interactions. Do not bury these as tiny screenshots or replace real behavior with decorative fake widgets.

### pfaj / bdeblase — 24.90 seconds, 1920×1080

Source: https://quickshell.org/assets/showcase/pfaj-bdeblase.mp4

Observed samples: vivid wallpaper, top bar and dock; browser launch at 3.5s; music notification/control at 10.6s; application menu at 14s; audio/system panel at 17.6–21.2s; return to desktop. The wallpaper remains a strong identity even while small controls open. Borrow the complete action/return structure and readable UI placement, not the neon colors or wallpaper artwork.

### flicko — 13.39 seconds, 2560×1440

Source: https://quickshell.org/assets/showcase/flicko.mp4

Observed samples: compact terminal on a street-scene wallpaper; tiled terminals at 3.8s; large curved transition geometry across 5.7–7.5s; settled tiles at 9.4s; return to the opening scene by 11.3s. Its distinctive window transitions make a short focused demonstration memorable. The useful Amethyst counterpart is a clean Super+D gather/restore and Super+Shift+D terminal-group sequence. Showcase existing behavior; don't invent a new compositor animation or hide actual shaking with a cut.

### Vaxry — 12.03 seconds, 1920×1044

Source: https://quickshell.org/assets/showcase/vaxry.mp4

Observed samples: a dark atmospheric wallpaper with a sparse bar; a small upper-left dashboard appears around 5s; a submenu joins it near 10s. The large negative space makes a small interaction feel intentional. Use this restraint for Amethyst's opening and closing shots, while reserving longer chapters for its richer feature coverage. Do not stretch this non-16:9 reference or infer that a 12-second film is sufficient for the whole requested showcase.

## Caelestia and end-4 repositories

https://github.com/caelestia-dots/shell leads with identity, a few badges, and a real GitHub-hosted video attachment before component/install details. Its documentation distinguishes shell-only installation from full dotfiles. Adapt its direct playable proof and precise product boundary. Keep upstream attribution; do not claim Amethyst authored Caelestia.

https://github.com/end-4/dots-hyprland uses disclosure sections for detailed setup/features, a branded screenshot section, paired images, a video link and clear separation of current versus unsupported historical styles. Adapt the pairing and information hierarchy. Its many historical styles are not a checklist for adding unrelated functionality to Amethyst. Inspect `.github/README.md`, not a guessed root README path.

## Konata: the user's most important reference

Source: https://github.com/Denoax/konata-hyprland-dotfiles

The current README is a substantially richer presentation than Amethyst alpha. It combines a wide animated title/desktop asset, an identity line, small badge row, section navigation, and an additional full-width desktop image. It then builds a visual argument across numerous actual surfaces instead of jumping straight to installation.

| Konata section | Why it works | Amethyst adaptation |
| --- | --- | --- |
| Wide opening and complete desktop | Immediate visual identity; wallpaper is integral | Real animated wallpaper plus slim Amethyst title treatment; no generic gradient hero |
| Shell and terminal loops side by side | Shows complementary interaction styles early | Shell navigation and the corrected terminal-group toggle |
| Large dashboard image | Gives the central shell enough space to inspect | Caelestia dashboard and actual current panels at readable scale |
| Paired media/performance and weather/music | Depth without an endless same-size wall of images | Pair working media/audio, notifications/clipboard, not invented weather data |
| Navigation from edges | Explains where controls live through visible surfaces | Launcher, bar, window picker and shortcut guide |
| Full-width menu motion | Restores scale after paired detail shots | One coherent launcher→window selection→desktop sequence |
| Expandable complete gallery | Supports enthusiasts without burying the opening | Extra captures and technical detail below the main feature narrative |
| Large terminal workspace | Turns keyboard workflow into a visual feature | Super+Shift+D owned process/info/visualizer group |
| Multiple appearances | Demonstrates real supported variants | Do not invent additional themes; show consistent mono/amethyst across app families |
| Lock and profile chapter | Shows whole-session thinking | Only capture validated lock/session behavior; note blockers otherwise |
| Feature, ownership and shortcut tables | Connects screenshots to maintainable behavior | Links to existing Amethyst docs and generated bindings |
| Install, rollback and status | Gives the visual story a credible route to use | Preserve current installation contract and alpha caveats |
| Upstream/asset credits | Makes the scope of original work understandable | Explicit Caelestia/Quickshell/Hyprland and wallpaper provenance |

The strength to retain is **variation in visual scale and narrative depth**: wide image, paired details, wide interaction, deeper gallery, practical information. Do not copy every table mechanically. At narrow widths, dense pairs become illegible; use a responsive single-column version on Pages and conservative pairs on GitHub.

The current Konata source describes 30fps loops, fixed compositor geometry and short loop dissolves. That is useful implementation history, not proof that its strategy fits Amethyst's animated background. A crossfade can ghost text and duplicate faces; Amethyst must first seek a natural UI-and-wallpaper loop boundary. No historical metric or old feature becomes a current Amethyst claim.

## Hyprland site and Hall of Fame

https://hypr.land/ uses oversized typography, restrained primary actions, large framed footage and feature sections. https://hypr.land/hall_of_fame/ presents named entries with creator attribution and large playable demonstrations; the Moon contest section uses substantial spacing and imagery rather than small utility cards. Adapt media scale, confident titles, chapter separation and clear attribution. Keep Amethyst's monochrome/amethyst identity instead of cloning teal neon, contest rankings, awards, or endorsements.

## Synthesis

Use a rich GitHub-native README as the entrance and a purpose-built Pages gallery as the cinematic experience. A viewer should understand the desktop within seconds, then find genuine depth in navigation, development and daily Linux integration. Animation quality, composition and complete interactions matter more than decorative badges. All source observations above are bounded by the inspection method; final continuous motion review belongs to the local recording workflow.
