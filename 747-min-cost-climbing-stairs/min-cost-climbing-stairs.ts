function minCostClimbingStairs(cost: number[]): number {
  const n = cost.length;

  // Create an array to store the cumulative minimum cost up to each step.
  const dp = new Array(n);

  // The minimum cost to reach the first two steps is the cost of the steps themselves.
  dp[0] = cost[0];
  dp[1] = cost[1];

  for (let i = 2; i < n; i++) {
    // The minimum cost to reach the current step is the minimum of the cost to reach the previous step
    // and the cost to reach the step before the previous step, plus the cost of the current step.
    dp[i] = cost[i] + Math.min(dp[i - 1], dp[i - 2]);
  }

  // The minimum cost to reach the top of the stairs is the minimum of the cost to reach the last two steps.
  return Math.min(dp[n - 1], dp[n - 2]);
}
