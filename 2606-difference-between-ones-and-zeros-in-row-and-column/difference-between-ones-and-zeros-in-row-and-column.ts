function onesMinusZeros(grid: number[][]): number[][] {
    const m: number = grid.length;
    const n: number = grid[0].length;
    const zerosRow: number[] = new Array(m).fill(0);
    const zerosCol: number[] = new Array(n).fill(0);

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 0) {
                zerosRow[i]++;
                zerosCol[j]++;
            }
        }
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            grid[i][j] = m + n - 2 * (zerosRow[i] + zerosCol[j]);
        }
    }

    return grid;
}
