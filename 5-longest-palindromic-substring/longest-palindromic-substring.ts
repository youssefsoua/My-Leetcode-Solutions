function longestPalindrome(s: string): string {
    if (s.length === 0) return "";

    const n = s.length;
    const dp: boolean[][] = new Array(n).fill(0).map(() => new Array(n).fill(false));
    let start = 0;
    let maxLen = 1;

    // All characters are palindromes of length 1
    for (let i = 0; i < n; i++) {
        dp[i][i] = true;
    }

    // Check for palindromes of length 2
    for (let i = 0; i < n - 1; i++) {
        if (s[i] === s[i + 1]) {
            dp[i][i + 1] = true;
            start = i;
            maxLen = 2;
        }
    }

    // Check for palindromes of length 3 or more
    for (let len = 3; len <= n; len++) {
        for (let i = 0; i <= n - len; i++) {
            const j = i + len - 1;
            if (dp[i + 1][j - 1] && s[i] === s[j]) {
                dp[i][j] = true;
                if (len > maxLen) {
                    start = i;
                    maxLen = len;
                }
            }
        }
    }

    return s.substring(start, start + maxLen);
}

//Timeout recursive with memo
/*
function longestPalindrome(
    s: string,
    left: number = 0,
    right: number = s.length - 1,
    memo: Record<string, string> = {}
): string {
    const memoKey = `${left}_${right}`;

    if (memoKey in memo) return memo[memoKey];
    if (left > right) return "";

    let currentResult = "";

    const firstResult = longestPalindrome(s, left + 1, right, memo);
    const secondResult = longestPalindrome(s, left, right - 1, memo);

    let isPalindrome = true;
    let tempLeft = left;
    let tempRight = right;

    while (tempLeft <= tempRight) {
        if (s[tempLeft] !== s[tempRight]) {
            isPalindrome = false;
            break;
        }
        tempLeft++;
        tempRight--;
    }

    if (isPalindrome) {
        currentResult = s.slice(left, right + 1); 
    }

    if (
        firstResult.length >= secondResult.length &&
        firstResult.length >= currentResult.length
    ) {
        memo[memoKey] = firstResult;
    } else if (
        secondResult.length >= firstResult.length &&
        secondResult.length >= currentResult.length
    ) {
        memo[memoKey] = secondResult;
    } else {
        memo[memoKey] = currentResult;
    }
    
    return memo[memoKey];
}
*/
