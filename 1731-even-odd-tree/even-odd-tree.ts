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

function isEvenOddTree(
  root: TreeNode | null,
  result: number[][] = [],
  level: number = 0,
): boolean {
  if (!root) return true;

  if (
    (level % 2 === 0 && root.val % 2 === 0) ||
    (level % 2 !== 0 && root.val % 2 !== 0)
  )
    return false;

  if (
    result[level]?.length &&
    ((level % 2 === 0 && result[level][result[level].length - 1] >= root.val) ||
      (level % 2 !== 0 && result[level][result[level].length - 1] <= root.val))
  ) {
    return false;
  }

  if (result[level]) result[level].push(root.val);
  else result[level] = [root.val];

  return (
    isEvenOddTree(root.left, result, level + 1) &&
    isEvenOddTree(root.right, result, level + 1)
  );
}
