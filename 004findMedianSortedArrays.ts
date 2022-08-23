// hard 4. 寻找2个数组的中位数
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  // 复杂度 O(log(m + n)) 二分查找
  // 题目转换成求2个数组中第 k 小的数字，比较 2 个数组第 k / 2 个数字，小的可以全部排除

  const totalLength = nums1.length + nums2.length;
  let targetIndex = Math.ceil(totalLength / 2);

  function findMinKNum(nums1: number[], nums2: number[], k: number) {
    if (!nums1.length) {
      return nums2[k - 1];
    }
    if (!nums2.length) {
      return nums1[k - 1];
    }
    if (k === 1) {
      return Math.min(nums1[0], nums2[0]);
    }
    const halfK = Math.floor(k / 2);
    const target1 = nums1.length < halfK ? nums1[nums1.length - 1] : nums1[halfK - 1];
    const target2 = nums2.length < halfK ? nums2[nums2.length - 1] : nums2[halfK - 1];
    if (nums1.length < halfK && target1 < nums2[halfK - 1]) {
      return nums2[k - nums1.length - 1];
    }
    if (nums2.length < halfK && target2 < nums1[halfK - 1]) {
      return nums1[k - nums2.length - 1];
    }
    if (target1 <= target2) {
      return findMinKNum(nums1.slice(halfK), [...nums2], k - halfK);
    } else {
      return findMinKNum([...nums1], nums2.slice(halfK), k - halfK);
    }
  }

  if (totalLength % 2 === 0) {
    const m1 = findMinKNum([...nums1], [...nums2], targetIndex);
    const m2 = findMinKNum([...nums1], [...nums2], targetIndex + 1);
    return (m1 + m2) / 2;
  }

  return findMinKNum([...nums1], [...nums2], targetIndex);
}
