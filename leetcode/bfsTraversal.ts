function bfsTraversal(root: TreeNode | null): number[] {
    let result = [];
    const queue = [root];
    
    while(queue.length > 0) {
        const node = queue.shift(); // ✅ BFS - Dequeue front node
        
        if(node) {
            result.push(node.val); 
        }

        if(node.left) queue.push(node.left);  
        if(node.right) queue.push(node.right); 
    }

    return result;
}