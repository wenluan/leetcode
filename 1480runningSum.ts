/** easy 1480. 一维数组的动态和 */
function runningSum(nums: number[]): number[] {
  const dp = new Array(nums.length);
  dp[0] = nums[0];

  for (let i = 1; i < nums.length; i++) {
    dp[i] = dp[i - 1] + nums[i];
  }

  return dp;
}
