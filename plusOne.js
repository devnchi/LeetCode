/*
Given a non-empty array of digits representing a non-negative integer, plus one to the integer.

The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.

You may assume the integer does not contain any leading zero, except the number 0 itself.

Example 1:

Input: [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
Example 2:

Input: [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.
*/

var plusOne = function(digits) {
  for(var i = digits.length - 1; i >= 0; i--){
    if(++digits[i] > 9) digits[i] = 0;
    else return digits;
  }
  digits.unshift(1);
  return digits;
};


var plusOne = function(digits) {
    var stop = false,
        i = digits.length - 1;
    
    digits[i]++;
        
    while(digits[i] == 10 || stop){
        digits[i] = 0;
        digits[i-1] === undefined ? digits.unshift(1): digits[i-1]++;
        digits[i-1] !== 10 ? stop = false : stop = true;
        i--
    }
    
    return digits
};


//fastest solution
var plusOne = function(digits) {
    var i = digits.length - 1;
    digits[i]++;
        
    while(digits[i] == 10){
        digits[i] = 0;
        digits[i-1] === undefined ? digits.unshift(1): digits[i-1]++;
        if(digits[i-1] < 10)return digits;
        i--
    }
    
    return digits
};
