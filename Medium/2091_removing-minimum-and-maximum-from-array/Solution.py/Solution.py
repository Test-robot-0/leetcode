class Solution:
    def minimumDeletions(self, nums: list[int]) -> int:
        n = len(nums)
        max_val = nums[0]
        min_val = nums[0]
        indmax = 0
        indmin = 0

        for i in range(n):
            if max_val < nums[i]:
                max_val = nums[i]
                indmax = i
            if min_val > nums[i]:
                min_val = nums[i]
                indmin = i

        left = indmin if indmin < indmax else indmax
        right = indmax if indmin < indmax else indmin

        scenario0 = right + 1
        scenario1 = n - left
        scenario2 = (left + 1) + (n - right)

        ans = scenario0
        if scenario1 < ans:
            ans = scenario1
        if scenario2 < ans:
            ans = scenario2

        return ans