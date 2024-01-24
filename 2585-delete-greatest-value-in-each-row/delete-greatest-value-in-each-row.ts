function deleteGreatestValue(grid: number[][]): number {
    let sum: number = 0;
    const m: number = grid.length;
    const n: number = grid[0].length;

    for (const e of grid) {
        e.sort((a, b) => b - a);
    }

    for (let i = 0; i < n; i++) {
        let max: number = 0;
        for (let j = 0; j < m; j++) {
            max = Math.max(max, grid[j][i]);
        }
        sum += max;
    }

    return sum;
};