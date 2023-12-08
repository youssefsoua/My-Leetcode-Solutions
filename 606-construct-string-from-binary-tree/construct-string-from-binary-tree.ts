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

function tree2str(root: TreeNode | null, result: string = ""): string {
    if (!root) return "";

    result += root.val;

    if (root.left || root.right) {
        result += "(";
        result += tree2str(root.left);
        result += ")";
    }
    
    if (root.right) {
        result += "(";
        result += tree2str(root.right);
        result += ")";
    }

    return result;
}
