class Solution {
    isPalindrome(x: number): boolean {
        let num: number = x;
        let reversed: number = 0;
        if (x >= 0) {
            while (x !== 0) {
                let digit: number = x % 10;
                reversed = reversed * 10 + digit;
                x = Math.trunc(x / 10);
            }
            return num === reversed;
        } else {
            return false;
        }
    }
}