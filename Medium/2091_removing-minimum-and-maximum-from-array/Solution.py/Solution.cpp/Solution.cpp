#include <vector>
#include <algorithm>

class Solution {
public:
    int minimumDeletions(std::vector<int>& nums) {
        int n = nums.size();
        int maxVal = nums[0];
        int minVal = nums[0];
        int indmax = 0;
        int indmin = 0;

        for (int i = 0; i < n; i++) {
            if (maxVal < nums[i]) {
                maxVal = nums[i];
                indmax = i;
            }
            if (minVal > nums[i]) {
                minVal = nums[i];
                indmin = i;
            }
        }

        int left = 0;
        int right = 0;

        if (indmin < indmax) {
            left = indmin;
            right = indmax;
        } else {
            left = indmax;
            right = indmin;
        }

        int scenario0 = right + 1;
        int scenario1 = n - left;
        int scenario2 = (left + 1) + (n - right);

        int ans = scenario0;

        if (scenario1 < ans) {
            ans = scenario1;
        }
        if (scenario2 < ans) {
            ans = scenario2;
        }

        return ans;
    }
};