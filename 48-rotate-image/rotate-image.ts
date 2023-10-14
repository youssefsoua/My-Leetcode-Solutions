/**
 Do not return anything, modify matrix in-place instead.
 */

function rotate(matrix: number[][]): void {
    const n = matrix.length;

    // Transpose the matrix
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }

    // Reverse the rows
    for (let i = 0; i < n; i++) {
        matrix[i].reverse();
    }
}

/**
function rotate(matrix: number[][]): void {
    const n = matrix.length;

    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            if (i !== j)
                [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }

    for (let i = 0; i < n; i++) {
        let left = 0;
        let right = n - 1;

        while (left < right) {
            [matrix[i][left++], matrix[i][right--]] = [
                matrix[i][right],
                matrix[i][left],
            ];
        }
    }
}
 */