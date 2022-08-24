/** middle 322. 零钱兑换 */
function coinChange(coins: number[], amount: number): number {
  // 动态规划
  // f(k) = min(f(k), 1 + f(k - coin)|coin 属于 coins)
  // f(0) = 0

  // 初始化数组值为 amount + 1 相当于正无穷
  const dp = new Array(amount + 1).fill(amount + 1);
  dp[0] = 0;
  for (let i = 1; i < dp.length; i++) {
    for (let coin of coins) {
      if (i - coin < 0) continue;
      dp[i] = Math.min(dp[i], 1 + dp[i - coin]);
    }
  }

  return dp[amount] === amount + 1 ? -1 : dp[amount];
}
