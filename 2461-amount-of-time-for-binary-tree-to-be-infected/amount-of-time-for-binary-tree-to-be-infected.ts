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

function amountOfTime(root: TreeNode | null, start: number): number {
    const adjList = new Map<number, number[]>()

    const dfs = (root: TreeNode | null): void => {
        if (!root) return
        const adj = adjList.get(root.val) || []

        if (root.left) {
            adj.push(root.left.val)
            const exist = adjList.get(root.left.val)
            if (exist) exist.push(root.val)
            else adjList.set(root.left.val, [root.val])
        }
        if (root.right) {
            adj.push(root.right.val)
            const exist = adjList.get(root.right.val)
            if (exist) exist.push(root.val)
            else adjList.set(root.right.val, [root.val])
        }
        adjList.set(root.val, adj)

        dfs(root.left)
        dfs(root.right)
    }

    dfs(root)

    const visited = new Set<number>()
    let queue = new Set<number>()
    queue.add(start)
    
    let time: number = 0

    while (queue.size) {
        const nextQueue = new Set<number>()
        for (const current of queue) {
            visited.add(current)
            const adj = adjList.get(current)

            for (const e of adj) {
                if (!visited.has(e)) nextQueue.add(e)
            }
        }

        queue = nextQueue
        if (queue.size) time++
    }

    return time
};
