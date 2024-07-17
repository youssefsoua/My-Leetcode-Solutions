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

function delNodes(root: TreeNode | null, to_delete: number[]): TreeNode[] {
    const toDeleteSet = new Set(to_delete);
    const remainingTrees: TreeNode[] = [];
    
    function dfs(node: TreeNode | null, isRoot: boolean): TreeNode | null {
        if (!node) return null;
        
        const rootDeleted = toDeleteSet.has(node.val);
        
        if (isRoot && !rootDeleted) {
            remainingTrees.push(node);
        }
        
        node.left = dfs(node.left, rootDeleted);
        node.right = dfs(node.right, rootDeleted);
        
        return rootDeleted ? null : node;
    }
    
    dfs(root, true);
    return remainingTrees;
}