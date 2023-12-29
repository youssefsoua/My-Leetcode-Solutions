function uniquePaths(m: number, n: number): number {
  // Create a 2D table to store results of subproblems
  const dp: number[][] = Array(m).fill(0).map(() => Array(n).fill(0));

  // Count of paths to reach any cell in the first column is 1
  for (let i = 0; i < m; i++) {
    dp[i][0] = 1;
  }

  // Count of paths to reach any cell in the first row is 1
  for (let j = 0; j < n; j++) {
    dp[0][j] = 1;
  }

  // Fill the rest of the table
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }

  // The last cell contains the number of unique paths
  return dp[m - 1][n - 1];
}

/**
m = 3 and n = 3

Each cell represent the number of how many ways to reach it 

[ 1, 1, 1 ]
[ 1, 2, 3 ]
[ 1, 3, 6 ]

*/

/**
function uniquePaths(
  m: number,
  n: number,
  memo = new Map<string, number>(),
): number {
  const key: string = `${m}_${n}`;
  if (memo.has(key)) return memo.get(key);
  if (m === 1 && n === 1) return 1;

  let result = 0;

  if (m > 0) result += uniquePaths(m - 1, n, memo);
  if (n > 0) result += uniquePaths(m, n - 1, memo);

  memo.set(key, result);
  return result;
}
 */

