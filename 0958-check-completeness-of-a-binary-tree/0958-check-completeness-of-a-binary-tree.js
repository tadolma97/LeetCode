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
 * @return {boolean}
 */
var isCompleteTree = function(root) {
    let queue=[root]
    let answer=false
    while(queue.length>0){
        let current=queue.shift()
        if(!current) answer=true
        if(answer && current) return false
        if(current){
            queue.push(current.left)
            queue.push(current.right)
        }

    }
    return true
};