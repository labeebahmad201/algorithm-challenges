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

function inOrderTraversal(root: TreeNode | null, res: number[]) {
    if(root === null) {
        return root;
    }
    inOrderTraversal(root.left, res);
    res.push(root.val);
    inOrderTraversal(root.right, res);
    return res;
}

function isValidBST(root: TreeNode | null): boolean {

    /***
     * Now this solution is rather slow since it uses extra space to store inorder traversal and also it has to go through the tree, I would work on another solution that would 
     * stop the traversal as soon as it finds the violation.
     * 
     */
    const res = []; // contains inorder traversal 
    inOrderTraversal(root, res); // is it a good idea to pass array like this?
    for(let i = 0; i < res.length - 1; i++) {
        if(!(res[i] < res[i+1])) { // res[i] >= res[i+1]
            return false;
        } 
    }

    return true;
};