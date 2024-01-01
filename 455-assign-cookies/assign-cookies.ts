function findContentChildren(g: number[], s: number[]): number {
    let count: number = 0;
    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);

    let cookieIndex: number = 0;
    let childIndex: number = 0;

    while (cookieIndex < s.length) {
        if (s[cookieIndex] >= g[childIndex]) {
            childIndex++;
            count++;
        }
        cookieIndex++;
    }

    return count;
}
