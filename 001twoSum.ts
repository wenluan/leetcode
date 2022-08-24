/** easy 1. 两数之和 */
function twoSum(nums: number[], target: number): number[] {
  const keyMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    const aimNum = target - nums[i];
    if (typeof keyMap[aimNum] === 'number') {
      return [keyMap[aimNum], i];
    }
    keyMap[nums[i]] = i;
  }
  return [];
}
