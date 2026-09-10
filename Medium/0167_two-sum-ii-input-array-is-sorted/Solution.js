/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let first = 0;
    let last = numbers.length - 1;
    while (first < last) {
        let sum = numbers[first] + numbers[last];
        if (sum > target) {
            last--;
        } else if (sum < target) {
            first++;
        } else {
            return [first + 1, last + 1];
        }
    }
    return [-1, -1];
};