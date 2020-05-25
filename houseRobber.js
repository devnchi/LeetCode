/*
You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security system connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.

Example 1:

Input: [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
             Total amount you can rob = 1 + 3 = 4.
Example 2:

Input: [2,7,9,3,1]
Output: 12
Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
             Total amount you can rob = 2 + 9 + 1 = 12.
*/


var rob = function(nums) {
    var rob = 0; //max monney can get if rob current house
    var notrob = 0; //max money can get if not rob current house
    for(var i=0; i<nums.length; i++) {
        var currob = notrob + nums[i]; //if rob current value, previous house must not be robbed
        notrob = Math.max(notrob, rob); //if not rob ith house, take the max value of robbed (i-1)th house and not rob (i-1)th house
        rob = currob;
    }
    return Math.max(rob, notrob);
};



// O(N) space, O(N) time
var rob = function(nums) {
    if (nums.length === 0) return 0;
    // maxAmount[i], the maxAmount robbed when the robber arrives at ith house,
    // the robber has not robber the ith house yet.
    var maxAmount = [0, nums[0]];
    for (var i = 2; i <= nums.length; i++) {
        maxAmount[i] = Math.max(maxAmount[i - 1], (maxAmount[i - 2] + nums[i - 1]));
    }

    return maxAmount.pop();
};

// O(1) space, O(N) time
// when a robber arrives at a houose, he has two options: rob or not rob. We use two variables (rob, notRob)
// to track the maxAmount of these two options for the house the robber arrived, say ith house,
// and find the max amount from these two values. So, when the robber arrives at ith house, if
// he decided to rob current ith house, then the max amount he can rob is i-1 th house's max amount
// of not robbed plus this house's amount (nums[i]). If he decided not to rob current ith house, then
// the max amount he can rob (or has robbed) at current (ith) house is the maximum value between robbed
// not robber at (i-1)th house.
//
var rob = function(nums) {
    var rob = 0;
    var notRob = 0;

    for (var i = 0; i < nums.length; i++) {
        var tmp = rob;
        rob = notRobCurrHouse + nums[i];
        notRobCurrHouse = Math.max(tmp, notRobCurrHouse);
    }

    return Math.max(rob, notRobCurrHouse);
};

var rob = function(nums) {
    var last = 0;
    var now = 0;
    var tmp;
    for (var i in nums) {
        tmp = now;
        now = Math.max(last + nums[i], now);
        last = tmp;
    }
    return now;    
};
