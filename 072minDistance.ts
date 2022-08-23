// hard 72. 编辑距离
function minDistance(word1: string, word2: string): number {
  // 动态规划
  // word1.length 行，word2.length 列
  // dp[i][j] 表示 word1 想转换到 word2 需要的最少步骤
  // 增加：dp[i][j] = dp[i][j - 1] + 1
  // 删除：dp[i][j] = dp[i - 1][j] + 1
  // 修改：dp[i][j] = dp[i - 1][j - 1] + 1
  // 不相等：dp[i][j] = min(增，删，改)
  // 相等：dp[i][j] = min(dp[i][j], dp[i - 1, j - 1])

  const dp = new Array(word1.length + 1);
  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(word2.length + 1);
    dp[i][0] = i;
    if (i === 0) {
      for (let j = 1; j <= word2.length; j++) {
        dp[i][j] = j;
      }
    }
  }

  for (let i = 1; i <= word1.length; i++) {
    for (let j = 1; j <= word2.length; j++) {
      const add = dp[i][j - 1] + 1;
      const dele = dp[i - 1][j] + 1;
      const edit = dp[i - 1][j - 1] + 1;
      dp[i][j] = Math.min(add, dele, edit);
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = Math.min(dp[i][j], dp[i - 1][j - 1]);
      }
    }
  }

  return dp[word1.length][word2.length];
}
