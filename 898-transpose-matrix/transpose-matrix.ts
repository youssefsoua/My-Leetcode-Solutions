function transpose(matrix: number[][]): number[][] {
    const m: number = matrix.length;
    const n: number = matrix[0].length;
    const result: number[][] = [];

    for (let i = 0; i < n; i++) {
        result.push([]);

        for (let j = 0; j < m; j++) {
            result[i].push(matrix[j][i]);
        }
    }

    return result;
}
