class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    sumOfTheDigitsOfHarshadNumber(x) {
        let original = x;
        let sum = 0;

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