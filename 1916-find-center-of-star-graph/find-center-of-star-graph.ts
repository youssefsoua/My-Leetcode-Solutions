function findCenter(edges: number[][]): number {
    const adjList = new Map<number, number[]>();

    for (const edge of edges) {
        const s = adjList.get(edge[0]);
        if (!s) adjList.set(edge[0], [edge[1]]);
        else s.push(edge[1]);

        const t = adjList.get(edge[1]);
        if (!t) adjList.set(edge[1], [edge[0]]);
        else t.push(edge[0]);
    }

    const n = adjList.size;

    for (const v of adjList.entries()) {
        if (v[1].length === n - 1) return v[0];
    }

};