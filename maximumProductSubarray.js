/*
Given an integer array nums, find the contiguous subarray within an array (containing at least one number) which has the largest product.

Example 1:
Input: [2,3,-2,4]
Output: 6
Explanation: [2,3] has the largest product 6.

Example 2:
Input: [-2,0,-1]
Output: 0
Explanation: The result cannot be 2, because [-2,-1] is not a subarray.
*/

var maxProduct = function(nums) {
    if (nums.length === 0) return 0;
    var result = nums[0];
    var maxDP = [nums[0]];
    var minDP = [nums[0]];

    for (var i = 1; i < nums.length; i++) {
        maxDP[i] = Math.max(nums[i], maxDP[i - 1] * nums[i], minDP[i - 1] * nums[i]);
        minDP[i] = Math.min(nums[i], minDP[i - 1] * nums[i], maxDP[i - 1] * nums[i]);
        result = Math.max(maxDP[i], result);
    }

    return result;
};

// 2nd try
var maxProduct = function(nums) {
    var min = [nums[0]];
    var max = [nums[0]];
    var maxProduct = nums[0];

    for (var i = 1; i < nums.length; i++) {
        min.push(Math.min(nums[i], min[i - 1] * nums[i], max[i - 1] * nums[i]));
        max.push(Math.max(nums[i], min[i - 1] * nums[i], max[i - 1] * nums[i]));
        maxProduct = Math.max(maxProduct, max[i]);
    }

    return maxProduct;
};


var maxProduct = function(A) {
    if (A == null || A.length == 0) {
        return 0;
    }
        
    var max = A[0], min = A[0], result = A[0];
    for (var i = 1; i < A.length; i++) {
        var temp = max;
        max = Math.max(Math.max(max * A[i], min * A[i]), A[i]);
        min = Math.min(Math.min(temp * A[i], min * A[i]), A[i]);
        if (max > result) {
            result = max;
        }
    }
    return result;

};
