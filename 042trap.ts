// hard 42. 接雨水
function trap(height: number[]): number {
  // 需要求出左边最高的墙的高度和右边最高的墙的高度
  const n = height.length;
  const rightMaxHeight = new Array(n).fill(0);
  let maxLeftHeight = 0;

  for (let i = 1; i < n - 1; i++) {
    rightMaxHeight[n - i - 1] = Math.max(rightMaxHeight[n - i], height[n - i]);
  }

  let result = 0;
  for (let i = 1; i < n - 1; i++) {
    maxLeftHeight = Math.max(maxLeftHeight, height[i - 1]);
    const minHeight = Math.min(maxLeftHeight, rightMaxHeight[i]);
    const curHeight = height[i];
    const curResult = Math.max(minHeight - curHeight, 0);
    result += curResult;
  }

  return result;
}

trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]);
