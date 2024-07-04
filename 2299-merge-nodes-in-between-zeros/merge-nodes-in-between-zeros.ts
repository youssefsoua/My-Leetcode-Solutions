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

function mergeNodes(head: ListNode | null): ListNode | null {
    if (!head) return null; // Handle the case where the input list is empty

    let list = new ListNode(0); // Dummy node to simplify list construction
    let currentListNode = list;
    let current = head.next; // Skip the first node as per problem statement

    let sum = 0; // To accumulate the sum between zero nodes

    while (current) {
        if (current.val === 0) {
            // If the current node value is zero, it marks the end of an interval
            currentListNode.next = new ListNode(sum);
            currentListNode = currentListNode.next;
            sum = 0; // Reset the sum for the next interval
        } else {
            sum += current.val; // Accumulate the sum of node values
        }
        current = current.next;
    }

    return list.next; // Return the next node to skip the dummy node
}
