function heightChecker(heights: number[]): number {
    return heights
        .slice()
        .sort((a, b) => a - b)
        .reduce((s, e, i) => s += (e !== heights[i] ? 1 : 0), 0);
};