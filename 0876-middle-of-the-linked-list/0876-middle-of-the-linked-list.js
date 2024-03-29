/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let count=0
    let secondCount=1
    let dummy=head
    while(dummy){
        count++
        dummy=dummy.next
    }
    if(count%2===1){
        count=count/2
        count+=.5
    }else{
        count=count/2
        count+=1
    }
    while(secondCount!==count){
        secondCount++
        head=head.next
    }
    return head
};