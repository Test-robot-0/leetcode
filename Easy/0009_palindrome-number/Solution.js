class Solution {
    isPalindrome(x) {
        let num = x;
        let reversed = 0;
        if (x >= 0) {
            while (x !== 0) {
                let digit = x % 10;
                reversed = reversed * 10 + digit;
                x = Math.trunc(x / 10);
            }
            return num === reversed;
        } else {
            return false;
        }
    }
}