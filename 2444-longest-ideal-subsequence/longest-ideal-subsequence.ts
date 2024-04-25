function longestIdealString(s: string, k: number): number {
    // Initialize an array to keep track of the longest ideal subsequence length ending with each character in the alphabet
    const dp = new Array(26).fill(0);

    for (const c of s) {
        // Get the current character's position in the alphabet (0-indexed)
        const x = c.charCodeAt(0) - 'a'.charCodeAt(0);
        let maxLength = 0;

        // Iterate through all possible characters in the alphabet to find the longest subsequence we can append the current character to
        for (let i = 0; i < 26; i++) {
            if (Math.abs(x - i) <= k) {
                maxLength = Math.max(maxLength, dp[i] + 1);
            }
        }

        // Update the dp array with the new maximum length for subsequences ending with the current character
        dp[x] = Math.max(dp[x], maxLength);
    }

    // The answer is the maximum value in the dp array
    return Math.max(...dp);
}