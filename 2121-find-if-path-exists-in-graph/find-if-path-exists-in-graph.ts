function validPath(n: number, edges: number[][], source: number, destination: number): boolean {
    const adjList = new Map<number, number[]>();

    // Build the adjacency list
    for (const edge of edges) {
        const s = adjList.get(edge[0]) || [];
        const d = adjList.get(edge[1]) || [];
        s.push(edge[1]);
        d.push(edge[0]);
        adjList.set(edge[0], s);
        adjList.set(edge[1], d);
    }

    // Set to keep track of visited vertices
    const visited = new Set<number>();

    // Helper function for DFS
    const dfs = (vertex: number): boolean => {
        // If the destination is reached, return true
        if (vertex === destination) return true;

        // Mark the current vertex as visited
        visited.add(vertex);

        // Get the adjacent vertices
        const adjs = adjList.get(vertex) || [];

        // Iterate over the adjacent vertices
        for (const adj of adjs) {
            // Continue the search only if the adjacent vertex has not been visited
            if (!visited.has(adj)) {
                // If a valid path is found, return true
                if (dfs(adj)) return true;
            }
        }

        // If no valid path is found, return false
        return false;
    };

    // Start DFS from the source vertex
    return dfs(source);
}