/** middle 15. 三数之和 */
function threeSum(nums: number[]): number[][] {
  if (nums.length < 3) {
    return [];
  }
  // 思路：1. 排序 2. 双指针
  const result: number[][] = [];
  const sortedNums = nums.sort((a, b) => a - b);
  if (sortedNums[nums.length - 1] < 0) {
    return result;
  }

  for (let i = 0; i < sortedNums.length - 2; i++) {
    if (sortedNums[i] > 0) {
      break;
    }
    if (i > 0 && sortedNums[i] === sortedNums[i - 1]) {
      continue;
    }
    const num = sortedNums[i];
    const twoSumNums = twoSum(sortedNums.slice(i + 1), 0 - num);
    if (!twoSumNums.length) {
      continue;
    }
    twoSumNums.map((nums) => {
      nums.unshift(num);
    });
    result.push(...twoSumNums);
  }

  return result;
}

// -4, -3, -1, 1, 5
// 拿到 2 个数，和为固定值的数组，nums 为有序数组
function twoSum(nums: number[], sum: number): number[][] {
  const result: number[][] = [];
  let leftIndex = 0;
  let rightIndex = nums.length - 1;

  while (leftIndex < rightIndex) {
    if (leftIndex > 0 && nums[leftIndex] === nums[leftIndex - 1]) {
      leftIndex++;
      continue;
    }
    if (rightIndex < nums.length - 1 && nums[rightIndex] === nums[rightIndex + 1]) {
      rightIndex--;
      continue;
    }
    const total = nums[leftIndex] + nums[rightIndex];
    if (sum === total) {
      result.push([nums[leftIndex], nums[rightIndex]]);
      leftIndex++;
      rightIndex--;
    } else if (total < sum) {
      leftIndex++;
    } else {
      rightIndex--;
    }
  }

  return result;
}
