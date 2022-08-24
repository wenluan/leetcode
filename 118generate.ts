/** easy 118. 杨辉三角 */
function generate(numRows: number): number[][] {
  // 动态规划
  const dp = new Array(numRows);
  for (let i = 0; i < numRows; i++) {
    dp[i] = new Array(i + 1);
  }

  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j <= i; j++) {
      if (j === i) {
        dp[i][j] = 1;
      } else if (i > 0 && j > 0) {
        dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j];
      } else {
        dp[i][j] = 1;
      }
    }
  }

  return dp;
}
