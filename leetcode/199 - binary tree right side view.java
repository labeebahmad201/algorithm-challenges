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
    public List<Integer> rightSideView(TreeNode root) {
        List<Integer> res = new ArrayList();
        if(root == null) {
            return res;
        }
        ArrayDeque<TreeNode> queue = new ArrayDeque<>();
        queue.add(root);

        while(queue.size() > 0) {
            int nodesToRead = queue.size();
            res.add(queue.peek().val);
            for(int i = 1; i <= nodesToRead; i++) {
                TreeNode node = queue.pop(); // O(1)
                if(node.right != null) {
                    queue.add(node.right); // O(1)
                }

                if(node.left != null) {
                    queue.add(node.left); // O(1)
                }
            }
        }

        return res;
    }
}