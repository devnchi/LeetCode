/*
Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, determine if s can be segmented into a space-separated sequence of one or more dictionary words.

Note:

The same word in the dictionary may be reused multiple times in the segmentation.
You may assume the dictionary does not contain duplicate words.
Example 1:

Input: s = "leetcode", wordDict = ["leet", "code"]
Output: true
Explanation: Return true because "leetcode" can be segmented as "leet code".
Example 2:

Input: s = "applepenapple", wordDict = ["apple", "pen"]
Output: true
Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
             Note that you are allowed to reuse a dictionary word.
Example 3:

Input: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
Output: false
*/

var wordBreak = function(s, wordDict) {
    var canBreak = [true];
    for (var i = 0; i < s.length; i++) {
        if (!canBreak[i]) continue;
        for (var word of wordDict) {
            var wLength = word.length;
            if (canBreak[i + wLength]) continue;
            if (s.substring(i, i + wLength) === word) {
                canBreak[i + wLength]  = true;
            }
        }
    }
    return canBreak[s.length] ? true : false;
};
