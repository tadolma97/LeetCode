/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {
    let curr=root
    
    if(root===null) return new TreeNode(val)
    while(curr){
            if(curr.val>val){
                if(curr.left===null){
                    curr.left=new TreeNode(val)
                    return root
                }
                curr=curr.left

            }else{
                if(curr.right===null){
                    curr.right=new TreeNode(val)  
                    return root
                }
                curr=curr.right
            }

        
    }
    return root
    
};