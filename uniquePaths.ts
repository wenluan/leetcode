function uniquePaths(m: number, n: number): number {
  // 动态规划
  // 每个位置的路径 = 左边位置的路径 + 上边位置的路径数
  // dp[i][j] = dp[i][j - 1] + dp[i - 1][j]
  // dp[0][j] = 1;
  // dp[i][0] = 1;

  const dp = new Array(m);
  for (let i = 0; i < m; i ++) {
      if (i === 0) {
          dp[i] = new Array(n).fill(1);
      } else {
          dp[i] = new Array(n);
      }
      dp[i][0] = 1;
  }

  for (let i = 1; i < m; i ++) {
      for (let j = 1; j < n; j ++) {
          dp[i][j] = dp[i][j - 1] + dp[i - 1][j];
      }
  }

  return dp[m - 1][n - 1];
};

uniquePaths(3, 2);