function maxAreaOfIsland(grid: number[][]): number {
    let maxArea = 0;

    // 深度遍历岛屿函数
    const dfs = (rowIndex: number, columnIndex: number, result: number[]): void => {
        // 1. 判断是否越界
        if (rowIndex < 0 || rowIndex >= grid[0].length || columnIndex < 0 || columnIndex >= grid.length) {
            return;
        }
        // 2. 判断是否是陆地或者是否遍历过
        if (grid[columnIndex][rowIndex] === 0 || grid[columnIndex][rowIndex] === -1) {
            return;
        }
        // 3. 修改已经遍历过的值
        grid[columnIndex][rowIndex] = -1;
        // 4. 计算面积
        result.push(1);

        // 5. 遍历其他节点
        dfs(rowIndex - 1, columnIndex, result);
        dfs(rowIndex + 1, columnIndex, result);
        dfs(rowIndex, columnIndex - 1, result);
        dfs(rowIndex, columnIndex + 1, result);
    }

    // 遍历整个图，计算最大岛屿面积
    for (let column = 0; column < grid.length; column ++) {
        for (let row = 0; row < grid[0].length; row ++) {
            let result: number[] = [];
            dfs(row, column, result);
            maxArea = Math.max(result.length, maxArea);
        }
    }

    return maxArea;
};

const nums = [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]];

const result = maxAreaOfIsland(nums);

console.log(result);