import java.io.*;

public class Main {
    static final class FastInput {
        private final InputStream in = System.in;
        private final byte[] buffer = new byte[1 << 16];
        private int pos, len;
        private int read() throws IOException {
            if (pos == len) { len = in.read(buffer); pos = 0; }
            return len < 0 ? -1 : buffer[pos++];
        }
        // Returns null at EOF; accepts signed long values.
        Long nextLong() throws IOException {
            int c;
            do { c = read(); } while (c >= 0 && c <= 32);
            if (c < 0) return null;
            boolean negative = c == '-';
            if (negative) c = read();
            long value = 0; // Accumulate negatively to support Long.MIN_VALUE.
            if (c < '0' || c > '9') throw new IOException("Expected integer");
            while (c >= '0' && c <= '9') {
                int digit = c - '0';
                if (value < (Long.MIN_VALUE + digit) / 10) throw new IOException("Integer overflow");
                value = value * 10 - digit;
                c = read();
            }
            if (!negative && value == Long.MIN_VALUE) throw new IOException("Integer overflow");
            return negative ? value : -value;
        }
    }
    static void solve(FastInput in, StringBuilder out) throws Exception {
        // Read one case here. Call nextLong() and check null at EOF.
    }
    public static void main(String[] args) throws Exception {
        FastInput in = new FastInput();
        StringBuilder out = new StringBuilder();
        solve(in, out);
        System.out.print(out);
    }
}
