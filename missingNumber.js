/*
Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.

Example 1:

Input: [3,0,1]
Output: 2
Example 2:

Input: [9,6,4,2,3,5,7,0,1]
Output: 8
Note:
Your algorithm should run in linear runtime complexity. Could you implement it using only constant extra space complexity?
*/


var missingNumber = function(nums) {
    for(var i=0;i<=nums.length;i++){
        if(nums.indexOf(i)==-1)return i
    }
};


var missingNumber = function(nums) {
    var total=0;
    var sum = nums.reduce(function(a,b){
        return a+b;
    })
    for(var i=1;i<=nums.length;i++){
       total+=i;
    }
    return total-sum
};


var missingNumber = function(nums) {
  var nSum = 0.5 * nums.length * (nums.length + 1);
  var numsSum = 0;
  for (var i = 0; i < nums.length; i++) {
    numsSum += nums[i];
  }
  return nSum - numsSum;
};


var missingNumber = function(nums) {
    var length = nums.length;
    var total = 0.5 * length * (length + 1);
    var numSum = 0;
    for (var i = 0; i < length; i++) {
        numSum += nums[i];
    }

    return total - numSum;
};
