function tribonacci(n: number, memo = new Map<number, number>()): number {
    if (memo.has(n)) return memo.get(n);

    if (n === 0) return 0;
    if (n === 1) return 1;
    if (n === 2) return 1;

    const result =
        tribonacci(n - 1, memo) +
        tribonacci(n - 2, memo) +
        tribonacci(n - 3, memo);

    memo.set(n, result);

    return result;
}
