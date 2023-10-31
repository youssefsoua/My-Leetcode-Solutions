function tictactoe(moves: number[][]): string {
    const players = new Map<string, number[][]>();
    players.set("A", []);
    players.set("B", []);

    for (let i = 0; i < moves.length; i++) {
        if (i % 2 === 0) {
            players.get("A").push(moves[i]);
        } else {
            players.get("B").push(moves[i]);
        }
    }

    for (const player of players.entries()) {
        if (
            checkRows(player[1], 3) ||
            checkColumns(player[1], 3) ||
            checkPositiveDiag(player[1], 3) ||
            checkNegativeDiag(player[1], 3)
        )
            return player[0];
    }

    if (moves.length < 9) return "Pending";
    return "Draw";
}

const checkRows = (moves: number[][], n: number): boolean => {
    const rows = new Map<number, number>();
    for (const move of moves) {
        rows.set(move[0], (rows.get(move[0]) || 0) + 1);
    }
    for (const row of rows.values()) {
        if (row === n) return true;
    }
    return false;
};

const checkColumns = (moves: number[][], n: number): boolean => {
    const columns = new Map<number, number>();
    for (const move of moves) {
        columns.set(move[1], (columns.get(move[1]) || 0) + 1);
    }
    for (const column of columns.values()) {
        if (column === n) return true;
    }
    return false;
};

const checkPositiveDiag = (moves: number[][], n: number): boolean => {
    let count = 0;
    for (const move of moves) {
        if (move[0] === move[1]) count++;
    }
    return count === n;
};

const checkNegativeDiag = (moves: number[][], n: number): boolean => {
    let count = 0;
    for (const move of moves) {
        if (move[0] + move[1] === n - 1) count++;
    }
    return count === n;
};
