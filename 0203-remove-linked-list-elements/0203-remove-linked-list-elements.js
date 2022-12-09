/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    let prev=new ListNode(null)
    prev.next=head
    let dummy=prev
    let current=head
    while(current!==null){
        if(current.val===val){
            prev.next=current.next
            current=current.next
        }
        else{
            prev=current
            current=current.next
        }
    }
    return dummy.next
};