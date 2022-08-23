// hard 51. N 皇后
function solveNQueens(n: number): string[][] {
  // 回溯
  const result: string[][] = [];

  const backtrack = (path: string[]) => {
    if (path.length === n) {
      result.push(path);
    }

    let row = '';

    for (let i = 0; i < n; i++) {
      row = `${'.'.repeat(i)}Q${'.'.repeat(n - i - 1)}`;

      if (notMatch(path, i, n)) {
        continue;
      }

      path.push(row);
      backtrack([...path]);
      path.pop();
    }
  };

  backtrack([]);

  return result;
}

const notMatch = (path: string[], index: number, n: number) => {
  const len = path.length;
  for (let i = 0; i < path.length; i++) {
    const s = path[i];
    // 同一列
    if (s[index] === 'Q') {
      return true;
    }
    // 左对角线
    const leftIndex = index - len + i;
    if (leftIndex >= 0 && s[leftIndex] === 'Q') {
      return true;
    }
    // 右对角线
    const rightIndex = index + len - i;
    if (rightIndex < n && s[rightIndex] === 'Q') {
      return true;
    }
  }

  return false;
};

solveNQueens(4);
