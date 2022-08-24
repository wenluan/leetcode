/** middle 394. 字符串解码 */
function decodeString(s: string): string {
  // 栈
  const stack = [];
  let num = '';
  let res = '';
  let result = '';

  // 3[a2[c]a]ey
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    // 把数字和前置字符入栈
    if (c === '[') {
      stack.push([Number(num || 1), res]);
      num = '';
      res = '';
      // 出栈
    } else if (c === ']') {
      const [lastNum, lastRes] = stack.pop();
      res = `${lastRes}${res.repeat(lastNum)}`;
      if (!stack.length) {
        result = `${result}${res}`;
        res = '';
      }
      // 记录数字
    } else if (!isNaN(Number(c))) {
      num = `${num}${c}`;
      // 记录字符串
    } else {
      res = `${res}${c}`;
    }
  }

  return `${result}${res}`;
}
