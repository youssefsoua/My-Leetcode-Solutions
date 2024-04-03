function exist(board: string[][], word: string): boolean {
    let m: number = board.length,
        n: number = board[0].length;

    const backtrack = (x: number, y: number, index: number): boolean => {
        if (index === word.length) return true;
        if (x < 0 || x >= m || y < 0 || y >= n || board[x][y] !== word[index]) {
            return false;
        }

        board[x][y] = '*';
        let res: boolean = backtrack(x + 1, y, index + 1) || backtrack(x - 1, y, index + 1) ||
            backtrack(x, y + 1, index + 1) || backtrack(x, y - 1, index + 1);
        board[x][y] = word[index];
        return res;
    };

    for (let i: number = 0; i < m; i++) {
        for (let j: number = 0; j < n; j++) {
            if (board[i][j] === word[0]) {
                if (backtrack(i, j, 0)) {
                    return true;
                }
            }
        }
    }
    return false;
}