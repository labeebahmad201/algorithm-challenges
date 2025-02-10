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

function isMirror(tree1, tree2){
    if(!tree1 && !tree2) return true;
    if(!tree1 || !tree2) return false;
    return tree1.val === tree2.val && isMirror(tree1.left, tree2.right) && isMirror(tree1.right, tree2.left);
}

function isSymmetric(root: TreeNode | null): boolean {
    if(!root) return true;
    return isMirror(root.left, root.right);
};