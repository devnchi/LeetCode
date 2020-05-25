/*
Given a singly linked list, determine if it is a palindrome.

Example 1:
Input: 1->2
Output: false

Example 2:
Input: 1->2->2->1
Output: true

Follow up:
Could you do it in O(n) time and O(1) space?
*/

var isPalindrome = function(head) {
  if(head === null)return true;
  var array = [head.val];
  while(head.next !== null){
  array.push(head.next.val) 
  head = head.next;
  }
  console.log(array)
  return array.join('') === array.reverse().join('')
};


var isPalindrome = function(head) {
    var fast = head, slow = head;
    while (fast !== null && fast.next !== null) {
        fast = fast.next.next;
        slow = slow.next;
    }
    if (fast !== null) { // odd nodes: let right half smaller
        slow = slow.next;
    }
    slow = reverse(slow);
    fast = head;
    
    while (slow !== null) {
        if (fast.val !== slow.val) {
            return false;
        }
        fast = fast.next;
        slow = slow.next;
    }
    return true;
}
function reverse(head) {
    var prev = null;
    while (head !== null) {
        var next = head.next;
        head.next = prev;
        prev = head;
        head = next;
    }
    return prev
};


var isPalindrome = function(head) {
    if (!head || !head.next) return true;
    var fastHead = head;
    var slowHead = head;
    while (fastHead.next && fastHead.next.next) {
        slowHead = slowHead.next;
        fastHead = fastHead.next.next;
    }

    // reverse the scond half
    var center = slowHead.next;
    var centerNext = center.next;
    slowHead.next = null;
    center.next = null;
    while (centerNext) {
        var tmp = centerNext.next;
        centerNext.next = center;
        center = centerNext;
        centerNext = tmp;
    }

    while (head && center) {
        if (head.val !== center.val) return false;
        head = head.next;
        center = center.next;
    }

    return true;
};
