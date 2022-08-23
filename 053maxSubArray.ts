/** middle 53. 最大子数组和 */
/** 给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
子数组 是数组中的一个连续部分。 */

function maxSubArray(nums: number[]): number {
  // 动态规划
  // dp[i] = max(dp[i - 1] + nums[i], nums[i])

  const dp = new Array(nums.length);
  dp[0] = nums[0];
  let result = dp[0];

  for (let i = 1; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
    result = Math.max(dp[i], result);
  }
  return result;
}
