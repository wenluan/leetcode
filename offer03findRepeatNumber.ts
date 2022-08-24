/** offer 03. 数组中重复的数字 */
function findRepeatNumber(nums: number[]): number {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (!map.get(nums[i])) {
      map.set(nums[i], true);
    } else {
      return nums[i];
    }
  }
  return -1;
}
