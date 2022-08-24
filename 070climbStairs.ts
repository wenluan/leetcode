/** middle 70. 爬楼梯 */
function climbStairs(n: number): number {
  // 动态规划
  // dp[i] = dp[i - 1] + dp[i - 2]
  // dp[0] = 1
  // dp[1] = 1

  let lastOne = 1;
  let lastTwo = 1;
  let result = 1;

  for (let i = 2; i <= n; i++) {
    result = lastOne + lastTwo;
    lastTwo = lastOne;
    lastOne = result;
  }

  return result;
}
