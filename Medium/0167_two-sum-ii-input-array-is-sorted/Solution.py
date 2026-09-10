class Solution:
    def twoSum(self, numbers: list[int], target: int) -> list[int]:
        first = 0
        last = len(numbers) - 1
        while first < last:
            sum_val = numbers[first] + numbers[last]
            if sum_val > target:
                last -= 1
            elif sum_val < target:
                first += 1
            else:
                return [first + 1, last + 1]
        return [-1, -1]