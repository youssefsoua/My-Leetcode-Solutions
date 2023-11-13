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

function isValidBST(root: TreeNode | null): boolean {
    return isValidBSTHelper(root, null, null);
}

function isValidBSTHelper(root: TreeNode | null, min: number | null, max: number | null): boolean {
    if (!root) return true;

    if ((min !== null && root.val <= min) || (max !== null && root.val >= max)) {
        return false;
    }

    return (
        isValidBSTHelper(root.left, min, root.val) &&
        isValidBSTHelper(root.right, root.val, max)
    );
}
