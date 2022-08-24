/** middle 763. 划分字母区间 */
function partitionLabels(s: string): number[] {
  // 2 次循环扫描字符串，第一次记录各个字母最远的位置，第二次判断是否可以切割

  const maxPositionMap: Record<string, number> = {};
  for (let i = 0; i < s.length; i++) {
    maxPositionMap[s[i]] = i;
  }

  const result: number[] = [];
  let startIndex = 0;
  let maxPosition = 0;
  for (let i = 0; i < s.length; i++) {
    const curMaxPosition = maxPositionMap[s[i]];
    maxPosition = Math.max(maxPosition, curMaxPosition);
    if (maxPosition === i) {
      result.push(i - startIndex + 1);
      startIndex = i + 1;
    }
  }

  return result;
}
