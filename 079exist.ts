// middle 79. 单词搜索
function exist(board: string[][], word: string): boolean {
  // 深度遍历 + 回溯
  const used = {};
  const m = board.length;
  const n = board[0].length;
  let result = false;

  const dfs = (path: string[], row: number, column: number) => {
    // 长度相等
    if (path.length === word.length) {
      if (path.join('') === word) {
        result = true;
      }
      return;
    }

    // 越界
    if (row < 0 || column < 0 || row >= m || column >= n) {
      return;
    }
    // 遍历过
    if (used[`${row},${column}`]) {
      return;
    }
    // 已存在
    if (result) {
      return;
    }

    const index = path.length - 1;
    // 剪枝
    if (index >= 0) {
      if (path[index] !== word[index]) {
        return;
      }
    }

    path.push(board[row][column]);
    used[`${row},${column}`] = true;

    dfs([...path], row - 1, column);
    dfs([...path], row + 1, column);
    dfs([...path], row, column - 1);
    dfs([...path], row, column + 1);

    path.pop();
    used[`${row},${column}`] = false;
  };

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      dfs([], i, j);
      if (result) {
        return true;
      }
    }
  }

  return false;
}

exist(
  [
    ['a', 'a', 'a'],
    ['A', 'A', 'A'],
    ['a', 'a', 'a'],
  ],
  'aAaaaAaaA',
);
