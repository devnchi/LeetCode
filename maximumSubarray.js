/*
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

Example:

Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
Follow up:

If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.
*/

var maxSubArray = function(nums) {
    var max = nums[0];
    var sums = [max];
    for (var i = 1; i < nums.length; i++) {
        // here is the key, the dynamic programming formation,
        // sums means maximunEndingHere (at i), it is always the maxium value of
        // current element value and the previous max plus the current element itself.
        sums[i] = Math.max((sums[i - 1] + nums[i]), nums[i]);
        max = Math.max(max, sums[i]);
    }

    return max;
};

var maxSubArray = function(nums) {
  var max = nums[0],
    sum = 0;
    nums.forEach(function(e, i){
      sum += e;
      console.log(sum);
      if (sum > max) 
        max = sum;
      if (sum < 0) 
        sum = 0;
  });
  return max;
};

function maxSubArray(A) {
  var prev = 0;
  var max = -Number.MAX_VALUE;

  for (var i = 0; i < A.length; i++) {
    prev = Math.max(prev + A[i], A[i]);
    max = Math.max(max, prev);
  }
  return max;
}


function maxSubArray(nums) {
    var sum = 0;
    return nums.reduce((max, curr) => {
        sum = curr + (sum > 0 ? sum : 0);
        return Math.max(max, sum);
    }, -Number.MAX_VALUE);
}

