class Solution {
    public int missingNumber(int[] nums) {

        int n = nums.length;
        int expeted = (n * ( n + 1 )) / 2;

        int acut = 0;
        for (int i: nums){
            acut += i;
        }

        return expeted - acut;
    }
}