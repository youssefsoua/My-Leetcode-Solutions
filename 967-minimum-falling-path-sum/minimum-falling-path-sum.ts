function minFallingPathSum(matrix: number[][]): number {
    const n: number = matrix.length;

    if (n === 1) return matrix[0][0];

    let min: number = Infinity;

    for (let i = 1; i < n; i++) {
        
        for (let j = 0; j < n; j++) {

            matrix[i][j] += Math.min(matrix[i - 1][j], (matrix[i - 1][j - 1] || Infinity), (matrix[i - 1][j + 1] || Infinity));

            if (i === n - 1) min = Math.min(min, matrix[i][j]);
        }
    }

    return min;
};