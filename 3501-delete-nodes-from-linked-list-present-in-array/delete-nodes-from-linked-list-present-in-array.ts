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

function modifiedList(nums: number[], head: ListNode | null): ListNode | null {
    const set = new Set(nums);
    
    let list = new ListNode(0, head);
    let current = list.next;
    let prev = list;

    while (current) {
        if (set.has(current.val)) {
            prev.next = current.next;
        } else {
            prev = current;
        }
        current = current.next;
    }

    return list.next;
};