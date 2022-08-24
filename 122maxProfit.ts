/** middle 122. 买卖股票的最佳时机 II */
function maxProfit(prices: number[]): number {
  // 动态规划
  // 分为2个状态，没有持有股票（0）和持有股票（1）
  // 当天没有持有股票： dp[i][0] = max(dp[i - 1][0]/前一天没有持有股票/, dp[i - 1][1] + prices[i]/前一天持有股票，今天卖了/)
  // 当天持有股票：dp[i][1] = max(dp[i - 1][1]/前一天持有股票/, dp[i - 1][0] - prices[i]/前一天没有持有股票，今天买入/)
  // dp[0][0] = 0
  // dp[0][1] = -prices[0]

  // 状态压缩：不需要二维数组

  const dp = [];
  dp[0] = 0;
  dp[1] = -prices[0];

  for (let i = 1; i < prices.length; i++) {
    dp[0] = Math.max(dp[0], dp[1] + prices[i]);
    dp[1] = Math.max(dp[1], dp[0] - prices[i]);
  }

  return dp[0];
}
