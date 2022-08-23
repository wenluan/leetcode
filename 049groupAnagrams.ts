/** middle 49. 字母异位词分组 */
function groupAnagrams(strs: string[]): string[][] {
  const map = {};

  for (let s of strs) {
    const key = getKey(s);
    if (!map[key]) {
      map[key] = [s];
    } else {
      map[key].push(s);
    }
  }

  return Object.values(map);
}

const getKey = (s: string): string => {
  return s.split('').sort().join('');
};
