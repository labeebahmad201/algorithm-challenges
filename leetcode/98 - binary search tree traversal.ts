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

/// ___________________________
// Second more efficient solution


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

/****
 * Intuition:
 * To derive this solution you first need to think in terms of contraints applied on a node. 
 * a node can be BST if it is greater than the left subtree and less than the right subtree.
 * also it's left and right subtree should be BST.
 * 
 * for left child we pass current as max value 
 * for right child we pass current as min value
 * 
 * We consider null node as valid bst because it doesnt violate the constraints on BST.
 * 
 * then we have an && condition that makes sure both left and right subtree are BST.
 * 
 * for the first call we use -Infinity and +Infinity as min and max values since there are no contraints on root node it can be anything.
 * 
 * but as we move down the we apply contraints. if we only keep going left. the only contraint that is applied is max value. 
 * if we only keep going right the only contraint that is applied is min value.
 * 
 * but if going down left of right when we chang direction that's when another contrains has to be applied. 
 * that's why we are using both min and max values.
 *  
 * 
 */

function isValidBST(root: TreeNode | null): boolean {
    function dfs(root: TreeNode | null, minVal, maxVal): boolean {
     if(root === null) return true;
 
     if(!(minVal < root.val && root.val < maxVal)) return false;
 
     return dfs(root.left, minVal, root.val) && dfs(root.right, root.val, maxVal);
    }
 
    return dfs(root, -Infinity, +Infinity);
 };