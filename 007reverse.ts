/** middle 7. 整数反转 */
function reverse(x: number): number {
  const s = String(x);
  const fuhao = s[0] === '-' ? s[0] : '';
  const intS = fuhao ? s.slice(1, s.length) : s;
  const sArr: string[] = [];
  for (let i = 0; i < intS.length; i++) {
    sArr.unshift(intS[i]);
  }
  const resultS = fuhao + sArr.join('');
  const result = Number(resultS);
  if (Math.abs(result) > Math.pow(2, 31)) {
    return 0;
  }
  return result;
}
