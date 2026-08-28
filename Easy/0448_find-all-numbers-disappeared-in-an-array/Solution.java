class Solution {
    public List<Integer> findDisappearedNumbers(int[] nums) {
        
        int i = 0;
        while (i < nums.length){
            int current = nums[i]-1;
            if (nums[current] != nums[i]){
                int temp = nums[current];
                nums[current] = nums[i];
                nums[i] = temp;
            } else {
                i++;
            }
        }

        List<Integer> ans = new ArrayList<>();

        for (int x = 0; x < nums.length; x++){
            if (nums[x] != x+1){
                ans.add(x+1);
            }
        }

        return ans;
    }
}