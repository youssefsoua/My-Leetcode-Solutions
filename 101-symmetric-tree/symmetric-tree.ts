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

function isSymmetric(root: TreeNode | null): boolean {
    if (!root) return true;

    const isSame = (
        node1: TreeNode | null,
        node2: TreeNode | null,
    ): boolean => {
        if (!node1 && !node2) return true;
        if (!node1 || !node2) return false;

        return (
            node1.val === node2.val &&
            isSame(node1.left, node2.right) &&
            isSame(node1.right, node2.left)
        );
    };

    return isSame(root.left, root.right);
}
