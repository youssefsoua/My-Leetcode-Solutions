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
        root: TreeNode | null,
        targetSum: number,
        route: number[] = [],
    ): void => {
        if (root) {
            const newRoute = [...route, root.val];
            const newTargetSum = targetSum - root.val;

            if (!root.left && !root.right && !newTargetSum)
                result.push(newRoute);

            findPaths(root.left, newTargetSum, newRoute);
            findPaths(root.right, newTargetSum, newRoute);
        }
    };

    findPaths(root, targetSum);
    
    return result;
}
