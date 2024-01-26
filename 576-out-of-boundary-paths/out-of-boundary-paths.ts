function findPaths(m: number, n: number, maxMove: number, startRow: number, startColumn: number): number {
    const dirs: number[][] = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    const memo: number[][][] = Array(m).fill(0).map(() => Array(n).fill(0).map(() => Array(maxMove + 1).fill(-1)));

    const dfs = (i: number, j: number, k: number) => {
        if (i < 0 || j < 0 || i >= m || j >= n) return 1;
        if (k === 0) return 0;
        if (memo[i][j][k] !== -1) return memo[i][j][k];

        let sum = 0;
        for (const dir of dirs) {
            sum = (sum + dfs(i + dir[0], j + dir[1], k - 1)) % 1000000007;
        }
        memo[i][j][k] = sum;
        return sum;
    }

    return dfs(startRow, startColumn, maxMove);
}


/*
function findPaths(m: number, n: number, maxMove: number, startRow: number, startColumn: number): number {
    const matrix: number[][] = [];
    const dirs: number[][] = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i] === undefined) matrix[i] = [];
            if (matrix[i][j] === undefined) matrix[i][j] = 0;
            if (i === 0) matrix[i][j]++;
            if (i === m - 1) matrix[i][j]++;
            if (j === 0) matrix[i][j]++;
            if (j === n - 1) matrix[i][j]++;
        }
    }
    let sum = 0;
    const dfs = (i: number, j: number, n: number) => {
        if (n > 0 && matrix[i] && matrix[i][j] !== undefined) {
            sum += matrix[i][j];
            for (const dir of dirs) {
                dfs(i + dir[0], j + dir[1], n - 1);
            }
        }
    }
    dfs(startRow, startColumn, maxMove);
    return sum % 1000000007;
};
*/