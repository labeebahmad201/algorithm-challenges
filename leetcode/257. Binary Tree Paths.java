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
    List<String> dfs(TreeNode root, List<String> paths, List<String> res) {
        if (root == null) {
            return res;
        } 

        paths.add(String.valueOf(root.val));
        dfs(root.left, paths, res);
        if(root.left == null && root.right == null) { // we can put it before handling left and it would work.
            String path = String.join("->", paths); // takes additonal work and space.
            res.add(path);
        }

        dfs(root.right, paths, res);

        // remove the current node as we are now done handling left and right & are going to 
        // backtrack and we don't want this node in another path. 
        paths.remove(paths.size() - 1);
        return res;
    }

    public List<String> binaryTreePaths(TreeNode root) {

        List<String> paths = new ArrayList();
        List<String> res = new ArrayList();

        return dfs(root, paths, res);
    }
}