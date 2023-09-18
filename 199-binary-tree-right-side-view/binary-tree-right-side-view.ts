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

function rightSideView(root: TreeNode | null): number[] {
    const result: number[] = [];

    const levels: number[][] = [];

    const getLevels = (root: TreeNode | null, index: number = 0): void => {
        if (root) {
            if (levels[index]) {
                levels[index].push(root.val);
            } else {
                levels[index] = [root.val];
            }
            getLevels(root.right, index + 1);
            getLevels(root.left, index + 1);
        }
    };

    getLevels(root);

    for (const level of levels) {
        result.push(level[0]);
    }

    return result;
}
