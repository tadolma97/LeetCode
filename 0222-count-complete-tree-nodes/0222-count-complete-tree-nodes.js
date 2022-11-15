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
 * @return {number}
 */
var countNodes = function(root) {
    if(root===null) return 0
    let stack=[root]
    let count=0
    while(stack.length>0){
        let current=stack.pop()
        count++
        if(current.left!==null){
            stack.push(current.left)
        }
        if (current.right!==null){
            stack.push(current.right)
        }
        
    }
    return count
};