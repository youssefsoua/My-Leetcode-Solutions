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

function averageOfLevels(root: TreeNode | null): number[] {
    const levels = []
    const levelsNodes = (root: TreeNode | null, index: number): void =>{
        if(root){
            if(levels[index])levels[index].push(root.val)
            else levels[index] = [root.val]
            levelsNodes(root.left, index + 1)
            levelsNodes(root.right, index + 1)
        }
    }
    levelsNodes(root,0)

    const result: number[] = []

    for(const level of levels){
        result.push(level.reduce((s,e)=>s+e,0)/level.length)
    }

    return result
};