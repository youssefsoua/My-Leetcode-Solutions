function integerBreak(n: number): number {
    if (n === 2) return 1;
    if (n === 3) return 2;

    function breakInteger(n: number, memo: Map<number, number>): number {
        if (n <= 4) return n;
        if (memo.has(n)) return memo.get(n);

        let max = 0;
        for (let i = 1; i <= n - 1; i++) {
            const product = i * breakInteger(n - i, memo);
            max = Math.max(max, product);
        }

        memo.set(n, max);
        return max;
    }

    const memo = new Map();
    return breakInteger(n, memo);
}
