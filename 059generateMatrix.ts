/** middle 59. 螺旋矩阵2 */
function generateMatrix(n: number): number[][] {
  // 先生成一个 n * n 矩阵，模拟螺旋过程，填入数字
  const result = [];
  for (let i = 0; i < n; i++) {
    result.push(new Array(n).fill(0));
  }

  let left = 0;
  let top = 0;
  let right = n - 1;
  let bottom = n - 1;

  let cur = 1;
  let total = n * n;

  while (cur <= total) {
    // 左到右
    for (let i = left; i <= right; i++) {
      result[top][i] = cur;
      cur++;
    }
    top++;
    // 上到下
    for (let i = top; i <= bottom; i++) {
      result[i][right] = cur;
      cur++;
    }
    right--;
    // 右到左
    for (let i = right; i >= left; i--) {
      result[bottom][i] = cur;
      cur++;
    }
    bottom--;
    // 下到上
    for (let i = bottom; i >= top; i--) {
      result[i][left] = cur;
      cur++;
    }
    left++;
  }

  return result;
}
