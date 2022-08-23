/** middle 22. 括号生成 */
/** 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。 */

function generateParenthesis(n: number): string[] {
  // 深度遍历 dfs + 剪枝
  const result: string[] = [];

  const dfs = (path: string, b: string, usedBracketNum: number, leftStack: string[]): void => {
    let usedNum = usedBracketNum;

    if (b === '(') {
      // 1. 已经到最高的使用个数，剪枝
      if (usedBracketNum === n) {
        return;
      }
      leftStack.push('(');
      usedNum++;
    } else if (b === ')') {
      // 2. 没有对应的左括号，剪枝
      if (!leftStack.length) {
        return;
      }
      leftStack.pop();
    }

    path = `${path}${b}`;

    if (path.length === n * 2) {
      result.push(path);
      return;
    }

    dfs(path, '(', usedNum, [...leftStack]);
    dfs(path, ')', usedNum, [...leftStack]);
  };

  dfs('', '(', 0, []);

  return result;
}
