class Solution:
    def sumOfTheDigitsOfHarshadNumber(self, x: int) -> int:
        original = x
        total_sum = 0

        while x > 0:
            total_sum += x % 10
            x //= 10

        if original % total_sum == 0:
            return total_sum

        return -1