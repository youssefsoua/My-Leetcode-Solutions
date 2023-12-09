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

function inorderTraversal(
    root: TreeNode | null,
    result: number[] = [],
): number[] {
    if (!root) return result;

    inorderTraversal(root.left, result);
    result.push(root.val);
    inorderTraversal(root.right, result);
    
    return result;
}
