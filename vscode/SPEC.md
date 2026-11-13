# Portable competitive-programming workspace

## Export what exists, then close verified gaps

Locate the active official Microsoft VS Code profile and current CP workspace. Read any CP setup report. Inspect the actual `code` binary, package and application metadata; Code OSS is not the requested deliverable. Discover the active theme/font and amethyst color from effective settings and token overrides. Record the value and its source in theme tokens without exposing private paths.

Export a local sanitized `.code-profile`, human-readable settings/keybindings/snippets, an extension ID manifest, and a small example `.code-workspace` with workspace-local tasks and launch configurations. Keep formatting, completion, diagnostics and debugger roles deliberate; avoid two competing C++ language servers. If clangd is used, ensure its compilation flags reflect g++'s actual headers/standard and the correct compile database.

Use portable workspace-relative paths and PATH-discovered compiler/debugger commands. Detect Java installation rather than pinning Mani's JDK absolute path. Preserve optional personal editor preferences separately. Do not bundle downloaded VS Code/extension binaries, Code authentication, Codex configuration with credentials, user/global storage, project histories, private URLs, `.env` files or sync state.

## Required usable flows

| Flow | Minimum demonstration |
|---|---|
| C++23 release | g++ with C++23, warnings and a documented optimization level; compile and run sample input/output |
| C++23 debug | Symbols, suitable debug optimization; GDB breakpoint, step and inspect variable |
| C++ sanitizer | ASan/UBSan build and a deliberate local defect detected in a disposable example |
| Python | Interpreter selected, virtual-environment recipe, sample input/output run |
| Java | javac/java build/run and documented supported JDK; sample output |
| Additional installed languages | Export current useful C/Rust/Go/JS etc. tasks if present; mark optional, avoid unexplained mass installation |
| Templates | New problem scaffold with source, input and expected-output files; small clean main functions |
| Sample runner | Multiple cases, timeout, stderr/exit handling, output comparison and clear failed-case report |
| Stress runner if present | Bounded deterministic seeds, reference/candidate comparison, saved failing input |
| Shortcuts | Real keyboard actions for build/run/debug/template; verify no Hyprland interception |

Use the installed toolchain's supported flags and inspect the actual tasks before changing them. C++23 language mode does not guarantee every standard-library feature on every compiler release. Do not use `-march=native`, machine-specific paths, unlimited subprocesses or unsafe compiler flags in portable contest defaults. Separate local sanitizer settings from judge submission settings. Do not change the user's valid existing task names without need.

Provide one original, tiny permissively licensed sample problem/solution shared across C++, Python and Java, with expected outputs. Include at least one intentionally failing test workflow kept outside normal solution templates. Never feature private contest submissions or claim competitive-programming speed gains without measurements. If an AI extension is present, keep it optional and document how to disable it for contest rules.

## Import and visual proof

Test import into an isolated official VS Code profile, including extensions, task execution and debugger integration. Use the actual keyboard workflow while recording. The showcase should make the editor text readable: source, input/output, task result, breakpoint/variables and template action. Full-resolution video is required because a small README GIF cannot prove code readability.

Document the compiler/debugger/interpreter versions observed, extension IDs, shortcuts and exact tested command results. Describe the workflow as configured/tested; use 'optimized' performance claims only when accompanied by a reproducible baseline and measurement. Leave the user's current editing session running.
