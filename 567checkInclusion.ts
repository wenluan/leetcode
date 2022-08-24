/** middle 567. 字符串的排列 */
function checkInclusion(s1: string, s2: string): boolean {
  if (s2.length < s1.length) {
    return false;
  }

  const map: Record<string, number> = {};
  let tempMap = {};
  for (let i = 0; i < s1.length; i++) {
    if (!map[s1[i]]) {
      map[s1[i]] = 1;
    } else {
      map[s1[i]]++;
    }
  }

  let startIndex = -1;

  for (let i = 0; i < s2.length; i++) {
    const c = s2[i];
    if (!map[c]) {
      tempMap = {};
      startIndex = -1;
      continue;
    }
    // s1 中不存在字符或者超出数量，判断是否是排列
    if (tempMap[c] === map[c]) {
      const subStr = s2.slice(startIndex, i);
      const index = subStr.split('').findIndex((s) => s === c);
      for (let j = 0; j < index; j++) {
        tempMap[subStr[j]]--;
      }
      startIndex = index + 1 + startIndex;
      continue;
    }

    if (startIndex === -1) {
      startIndex = i;
    }

    if (!tempMap[c]) {
      tempMap[c] = 1;
    } else {
      tempMap[c]++;
    }
    const result = checkIsTrue(map, tempMap);
    if (result) {
      return true;
    }
  }

  return false;
}

function checkIsTrue(map1: Record<string, number>, map2: Record<string, number>): boolean {
  let result = true;
  Object.keys(map1).forEach((c) => {
    if (map1[c] !== map2[c]) {
      result = false;
      return;
    }
  });
  return result;
}
