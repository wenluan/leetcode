/** middle 78.子集 */
function subsets(nums: number[]): number[][] {
  // 回溯
  const result = [];
  backtrace([], 0, nums, result);
  return result;
}

function backtrace(subNums: number[], index: number, nums: number[], result: number[][]): void {
  result.push(subNums);
  for (let i = index; i < nums.length; i++) {
    subNums.push(nums[i]);
    backtrace([...subNums], i + 1, nums, result);
    subNums.pop();
  }
}
