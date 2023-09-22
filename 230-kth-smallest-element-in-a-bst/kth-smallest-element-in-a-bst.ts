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

function kthSmallest(
  root: TreeNode | null,
  k: number,
  order: number[] = [],
): number {
  const inOrder = (root: TreeNode | null, result: number[]): number[] => {
    if (!root) return result;

    inOrder(root.left, result);
    result.push(root.val);
    inOrder(root.right, result);

    return result;
  };

  return inOrder(root, [])[k - 1];
}
