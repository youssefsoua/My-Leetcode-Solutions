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

function binaryTreePaths(root: TreeNode | null): string[] {
    const result: string[] = [];

    const dfs = (root: TreeNode | null, path: number[] = []) => {
        if (root) {
            const newPath = [...path, root.val];

            if (!root.left && !root.right) {
                result.push(newPath.join("->"));
                return;
            }

            dfs(root.left, newPath);
            dfs(root.right, newPath);
        }

    }

    dfs(root, []);

    return result;
};