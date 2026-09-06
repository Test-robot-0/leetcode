var minimumDeletions = function(nums) {
    const n = nums.length;
    let max = nums[0];
    let min = nums[0];
    let indmax = 0;
    let indmin = 0;

    for (let i = 0; i < n; i++) {
        if (max < nums[i]) {
            max = nums[i];
            indmax = i;
        }
        if (min > nums[i]) {
            min = nums[i];
            indmin = i;
        }
    }

    let left = 0;
    let right = 0;

    if (indmin < indmax) {
        left = indmin;
        right = indmax;
    } else {
        left = indmax;
        right = indmin;
    }

    const scenario0 = right + 1;
    const scenario1 = n - left;
    const scenario2 = (left + 1) + (n - right);

    let ans = scenario0;

    if (scenario1 < ans) {
        ans = scenario1;
    }
    if (scenario2 < ans) {
        ans = scenario2;
    }

    return ans;
};