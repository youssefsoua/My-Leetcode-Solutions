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
