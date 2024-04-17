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

function smallestFromLeaf(root: TreeNode | null): string {
    const o = {
        0: "a",
        1: "b",
        2: "c",
        3: "d",
        4: "e",
        5: "f",
        6: "g",
        7: "h",
        8: "i",
        9: "j",
        10: "k",
        11: "l",
        12: "m",
        13: "n",
        14: "o",
        15: "p",
        16: "q",
        17: "r",
        18: "s",
        19: "t",
        20: "u",
        21: "v",
        22: "w",
        23: "x",
        24: "y",
        25: "z"
    }

    const arr = [];

    const dfs = (root: TreeNode | null, s = "") => {
        if (root.right === null && root.left === null) {
            arr.push(o[root.val] + s);
            return;
        }

        s = o[root.val] + s;
        if (root.right) {
            dfs(root.right, s);
        }
        if (root.left) {
            dfs(root.left, s);
        }
    }

    dfs(root);
    arr.sort();

    return arr[0];
};