/** middle 16. 最接近的三数之和 */
function threeSumClosest(nums: number[], target: number): number {
  // 排序 + 双指针
  let result = 0;
  let mindiff = 9999;

  const sortedNums = nums.sort((a, b) => a - b);

  for (let i = 0; i < sortedNums.length - 2; i++) {
    const num = sortedNums[i];
    let leftIndex = i + 1;
    let rightIndex = sortedNums.length - 1;
    while (leftIndex < rightIndex) {
      const sum = num + sortedNums[leftIndex] + sortedNums[rightIndex];
      const diff = Math.abs(sum - target);
      if (diff < mindiff) {
        result = sum;
        mindiff = diff;
      }

      if (sum > target) {
        rightIndex--;
      } else if (sum < target) {
        leftIndex++;
      } else {
        return target;
      }
    }
  }

  return result;
}
