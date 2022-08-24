/** easy 9. 回文数 */
function isPalindrome(x: number): boolean {
  if (x < 0) {
    return false;
  }
  if (x < 10) {
    return true;
  }
  let result = true;
  const s = String(x);
  const halfLength = Math.floor(s.length / 2);

  for (let i = 0; i < halfLength; i++) {
    const leftIndex = halfLength - i - 1;
    const rightIndex = s.length % 2 === 0 ? halfLength + i : halfLength + i + 1;
    if (s[leftIndex] !== s[rightIndex]) {
      result = false;
      break;
    }
  }

  return result;
}
