/** easy 13. 罗马数字转整数 */
const map = {
  I: 1,
  IV: 4,
  V: 5,
  IX: 9,
  X: 10,
  XL: 40,
  L: 50,
  XC: 90,
  C: 100,
  CD: 400,
  D: 500,
  CM: 900,
  M: 1000,
};

export function romanToInt(s: string): number {
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    let value = map[s[i]];
    let combineValue = 0;
    if (s[i + 1]) {
      combineValue = map[s.slice(i, i + 2)];
    }
    if (combineValue) {
      value = combineValue;
      i++;
    }
    result += value;
  }
  return result;
}
