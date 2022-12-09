/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  let hare=head
  let tortoise=head
  while(hare!==null && hare.next!==null){
      hare=hare.next.next
      tortoise=tortoise.next
      if(hare===tortoise) return true 
  }
    return false
};
