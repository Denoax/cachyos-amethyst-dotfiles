use std::io::{self, Read};
fn main() {
    let mut input = String::new();
    io::stdin().read_to_string(&mut input).unwrap();
    let mut tokens = input.split_whitespace();
    // Rust 2021, standard library only. Parse with token.parse::<i64>().
    let _ = &mut tokens;
}
