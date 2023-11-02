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

function averageOfSubtree(root: TreeNode | null): number {
    let result = 0;

    const getAverage = (root: TreeNode | null): number[] => {
        if (!root) return [0, 0];
        const [leftNodesNumber, leftNodesSum] = getAverage(root.left);
        const [rightNodesNumber, rightNodesSum] = getAverage(root.right);
        const currentNodesNumber = leftNodesNumber + rightNodesNumber + 1;
        const currentNodesSum = leftNodesSum + rightNodesSum + root.val;
        if (Math.floor(currentNodesSum / currentNodesNumber) === root.val)
            result++;
        return [currentNodesNumber, currentNodesSum];
    };

    getAverage(root);

    return result;
}
