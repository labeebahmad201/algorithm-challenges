function inorderTraversal(root: TreeNode | null, output:number[] = []): number[] {
    if(root === null) {
        return output;
    }

    inorderTraversal(root.left, output);
    // if(root.left){ // this was mistake. children should be handled through recursive case.
    //     output.push(root.left)
    // }
    output.push(root.val);
    inorderTraversal(root.right, output);
    // if(root.right){ // this was mistake. children should be handled through recursive case.
    //     output.push(root.right)
    // }

    return output;

};