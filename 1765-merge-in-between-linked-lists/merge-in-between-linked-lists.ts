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

function mergeInBetween(list1: ListNode | null, a: number, b: number, list2: ListNode | null): ListNode | null {
    let pointerB: ListNode | null = list1;
    let pointerA: ListNode | null = null;

    for (let i = 0; i <= b; i++) {
        if (i === a - 1) pointerA = pointerB;
        pointerB = pointerB.next;
    }

    pointerA.next = list2;

    while (pointerA.next) {
        pointerA = pointerA.next;
    }

    pointerA.next = pointerB;

    return list1;
};