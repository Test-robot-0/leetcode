class Solution {
    sumOfTheDigitsOfHarshadNumber(x: number): number {
        let original: number = x;
        let sum: number = 0;

        while (x > 0) {
            sum += x % 10;
            x = Math.floor(x / 10);
        }

        if (original % sum === 0) {
            return sum;
        }

        return -1;
    }
}