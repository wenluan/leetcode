/** easy 26. 删除有序数组中的重复项 */
function removeDuplicates(nums: number[]): number {
  // let lastNum = nums[0];
  // for (let i = 1; i < nums.length; i ++) {
  //     if (nums[i] === lastNum) {
  //         nums.splice(i, 1);
  //         i --;
  //     } else {
  //         lastNum = nums[i];
  //     }
  // }
  // return nums.length;

  // 双指针
  if (nums.length === 1) {
    return 1;
  }
  let p = 0;
  let q = 1;

  while (q < nums.length) {
    if (nums[p] === nums[q]) {
      q++;
      continue;
    } else if (q - p === 1) {
      p++;
      q++;
    } else {
      nums[p + 1] = nums[q];
      p++;
      q++;
    }
  }

  return p + 1;
}
