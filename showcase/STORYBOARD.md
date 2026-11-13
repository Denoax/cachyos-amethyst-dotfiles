# Real desktop showcase and capture tool contract

## Direction

Use the real current black/white/amethyst desktop as the visual authority. Konata's title-and-desktop hero and surface tours are the reference; improve clarity and loading weight. Keep title copy concise and factual, show the desktop prominently, use consistent crops and quiet separators, and avoid badge walls or invented logos. Extract the accent from actual VS Code configuration. Do not resurrect unavailable Kona assistant/Mosaic/profile surfaces just for a screenshot.

README sequence: hero → what ships/support boundary → three main tours (desktop, CP workflow, daily apps) → short install/rollback path → shortcuts → detailed gallery → verification/support/licenses. Expandable details can contain secondary screenshots. At least one real GIF is required; use full-resolution MP4/WebM for readable longer flows and a static poster alternative. A small local HTML gallery with native video controls is sufficient; GitHub Pages is optional, not a prerequisite or a reason to add a large web framework.

## The requested showcase tool

First inspect local scripts, prior reports and available tools for an existing capture/showcase workflow. Inspect it before execution and reuse if suitable. No named showcase tool was available to the Thinker. If none exists, implement and run a small `tools/showcase` wrapper with:

- `doctor`: detect Wayland session, actual outputs, installed compatible recorder/FFmpeg and encoders; short capture/probe; report unsupported cases.
- `record --scene <id> --output <detected-output>`: save a real bounded recording to a private run directory; store owned PID; finalize on SIGINT/normal stop; ensure cleanup on failure.
- `encode --scene <id>`: input is reviewed real footage; create GIF, full-rate video and poster with an explicit edit/encoding manifest.
- `verify`: inspect streams, dimensions, duration, frame timing, file size and hashes; check missing media links; produce a local gallery for continuous visual review.

Implement against installed help/man pages. `wf-recorder -o <output> -f <path>` is the documented basic shape, not a mandate to force this recorder if the compositor/backend cannot use it. Test wl-screenrec or a PipeWire/OBS capture path when appropriate. CPU encoding is a valid fallback if measured capture impact is acceptable. Do not hard-code render-node numbers, codec availability or recording the entire three-monitor canvas.

Prefer one 1920×1080 output with readable content, native pixel geometry and 30/60 fps source capture when achievable. A 4K wallpaper does not make a 1080p monitor recording 4K. Record source timing with ffprobe and compare unrecorded vs recorded interactions to identify capture-induced jitter. Avoid claiming display FPS from GIF playback rate.

## Preparation and restoration

Use dedicated demo workspaces/profile and innocuous example files. Keep private browser tabs, chats, calendar, account names, SSIDs, notifications, clipboard history, shell history, VS Code recent projects and authentication UI out of view. Do not clear the user's real history or close their work just to obtain a clean recording. Use temporary settings/context and restore prior DND, wallpaper, workspace/focus and any changed display settings after capture.

Audit wallpaper, avatar, icons/fonts, media/audio and displayed code rights. If current wallpaper/public footage rights are unresolved, use a plain dark or owned/permissively licensed neutral background for publication. This is a documented temporary presentation substitution, not a change to the user's selected live wallpaper. No AI media or fake UI. Keep private masters local; only sanitized derivatives may enter public repo/releases.

## Scene list

| ID | Sequence | Deliverable / acceptance |
|---|---|---|
| 01-desktop | Resting desktop → panel/dashboard → launcher → return | 8–12 s hero loop plus poster; readable shell; fixed capture geometry |
| 02-navigation | Shortcut help → search/select → actual shortcut → workspace/menu selection | 10–20 s loop/video; displayed chords match registered bindings |
| 03-window-actions | Exercise Super+D and Super+Shift+D with known test windows, then return | Uncut 20–40 s evidence; no oscillation, missing windows or stale subprocesses; gallery clip only after passing |
| 04-vscode-cpp | Open sample via launcher → scaffold → build/run → sample output → debugger breakpoint/variable | 30–60 s full-res video, 8–12 s readable GIF excerpt, editor still |
| 05-languages | Switch to Python and Java sample and run; sanitizer failure/result if implemented | Short video/gallery; actual output, no sped-up fake compilation |
| 06-discover | Open Discover → Flatpak search/details → install chosen small demo → launch from Caelestia | Short edited documentary clip with cuts labeled; actual package scope/remote verified |
| 07-daily | Dolphin/open-with → test notification/action → isolated clipboard → audio control/MPRIS | Separate 5–10 s clips or small montage with labeled cuts |
| 08-portals | Browser/local test asks for screen share → choose output → visible preview → stop | Real test, no meeting participants; file picker still also useful |
| 09-laptop | Internal display, brightness, battery UI, optional dock transition/lock/resume | Only where physically tested; otherwise omitted and marked NOT_RUN |
| 10-install | Fresh VM first login and same installed desktop/profile | Separate portability proof with base/version caption |

Inventory any additional useful currently working surfaces and include them in the gallery/feature map. Do not imply every optional feature exists. Lock/suspend tests require a safe session and credentials entered by the user outside recordings; do not suspend the source session unattended.

## Encoding and review

GIF starting point: 960–1280 px wide, 15–20 fps, 128–256 color adaptive palette, 6–12 s, infinite loop. Tune dither/palette by inspecting amethyst edges, text and gradients; these are project budgets, not claims of upstream requirements. Aim for <=3 MiB each and <=10 MiB of eagerly loaded README media. Prefer a shorter cleaner excerpt over illegible downsizing. Longer/high-resolution videos belong in release assets; link them through posters. Keep code demonstrations readable at normal playback.

Use FFmpeg trim/fps/scale before `palettegen` and `paletteuse`; retain the exact commands in the media manifest. Do not upscale, interpolate, fake a cursor, substitute metric text, or remove wobble from footage to claim it was fixed. Natural resting state at both ends is preferable. If a cut, privacy mask or loop dissolve is used, label it; retain uncut local evidence. GIF output may have quantized frame timing; verify the actual file rather than calling it exact 60 fps.

Watch every derivative start-to-end, including two loop wraps, at normal speed. Check text readability, no black frames or capture tearing, palette noise, no leaked sensitive frames, and that claimed actions match the UI. A contact sheet is useful for privacy inspection but does not establish motion quality. Log who/what observed continuous playback; if the automation tools cannot play continuous video, leave human motion review pending rather than claiming it from sampled frames.

## Manifest

Populate `templates/media-manifest.json` per scene: source hash/path kept private, sanitized published path, source configuration commit, versions, output geometry, recorder/encoder, measured rates/duration, trims/crops/privacy masks, asset rights, SHA-256, and review status. Public copies omit private absolute paths. Keep poster and GIF first/last frames visually coherent, but never fabricate a seam by misrepresenting feature behavior.
