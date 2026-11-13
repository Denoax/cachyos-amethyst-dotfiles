#include <iostream>
#include <string>
#include <vector>
int main() {
    long long a, b;
    if (!(std::cin >> a >> b)) return 1;
    std::vector<long long> values{a, b};
    std::string label = "sum";
    long long answer = values[0] + values[1];
    std::cout << answer << "\n";
}
