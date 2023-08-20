/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null,
): ListNode | null {
  const list = new ListNode(0);
  let current = list;

  while (list1 && list2) {
    if (list1.val > list2.val) {
      current.next = new ListNode(list2.val);
      list2 = list2.next;
      current = current.next;
    } else {
      current.next = new ListNode(list1.val);
      list1 = list1.next;
      current = current.next;
    }
  }

  while (list1) {
    current.next = new ListNode(list1.val);
    list1 = list1.next;
    current = current.next;
  }

  while (list2) {
    current.next = new ListNode(list2.val);
    list2 = list2.next;
    current = current.next;
  }

  return list.next;
}
