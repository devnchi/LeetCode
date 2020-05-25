/*
Given a non-empty array of integers, every element appears twice except for one. Find that single one.

Note:

Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

Example 1:

Input: [2,2,1]
Output: 1
Example 2:

Input: [4,1,2,1,2]
Output: 4
*/

var singleNumber = function(nums) {
    nums.sort();
    for (var i = 0; i < nums.length; i += 2) {
        if (nums[i] != nums[i + 1]) {
            return nums[i];
        }
    }
};

//a little faster
var singleNumber = function(nums) {
    var len = nums.length,
        result = 0;
    for (var i = 0; i < len; i++) {
        result = result ^ nums[i];
    }
    return result;
};
