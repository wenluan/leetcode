/** middle 剑指 Offer 04. 二维数组中的查找 */
function findNumberIn2DArray(matrix: number[][], target: number): boolean {
  if (!matrix.length || !matrix[0].length) {
    return false;
  }

  // 二分
  let row = 0;
  let column = matrix[0].length - 1;

  while (row < matrix.length && column >= 0) {
    const num = matrix[row][column];
    if (num === target) {
      return true;
    } else if (num < target) {
      row++;
    } else {
      column--;
    }
  }
  return false;
}
