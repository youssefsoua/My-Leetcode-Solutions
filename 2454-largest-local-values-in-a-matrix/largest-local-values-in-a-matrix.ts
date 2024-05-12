function largestLocal(grid: number[][]): number[][] {
    const n = grid.length;
    const result: number[][] = new Array(n - 2);
    for (let i = 0; i < n - 2; i++) {
        result[i] = new Array(n - 2);
        for (let j = 0; j < n - 2; j++) {
            result[i][j] = getMaxLocal(grid, i, j);
        }
    }
    return result;
}

function getMaxLocal(grid: number[][], x: number, y: number): number {
    let max: number = grid[x][y];
    for (let i = x; i <= x + 2; i++) {
        for (let j = y; j <= y + 2; j++) {
            max = Math.max(grid[i][j], max);
        }
    }
    return max;
}
