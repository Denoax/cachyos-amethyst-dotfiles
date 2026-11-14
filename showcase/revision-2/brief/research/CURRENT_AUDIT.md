# Current showcase audit

Baseline: published `v0.1.0-alpha.1` at `a2f360a11550c6c578f6eb3576752fdc6a00fc64`; report supplied by Mani. Source, rendered README, downloaded desktop MP4/GIF, and VS Code poster inspected on 2026-11-13.

## Concrete findings

| Finding | Evidence | Required correction |
| --- | --- | --- |
| Hero underuses README width | Centered 640px animation inside a substantially wider content area | Full-width visual hierarchy with a high-quality hero asset |
| Sparse story | Title, short hero, text links, long caveat, three tiny thumbnail columns, installation text | Lead with desktop and workflow chapters; retain a concise visible alpha notice and detailed linked limitations |
| Low temporal detail | GIF: 640×360, 6 seconds, 60 frames, 10 fps; MP4: 1920×1080, 11.933 seconds, 358 frames, 30 fps | Recapture if needed; compare 25/30fps GIF and native video options |
| Accent lost | Recorded encode used 32-color palette, no dithering. At frames 0,10,25,40,59, maximum per-pixel RGB channel spread was only 5; zero pixels exceeded 20. MP4/poster visibly retain purple | Encoding must preserve amethyst controls; compare palette strategies and inspect color patches |
| No designed hero action | First half of source is used for GIF; desktop → launcher → closing transition | Choreograph a clean start, one readable interaction, closed UI, wallpaper phase-compatible ending |
| Source is not a full feature film | Desktop clip is under 12 seconds; eight separate release clips and a poster-link gallery | A 60–90s edited film plus focused clips and native playback |
| VS Code poster is poorly staged | Small code in upper-left of maximized editor, substantial empty space, stack of terminal tabs, extension recommendation prompt at lower-right | Clean isolated profile, curated real CP example, readable code and debugger, no recommendation/installation popups |
| Capture claims are limited | Return report explicitly marks continuous playback review blocked | Complete actual playback review; retain honest pending status where unavailable |

The palette result is a measurement of the sampled GIF frames, not a claim that the current live theme lacks purple. Pixel statistics cannot diagnose compositor jitter. The source metadata also cannot establish perceived smoothness. Do not treat a forced 60fps output as 60 unique captured frames.

## Existing tooling to extend

`tools/showcase` already has doctor/record/encode/verify, private captures, public assets, owned recording processes, and metadata. Extend it rather than building a disconnected second pipeline.

The recorded command used `wf-recorder --no-dmabuf --no-damage`, software x264, `ultrafast`, CRF 18 and 30fps. The CPU-copy option may be an intentional workaround for this mixed Intel/NVIDIA desktop. Benchmark a bounded 60fps candidate against the known baseline before changing it. Keep a working fallback.

The encoder defaults are 640px/10fps/48 colors; the actual hero used 32. One poster timestamp and a GIF duration cap do not select a good composition or loop seam. Add explicit source in/out, shot identity, poster frame, delivery preset, GIF palette policy, and editorial-vs-evidence classification. Keep process ownership and cleanup.

The captured output was Acer `HDMI-A-5`; do not assume it was the Pixio center monitor. Discover and record the actual connector/physical display chosen for each new shot. For a showcase, stage the desired applications on one verified output rather than downscaling all three monitors into unreadable text. A separate multimonitor feature clip can explain gather/restore.

## Existing tests remain useful, but separate

The user's return reports 14 installer tests, a 387-file isolated apply/repeat/rollback and CI passing. They are not visual acceptance tests. Screen-sharing frame delivery and Secret portal checks failed. Fresh install, first login, physical laptop, continuous playback, and several interactive daily-device flows are not established. Preserve these distinctions.

## Encoding experiment in this handoff

The optional `evidence/ENCODING_EXPERIMENT.json` compares the published GIF with a new encode of the same first six seconds of the source. This isolates some encoding effects; it **does not** fix choreography, framing, loop boundaries, or capture cadence. The comparison PNG is frame evidence only. It is not a replacement final hero.

Primary project sources:

- https://github.com/Denoax/cachyos-amethyst-dotfiles/tree/v0.1.0-alpha.1
- https://github.com/Denoax/cachyos-amethyst-dotfiles/blob/v0.1.0-alpha.1/tools/showcase
- https://github.com/Denoax/cachyos-amethyst-dotfiles/blob/v0.1.0-alpha.1/showcase/assets/01-desktop.json
- https://github.com/Denoax/cachyos-amethyst-dotfiles/blob/v0.1.0-alpha.1/showcase/README.md
- https://github.com/Denoax/cachyos-amethyst-dotfiles/releases/tag/v0.1.0-alpha.1
