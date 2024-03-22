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

function isPalindrome(head: ListNode | null): boolean {
    let fast: ListNode | null = head;
    let slow: ListNode | null = head;
    let prev: ListNode | null = null;

    while (fast && fast.next) {
        fast = fast.next.next;
        let nextNode = slow!.next;
        slow!.next = prev;
        prev = slow;
        slow = nextNode;
    }

    if (fast) slow = slow!.next;

    while (slow) {
        if (slow.val !== prev!.val) return false;
        slow = slow.next;
        prev = prev!.next;
    }

    return true;
};