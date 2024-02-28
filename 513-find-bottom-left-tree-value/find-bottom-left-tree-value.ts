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


function findBottomLeftValue(root: TreeNode | null): number {
    let value = root.val;
    let maxDepth = 0;

    function bottomLeftValues(root: TreeNode | null, previousNodeVal: number, depth: number) {
        if (!root) {
            if (depth > maxDepth) {
                value = previousNodeVal;
                maxDepth = depth;
            }
            return;
        }

        bottomLeftValues(root.left, root.val, depth + 1);
        bottomLeftValues(root.right, root.val, depth + 1);
    }

    bottomLeftValues(root, root.val, 0);
    return value;
}

