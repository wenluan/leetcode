/** middle 739. 每日温度 */
function dailyTemperatures(temperatures: number[]): number[] {
  if (temperatures.length === 1) {
    return [0];
  }
  // 栈，递减，判断下标差
  const stack: number[][] = [];
  const result: number[] = new Array(temperatures.length).fill(0);
  for (let i = 0; i < temperatures.length; i++) {
    const tem = temperatures[i];
    if (!stack.length) {
      stack.push([i, tem]);
      continue;
    }
    while (stack.length && tem > stack[stack.length - 1][1]) {
      const [index] = stack.pop();
      result[index] = i - index;
    }
    stack.push([i, tem]);
  }

  return result;
}
