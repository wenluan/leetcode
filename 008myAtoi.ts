/** middle 8. 字符串转换整数 */
function myAtoi(s: string): number {
  const ss = s.trim();
  const result: string[] = [];
  const opFlag = ['-', '+'];
  const endFlag = [' ', '.'];
  let lastIsNum = true;

  for (let i = 0; i < ss.length; i++) {
    const c = ss[i];
    if (opFlag.includes(c) && !result.length) {
      if (!lastIsNum) {
        break;
      }
      if (c === '-') {
        result.push(c);
      }
      lastIsNum = false;
      continue;
    }
    if (opFlag.includes(c) && result.length) {
      break;
    }
    if (endFlag.includes(c)) {
      break;
    }
    if (Number(c) >= 0 && Number(c) <= 9) {
      result.push(c);
    } else {
      break;
    }
  }

  const resultN = Number(result.join('')) || 0;
  const limit = Math.pow(2, 31);
  if (resultN < -limit) {
    return -limit;
  }
  if (resultN >= limit) {
    return limit - 1;
  }
  return resultN;
}
