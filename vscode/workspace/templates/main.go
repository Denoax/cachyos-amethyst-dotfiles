package main

import (
    "bufio"
    "fmt"
    "os"
)

func main() {
    in := bufio.NewReader(os.Stdin)
    out := bufio.NewWriter(os.Stdout)
    defer out.Flush()
    // Read one case here; fmt.Fscan(in, &value).
    _, _ = in, fmt.Fprint
}
