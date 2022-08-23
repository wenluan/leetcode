/** middle 46. 全排列 */
/** 回溯 */
function permute(nums: number[]): number[][] {
  const result: number[][] = [];
  backtrack(nums, [], {}, result);
  return result;
}

function backtrack(nums: number[], path: number[], usedMap: Record<number, boolean>, result: number[][]): void {
  if (nums.length === path.length) {
    result.push([...path]);
    return;
  }

  for (let i = 0; i < nums.length; i++) {
    if (usedMap[i]) {
      continue;
    }
    path.push(nums[i]);
    usedMap[i] = true;
    // dfs 遍历
    backtrack(nums, path, usedMap, result);
    // 回溯
    path.pop();
    usedMap[i] = false;
  }
}
