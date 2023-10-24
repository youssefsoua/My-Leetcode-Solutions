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

function largestValues(
    root: TreeNode | null,
    result: number[] = [],
    index: number = 0,
): number[] {
    if (root) {
        if (result[index] === undefined) {
            result[index] = root.val;
        } else {
            result[index] = Math.max(root.val, result[index]);
        }
        largestValues(root.left, result, index + 1);
        largestValues(root.right, result, index + 1);
    }
    return result;
}
