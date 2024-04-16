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

function addOneRow(root: TreeNode | null, val: number, depth: number, currentDepth: number = 1): TreeNode | null {
    if (!root) {
        return null;
    }

    // If the depth is 1, create a new root with the current root as its left child.
    if (depth === 1) {
        return new TreeNode(val, root, null);
    }

    // If the current depth is right before the target depth, insert the new nodes.
    if (currentDepth === depth - 1) {
        root.left = new TreeNode(val, root.left, null);
        root.right = new TreeNode(val, null, root.right);
    } else {
        // Recursively call addOneRow on left and right children, increasing the currentDepth.
        addOneRow(root.left, val, depth, currentDepth + 1);
        addOneRow(root.right, val, depth, currentDepth + 1);
    }

    return root;
}