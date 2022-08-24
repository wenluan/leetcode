/** middle 6. z 字行变换 */
function convert(s: string, numRows: number): string {
  if (numRows === 1) {
    return s;
  }

  const tempArr = [];

  // 初始化二维数组
  for (let i = 0; i < numRows; i++) {
    tempArr.push([]);
  }

  // 将字符放入对应位置
  for (let i = 0; i < s.length; i++) {
    setCharToArr(i, s[i], tempArr);
  }

  const tempStrArr = [];
  // 合成新的字符串
  for (let i = 0; i < numRows; i++) {
    tempStrArr.push(tempArr[i].join(''));
  }

  return tempStrArr.join('');
}

function setCharToArr(index: number, s: string, arr: string[][]) {
  const numRows = arr.length;
  const oneTurnNum = numRows + numRows - 2;
  const turnIndex = Math.floor(index / oneTurnNum);
  const insideIndex = index % oneTurnNum;
  const rowIndex = insideIndex < numRows ? insideIndex : numRows - (insideIndex + 1 - numRows) - 1;
  const oneTurnColumn = numRows - 1;
  const insideColumnIndex = insideIndex < numRows ? 0 : insideIndex - numRows + 1;
  const columnIndex = turnIndex * oneTurnColumn + insideColumnIndex;
  arr[rowIndex][columnIndex] = s;
}
