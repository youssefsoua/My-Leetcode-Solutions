/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     neighbors: Node[]
 *     constructor(val?: number, neighbors?: Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.neighbors = (neighbors===undefined ? [] : neighbors)
 *     }
 * }
 */

function cloneGraph(node: Node | null): Node | null {
    if (!node) return null;

    const clonedGraphList = new Map<number, Node>();
    const stack: Node[] = [node];

    while (stack.length) {
        const current = stack.pop();

        if (!clonedGraphList.has(current.val)) {
            clonedGraphList.set(current.val, new Node(current.val));
        }

        const cloned = clonedGraphList.get(current.val);

        for (const neighbor of current.neighbors) {
            if (!clonedGraphList.has(neighbor.val)) {
                clonedGraphList.set(neighbor.val, new Node(neighbor.val));
                stack.push(neighbor);
            }
            cloned.neighbors.push(clonedGraphList.get(neighbor.val));
        }
    }

    return clonedGraphList.get(node.val);
}
