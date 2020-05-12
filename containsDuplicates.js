/*
Given an array of integers, find if the array contains any duplicates.

Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

Example 1:

Input: [1,2,3,1]
Output: true
Example 2:

Input: [1,2,3,4]
Output: false
Example 3:

Input: [1,1,1,3,3,4,3,2,4,2]
Output: true
*/


function containsDuplicate(myArray) {
    for (var i = 0; i < myArray.length; i++) {
        if (myArray.indexOf(myArray[i]) !== myArray.lastIndexOf(myArray[i])) { 
            return true; 
        } 
    } 
    return false;   // this means it doesn't have duplicates
};

//OR

 Array.prototype.containsDuplicates = function() {
    this.sort();    
    for ( var i = 1; i < this.length; i++ ){
        if(this[i-1] == this[i])
            return false;
    }
    return true;
 };
