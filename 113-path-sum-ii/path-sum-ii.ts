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

function pathSum(root: TreeNode | null, targetSum: number): number[][] {
    const result: number[][] = [];

    const findPaths = (
        node: TreeNode | null,
        currentPath: number[],
        remainingSum: number
    ): void => {
        if (!node) return;

        const newPath = [...currentPath, node.val];
        const newRemainingSum = remainingSum - node.val;

        if (!node.left && !node.right && newRemainingSum === 0) {
            result.push(newPath);
            return;
        }

        findPaths(node.left, newPath, newRemainingSum);
        findPaths(node.right, newPath, newRemainingSum);
    };

    findPaths(root, [], targetSum);
    
    return result;
}
