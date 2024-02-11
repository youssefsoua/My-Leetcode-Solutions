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

function minDepth(root: TreeNode | null): number {
    // check if there is root, if no return 0
    if (!root) return 0;
    // check if there is no left node:
    if (root.left === null) {
        // return 1 + depth of traversal to right
        return 1 + minDepth(root.right)
    }
    // check if there is no right node:
    if (root.right === null) {
        // return 1 + septh of traversal to left
        return 1 + minDepth(root.left)
    }
    // return 1 + min depth of left and right traversal
    return 1 + Math.min(minDepth(root.right), minDepth(root.left))
};