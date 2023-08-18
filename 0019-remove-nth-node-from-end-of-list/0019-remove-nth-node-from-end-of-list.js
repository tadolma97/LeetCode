/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let two=1
    let current=head
    let behind=head
    // if(!current.next && n===1) return null
    while(current.next){ 
        if(two<=n){
            current=current.next
            two++
        }else{
            current=current.next
            behind=behind.next
        }
    }
    if(two===n) return head.next
    behind.next=behind.next.next
    return head
    
};