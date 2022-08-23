/** middle 63. 不同路径2 */
function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
  // 动态规划
  // 障碍位置的路径数是0，当前位置的路径数 = 左边位置的路径数 + 上边位置的路径数
  // dp[i][j] = dp[i][j - 1] + dp[i - 1][j](不是障碍) | 0（是障碍）;

  if (obstacleGrid[0][0] === 1) {
    return 0;
  }

  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;
  const dp = new Array(m);
  // 初始化第一行和第一列的值
  for (let i = 0; i < m; i++) {
    dp[i] = new Array(n).fill(0);
  }
  dp[0][0] = 1;
  for (let i = 1; i < m; i++) {
    if (obstacleGrid[i][0] === 1) {
      break;
    }
    dp[i][0] = 1;
  }
  for (let j = 1; j < n; j++) {
    if (obstacleGrid[0][j] === 1) {
      break;
    }
    dp[0][j] = 1;
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (obstacleGrid[i][j] === 1) {
        continue;
      } else {
        dp[i][j] = dp[i][j - 1] + dp[i - 1][j];
      }
    }
  }

  return dp[m - 1][n - 1];
}
