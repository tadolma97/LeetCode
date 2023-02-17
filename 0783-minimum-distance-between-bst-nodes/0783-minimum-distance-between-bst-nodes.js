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
var minDiffInBST = function(root) {
  let stack=[root]
  let values=[]

  while(stack.length>0){
    let current=stack.pop()
    values.push(current.val)
    if(current.right) stack.push(current.right)
    if(current.left) stack.push(current.left)
    }
    values=values.sort(function(a, b){return a - b})

    let min=Infinity
    for(let i=0;i<values.length-1;i++){
        let difference=values[i+1]-values[i]
        if (difference<min) min=difference
    }
    return min
};