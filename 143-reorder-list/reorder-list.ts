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

/**
 Do not return anything, modify head in-place instead.
 */
 
function reorderList(head: ListNode | null): void {
    let fast: ListNode = head;
    let slow: ListNode = head;

    while (fast?.next) {
        fast = fast.next.next;
        slow = slow.next;
    }

    let reversedSecondHalf: ListNode = reverseList(slow);
    let current: ListNode = head;

    while (reversedSecondHalf.next) {
        let next: ListNode = current.next;
        current.next = reversedSecondHalf;
        current = next;

        next = reversedSecondHalf.next;
        reversedSecondHalf.next = current;
        reversedSecondHalf = next;
    }
}

function reverseList(head: ListNode | null): ListNode | null {
    if (!head || !head.next) return head;

    const list: ListNode | null = reverseList(head.next);

    head.next.next = head;
    head.next = null;

    return list;
}
