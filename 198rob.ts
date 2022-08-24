/** middle 198. 打家劫舍 */
function rob(nums: number[]): number {
  // 动态规划 1. 定义子问题 2. 写出子问题的递推关系 3. 确定 DP 数组的计算顺序 4. 空间优化（可选）
  // f(k) = max(f(k - 1), f(k - 2) + Nk)
  // f(0) = 0;
  // f(1) = nums[0];

  const dp = new Array(nums.length + 1);

  dp[0] = 0;
  dp[1] = nums[0];

  for (let i = 2; i <= nums.length; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i - 1]);
  }

  return dp[nums.length];
}
