function construct2DArray(original: number[], m: number, n: number): number[][] {
    const result = [];
    let index = 0

    if (original.length !==  n * m) return result;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {

            if (!result[i]) result[i] = [];
            
            result[i][j] = original[index];
            index++;
        }
    }

    return result
};