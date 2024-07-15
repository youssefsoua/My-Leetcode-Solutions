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

function createBinaryTree(descriptions: number[][]): TreeNode | null {
    const structure = new Map<number, number[]>();
    const childs = new Set<number>();
    const nodes = new Map<number, TreeNode>();

    // Build the structure map and set of child nodes
    for (const [parent, child, isLeft] of descriptions) {
        if (!structure.has(parent)) {
            structure.set(parent, []);
        }
        structure.get(parent)!.push(child, isLeft);
        childs.add(child);
    }

    // Find the root node
    let root: TreeNode | null = null;
    for (const parent of structure.keys()) {
        if (!childs.has(parent)) {
            root = getNode(parent);
            buildTree(root);
            break;
        }
    }

    function getNode(val: number): TreeNode {
        if (!nodes.has(val)) {
            nodes.set(val, new TreeNode(val));
        }
        return nodes.get(val)!;
    }

    function buildTree(node: TreeNode) {
        if (structure.has(node.val)) {
            const children = structure.get(node.val)!;
            for (let i = 0; i < children.length; i += 2) {
                const childVal = children[i];
                const isLeft = children[i + 1];
                const childNode = getNode(childVal);
                if (isLeft) {
                    node.left = childNode;
                } else {
                    node.right = childNode;
                }
                buildTree(childNode);
            }
        }
    }

    return root;
}

/*
function createBinaryTree(descriptions: number[][]): TreeNode | null {
    const structure: Record<number, number[]> = {};
    const childs = new Set<number>();
    let root: TreeNode | null = null;
    const stack: TreeNode[] = [];

    for (let i = 0; i < descriptions.length; i++) {
        if (!structure[descriptions[i][0]]) {
            structure[descriptions[i][0]] = [];
        }
        structure[descriptions[i][0]].push(i);
        childs.add(descriptions[i][1]);
    }

    for (const node of Object.keys(structure)) {
        if (!childs.has(+node)) {
            root = new TreeNode(+node);
            for (const e of structure[node]) {
                if (descriptions[e][2]) {
                    root.left = new TreeNode(descriptions[e][1]);
                    stack.push(root.left);
                } else {
                    root.right = new TreeNode(descriptions[e][1]);
                    stack.push(root.right);
                }
            }
            break;
        }
    }

    while (stack.length) {
        const current = stack.pop()!;
        if (structure[current.val]) {
            for (const e of structure[current.val]) {
                if (descriptions[e][2]) {
                    current.left = new TreeNode(descriptions[e][1]);
                    if (structure[current.left.val]) stack.push(current.left);
                } else {
                    current.right = new TreeNode(descriptions[e][1]);
                    if (structure[current.right.val]) stack.push(current.right);
                }
            }
        }
    }

    return root;
}
*/
