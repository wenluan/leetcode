/** middle 55. 跳跃游戏 */
function canJump(nums: number[]): boolean {
  // 贪心算法，记录一个可以跳到的最大位置
  let maxPosition = 0;
  for (let i = 0; i < nums.length; i++) {
    const curDistance = nums[i];
    // 如果当前下标超过可以跳的最大位置，说明跳不到
    if (i > maxPosition) {
      return false;
    }
    maxPosition = Math.max(maxPosition, i + curDistance);
  }
  return true;
}
