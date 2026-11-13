#include <cstdlib>
int main() { auto p = new int[1]; delete[] p; return p[0]; }
