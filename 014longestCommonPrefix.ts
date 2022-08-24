/** easy 14. 最长公共前缀 */
function longestCommonPrefix(strs: string[]): string {
  // 方法1: 逐个比较公共前缀
  // 方法2: 按照字典顺序排序，比较第一个和最后一个的公共前端

  // let maxPrefix = strs[0];
  // for (let i = 1; i < strs.length; i ++) {
  //     const tempPrefix = getPrefix(maxPrefix, strs[i]);
  //     if (!tempPrefix) {
  //         return '';
  //     }
  //     maxPrefix = tempPrefix;
  // }

  const sortedStrs = strs.sort((s1, s2) => {
    return s1.localeCompare(s2);
  });
  return getPrefix(sortedStrs[0], sortedStrs[strs.length - 1]);
}

function getPrefix(str1: string, str2: string): string {
  const length = Math.max(str1.length, str2.length);
  let prefix = '';

  for (let i = 0; i < length; i++) {
    if (str1[i] === str2[i]) {
      prefix += str1[i];
    } else {
      break;
    }
  }

  return prefix;
}
