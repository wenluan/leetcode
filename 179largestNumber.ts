/** middle 179. 最大数 */
function largestNumber(nums: number[]): string {
  if (!Number(nums.join(''))) {
    return '0';
  }
  const sortedNums = nums.sort((a, b) => Number(`${b}${a}`) - Number(`${a}${b}`));
  return sortedNums.join('');
}
