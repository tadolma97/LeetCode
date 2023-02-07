/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

var mergeTwoLists = function (l1, l2) {
    let newList=new ListNode(0)
    let dummy=newList
    while(l1 || l2){
        if(l1 && l2){
            if(l1.val<l2.val){
            dummy.next=new ListNode(l1.val)
            l1=l1.next
            }else{
            dummy.next=new ListNode(l2.val)
            l2=l2.next
            }
            dummy=dummy.next
        }
        else if(l1){
            dummy.next=l1
            l1=null
        }
        else{
            dummy.next=l2
            l2=null
        }
        console.log(newList)    }
    return newList.next
};