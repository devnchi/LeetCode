/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
*/



var twoSum = function(nums, target){
    for (i=0; i < nums.length; i++){
        for(j=i+1; j < nums.length; j++){
            if(nums[j] == target - nums[i]){
                nums = [i,j];
                return nums;
            }
        }
    }   
  }
  
  
  var twoSum = function(nums, target) {
    var len = nums.length;
    //var
    for(var i = 0; i < len; i++){
        var index = nums.indexOf(target - nums[i], i+1);
        if(index !== -1)return [i, index]
    }
    //for
    return false
};
  
  
  var twoSum = function(nums, target) {
    var len = nums.length;

    if(len<2)return nums;

    var hashT={};    
    for(var i = 0; i <len; i++)
    {
         if(hashT[target - nums[i]] || hashT[target - nums[i]] === 0)
        {
            return [hashT[target - nums[i]], i];
        } 
         hashT[nums[i]]=i; 
    }    
};
