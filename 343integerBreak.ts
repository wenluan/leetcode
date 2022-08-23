/** middle 343. 整数拆分 */

function integerBreak(n: number): number {
  // 动态规划
  // i = j + (i - j)
  // dp[i] = max(dp[i], dp[i - j] * j, (i - j) * j)
  // dp[0] = 0
  // dp[1] = 0

  const dp = new Array(n + 1).fill(0);
  for (let i = 2; i <= n; i++) {
    for (let j = 1; j < i; i++) {
      dp[i] = Math.max(dp[i], j * dp[i - j], j * (i - j));
    }
  }

  return dp[n];
}

integerBreak(2);
