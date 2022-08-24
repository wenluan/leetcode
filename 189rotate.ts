/** middle 189. 轮转数组 */
function rotate(nums: number[], k: number): void {
  const k2 = k % nums.length;
  const nums1 = nums.splice(0, nums.length - k2);
  nums.push(...nums1);
}
