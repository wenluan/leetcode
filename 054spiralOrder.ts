/** middle 54. 螺旋矩阵 */
export function spiralOrder(matrix: number[][]): number[] {
  const result = [];
  dfs([...matrix], 0, 0, result);
  return result;
}

// 递归遍历
function dfs(matrix: number[][], row: number, column: number, result: number[]): void {
  if (!inArea(matrix, row, column)) {
    return;
  }

  if (!isNewItem(matrix, row, column)) {
    return;
  }

  result.push(matrix[column][row]);
  matrix[column][row] = -101;

  if (!isNewItem(matrix, row - 1, column) || !inArea(matrix, row - 1, column)) {
    dfs(matrix, row, column - 1, result);
  }
  dfs(matrix, row + 1, column, result);
  dfs(matrix, row, column + 1, result);
  dfs(matrix, row - 1, column, result);
}

function inArea(matrix: number[][], row: number, column: number): boolean {
  return row >= 0 && row < matrix[0].length && column >= 0 && column < matrix.length;
}

function isNewItem(matrix: number[][], row: number, column: number): boolean {
  return matrix[column][row] !== -101;
}
