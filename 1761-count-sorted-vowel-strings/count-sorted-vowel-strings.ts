function countVowelStrings(n: number): number {
    const dp = [1, 2, 3, 4, 5];

    for (let i = 1; i < n; i++) {
        for (let j = 1; j < 5; j++) {
            dp[j] += dp[j - 1];
        }
    }

    return dp[4];
}
