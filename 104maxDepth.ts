import { TreeNode } from './type';

/** easy 104. 二叉树的最大深度 */
function maxDepth(root: TreeNode | null): number {
  let maxDeep = 0;
  const dfs = (node: TreeNode | null, deep: number) => {
    if (!node) {
      return;
    }
    maxDeep = Math.max(deep + 1, maxDeep);
    dfs(node.left, deep + 1);
    dfs(node.right, deep + 1);
  };
  dfs(root, 0);
  return maxDeep;
}
