function numRollsToTarget(
    n: number,
    k: number,
    target: number,
    memo: Record<string, number> = {},
): number {
    if (n === 0 && target === 0) return 1;
    if (n === 0 || target <= 0) return 0;

    const memoKey = `${n}-${target}`;
    if (memo[memoKey] !== undefined) {
        return memo[memoKey];
    }

    let result = 0;
    for (let i = 1; i <= k; i++) {
        result += numRollsToTarget(n - 1, k, target - i, memo);
        result %= 1000000007; // Add modulo to handle large results as per the problem constraints
    }

    memo[memoKey] = result;
    return result;
}
