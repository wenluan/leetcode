/** middle 64. 最小路径和 */
function minPathSum(grid: number[][]): number {
  // 动态规划
  // dp[i][j] = min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j]
  // dp[0][0] = grid[0][0]

  const m = grid.length;
  const n = grid[0].length;
  const dp = new Array(m);
  for (let i = 0; i < m; i++) {
    dp[i] = new Array(n);
  }

  dp[0][0] = grid[0][0];

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const num = grid[i][j];
      if (i === 0 && j > 0) {
        dp[i][j] = dp[i][j - 1] + num;
      } else if (j === 0 && i > 0) {
        dp[i][j] = dp[i - 1][j] + num;
      } else if (i > 0 && j > 0) {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + num;
      }
    }
  }

  return dp[m - 1][n - 1];
}
