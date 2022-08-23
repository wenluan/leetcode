/** middle 39. 组合总数 */
function combinationSum(candidates: number[], target: number): number[][] {
  // 回溯 + 剪枝
  const result = [];
  const nums = candidates.sort((a, b) => a - b);

  const backtrack = (path: number[], index: number, sum: number) => {
    if (path.length && sum === target) {
      result.push(path);
      return;
    }

    for (let i = index; i < nums.length; i++) {
      const num = nums[i];
      const nextSum = sum + num;
      if (nextSum > target) {
        return;
      }
      path.push(num);
      backtrack([...path], i, nextSum);
      path.pop();
    }
  };

  backtrack([], 0, 0);
  return result;
}
