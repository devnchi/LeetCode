/*
Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

    1
   / \
  2   2
 / \ / \
3  4 4  3
 

But the following [1,2,2,null,3,null,3] is not:

    1
   / \
  2   2
   \   \
   3    3
 

Follow up: Solve it both recursively and iteratively.
*/

//recursive solution
var isSymmetric = function(root) {
        var q = [];
        if(root === null) return true;
        q.push(root.left);
        q.push(root.right);
        while(q.length > 1){
            var left = q.pop(),
                right = q.pop();
            if(left === null && right === null) continue;
            if(left === null || right === null) return false;
            if(left.val != right.val) return false;
            q.push(left.left);
            q.push(right.right);
            q.push(left.right);
            q.push(right.left);            
        }
        return true;
};

//iterative solution
var isSymmetric = function (n) {
     
    if (n == null || n == []) return true;
    return n === null? false : helper(n.left, n.right)

    function helper (n1, n2) {
        if (n1 === null) return n2 === null;
        if (n2 === null) return n1 === null;
        return n1.val == n2.val && helper(n1.left, n2.right) && helper(n1.right, n2.left)
    }
}
