/** middle 93. 复原IP地址 */
function restoreIpAddresses(s: string): string[] {
  // 回溯 + 剪枝
  const result = [];
  backtrack(0, [], s, result);
  return result;
}

// 回溯函数
function backtrack(startIndex: number, subResult: string[], s: string, result: string[]): void {
  // 返回条件：
  // 1. 结果是 4 段，但是没有到字符串尾部，提前返回
  // 2. 结果是 4 段，并且到了尾部，加入 result，返回
  // 3. 到了尾部，但是不到 4 段，提前返回
  if (subResult.length === 4) {
    if (startIndex < s.length) {
      return;
    }
    result.push(subResult.join('.'));
    return;
  }
  if (startIndex >= s.length) {
    return;
  }

  // dfs 遍历，不能超过 255，不能是 0 开头
  for (let length = 1; length <= 3; length++) {
    if (s.length - startIndex < length) {
      break;
    }
    const subString = s.slice(startIndex, startIndex + length);
    if (length > 1 && subString[0] === '0') {
      break;
    }
    if (Number(subString) > 255) {
      break;
    }
    subResult.push(subString);
    backtrack(startIndex + length, subResult, s, result);
    subResult.pop();
  }
}
