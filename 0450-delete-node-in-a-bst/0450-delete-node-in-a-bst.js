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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
    const fakeHead = new TreeNode(null, root, null)
    let curr=root
    let prev=fakeHead

    while(curr && curr.val!==key){
        prev=curr
        if(curr.val>key){
            curr=curr.left
        }else{
            curr=curr.right
        }
    }
    if(!curr){
        return root;
    }
    let newNode=null
    if(!curr.left){
        newNode = curr.right
    }else if(!curr.right){
        newNode = curr.left
    }else{
        let temp=curr.right
        while(temp.left){
            temp=temp.left 
        }
        temp.left=curr.left
        newNode=curr.right
    }
    if(prev.left === curr){
        prev.left = newNode;
    }else{
        prev.right = newNode;
    }
    
    return fakeHead.left
};