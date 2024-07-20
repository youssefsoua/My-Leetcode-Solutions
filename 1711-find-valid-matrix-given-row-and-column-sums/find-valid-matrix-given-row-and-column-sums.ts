function restoreMatrix(rowSum: number[], colSum: number[]): number[][] {
    const n = rowSum.length;
    const m = colSum.length;

    // Initialize the matrix with 0s
    const origMatrix: number[][] = Array.from({ length: n }, () => Array(m).fill(0));

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            // Fill the matrix with the minimum of the current rowSum and colSum
            const value = Math.min(rowSum[i], colSum[j]);
            origMatrix[i][j] = value;

            // Update the rowSum and colSum
            rowSum[i] -= value;
            colSum[j] -= value;
        }
    }

    return origMatrix;
}