/*
Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

Note: For the purpose of this problem, we define empty string as valid palindrome.

Example 1:

Input: "A man, a plan, a canal: Panama"
Output: true
Example 2:

Input: "race a car"
Output: false
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  if (s.length === 0) return true;

  s = s.toLowerCase();
  let i = 0, j = s.length - 1;
  while (i < j) {
    if ((s[i] < 'a' || s[i] > 'z') && (s[i] < '0' || s[i] > '9')) {
      i++;
      continue;
    }
    if ((s[j] < 'a' || s[j] > 'z') && (s[j] < '0' || s[j] > '9')) {
      j--;
      continue;
    }
    if (s[i] !== s[j]) {
      return false;
    }
    i++;
    j--;
  }

  return true;
};
