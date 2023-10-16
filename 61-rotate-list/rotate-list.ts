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

function rotateRight(head: ListNode | null, k: number): ListNode | null {
    if (!head || k === 0) return head;

    let length = 1;
    let current = head;
    while (current.next) {
        current = current.next;
        length++;
    }

    // Connect the tail to the head to make it a circular linked list
    current.next = head;

    k = k % length;
    if (k > 0) {
        for (let i = 0; i < length - k; i++) {
            current = current.next;
        }
    }

    const newHead = current.next;
    current.next = null;

    return newHead;
}