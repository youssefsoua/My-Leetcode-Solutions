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

function bstToGst(root: TreeNode | null): TreeNode | null {
    let sum = 0;
    traverse(root, sum);
    return root;
}

function traverse(root: TreeNode | null, sum: number): number {
    if (!root) return sum;
    
    sum = traverse(root.right, sum);
    root.val += sum;
    sum = root.val;

    return traverse(root.left, sum);
}
