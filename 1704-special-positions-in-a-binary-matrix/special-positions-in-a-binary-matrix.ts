function numSpecial(mat: number[][]): number {
    const special: number[][] = [];
    const m: number = mat.length;
    const n: number = mat[0].length;
    let count: number = 0;

    for (let i = 0; i < m; i++) {
        let isUnique: boolean = true;
        for (let j = 0; j < n; j++) {
            if (mat[i][j] === 1) {
                if (isUnique) {
                    special.push([i, j]);
                    isUnique = false;
                } else {
                    special.pop();
                    break;
                }
            }
        }
    }

    for (const e of special) {
        const j: number = e[1];
        let uniqueCount = 0;
        for (let i = 0; i < m; i++) {
            if (mat[i][j] === 1) {
                uniqueCount++;
                if (uniqueCount > 1) break;
            }
        }
        if (uniqueCount === 1) count++;
    }

    return count;
}
