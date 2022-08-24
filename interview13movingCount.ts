/** middle 面试题13. 机器人的运动范围 */
function movingCount(m: number, n: number, k: number): number {
  // dfs 遍历
  const arr = [];
  for (let i = 0; i < m; i++) {
    arr.push([]);
    for (let j = 0; j < n; j++) {
      arr[i].push(0);
    }
  }
  let result = 0;

  function dfs(arr: number[][], rowIndex: number, columnIndex: number): void {
    // 返回条件：
    // 1. 越界
    // 2. 下标的和大于目标值
    // 3. 走过这个格子
    if (rowIndex < 0 || rowIndex >= arr[0].length || columnIndex < 0 || columnIndex >= arr.length) {
      return;
    }
    if (arr[columnIndex][rowIndex] === 1) {
      return;
    }

    let sum = 0;
    `${rowIndex}${columnIndex}`.split('').forEach((num) => (sum += Number(num)));
    if (sum > k) {
      return;
    }

    arr[columnIndex][rowIndex] = 1;
    result++;

    dfs(arr, rowIndex, columnIndex - 1);
    dfs(arr, rowIndex, columnIndex + 1);
    dfs(arr, rowIndex - 1, columnIndex);
    dfs(arr, rowIndex + 1, columnIndex);
  }

  dfs(arr, 0, 0);
  return result;
}
