/** middle 33. 搜索旋转排序数组 */
function search(nums: number[], target: number): number {
  if (nums.length === 1) {
    return nums[0] === target ? 0 : -1;
  }
  // 二分查找
  let leftIndex = 0;
  let rightIndex = nums.length - 1;

  const firstNum = nums[0];
  const isInLeft = target >= firstNum;

  while (rightIndex - leftIndex > 1) {
    const midIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (nums[midIndex] === target) {
      return midIndex;
    }
    const isMidLeft = nums[midIndex] > firstNum;

    if (isInLeft && !isMidLeft) {
      rightIndex = midIndex;
      continue;
    }

    if (!isInLeft && isMidLeft) {
      leftIndex = midIndex;
      continue;
    }

    if (nums[midIndex] < target) {
      leftIndex = midIndex;
    } else {
      rightIndex = midIndex;
    }
  }

  if (nums[rightIndex] === target) {
    return rightIndex;
  }
  if (nums[leftIndex] === target) {
    return leftIndex;
  }

  return -1;
}
