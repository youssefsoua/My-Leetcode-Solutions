function matrixScore(grid: number[][]): number {
    const m = grid.length;
    const n = grid[0].length;
    let result = 0;

    // First pass: Flip rows to maximize the number of 1s in the first column
    for (let i = 0; i < m; i++) {
        if (grid[i][0] === 0) {
            for (let j = 0; j < n; j++) {
                grid[i][j] ^= 1;
            }
        }
    }

    // Second pass: Flip columns to maximize the number of 1s in each column
    for (let j = 1; j < n; j++) {
        let countOnes = 0;
        for (let i = 0; i < m; i++) {
            countOnes += grid[i][j];
        }

        if (countOnes <= m / 2) {
            for (let i = 0; i < m; i++) {
                grid[i][j] ^= 1;
            }
        }
    }

    // Calculate the final score
    for (let i = 0; i < m; i++) {
        result += parseInt(grid[i].join(""), 2);
    }

    return result;
}