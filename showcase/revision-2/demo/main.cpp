#include <algorithm>
#include <iostream>
#include <vector>
using namespace std;

// Longest increasing subsequence in O(n log n).
int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n;
    cin >> n;
    vector<int> values(n), tails;
    for (int& value : values) cin >> value;

    for (int value : values) {
        auto position = lower_bound(tails.begin(), tails.end(), value);
        int index = int(position - tails.begin());
        if (position == tails.end()) tails.push_back(value);
        else *position = value;
        // Inspect value, index and tails at this breakpoint.
        (void) index;
    }

    cout << tails.size() << '\n';
}
