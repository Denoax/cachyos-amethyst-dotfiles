# Competitive programming in Microsoft VS Code

The source product was verified through its Microsoft `product.json`, stable quality, CLI version and commit: VS Code 1.146.0, `69047191fc427f2f92828279aae1d90d8eeda7ab`. Code OSS remains separate. This repository distributes configuration and original example code, not editor or extension binaries.

## Install and import

```sh
./tools/vscode-install --check
./tools/vscode-install
amethyst-cp-init "$HOME/competitive-programming"
amethyst-code "$HOME/competitive-programming/Amethyst-CP.code-workspace"
```

In VS Code, run **Preferences: Open Profiles**, use the arrow beside **New Profile**, choose **Import Profile...**, and select `vscode/Amethyst.code-profile` from this checkout. Create it, then use **Profiles: Switch Profile... → Amethyst CP** for the workspace. Importing a profile alone does not switch an already open workspace. The installed copy is also under `~/.local/share/cachyos-amethyst/vscode/` when `dev-cp` is selected.

The profile contains sanitized settings, nine keyboard entries, algorithm snippets and eight extension IDs. Import was exercised through the actual Microsoft profile UI with independent user-data and extension directories; the resulting files and extension list were verified. Never share the live extensions directory with a temporary VS Code instance. Extensions may ask for publisher trust and download current versions.

The theme is **Monochromator Dark Amethyst** (`beem.monochromator` 0.36.1 on the source). The exact syntax accent is `#d559ff`; the active profile's UI borders use `#ac79c4` and focus uses `#9361ad`. Font size is 14, ligatures off, and no font-family override was set in the active profile. The optional showcase transparency uses a compositor opacity of 0.78; the exported editor profile itself contains no custom CSS injection.

## Work

Open an example under `problems/`, or press **Ctrl+Alt+N** for a new, non-overwriting scaffold. Keep your problem source, `input.txt`, `output.txt` and multiple `tests/*.in` / matching `.out` files together.

| Action | Behavior |
|---|---|
| Ctrl+Shift+B | Build selected/open problem |
| F6 | Compile and run saved input; compare with expected output |
| Shift+F6 / Ctrl+F5 | Compile and run with terminal input |
| Ctrl+Shift+F6 | Sanitized C/C++ sample checks |
| F5 | Selected matching Run and Debug configuration |
| Ctrl+Alt+C | Copy plain source for submission |
| CP: Samples task | Multiple test cases with bounded output/time |
| CP: Demonstrate sanitizer (expected failure) | Deliberate invalid access outside normal templates |

The runner remembers the exact source filename while input/notes/terminal has focus. Input belonging to another problem is rejected. Failed compilation never runs an old binary. C++ debugging uses a selected-source link written only after a successful debug build.

Release uses `g++ -std=c++23 -O2` with warnings. Debug uses `-Og -g3`, local checks and GDB pretty printers. Sanitizer mode uses ASan/UBSan, frame pointers and nonrecovering diagnostics. There is no `-march=native`. C++23 mode does not guarantee every standard-library feature or a match with an online judge.

Python uses PATH-discovered CPython (`python3` in tasks). Create a project virtual environment with `python3 -m venv .venv`, select it in the Python extension, and activate it when desired. Java solutions use JDK 21 on PATH; the language extension may use its bundled newer runtime. No source-machine JDK path is exported. Python and Java debugging are interactive; file-input debug is provided for C++.

## Command-line checks

From a copied workspace:

```sh
python3 tools/cpw.py test problems/sum-cpp/main.cpp
python3 tools/cpw.py build problems/sum-cpp/main.cpp --mode debug
python3 tools/cpw.py test problems/sum-python/main.py
python3 tools/cpw.py test problems/sum-java/Main.java
python3 tools/cpw.py stress-demo
python3 tools/verify.py
```

The sample runner bounds each stream to 1 MiB and kills descendant processes on timeout. Exact, token and float comparisons handle CRLF, NaN and signed infinity deliberately. Stress tests use bounded deterministic seeds and save counterexamples with replay metadata. Deliberately failing sanitizer/timeout/compiler fixtures should fail; their failures are assertions in the regression suite.

Microsoft C/C++ owns C++ completion and diagnostics; clangd and Code Runner are not added. Python uses Pylance/Black. Optional installed language tasks are retained. AI extensions are excluded from the required profile; disable any you add when contest rules require it. The profile disables Copilot completions by default.
