/** middle 12. 整数转罗马数字 */
const intRomMap = {
  1000: 'M',
  900: 'CM',
  500: 'D',
  400: 'CD',
  100: 'C',
  90: 'XC',
  50: 'L',
  40: 'XL',
  10: 'X',
  9: 'IX',
  5: 'V',
  4: 'IV',
  1: 'I',
};

const intArr = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

function intToRoman(num: number): string {
  const resultArr = [];
  let restNum = num;

  intArr.forEach((intNum) => {
    const repeatNum = Math.floor(restNum / intNum);
    if (repeatNum >= 1) {
      for (let i = 0; i < repeatNum; i++) {
        resultArr.push(intRomMap[intNum]);
      }
      restNum = restNum - intNum * repeatNum;
    }
  });

  return resultArr.join('');
}
