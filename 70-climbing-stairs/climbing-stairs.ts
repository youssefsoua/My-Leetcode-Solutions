function climbStairs(n: number): number {
    let one = 1;
    let two = 1;

    for (let i = 0; i < n - 1; i++) {
        let temp = one;
        one = one + two;
        two = temp;
    }
    return one;
}

/*

function climbStairs(n: number): number {
    const dp: number[] = [0, 1, 2];

    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }

    return dp[n];
}

 */

/*

function climbStairs(n: number, cache: Record<number, number> = {}): number {
    if (cache[n] !== undefined) {
        return cache[n];
    }

    if (n < 0) {
        return 0;
    }

    if (n === 0) {
        return 1;
    }

    cache[n] = climbStairs(n - 1, cache) + climbStairs(n - 2, cache);
    return cache[n];
}

 */
