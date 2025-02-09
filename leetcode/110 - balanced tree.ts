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

function getHeight (root: TreeNode | null) : number {
    if(root === null) {
        return 0;
    }

    const leftHeight = getHeight(root.left);
    const rightHeight = getHeight(root.right);
    if(leftHeight === -1 || rightHeight === -1) { // propagates signal to the caller that callee has determined that tree is unbalanced so no need to look any further. 
        return -1;
    }

    if(Math.abs(leftHeight - rightHeight) <= 1) {
        // then it is balanced
        return 1 + Math.max(leftHeight, rightHeight);
    }

    return -1;

}

function isBalanced(root: TreeNode | null): boolean {
    return getHeight(root) !== -1;
};