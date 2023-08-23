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

function isBalanced(root: TreeNode | null): boolean {
    const getHeight = (node: TreeNode | null): number => {
        if (!node) return 0;
        const leftHeight = getHeight(node.left);
        const rightHeight = getHeight(node.right);
        if (leftHeight === -1 || rightHeight === -1 || Math.abs(leftHeight - rightHeight) > 1) {
            return -1; // Imbalance detected, return -1
        }
        return Math.max(leftHeight, rightHeight) + 1;
    };

    return getHeight(root) !== -1;
}
