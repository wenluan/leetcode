/** middle 88. 合并两个有序数组 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let p = m - 1;
  let q = n - 1;
  while (q >= 0) {
    if (p < 0) {
      nums1[q] = nums2[q];
      q--;
      continue;
    }
    if (nums1[p] > nums2[q]) {
      nums1[p + q + 1] = nums1[p];
      p--;
    } else {
      nums1[p + q + 1] = nums2[q];
      q--;
    }
  }
}
