// middle 18. 四数之和
const maxLength = 4;

function fourSum(nums: number[], target: number): number[][] {
  const result: number[][] = [];
  const sortedNums = nums.sort((a, b) => a - b);

  const backtrack = (path: number[], index: number) => {
    if (path.length === maxLength) {
      if (path.reduce((pre, cur) => pre + cur) === target) {
        result.push(path);
      }
      return;
    }
    if (path.length + nums.length - index < maxLength) {
      return;
    }
    for (let i = index; i < nums.length; i++) {
      if (i > index && sortedNums[i] === sortedNums[i - 1]) {
        continue;
      }
      path.push(sortedNums[i]);

      const restNum = maxLength - path.length;
      const sum = path.reduce((pre, cur) => pre + cur);
      if (restNum * sortedNums[i + 1] > target - sum) {
        break;
      }

      backtrack([...path], i + 1);
      path.pop();
    }
  };

  backtrack([], 0);
  return result;
}
fourSum([1, 0, -1, 0, -2, 2], 0);
