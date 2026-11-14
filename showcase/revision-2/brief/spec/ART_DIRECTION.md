# Art direction and actual layout experiments

## Identity

Working presentation title: **Amethyst**. Supporting descriptor: **A CachyOS workstation, in motion.** Retain the repository name and accurate Hyprland/Caelestia attribution. Avoid unsupported “fastest,” “zero overhead,” or “fully optimized” claims.

Use current theme tokens, not a new palette. Black and white dominate; the exact installed amethyst is reserved for emphasis, focus, chapter markers and selected controls. The moving wallpaper provides the visual texture. Do not put unrelated purple gradients, stars, particles, stock mockup devices, huge glowing cards or generated art behind it.

Use a limited typographic hierarchy: one display style, one readable body face, one monospace style for keys/code. Reuse project fonts if redistribution is allowed; otherwise use system fonts. Keep most text live and accessible. A title SVG is appropriate; a whole README flattened into a screenshot is not.

## Three candidates — build, render, compare

Build these as actual candidate README files and actual gallery-page layouts using the same real assets. Merely describing three options is insufficient. Initial trials can use the current MP4/posters, clearly marked as temporary. Replace the chosen layout's media with new captures before final review.

| Candidate | Composition | Useful question |
| --- | --- | --- |
| A — Cinematic | Slim wordmark, large hero, short CTA row, alternating full-width feature films and paired detail stills | Does the desktop immediately feel like the main product? |
| B — Editorial | Short left-aligned title, dominant film, numbered chapters, wide developer section, compact contact sheets between chapters | Does the breadth remain readable and deliberate? |
| C — Konata evolution | Wide identity plate, paired shell/workspace loops, large Caelestia dashboard, expanded native-app and coding chapters | Does this retain the richness Mani already liked without copying obsolete features? |

Start with A as the likely direction, borrowing C's depth. This is a hypothesis to test, not an automatic winner. Keep the same footage, captions and alpha status across candidates so the comparison isolates layout.

Render in actual GitHub on a review branch/PR when authorized and in the local Pages preview. A local Markdown renderer is only an approximation of GitHub sanitization. Compare first viewport, full-page scroll, 390px mobile, 768px tablet, and desktop. Test GitHub light and dark appearance. Save side-by-side review screenshots and a short rationale: hierarchy, footage size, text readability, feature breadth, visual consistency, loading cost.

Reject candidates that show a warning wall before the desktop, make code unreadable, use a tiny three-column main gallery, overuse badge rows, hide the core features in disclosures, or have button-like images that do nothing. Keep a visible short alpha label and link to limitations near the first install action. Important limitations also remain immediately before installation.

## Framing rules

- Desktop shots: retain the bar/rail and visible wallpaper margins. Do not crop off the shell to make a generic app screenshot.
- Editor: demonstrate one meaningful original CP example, not an empty giant window. Increase UI/editor zoom for filming, balance code/sample input/output/debug panels, and remove staging clutter. Use a short algorithm with interesting local variables rather than only adding two integers. Keep typography readable at the final embedded width.
- Translucency: preserve 0.78 app opacity; test the brightest and darkest phases of the wallpaper. Prefer moving/size-adjusting the window or focusing the demo content to hiding the background.
- Shell: one primary panel at a time except a deliberate paired-surface composition. Hold each settled state long enough to inspect.
- Pointer: one purposeful path, then park it. Never animate a fake pointer over a nonworking UI. Avoid rapid automated mouse sweeps.
- Captions: short chapter names and actual shortcut hints, placed in safe margins outside code/UI controls. No perpetual watermark bar, giant subtitle blocks or repeated technical caveats across every frame.
- Marketing film can have a short title/credit overlay, but opening/closing should stay on the actual desktop. Keep raw and annotated variants so the behavior can be verified.

## Media hierarchy

Provide one 60–90s overview film; one carefully looped 8–12s hero if a natural seam can be produced; focused clips of roughly 8–20s; and at least a dozen distinct, useful stills when the working surfaces support that breadth. Do not lengthen weak clips or create duplicates to meet a number.

README: one hero animation, at most two additional purposeful loops initially, large linked stills for the remaining chapters. Pages: full film, chapter navigation, independently playable feature clips, still gallery, explicit pause and fullscreen controls. More feature coverage does not require dozens of GIF decoders running at once.
