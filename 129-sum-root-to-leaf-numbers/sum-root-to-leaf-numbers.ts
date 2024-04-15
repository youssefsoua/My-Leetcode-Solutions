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

function sumNumbers(root: TreeNode | null): number {
    const dfs = (node: TreeNode | null, currentSum: number): number => {
        if (!node) {
            return 0;
        }

        const newSum = currentSum * 10 + node.val;

        if (!node.left && !node.right) {
            return newSum;
        }

        return dfs(node.left, newSum) + dfs(node.right, newSum);
    };

    return dfs(root, 0);
}