/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
// Remember leaf node is when both left and right are null
function checkRootToLeafSum(root: TreeNode | null, targetSum: number, sumSoFar = 0): boolean {

    if(root === null) return false; // when root is null or (left xor right) is null. then we want to return false.

    if(root.left === null && root.right === null) {
        // sumSoFar + root.val accounts for sum from the node + the current node.
        if(targetSum === sumSoFar + root.val) return true;
        else return false;
    }

    return checkRootToLeafSum(root.left, targetSum, sumSoFar + root.val) || checkRootToLeafSum(root.right, targetSum, sumSoFar + root.val)    
}

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
    return checkRootToLeafSum(root, targetSum);
};