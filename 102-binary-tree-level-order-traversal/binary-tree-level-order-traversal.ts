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

function levelOrder(root: TreeNode | null, index:number = 0, result:number[][] = []): number[][] {
    if(root){
        if(!result[index]) result[index] = []
        result[index].push(root.val)
        levelOrder(root.left, index + 1, result)
        levelOrder(root.right, index + 1, result)
    }
    return result
};