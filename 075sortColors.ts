// middle 75. 颜色分类
/**
  Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
  // 荷兰国旗问题 双指针
  // p0 指向第一个 1
  // p1 指向第一个 2
  // 遍历数组，0 与 p0 交换，1 与 p1 交换

  let p0 = 0;
  let p1 = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      if (i !== p0) {
        const temp = nums[i];
        nums[i] = nums[p0];
        nums[p0] = temp;
      }
      p0++;
      if (nums[p1] !== 2) {
        p1++;
      }
    }
    if (nums[i] === 1) {
      if (i !== p1) {
        const temp = nums[i];
        nums[i] = nums[p1];
        nums[p1] = temp;
      }
      p1++;
    }
  }
}

sortColors([1, 0]);
