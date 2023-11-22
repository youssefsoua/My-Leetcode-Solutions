function heightChecker(heights: number[]): number {
    let result: number = 0;
    const sorted = heights.slice().sort((a, b) => a - b);

    for (let i = 0; i < sorted.length; i++) {
        if (sorted[i] !== heights[i]) result++;
    }

    return result;
}
