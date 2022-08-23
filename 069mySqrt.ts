/** easy 69. x 的平方根 */
function mySqrt(x: number): number {
  // 牛顿迭代法
  if (x === 0) {
    return 0;
  }
  return Math.floor(sqrt(x, x));
}

function sqrt(x: number, s: number): number {
  const res = (x + s / x) / 2;
  if (res === x) {
    return res;
  }
  return sqrt(res, s);
}
