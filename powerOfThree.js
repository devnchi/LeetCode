/*
Given an integer, write a function to determine if it is a power of three.

Example 1:

Input: 27
Output: true
Example 2:

Input: 0
Output: false
Example 3:

Input: 9
Output: true
Example 4:

Input: 45
Output: false


Follow up:
Could you do it without using any loop / recursion?
*/


// recursive solution
var isPowerOfThree = function(n) {
    if (n === 0) return false;
    if (n === 1) return true;
    return n % 3 === 0 && isPowerOfThree(Math.floor(n / 3));
};

// iterative solution
var isPowerOfThree = function(n) {
    if (n > 1) {
        while (n % 3 === 0) {
            n = Math.floor(n / 3);
        }
    }
    return n === 1;
};
