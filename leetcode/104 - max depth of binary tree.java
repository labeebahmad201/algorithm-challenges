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
    int getDepth(TreeNode node) {
        if(node == null) {
            return 0;
        }

        int leftDepth = getDepth(node.left);
        int rightDepth = getDepth(node.right);
        int largestSubtreeDepth = leftDepth > rightDepth ? leftDepth : rightDepth;
        return 1 + largestSubtreeDepth; 
    }

    public int maxDepth(TreeNode root) {
        return this.getDepth(root);
    }
}