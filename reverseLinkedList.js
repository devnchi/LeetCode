/*
Reverse a singly linked list.

Example:
Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL

Follow up:
A linked list can be reversed either iteratively or recursively. Could you implement both?
*/

var reverseList = function(head) {
    var prev = null;
    while (head) {
        var next = head.next;
        head.next = prev;
        prev = head;
        head = next;
    }
    return prev; 
};


// recursive solution
var reverseList = function(head) {
  if (head === null || head.next === null)  return head;
  var headNext = head.next;
  head.next = null;
  var nextReversedListHead = reverseList(headNext);
  // now headNext is the last node of the reversed List on the right of head!!!
  headNext.next = head;

  return nextReversedListHead;
};


// iterative solution
var reverseList = function(head) {
  if (head === null || head.next === null)  return head;
  var headNext = head.next;
  head.next = null;
  while (head !== null && headNext !== null) {
    // keep a reference of the headNext's next node
    var tmp = headNext.next;
    headNext.next = head;
    head = headNext;
    headNext = tmp;
  }

  return head;
};
