/** middle 45. 跳跃游戏2 */
/** 贪心 */
function jump(nums: number[]): number {
  if (nums.length === 1) {
    return 0;
  }
  // 贪心算法，找到可跳范围内能跳的最远的
  let result = 0;
  let index = 0;
  while (index < nums.length) {
    result++;

    // 判断是否结束
    const curDistance = nums[index];
    if (index + curDistance >= nums.length - 1) {
      break;
    }

    let maxPosition = curDistance + nums[index + curDistance];
    let diffIndex = curDistance;
    // 寻找到可跳范围内最远的距离
    for (let i = 0; i < curDistance; i++) {
      const tempPosition = nums[index + i] + i;
      if (tempPosition > maxPosition) {
        maxPosition = tempPosition;
        diffIndex = i;
      }
    }
    index = index + diffIndex;
  }

  return result;
}
