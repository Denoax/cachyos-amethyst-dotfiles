import sys


def main():
    # Read-all variant; use streaming.py for very large inputs.
    tokens = sys.stdin.buffer.read().split()
    answers = []
    # Solve here; convert tokens with int(token) when needed.
    sys.stdout.write("\n".join(map(str, answers)))
    if answers:
        sys.stdout.write("\n")


if __name__ == "__main__":
    main()
