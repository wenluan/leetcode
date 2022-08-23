/** middle 56. 合并区间 */
function merge(intervals: number[][]): number[][] {
  // 按照区间的 start 从小到大排序
  const sortedIntervals = intervals.sort((a, b) => a[0] - b[0]);
  const result = [];

  let start = sortedIntervals[0][0];
  let end = sortedIntervals[0][1];
  for (let i = 1; i < sortedIntervals.length; i++) {
    const curStart = sortedIntervals[i][0];
    const curEnd = sortedIntervals[i][1];

    if (curStart > end) {
      result.push([start, end]);
      start = curStart;
      end = curEnd;
      continue;
    }
    end = Math.max(end, curEnd);
  }
  result.push([start, end]);

  return result;
}
