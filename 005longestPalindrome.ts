/** middle 5. 最长回文字串 */
function longestPalindrome(s: string): string {
  if (s.length <= 1) {
    return s;
  }

  let jresult = '';
  let oresult = '';

  for (let i = 0; i < s.length - 1; i++) {
    let restMinLength = Math.min(i, s.length - i - 1);
    let jTempResult = s[i];
    let oTempResult = '';

    // 回文字符串为奇数
    if (i !== 0) {
      for (let j = 0; j < restMinLength; j++) {
        const leftIndex = i - j - 1;
        const rightIndex = i + j + 1;
        if (s[leftIndex] === s[rightIndex]) {
          jTempResult = s.slice(leftIndex, rightIndex + 1);
          continue;
        } else {
          break;
        }
      }
    }

    // 回文字符串为偶数
    if (s[i] === s[i + 1]) {
      oTempResult = s.slice(i, i + 2);
      restMinLength = Math.min(i, s.length - 2);
      for (let j = 0; j < restMinLength; j++) {
        const leftIndex = i - j - 1;
        const rightIndex = i + j + 2;
        if (s[leftIndex] === s[rightIndex]) {
          oTempResult = s.slice(leftIndex, rightIndex + 1);
          continue;
        } else {
          break;
        }
      }
    }

    if (jTempResult.length > jresult.length) {
      jresult = jTempResult;
    }
    if (oTempResult.length > oresult.length) {
      oresult = oTempResult;
    }
  }

  return jresult.length > oresult.length ? jresult : oresult;
}
