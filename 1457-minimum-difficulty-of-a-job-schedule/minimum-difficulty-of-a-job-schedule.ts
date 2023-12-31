function minDifficulty(jobDifficulty: number[], d: number): number {
    const n = jobDifficulty.length;
    // If there are fewer jobs than days, it's impossible to schedule, return -1.
    if (n < d) return -1;
    
    // Initialize the DP table with Infinity for all values except dp[0][0].
    const dp: number[][] = Array.from({length: n + 1}, () => Array(d + 1).fill(Infinity));
    dp[0][0] = 0; // Base case: 0 jobs in 0 days has 0 difficulty.
    
    // Iterate over the number of jobs.
    for (let i = 1; i <= n; i++) {
        // Iterate over the number of days, which cannot exceed the number of jobs.
        for (let j = 1; j <= Math.min(i, d); j++) {
            let maxd = 0; // To keep track of the maximum difficulty on the current day.
            // Iterate over the jobs to find the minimum difficulty for the current day.
            for (let k = i - 1; k >= j - 1; k--) {
                maxd = Math.max(maxd, jobDifficulty[k]); // Update the max difficulty for the day.
                // Update the DP table with the minimum difficulty found so far.
                dp[i][j] = Math.min(dp[i][j], dp[k][j - 1] + maxd);
            }
        }
    }
    
    // The answer is the minimum difficulty of scheduling all jobs in 'd' days.
    return dp[n][d];
}