/** middle 139. 单词拆分 */
function wordBreak(s: string, wordDict: string[]): boolean {
  // 动态规划
  // dp[i] = dp[j] && s[j] - s[i - 1] 在词典中
  // dp[0] = true
  const dp = new Array(s.length + 1);
  dp[0] = true;
  for (let i = 1; i <= s.length; i++) {
    for (let j = 0; j < i; j++) {
      const word = s.slice(j, i);
      dp[i] = dp[j] && wordDict.includes(word);
      if (dp[i]) {
        break;
      }
    }
  }

  return dp[s.length];
}
