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

function invertTree(root: TreeNode | null): TreeNode | null {
    if(!root) {
        return null;
    }
    const temp = root.left;
    root.left = root.right;
    root.right = temp;
    invertTree(root.left);      // repeat the process for child
    invertTree(root.right);      // repeat the process for child

    return root;
};


/// following is an inplace implementation.

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


function invertTree(root: TreeNode | null): TreeNode | null {
    if(!root) {
        return null;
    }
    return new TreeNode(root.val, invertTree(root.right), invertTree(root.left)); // important point to be noticed here is that children are created 
    // first and then parent is created
};