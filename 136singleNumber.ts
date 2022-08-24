/** easy 136. 只出现一次的数字 */
function singleNumber(nums: number[]): number {
  // 异或
  // 2个相同的数字异或之后为 0
  let result = 0;
  nums.forEach((num) => {
    result = result ^ num;
  });
  return result;
}
