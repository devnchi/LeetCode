/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:

Input: ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
Note:

All given inputs are in lowercase letters a-z.
*/

var longestCommonPrefix = function(strs) {
    var res = '';
    
    if(strs.length === 0)return '';
    else if(strs.length ===1 )return strs[0];
    
    for(var i =0;i<strs[0].length;i++){
        for(var j=0;j<strs.length-1;){
            if(strs[j][i] === strs[j+1][i]){
                j++;
                if(j===strs.length-1)res +=strs[j][i];
            }else return res
        }
    }
    return res
};

//faster solution
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) {
        return '';
    }
    
    return strs.reduce(function(pre, str) {
        while (str.indexOf(pre) !== 0) {
            pre = pre.slice(0, pre.length - 1); 
        }
        
        return pre;
    }, strs[0]);
};
