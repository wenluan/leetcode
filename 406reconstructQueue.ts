/** middle 406. 根据身高重建队列 */
function reconstructQueue(people: number[][]): number[][] {
  // 先按照身高倒序和位置升序排序，然后插入排序
  const sortedPeople = people.sort((a, b) => {
    if (a[0] < b[0]) {
      return 1;
    }
    if (a[0] > b[0]) {
      return -1;
    }
    return a[1] - b[1];
  });

  const result = [];
  for (let persion of sortedPeople) {
    result.splice(persion[1], 0, persion);
  }

  return result;
}
