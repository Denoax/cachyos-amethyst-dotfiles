# Capture, encoding and motion review

## 1. Establish a reversible stage

Read the existing `tools/showcase`, `showcase/STORYBOARD.md`, `showcase/timing.json`, `profiles/showcase-transparency.lua`, current theme/monitor configuration and recent return report. Record tool versions and selected output. Keep private logs outside public asset paths.

Create owned demo windows/workspaces. Snapshot only settings that staging changes. Use the actual installed shell and current wallpaper backend; do not launch a second competing wallpaper process. Confirm the video is progressing both on the visible desktop and through the target application. A wallpaper process merely being alive is not sufficient.

Apply the existing 0.78 showcase profile to the intended apps. Verify both focused/unfocused behavior. Inspect current output scale, cursor scale, shell placement and display refresh. Do not move a user's saved windows or alter their permanent monitor arrangement without preserving a precise restoration path.

Warm up applications and fonts. Resolve extension/onboarding prompts in the owned profile. Load harmless demo files and selected local media. Query UI readiness or compositor state before dispatching the next action; replace blind sleep-and-key-spam with bounded waits and clear timeout failures. Prevent overlapping capture jobs with a lock. Retain cleanup in `finally`/signal handlers.

## 2. Rehearse and choose capture settings

Run a short identical wallpaper+launcher+window-motion rehearsal at the established 1080p30 baseline and a 1080p60 candidate. Use the actual output's native resolution; do not market an upscaled 1080p desktop as native 4K. The wallpaper asset may be 4K while the captured display is 1080p. Record those separately.

The existing `--no-dmabuf` CPU-copy path may be necessary on this mixed-GPU machine. Treat an alternative capture/encoder path as a bounded A/B test, not a reason to change drivers or global compositor settings. Check installed recorder options before using a command. If the existing recorder is incompatible with current capture protocols, inspect a supported installed replacement; do not disable portals/security features just to record.

Measure encoder speed, dropped/duplicated frames where observable, timestamp monotonicity and compositor responsiveness. Watch the raw recording. wf-recorder's constant-framerate mode may duplicate frames; a 60fps header does not prove 60 unique frames. Prefer a smooth genuine 30fps result over mislabeled 60fps duplicates, but make a real attempt at higher-quality capture.

Save a high-quality master (lossless or visually lossless appropriate to available storage/encoder), not only a compressed GIF. Record source dimensions, actual time base, codec, pixel format, range and color tags. If monochrome contrast changes after export, investigate color conversion; don't fix it by merely relabeling full-range data as limited-range.

## 3. Edit the presentation separately

Keep raw/evidence takes immutable with hashes. Use an edit-decision manifest for the 60–90s film: source take, in/out time, transition, caption and purpose. Normal-speed real interactions are the default. Hard cuts between completed actions are usually clearer than constant dissolves. Do not hide failures or imply speedups are actual application performance.

The animation in the background must remain real at every desktop shot. A full-frame freeze, still replacement, artificial interpolation or simulated wallpaper compositing is not a shortcut to quality. Small caption overlays and reframing from the real capture are allowed; preserve source aspect ratio and readable UI.

Design the hero loop before encoding. Start and end with the same UI state; select wallpaper phases that match perceptually. If a natural repeat interval can be measured, use it. Otherwise choose a better bounded segment. Do not reverse the clip to manufacture a loop. A very short editorial dissolve is a last option only if continuous review shows no text/cursor/face ghosting; retain the unmodified source and label the edit. Do not claim a seamless loop from first/last-frame similarity alone.

## 4. Encode for the delivery surface

| Deliverable | Starting point | What decides the final settings |
| --- | --- | --- |
| Master/evidence | Native captured dimensions and cadence; high quality | Truthful behavior and sufficient quality for future re-encoding |
| Main film | H.264 MP4, 1080p, source-compatible 30/60fps, appropriate yuv420p conversion and fast start | Browser compatibility, readable code, gradients, actual continuous playback |
| Feature clip | Same standards, short complete interaction | Composition and useful result, not arbitrary duration |
| README GIF | Compare 960–1280px, 25/30fps, high-quality palettes | Amethyst preservation, no banding/flicker, loop quality, practical file size |
| Posters | Deliberately chosen settled frame; responsive thumbnail + full-resolution image | Actual README width/mobile readability |

Start with a small matrix: FFmpeg 256-color palette with ordered dithering; FFmpeg full palette without dithering; and gifski if available from a reviewed package. Palette/dither settings interact with the moving grayscale wallpaper and sparse purple UI. Compare actual results rather than setting a permanent low-color cap. Maintain identical source segment/resolution/cadence for a fair encoder comparison, then compare delivery sizes separately.

The Thinker's first controlled 960px/25fps/256-color error-diffusion trial restored purple but produced about 30MB for six seconds. It is **not** a recommended shipping preset. This demonstrates why blindly increasing quality values is insufficient. Prefer a good native video player plus a carefully optimized teaser over reducing the entire theme to gray to meet an arbitrary GIF target.

Treat approximately 8–12MiB per main README loop and modest aggregate README media transfer as initial engineering targets, not acceptance rules that permit destroying quality. If the film cannot fit an attachment limit, provide the full-quality Pages player and release download; don't quietly lower everything to 640px/10fps. Git hosting, attachment upload and Pages limits are different. Measure actual hosted behavior and document the choice.

No need to encode every clip in five formats. H.264 MP4 plus tested GIF/still fallbacks is a sensible initial baseline. Add a second web codec only if a measured benefit justifies it. Keep captions/credits accessible without relying on video audio.

## 5. Review four distinct stages

1. **Live source:** does the desktop itself shake, flash or stall?
2. **Raw capture:** did recording introduce duplication, stalls, missing wallpaper or GPU-copy artifacts?
3. **Encoded file:** did compression introduce banding, lost purple, ghosting or a bad loop seam?
4. **Hosted player/README:** do decoding, resizing, loading and GitHub rendering make it worse?

Watch each final clip end-to-end at 1×. Watch every looping asset for at least three full loops, including the seam. Check at its actual display size and fullscreen. Review source and encode side by side when a defect appears. Record the observer/method honestly. Frame sampling can locate a defect; it cannot clear the continuous-playback gate.

Add automated integrity checks for corrupt/truncated output, expected dimensions/duration, valid timestamps, media manifest references, escaped captions and broken links. Black/freeze detection is advisory because this design intentionally has dark regions and settled UI. Use wallpaper and moving-UI regions for diagnosis; global image differences are dominated by the background.

Restore the staging state and original editor. Verify no owned demo process or competing wallpaper backend remains. Keep the final uncut evidence private unless explicitly included in a sanitized review bundle.
