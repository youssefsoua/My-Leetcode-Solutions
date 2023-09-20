/**
 Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix: number[][]): void {
    const m = matrix.length;
    const n = matrix[0].length;
    const zeros: number[][] = [];

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (!matrix[i][j]) zeros.push([i, j]);
        }
    }

    for (const zero of zeros) {
        for (let i = 0; i < m; i++) {
            matrix[i][zero[1]] = 0;
        }
        for (let j = 0; j < n; j++) {
            matrix[zero[0]][j] = 0;
        }
    }
}
