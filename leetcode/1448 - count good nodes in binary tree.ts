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

function goodNodes(root: TreeNode | null, runningMax = -Infinity): number {


    if(root === null) {
        return 0;
    }  

    let goodNodesCount = 0;
    if (runningMax <= root.val) {
        goodNodesCount = 1;
    }
    const newMaxSoFar = Math.max(runningMax, root.val);
    return goodNodesCount + goodNodes(root.left, newMaxSoFar) + goodNodes(root.right, newMaxSoFar);
};