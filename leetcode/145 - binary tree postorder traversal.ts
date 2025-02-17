function postorderTraversal(root: TreeNode | null): number[] {
    
    const res = [];
    function dfsPostorder(root: TreeNode | null): number[] {
        if(root === null) return res; // dfsPostorder(root.left) would throw error if root is null

        dfsPostorder(root.left);
        dfsPostorder(root.right);
        res.push(root.val); // handles left and right first and then node. 
        return res;
    }

    return dfsPostorder(root);
};