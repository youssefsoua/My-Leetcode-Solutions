function solve(board: string[][]): void {
  function capture(r: number, c: number) {
    if (r < 0 || r >= rows || c < 0 || c >= cols || board[r][c] !== "O") {
      return;
    }

    board[r][c] = "U";
    capture(r - 1, c);
    capture(r + 1, c);
    capture(r, c - 1);
    capture(r, c + 1);
  }

  const rows = board.length, cols = board[0].length;
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (r === 0 || r === rows - 1 || c === 0 || c === cols - 1) {
        capture(r, c);
      }
    }
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (board[r][c] === "O") {
        board[r][c] = "X";
      }
    }
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (board[r][c] === "U") {
        board[r][c] = "O";
      }
    }
  }
};