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

function nodesBetweenCriticalPoints(head: ListNode | null): number[] {
    if (!head || !head.next || !head.next.next) {
        // If there are fewer than 3 nodes, there can't be any critical points
        return [-1, -1];
    }

    let firstCritical = -1;
    let lastCritical = -1;
    let minDistance = Infinity;
    const criticalPoints: number[] = [];

    let prev: ListNode = head;
    let current: ListNode = head.next;
    let index = 1;

    while (current.next) {
        if ((current.val > prev.val && current.val > current.next.val) ||
            (current.val < prev.val && current.val < current.next.val)) {
            if (firstCritical === -1) {
                firstCritical = index;
            } else {
                minDistance = Math.min(minDistance, index - lastCritical);
            }
            lastCritical = index;
            criticalPoints.push(index);
        }
        prev = current;
        current = current.next;
        index++;
    }

    if (criticalPoints.length < 2) {
        // If there are fewer than 2 critical points, return [-1, -1]
        return [-1, -1];
    }

    const maxDistance = criticalPoints[criticalPoints.length - 1] - criticalPoints[0];

    return [minDistance, maxDistance];
};
