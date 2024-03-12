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

function removeZeroSumSublists(head: ListNode | null): ListNode | null {
    let list: ListNode = new ListNode(0);
    list.next = head;
    let sum: number = 0;
    let map: Map<number, ListNode> = new Map();
    map.set(0, list);

    while (head) {
        sum += head.val;
        if (map.has(sum)) {
            let prev: ListNode = map.get(sum)!;
            let tempSum: number = sum;
            let temp: ListNode | null = prev.next;
            while (temp !== head) {
                tempSum += temp!.val;
                map.delete(tempSum);
                temp = temp!.next;
            }
            prev.next = head.next;
        } else {
            map.set(sum, head);
        }
        head = head.next;
    }

    return list.next;
}
