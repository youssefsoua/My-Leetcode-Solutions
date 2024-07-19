function luckyNumbers(matrix: number[][]): number[] {
    const m = matrix.length
    const n = matrix[0].length

    const min = new Set<number>();
    const max: number[] = new Array(n).fill(0);
    const result: number[] = [];


    for (let i = 0; i < m; i++) {
        let currentMin = Infinity;

        for (let j = 0; j < n; j++) {
            currentMin = Math.min(currentMin, matrix[i][j]);
            max[j] = Math.max(max[j], matrix[i][j]);
        }

        min.add(currentMin);
    }

    for (let i = 0; i < n; i++) {
        if (min.has(max[i])) result.push(max[i]);
    }
    
    return result;
};