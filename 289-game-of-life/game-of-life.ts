/**
 Do not return anything, modify board in-place instead.
 */
function gameOfLife(board: number[][]): void {
    const m = board.length;
    const n = board[0].length;

    const boardCopy: number[][] = JSON.parse(JSON.stringify(board));

    const directions = [
        [0, 1],
        [0, -1],
        [-1, 0],
        [1, 0],
        [-1, -1],
        [-1, 1],
        [1, -1],
        [1, 1],
    ];

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            let ones = 0;
            for (const dir of directions) {
                if (
                    boardCopy[dir[0] + i] !== undefined &&
                    boardCopy[dir[0] + i][dir[1] + j] !== undefined
                ) {
                    if (boardCopy[dir[0] + i][dir[1] + j] === 1) ones++;
                }
            }
            if (
                (boardCopy[i][j] === 1 && ones < 2) ||
                (boardCopy[i][j] === 1 && ones > 3)
            )
                board[i][j] = 0;
            else if (boardCopy[i][j] === 0 && ones === 3) board[i][j] = 1;
        }
    }
}
