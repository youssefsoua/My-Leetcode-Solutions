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

function pseudoPalindromicPaths(root: TreeNode | null): number {
    const counts: number[] = new Array(9).fill(0);
    let result = 0;
    
    const dfs = (root: TreeNode | null) => {
        if (root) {
            counts[root.val - 1]++;
            if (!root.left && !root.right) {
                let odd: number = 0;
                for (const count of counts) {
                    if (count % 2) odd++;
                }
                if (odd < 2) result++;
            }
            dfs(root.left);
            dfs(root.right);
            counts[root.val - 1]--;
        }
    };

    dfs(root);

    return result;
}
