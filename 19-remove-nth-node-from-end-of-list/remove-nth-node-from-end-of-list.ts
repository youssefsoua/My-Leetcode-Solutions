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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    let fast: ListNode | null = head;
    let slow: ListNode | null = head;
    let prev: ListNode | null = null;

    for (let i = 0; i < n; i++) {
        fast = fast.next;
    }
    while (fast) {
        prev = slow;
        fast = fast.next;
        slow = slow.next;
    }

    if (!prev) return head.next;

    prev.next = slow.next;

    return head;
}
