/** easy 217. 存在重复元素 */
function containsDuplicate(nums: number[]): boolean {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (!map.get(nums[i])) {
      map.set(nums[i], true);
    } else {
      return true;
    }
  }
  return false;
}
