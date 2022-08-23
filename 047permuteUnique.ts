/** middle 47. 全排列2 */
function permuteUnique(nums: number[]): number[][] {
  // 回溯 + dfs + 剪枝
  // 先排序，如果和上一个值相等，就剪枝
  const result = [];
  const visited = new Array(nums.length).fill(false);

  backtrack(
    [],
    visited,
    nums.sort((a, b) => a - b),
    result,
  );

  return result;
}

function backtrack(path: number[], visited: boolean[], nums: number[], result: number[][]): void {
  if (path.length === nums.length) {
    result.push([...path]);
    return;
  }

  for (let i = 0; i < nums.length; i++) {
    // 访问过或者和前一个重复，剪枝
    if (visited[i]) {
      continue;
    }
    if (i > 0 && nums[i] === nums[i - 1] && !visited[i - 1]) {
      continue;
    }
    path.push(nums[i]);
    visited[i] = true;
    backtrack([...path], visited, nums, result);
    path.pop();
    visited[i] = false;
  }
}
