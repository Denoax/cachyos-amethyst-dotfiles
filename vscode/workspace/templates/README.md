# Offline templates and snippets

`main.*` and `Main.java` are single-case starters; do not assume a test count.
Copy `multi.cpp` over a new `main.cpp` only for a test-count problem. Copy
`Multi.java` to `Main.java` for that Java variant (the public class stays Main).
`streaming.py` avoids read-all input memory. C++ starters use `<bits/stdc++.h>`
and `using namespace std` for the configured GCC toolchain. Fast I/O is already
enabled: write your code inside `solve()`, using `cin`, `cout` and `'\n'`.
`ll`, `pii`, `pll`, `vi`, and `vll` shorten common types; `all(v)` lets you write
`sort(all(v))`. Use `DBG(value)` for stderr output in debug/sanitizer builds;
it compiles away in release. Neither starter assumes a modulus or rewrites `int`.

Use Insert Snippet or type `cp-bfs`, `cp-dfs`, `cp-dijkstra`, `cp-dsu`,
`cp-fenwick`, `cp-modpow` and deliberately accept a completion. Tab retains its
normal indentation behavior. Each snippet documents indexing and constraints.
The GCC starters already include the headers needed by these snippets.
Snippets are original local implementations. All six were
compiled and checked on tiny disconnected/negative-update/identity cases.
Java's parser returns null at EOF and accepts signed long inputs.
JS Number is exact only up to 2^53-1; BigInt is available for larger integers.
