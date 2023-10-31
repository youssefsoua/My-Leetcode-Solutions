function tictactoe(moves: number[][]): string {
    const players = [[], []]; 
    let currentPlayer = 0; // 0 for player A, 1 for player B

    // Define a function to check for a win
    const checkWin = (playerMoves: number[][]) => {
        const rows = new Array(3).fill(0);
        const cols = new Array(3).fill(0);
        let diag1 = 0;
        let diag2 = 0;

        for (const move of playerMoves) {
            const [row, col] = move;
            rows[row]++;
            cols[col]++;
            if (row === col) diag1++;
            if (row + col === 2) diag2++;
        }

        for (let i = 0; i < 3; i++) {
            if (rows[i] === 3 || cols[i] === 3) return true;
        }

        if (diag1 === 3 || diag2 === 3) return true;

        return false;
    };

    for (const move of moves) {
        players[currentPlayer].push(move);
        if (checkWin(players[currentPlayer])) {
            return currentPlayer === 0 ? "A" : "B";
        }
        currentPlayer = 1 - currentPlayer; // Switch players
    }

    if (moves.length < 9) return "Pending";
    return "Draw";
}


/*
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
*/