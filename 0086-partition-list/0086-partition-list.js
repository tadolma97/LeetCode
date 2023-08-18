/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    let current=head
    let link1f=new ListNode(0)
    let link2f=new ListNode(0)
    let link1=link1f
    let link2=link2f
    while(current){
        if(current.val<x){
            link1.next=new ListNode(current.val)
            link1=link1.next
        }else{
            link2.next=new ListNode(current.val)
            link2=link2.next
        }
        current=current.next
    }
    link1.next=link2f.next
    return link1f.next
};