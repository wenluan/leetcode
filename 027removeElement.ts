/** easy 27. 移除元素 */
function removeElement(nums: number[], val: number): number {
  // 双指针
  let p = 0;
  let q = 0;
  while (q < nums.length) {
    if (nums[q] === val) {
      q++;
      continue;
    }
    if (q - p >= 1) {
      nums[p] = nums[q];
      p++;
      q++;
      continue;
    }
    p++;
    q++;
  }
  return p;
}
