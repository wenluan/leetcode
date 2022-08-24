/** middle 剑指 Offer 45. 把数组排成最小的数 */
function minNumber(nums: number[]): string {
  const sortedNums = nums.sort((a, b) => Number(`${a}${b}`) - Number(`${b}${a}`));
  return sortedNums.join('');
}
