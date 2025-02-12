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
function insertIntoBST(root: TreeNode | null, val: number): TreeNode | null {
    if(root === null) {
        return new TreeNode(val);
    }

    if(root.val < val) {
        root.right = insertIntoBST(root.right, val);
    } else {
        root.left = insertIntoBST(root.left, val);
    }

    return root;
};

/****
 * Intuition: Goes left if node is smaller than the current or goes right if the node is greater than the current,
 * reaches the null and at that instance create a node and returns.
 * that is used by caller to insert into as relevant child. How does caller know where to insert child? caller has that context from the 
 * sequence of calls made, caller knows which child insertIntoBST was called for.  
 */


function insert(node, val) {
    if (!node) {
        return new Node(val);
    } 
    
    if (node.val === val) { // this one doesn't inject duplicate, it just returns the node.
        return node; 
    }
    
    if (val < node.val) {
        node.left = insert(node.left, val);
    } else {
        node.right = insert(node.right, val);
    }
    
    return node; 
}

function insertIntoBSTV1(node, val) {
    if (node === null) {
        return new Node(val);
    }

    if (val <= node.val) {  // Duplicates go to the left
        node.left = insertIntoBSTV1(node.left, val);
    } else {
        node.right = insertIntoBSTV1(node.right, val);
    }

    return node;
}