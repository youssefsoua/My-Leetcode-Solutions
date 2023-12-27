function minCost(colors: string, neededTime: number[]): number {
    const n = colors.length;
    const dp = new Array(n + 1).fill(0);
    let previousColor = 'A';
    let previousTime = 0;

    for (let i = 1; i <= n; i++) {
        if (colors[i - 1] === previousColor) {
            dp[i] = dp[i - 1] + Math.min(neededTime[i - 1], previousTime);
            previousTime = Math.max(neededTime[i - 1], previousTime);
        } else {
            dp[i] = dp[i - 1];
            previousColor = colors[i - 1];
            previousTime = neededTime[i - 1];
        }
    }

    return dp[n];
};
