/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public int minDepth(TreeNode root) {
        if(root == null) {
            return 0;
        } 

        ArrayDeque<TreeNode> queue =  new ArrayDeque<>();
        int depth = 1; // sets value for first level
        queue.add(root);

        while (queue.size() > 0) {
            int nodesToRead = queue.size();

            for (int i = 1; i <= nodesToRead; i++) {
                TreeNode node = queue.pop();
                if (node.left == null && node.right == null) { // checks for all nodes.
                    // if it is a leaf node
                    return depth;
                }                

                if(node.left != null) {
                    queue.add(node.left);
                }

                if(node.right != null) {
                    queue.add(node.right);
                }                
            }
            depth++; // sets at the end of loop for next level.
            
        }

        return depth;

    }
}