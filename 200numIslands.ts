/** middle 200. 岛屿数量 */
function numIslands(grid: string[][]): number {
  let result = 0;
  for (let column = 0; column < grid.length; column++) {
    for (let row = 0; row < grid[0].length; row++) {
      // 如果是新的岛屿节点，记录数量并且把这个岛屿的节点都遍历一遍
      if (isNewIsland(grid, row, column)) {
        result++;
        dfs(grid, row, column);
      }
    }
  }

  return result;
}

// 深度优先遍历，把遍历过的节点设置成另一个值
function dfs(grid: string[][], row: number, column: number): void {
  if (!inArea(grid, row, column)) {
    return;
  }
  if (!isNewIsland(grid, row, column)) {
    return;
  }
  grid[column][row] = '2';

  dfs(grid, row + 1, column);
  dfs(grid, row - 1, column);
  dfs(grid, row, column + 1);
  dfs(grid, row, column - 1);
}

// 是否没有越界
function inArea(grid: string[][], row: number, column: number): boolean {
  return row >= 0 && row < grid[0].length && column >= 0 && column < grid.length;
}

// 是否是新的岛屿节点
function isNewIsland(grid: string[][], row: number, column: number): boolean {
  return grid[column][row] === '1';
}
