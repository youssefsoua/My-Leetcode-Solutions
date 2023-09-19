function goodNodes(root: TreeNode | null): number {
    let result = 0;

    const goodNodesCounter = (node: TreeNode | null, maxValue: number): void => {
        if (!node) return;

        if (node.val >= maxValue) {
            result++;
            maxValue = node.val;
        }

        goodNodesCounter(node.left, maxValue);
        goodNodesCounter(node.right, maxValue);
    };

    goodNodesCounter(root, -Infinity);

    return result;
}
