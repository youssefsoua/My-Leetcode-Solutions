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

function maxAncestorDiff(root: TreeNode | null, min: number = root.val, max: number = root.val): number {
    if (!root) return max - min;

    const left = maxAncestorDiff(root.left, Math.min(min, root.val), Math.max(max, root.val));
    const right = maxAncestorDiff(root.right, Math.min(min, root.val), Math.max(max, root.val));

    return Math.max(left, right);

};