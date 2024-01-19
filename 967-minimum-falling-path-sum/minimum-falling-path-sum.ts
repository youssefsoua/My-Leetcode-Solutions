function minFallingPathSum(matrix: number[][]): number {
    const n: number = matrix.length;
    for (let i = 1; i < n; i++) {
        for (let j = 0; j < n; j++) {
            matrix[i][j] += Math.min(matrix[i - 1][j], (matrix[i - 1][j - 1] || Infinity), (matrix[i - 1][j + 1] || Infinity));
        }
    }
    return Math.min(...matrix[n - 1]);
};