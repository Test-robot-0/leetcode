class Solution {
    public boolean isPalindrome(int x) {
        int num = x;
        long reversed = 0;
        if (x >= 0) {
            while (x != 0) {
                int digit = x % 10;
                reversed = reversed * 10 + digit;
                x /= 10;
            }
            return num == reversed;
        } else {
            return false;
        }
    }
}