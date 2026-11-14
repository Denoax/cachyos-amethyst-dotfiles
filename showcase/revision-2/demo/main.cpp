#include <algorithm>
#include <iostream>
#include <vector>
using namespace std;

// Longest increasing subsequence in O(n log n).
int main() {
    ios::sync_with_stdio(false); cin.tie(nullptr);
    int n;
    cin >> n;
    vector<int> values(n), tails;
    for (int& value : values) cin >> value;
    for (int value : values) {
        int index = lower_bound(tails.begin(), tails.end(), value)
                    - tails.begin();
        if (index == int(tails.size())) tails.push_back(value);
        else tails[index] = value;
    }
    cout << tails.size() << '\n';
}
