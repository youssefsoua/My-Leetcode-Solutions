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


function reverseList(head: ListNode | null): ListNode | null {
    let prev: ListNode | null = null;
    let current: ListNode | null = head;
    let nextTemp: ListNode | null = null;

    // Set each node's next pointer to the previous node
    while (current !== null) {
        nextTemp = current.next;
        current.next = prev;
        prev = current;
        current = nextTemp;
    }

    return prev;
}

function removeNodes(head: ListNode | null): ListNode | null {
    if (!head) return null; // Handling the case when the list is empty

    // Reverse the original linked list
    head = reverseList(head);

    let maximum = 0;
    let prev: ListNode | null = null;
    let current: ListNode | null = head;

    // Traverse the list deleting nodes
    while (current !== null) {
        maximum = Math.max(maximum, current.val);

        // Delete nodes that are smaller than maximum
        if (current.val < maximum) {
            // Delete current by skipping
            if (prev) {
                prev.next = current.next;
                current = current.next;
            } else {
                head = current.next;
                current = current.next;
            }
        }

        // Current does not need to be deleted
        else {
            prev = current;
            current = current.next;
        }
    }

    // Reverse and return the modified linked list
    return reverseList(head);
}
