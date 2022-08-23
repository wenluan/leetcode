/** middle 152. 乘积最大子数组 */
function maxProduct(nums: number[]): number {
  // 动态规划
  // 分为正负2种情况，正数的话希望最大，负数的话希望之前有最小
  // fmax(k) = max(fmax(k - 1) * k, fmin(k - 1) * k, k)
  // fmin(k) = min(fmax(k - 1) * k, fmin(k - 1) * k, k)
  // f(0) = nums[0]

  const dpmax = new Array(nums.length);
  const dpmin = new Array(nums.length);
  dpmax[0] = nums[0];
  dpmin[0] = nums[0];

  for (let i = 1; i < nums.length; i++) {
    dpmax[i] = Math.max(dpmax[i - 1] * nums[i], dpmin[i - 1] * nums[i], nums[i]);
    dpmin[i] = Math.min(dpmax[i - 1] * nums[i], dpmin[i - 1] * nums[i], nums[i]);
  }

  const sortedDp = dpmax.sort((a, b) => a - b);

  return sortedDp[nums.length - 1];
}
