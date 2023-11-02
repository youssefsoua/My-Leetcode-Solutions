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
    let result = 0; // Initialize the result counter.

    // Helper function to recursively calculate averages of subtrees.
    const getAverage = (node: TreeNode | null): [number, number] => {
        if (!node) {
            // Base case: Return [0, 0] for an empty node.
            return [0, 0];
        }

        // Recursively calculate left and right subtree values.
        const [leftNodes, leftSum] = getAverage(node.left);
        const [rightNodes, rightSum] = getAverage(node.right);

        // Calculate the total nodes and total sum for the current subtree.
        const totalNodes = leftNodes + rightNodes + 1;
        const totalSum = leftSum + rightSum + node.val;

        // Check if the average of the subtree is equal to the node's value.
        if (Math.floor(totalSum / totalNodes ) === node.val) {
            result++; // Increment the result counter.
        }

        return [totalNodes, totalSum]; // Return total nodes and sum for the current subtree.
    };

    // Start the recursive calculation with the root node.
    getAverage(root);

    return result; // Return the final result.
}