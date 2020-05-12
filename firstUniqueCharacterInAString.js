/*
Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

Examples:

s = "leetcode"
return 0.

s = "loveleetcode",
return 2.
Note: You may assume the string contain only lowercase letters.
*/

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    for (i=0; i < s.length; i++) {
      if (s.indexOf(s[i]) == s.lastIndexOf(s[i])) {
        return i
      }
    }
   return -1
}

//OR

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    var result = -1;
    var hash = {};
    
    for (var i=0; i<s.length; i++) {
        if (hash[s[i]]) {
            hash[s[i]].value++;
        }
        else {
            hash[s[i]] = { index: i, value: 1 };
        }
    }
    
    for (var i=0; i<Object.keys(hash).length; i++) {
        var key = Object.keys(hash)[i];
        if (hash[key].value === 1) {
            result = hash[key].index;
            break;
        }
    }
    
    return result;
};
