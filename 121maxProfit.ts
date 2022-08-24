/** easy 121. 买卖股票的最佳时机 */
function maxProfit(prices: number[]): number {
  // 动态规划
  // dp[i] = max(dp[i - 1], prices[i] - minPrice)
  // dp[0] = 0

  // const dp = new Array(prices.length);
  // dp[0] = 0;
  let minPrice = prices[0];
  let maxDiff = 0;

  for (let i = 1; i < prices.length; i++) {
    maxDiff = Math.max(maxDiff, prices[i] - minPrice);
    minPrice = Math.min(minPrice, prices[i]);
  }

  return maxDiff;
}
