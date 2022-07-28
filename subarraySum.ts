function subarraySum(nums: number[], k: number): number {
  // 前缀和
  // 使用 hash map 存储前缀和出现的次数，判断之前是否有差为 k 的前缀和
  const prefixMap: Record<number, number> = {};
  prefixMap[0] = 1;
  let count = 0;
  let prefixSum = 0;

  for (let i = 0; i < nums.length; i ++) {
    prefixSum += nums[i];
    let targetKey = prefixSum - k;
    if (prefixMap[targetKey]) {
        count += prefixMap[targetKey];
    }
    if (!prefixMap[prefixSum]) {
        prefixMap[prefixSum] = 1;
    } else {
        prefixMap[prefixSum] ++;
    }
  }

  return count;
};

const arr = [1,1,1];
const result2 = subarraySum(arr, 2);
