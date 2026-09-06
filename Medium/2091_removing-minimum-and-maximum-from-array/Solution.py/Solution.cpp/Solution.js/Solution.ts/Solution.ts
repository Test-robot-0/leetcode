function minimumDeletions(nums: number[]): number {
    const n: number = nums.length;
    let max: number = nums[0];
    let min: number = nums[0];
    let indmax: number = 0;
    let indmin: number = 0;

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

    let left: number = 0;
    let right: number = 0;

    if (indmin < indmax) {
        left = indmin;
        right = indmax;
    } else {
        left = indmax;
        right = indmin;
    }

    const scenario0: number = right + 1;
    const scenario1: number = n - left;
    const scenario2: number = (left + 1) + (n - right);

    let ans: number = scenario0;

    if (scenario1 < ans) {
        ans = scenario1;
    }
    if (scenario2 < ans) {
        ans = scenario2;
    }

    return ans;
}