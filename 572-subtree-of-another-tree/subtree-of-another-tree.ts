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

function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
    const queue: TreeNode[] = [root];

    while (queue.length) {
        const current = queue.shift();

        if (current?.val === subRoot.val) {
            const isSame: boolean = isSameTree(current, subRoot);
            if (isSame) return true;
        }

        if (current?.left) queue.push(current.left);
        if (current?.right) queue.push(current.right);
    }

    return false;
}

function isSameTree(tree1: TreeNode | null, tree2: TreeNode | null): boolean {
    if (!tree1 && !tree2) return true;
    if (!tree1 || !tree2 || tree1.val !== tree2.val) return false;

    const left = isSameTree(tree1.left, tree2.left);
    const right = isSameTree(tree1.right, tree2.right);

    return left && right;
}
