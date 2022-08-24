/** middle 416. 分割等和子集 */
function canPartition(nums: number[]): boolean {
  // 动态规划，可以转换为 0 1 背包问题
  // 1. 题目转换为找出一些数，使这些数的和为总体和的一半，数组长度 < 2 或者总体和为奇数可以提前返回

  if (nums.length < 2) {
    return false;
  }
  const sum = nums.reduce((a, b) => a + b);
  if (sum % 2 > 0) {
    return false;
  }

  // 2. 确定状态转移方程
  const n = nums.length;
  const target = sum / 2;
  const dp = new Array(target + 1).fill(0);

  for (let i = 0; i <= n; i++) {
    for (let j = target; j >= nums[i]; j--) {
      dp[j] = Math.max(dp[j], dp[j - nums[i]] + nums[i]);
    }
  }

  return dp[target] === target;
}
