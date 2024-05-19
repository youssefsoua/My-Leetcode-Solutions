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

function deepestLeavesSum(root: TreeNode | null): number {
    let maxDepth = 0;
    const map = new Map<number, number>();

    function traverse(node: TreeNode | null, depth: number) {
        if (node) {
            if (!node.left && !node.right) {
                map.set(depth, (map.get(depth) || 0) + node.val);
                maxDepth = Math.max(maxDepth, depth);
            }
            traverse(node.left, depth + 1);
            traverse(node.right, depth + 1);
        }
    }

    traverse(root, 0);
    return map.get(maxDepth) || 0;
}
