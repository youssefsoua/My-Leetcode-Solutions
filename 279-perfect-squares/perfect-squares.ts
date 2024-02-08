function numSquares(n: number): number {
    const max = Math.floor(Math.sqrt(n));
    const squares: number[] = [];
    const min: number[] = [Infinity];

    for(let i = 1; i <= max; i++){
        squares.push(i * i);
    }
    dfs(squares, 0 , n, 0, min, new Map<number, number>());
    return min[0];
}

function dfs(squares: number[], sum: number, target: number, count: number, min: number[], memo: Map<number, number>): void {
    if (sum === target) {
        min[0] = Math.min(min[0], count);
        return;
    }
    if (sum > target || count >= min[0]) {
        return;
    }
    if (memo.has(sum) && memo.get(sum) <= count) {
        return;
    }

    memo.set(sum, count);

    for (let i = squares.length - 1; i >= 0; i--) {
        dfs(squares, sum + squares[i], target, count + 1, min, memo);
    }
}
