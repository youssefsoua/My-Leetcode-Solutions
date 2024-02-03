function maxSumAfterPartitioning(arr: number[], k: number): number {
    // Initialize a dp array with the same size as arr, filled with -1.
    let dp = new Array(arr.length).fill(-1);

    // Return the maximum sum after partitioning.
    return maxSum(arr, k, dp, 0);
};

function maxSum(arr: number[], k: number, dp: number[], start: number): number {
    // Get the size of the array.
    let N = arr.length;

    // If the start index is greater than or equal to the size of the array, return 0.
    if (start >= N) {
        return 0;
    }

    // If the dp array at the start index is not -1, return its value.
    if (dp[start] != -1) {
        return dp[start];
    }

    let currMax = 0, ans = 0;
    // Calculate the minimum between the size of the array and the sum of start and k.
    let end = Math.min(N, start + k);
    for (let i = start; i < end; i++) {
        // Find the maximum between currMax and the array value at index i.
        currMax = Math.max(currMax, arr[i]);
        // Calculate the maximum sum.
        ans = Math.max(ans, currMax * (i - start + 1) + maxSum(arr, k, dp, i + 1));
    }

    // Store the answer in the dp array at the start index and return it.
    return dp[start] = ans;
}