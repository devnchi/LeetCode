/*
Given an array where elements are sorted in ascending order, convert it to a height balanced BST.

For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.

Example:

Given the sorted array: [-10,-3,0,5,9],

One possible answer is: [0,-3,9,-10,null,5], which represents the following height balanced BST:

      0
     / \
   -3   9
   /   /
 -10  5
*/


var sortedArrayToBST = function(nums) {
    //base cases
    if (nums.length === 1) return new TreeNode(nums[0]);
    if (nums.length === 0) return null;
    
    //create a new TreeNode(center)
    let centerIdx = Math.floor(nums.length/2);    
    let root = new TreeNode(nums[centerIdx]);
    
    //set left node to center of left subtree
    let leftSubtree = nums.slice(0,centerIdx);
    root.left = sortedArrayToBST(leftSubtree);
    
    //set right node to center of right subtree
    let rightSubtree = nums.slice(centerIdx+1,nums.length);
    root.right = sortedArrayToBST(rightSubtree);
      
    return root;
};
