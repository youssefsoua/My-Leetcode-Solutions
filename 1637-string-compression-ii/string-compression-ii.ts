function getLengthOfOptimalCompression(s: string, k: number): number {
    // Helper function to calculate the length of the compressed string segment
    const getLength = (cnt: number) => cnt === 1 ? 1 : cnt < 10 ? 2 : cnt < 100 ? 3 : 4;

    const n = s.length;
    // Initialize a 2D array dp where dp[i][j] represents the minimum length of the compressed string for the first i characters after deleting j characters
    const dp = Array.from({ length: n + 1 }, () => Array(k + 1));

    // Iterate over the string in reverse order
    for (let i = n; i >= 0; i--) {
        for (let j = 0; j <= k; j++) {
            if (i === n) { 
                // Base case: if there are no characters left, the length of the compressed string is 0
                dp[n][j] = 0; 
                continue; 
            }
            // If we can delete a character, the minimum length is either the current minimum length or the minimum length after deleting the current character
            dp[i][j] = j > 0 ? dp[i + 1][j - 1] : Infinity;

            let del = j, cnt = 0;
            // Iterate over the rest of the string to find segments of the same character
            for (let iEnd = i; iEnd < n && del >= 0; iEnd++) {
                if (s[iEnd] === s[i]) {
                    // If the current character is the same as the start of the segment, increment the count and update the minimum length
                    dp[i][j] = Math.min(dp[i][j], getLength(++cnt) + dp[iEnd + 1][del]);
                } else {
                    // If the current character is different, we can delete it and decrement the number of deletions left
                    del--;
                }
            }
        }
    }
    // Return the minimum length of the compressed string after deleting k characters
    return dp[0][k];
}