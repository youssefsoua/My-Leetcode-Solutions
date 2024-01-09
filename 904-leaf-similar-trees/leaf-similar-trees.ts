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

function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
    const dfs = function (node: TreeNode | null, leaves: number[]) {
        if (node != null) {
            if (node.left == null && node.right == null) {
                leaves.push(node.val);
            }
            dfs(node.left, leaves);
            dfs(node.right, leaves);
        }
    };
    let leaves1: number[] = [];
    let leaves2: number[] = [];
    dfs(root1, leaves1);
    dfs(root2, leaves2);

    return (
        leaves1.length == leaves2.length &&
        leaves1.every((v, i) => v === leaves2[i])
    );
}
