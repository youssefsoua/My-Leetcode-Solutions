/**
 * Definition for node.
 * class _Node {
 *     val: number
 *     children: _Node[]
 *     constructor(val?: number) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.children = []
 *     }
 * }
 */

function postorder(root: _Node | null): number[] {
    const result: number[] = [];

    const dfs = (root: _Node | null) => {
        if (!root) return

        for (const child of root.children) {
            dfs(child);
        }

        result.push(root.val);
    }

    dfs(root);

    return result;
};