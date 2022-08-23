/** middle 48. 旋转图像 */
function rotate(matrix: number[][]): void {
  // 自外向内逐层反转
  // 最多进行 Math.floor(n / 2) 次
  const n = matrix.length;
  if (n === 1) {
    return;
  }
  const rotateTime = Math.floor(n / 2);

  for (let i = 0; i < rotateTime; i++) {
    const tempRow = matrix[i].slice(i, n - i);
    for (let j = 0; j < n - i * 2 - 1; j++) {
      matrix[i][i + j] = matrix[n - i - j - 1][i];
      matrix[n - i - j - 1][i] = matrix[n - i - 1][n - i - j - 1];
      matrix[n - i - 1][n - i - j - 1] = matrix[i + j][n - i - 1];
      matrix[i + j][n - i - 1] = tempRow[j];
    }
  }
}
