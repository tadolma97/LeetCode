/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let carry=0
    let dummy=new ListNode(null)
    let head=dummy

    while(l1 || l2||carry){
        const value= (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
        if(value>9){
            head.next=new ListNode(value-10)
            carry=1
        }
        else{
            head.next=new ListNode(value)
            carry=0
        }
        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
        head=head.next
    }
    return dummy.next
};