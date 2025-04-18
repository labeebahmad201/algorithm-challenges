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

function preorderTraversal(root: TreeNode | null): number[] {
    function preorderTraversalDfs(root: TreeNode | null, res: number[]): number[]{
        if(root === null) return res;

        res.push(root.val);
        preorderTraversalDfs(root.left, res);
        preorderTraversalDfs(root.right, res);
        return res;
    }
    const res = [];
    return preorderTraversalDfs(root, res);

};