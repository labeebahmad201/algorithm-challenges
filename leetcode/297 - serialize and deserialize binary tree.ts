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
 * We need to understand how serialize is working. 
 * the serialize function picks the root and then calls the same function for left.
 * right child isn't created as long as all left haven't been created. 
 * 
 * the moment when you saw 2 needs to be linked up as child of 1. that should have dead give away that we need to attach 2 as child of 1
 * and that this function need to return root that would be used by caller to attach new node as child. 
 *  
 */

/*
 * Encodes a tree to a single string.
 */
function serialize(root: TreeNode | null): string {
    // preorder traversal
    // 1,2,x,x,3,4,x,x,5,x,x
    let res = [];
    function dfs(root: TreeNode | null){
        if(root === null) {
            res.push('x');
            return root;
        }

        res.push(root.val);
        dfs(root.left);
        dfs(root.right);
    }
    dfs(root);
    return res.join(',');
};


function deserializeDFS(iterator) {
    const val = iterator.next().value;
    if(val === 'x') {
        return null;
    }
    let node = new TreeNode(parseInt(val, 10));
    node.left = deserializeDFS(iterator);
    node.right = deserializeDFS(iterator);
    return node;
}

/*
 * Decodes your encoded data to tree.
 */
function deserialize(data: string): TreeNode | null {
    return deserializeDFS(data.split(',')[Symbol.iterator]());
};


/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */