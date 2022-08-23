/** 3. 无重复字符的最大子串 */

function lengthOfLongestSubstring(s: string): number {
  // 滑动窗口
  let unrepeatedStr = '';
  let maxLength = 0;
  for (let i = 0; i < s.length; i ++) {
    const curChar = s[i];
    const index = unrepeatedStr.indexOf(curChar);
    if (index === -1) {
      unrepeatedStr = `${unrepeatedStr}${curChar}`;
      maxLength = Math.max(unrepeatedStr.length, maxLength);
      continue;
    }
    unrepeatedStr = `${unrepeatedStr.slice(index + 1)}${curChar}`;
    maxLength = Math.max(unrepeatedStr.length, maxLength);
  }
  return maxLength;
};