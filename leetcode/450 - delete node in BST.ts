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

function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
    
    /***
        first thing is we need to look for the value.
        And then look on the left side
        and look on the right
        and then we can end up on the node where value is.
        now here are three scenarios we need to handle.
            - node has no children
            - only left or right is null
            - both children are not null.
                - if root.right.left is null then use root.right and preserve root.left as well.
                - if root.right.left is not null then use it.
                - 
     */ 

    // case1 root has no children

    // case2 root has one child could be left or right
    

    // case 3: root has two children.
    
    if(root === null) {
        return root;
    }   

    if(key > root.val) {
        root.right = deleteNode(root.right, key)
    } else if(key < root.val) {
        root.left = deleteNode(root.left, key);
    } else {
        // When the node to be deleted is found

        if(root.left === null && root.right === null) {
            root = null;
        } else if(root.left === null || root.right === null) {
            root = root.left || root.right;
        } else {

            if(root.right.left === null) { // inner successor can be null too, in that case we want to assign right to the root 
                root.right.left = root.left; // but before that we want to preserve left of the current node.
                root = root.right; // and then assing right to the root. 
            } else {

                let cur = root.right;
                while(cur.left !== null && cur.left.left !== null) { // loop makes sure we end up at the element that has no left child. we don't want to go beyond it.
                    cur = cur.left;   
                }
                // when loop end cur.left.left will be null. we are stopping 
                // at the second last step before end. last node is cur.left and this is the one we are using to replace node being deleted. 
                root.val = cur.left.val;


                // next we call deleteNode for cur.left & it returns null or other reference which returns node that is linked up
                // by using left. 
                // why assign to left only?
                // because it was left child that was removed. 
                cur.left = deleteNode(cur.left, cur.left.val);


            }
        }

    }

    return root;

};