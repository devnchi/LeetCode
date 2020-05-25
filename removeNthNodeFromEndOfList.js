/*
Given a linked list, remove the n-th node from the end of list and return its head.

Example:

Given linked list: 1->2->3->4->5, and n = 2.

After removing the second node from the end, the linked list becomes 1->2->3->5.
Note:

Given n will always be valid.

Follow up:
Could you do this in one pass?
*/


var removeNthFromEnd = function(head, n) {
    var start = new ListNode(0);
    start.next = head;
    
    var i = 0,
        fast = start,
        slow = start;
        
    while(i <= n && fast !== null){
        fast = fast.next;
        i++;
    }
    
    while(fast !== null){
        slow = slow.next;
        fast = fast.next;
    }
    
    slow.next = slow.next.next;
    
    return start.next;
    
};
