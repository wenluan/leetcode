/** easy 704. 二分查找 */
function search(nums: number[], target: number): number {
  let leftIndex = 0;
  let rightIndex = nums.length - 1;

  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (target > nums[middleIndex]) {
      leftIndex = middleIndex + 1;
    } else if (target < nums[middleIndex]) {
      rightIndex = middleIndex - 1;
    } else {
      return middleIndex;
    }
  }
  return -1;
}
