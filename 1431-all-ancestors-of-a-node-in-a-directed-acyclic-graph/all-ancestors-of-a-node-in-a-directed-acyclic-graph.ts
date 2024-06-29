function getAncestors(n: number, edges: number[][]): number[][] {
    const obj: { [key: number]: number[] } = {};
    const result: number[][] = Array.from({ length: n }, () => []);

    // Build the adjacency list
    for (const [s, t] of edges) {
        if (!obj[t]) obj[t] = [];
        obj[t].push(s);
    }

    // Helper function to find ancestors using DFS with memoization
    const findAncestors = (node: number): Set<number> => {
        if (result[node].length) return new Set(result[node]);
        
        const ancestors = new Set<number>();
        if (obj[node]) {
            for (const parent of obj[node]) {
                ancestors.add(parent);
                const parentAncestors = findAncestors(parent);
                for (const ancestor of parentAncestors) {
                    ancestors.add(ancestor);
                }
            }
        }
        
        result[node] = Array.from(ancestors).sort((a, b) => a - b);
        return ancestors;
    };

    // Compute ancestors for each node
    for (let i = 0; i < n; i++) {
        findAncestors(i);
    }

    return result;
}
