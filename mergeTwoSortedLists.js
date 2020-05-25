/*
Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

Example:

Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4
*/

var mergeTwoLists = function(l1, l2) {
    var l3 = new ListNode();
    var l3Head = l3;
    while (l1 && l2) {
        if (l1.val <= l2.val ) {
            l3.next = l1;
            l1 = l1.next;
        } else {
            l3.next = l2;
            l2 = l2.next;
        }
        l3 = l3.next;
    }
    if (!l1) l3.next = l2;
    if (!l2) l3.next = l1

    return l3Head.next;
};


// recursive solution
var mergeTwoLists = function(l1, l2) {
	if(l1 == null) return l2;
	if(l2 == null) return l1;	
  if(l1.val < l2.val){
		l1.next = mergeTwoLists(l1.next, l2);
		return l1;
	} else{
		l2.next = mergeTwoLists(l1, l2.next);
		return l2;	
   }
};
