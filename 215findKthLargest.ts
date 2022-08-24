/** middle 215. 数组中的第K个最大元素 */
function findKthLargest(nums: number[], k: number): number {
  const sortedNums = nums.sort((a, b) => b - a);
  return sortedNums[k - 1];
}
