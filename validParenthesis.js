/*
Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Note that an empty string is also considered valid.

Example 1:
Input: "()"
Output: true
*/

const isValid = function(s){
    const chars = s.split(""), map = {"{":"}", "(":")","[":"]"}, stack = []
    for(let c of chars){
      if(map[c]) stack.push(map[c])
      else if(c != stack.pop()) {
        return false
      }
    }
    return stack.length === 0
}


var isValid = function(s) {
    var stack = [];
    for (var i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
            stack.push(s[i]);
        }

        if (s[i] === ')') {
            if (stack[stack.length - 1] !== '(') return false;
            else stack.pop()
        }

        if (s[i] === ']') {
            if (stack[stack.length - 1] !== '[') return false;
            else stack.pop();
        }

        if (s[i] === '}') {
            if (stack[stack.length - 1] !== '{') return false;
            else stack.pop();
        }
    }

    return stack.length === 0;
};
