/** middle 31. 下一个排列 */
function nextPermutation(nums: number[]): void {
  // 找到下一个大的最小的数
  if (nums.length === 1) {
    return;
  }

  let index = -1;
  // 从右到左遍历，找到第一个左比右小的数
  for (let i = nums.length - 2; i >= 0; i--) {
    if (nums[i] < nums[i + 1]) {
      index = i;
      break;
    }
  }

  if (index !== -1) {
    // 从右到左遍历，找到大于这个数的最小的数，交换位置
    for (let i = nums.length - 1; i > index; i--) {
      if (nums[i] > nums[index]) {
        [nums[index], nums[i]] = [nums[i], nums[index]];
        break;
      }
    }
  }

  // 将右侧的数字重新排序，排到最小值
  let l = index + 1;
  let r = nums.length - 1;
  while (l < r) {
    [nums[l], nums[r]] = [nums[r], nums[l]];
    l++;
    r--;
  }
}
