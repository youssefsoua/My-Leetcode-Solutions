/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function balanceBST(root: TreeNode | null): TreeNode | null {
    const list: number[] = [];
    inOrder(root, list);
    return createBalancedBST(root, list, 0, list.length - 1)
};

function inOrder(root: TreeNode | null, list: number[]) {
    if (!root) return;
    inOrder(root.left, list);
    list.push(root.val);
    inOrder(root.right, list);
};

function createBalancedBST(root: TreeNode | null, list: number[], low: number, high: number): TreeNode | null {
    if (low > high) return null;

    const mid = low + Math.floor((high - low) / 2);
    const left = createBalancedBST(root, list, low, mid - 1);
    const right = createBalancedBST(root, list, mid + 1, high);

    return new TreeNode(list[mid], left, right);
};