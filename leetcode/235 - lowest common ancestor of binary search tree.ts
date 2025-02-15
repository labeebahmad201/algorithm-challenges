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

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {

    let current = root;

    while(current != null) {
        if(current.val < p.val && current.val < q.val) { // both p and q are greater than node
            current = current.right;
        } else if(current.val > p.val && current.val > q.val) { // both p and q are less than node
            current = current.left;
        } else {
            return current;
        }
    }

    return root;
};