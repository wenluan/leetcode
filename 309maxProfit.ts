/** middle 309. 最佳买卖股票时机含冷冻期 */
function maxProfit(prices: number[]): number {
  // 动态规划
  // 2种状态，没有持有股票，持有股票
  // 没有持有股票：dp[i][0] = max(dp[i - 1][0], dp[i - 1][1] + prices[i])
  // 持有股票：dp[i][1] = max(dp[i - 1][1], dp[i - 2][0] - prices[i])
  if (prices.length === 1) {
    return 0;
  }

  const dp = new Array(prices.length);
  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(2);
  }
  dp[0][0] = 0;
  dp[0][1] = -prices[0];
  dp[1][0] = Math.max(dp[0][0], dp[0][1] + prices[1]);
  dp[1][1] = Math.max(dp[0][1], dp[0][0] - prices[1]);

  for (let i = 2; i < prices.length; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 2][0] - prices[i]);
  }

  return dp[prices.length - 1][0];
}
