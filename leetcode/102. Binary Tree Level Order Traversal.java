import java.util.ArrayList;
import java.util.List;
import java.util.ArrayDeque;


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
    public List<List<Integer>> levelOrder(TreeNode root) {
        List<List<Integer>> res = new ArrayList();
        if(root == null) {
            return res;
        }

        ArrayDeque<TreeNode> queue = new ArrayDeque<>();
        queue.add(root);

        while (queue.size() > 0) {
            int nodesToRead = queue.size();
            List<Integer> levelNodes = new ArrayList();

            for(int i = 1; i <= nodesToRead; i++) { //
                TreeNode node = queue.pop(); // O(1)
                levelNodes.add(node.val);
                
                if(node.left != null) {
                    queue.add(node.left);
                }

                if(node.right != null) {
                    queue.add(node.right);
                }
            }
            res.add(levelNodes);
        }

        return res;
        
    }
}