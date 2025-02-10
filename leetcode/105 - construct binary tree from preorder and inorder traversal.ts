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

function buildTreeRecursively(preorder, inorderMap, preorderIndex, inStart, inEnd) {
    if(inStart > inEnd) {
        return null;
    }

    const root = preorder[preorderIndex];
    const inorderIndex = inorderMap.get(root);
    const leftSize = inorderIndex - inStart;

    const left = buildTreeRecursively(preorder, inorderMap, preorderIndex + 1, inStart, inorderIndex - 1);
    const right = buildTreeRecursively(preorder, inorderMap, preorderIndex + 1 + leftSize, inorderIndex + 1, inEnd);    

    return new TreeNode(root, left, right);
}

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
    const inorderMap = new Map();
    inorder.forEach((value, index)=>{
        inorderMap.set(value, index);
    });

    return buildTreeRecursively(preorder, inorderMap, 0, 0, inorder.length - 1)
};