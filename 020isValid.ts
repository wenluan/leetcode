/** easy 20. 有效的括号 */
/** 栈 */
const map = {
  ')': '(',
  ']': '[',
  '}': '{',
};

const leftValue = ['(', '[', '{'];

function isValid(s: string): boolean {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    const value = s[i];
    if (leftValue.includes(value)) {
      stack.push(value);
      continue;
    }
    const left = map[value];
    if (left !== stack.pop()) {
      return false;
    }
  }
  return stack.length === 0;
}
