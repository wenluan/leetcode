import { TreeNode } from './type';

/** hard 124. 二叉树中的最大路径和 */
function maxPathSum(root: TreeNode | null): number {
  // 后序遍历二叉树
  let maxSum = -100000;

  const dfs = (node: TreeNode | null): number => {
    if (!node) {
      return 0;
    }
    const leftMax = dfs(node.left);
    const rightMax = dfs(node.right);
    maxSum = Math.max(maxSum, leftMax + rightMax + node.val);
    return Math.max(0, Math.max(leftMax, rightMax) + node.val);
  };

  dfs(root);

  return maxSum;
}
