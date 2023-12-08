function tribonacci(n: number): number {
    const dp: number[] = [0, 1, 1];

    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
    }

    return dp[n];
}

/*

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

*/
