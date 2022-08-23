/** 11. 盛水最多的容器 */
/** 双指针 */

function maxArea(height: number[]): number {
  let result = 0;

  let leftIndex = 0;
  let rightIndex = height.length - 1;

  while (leftIndex < rightIndex) {
      const h1 = height[leftIndex];
      const h2 = height[rightIndex];
      const width = rightIndex - leftIndex;
      const tempResult = Math.min(h1, h2) * width;

      if (result < tempResult) {
          result = tempResult;
      }

      if (h1 < h2) {
          leftIndex ++;
      } else {
          rightIndex --;
      }
  }

  return result;
};