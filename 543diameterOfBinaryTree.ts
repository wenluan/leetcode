import { TreeNode } from './type';

/** easy 543. 二叉树的直径 */
function diameterOfBinaryTree(root: TreeNode | null): number {
  let maxDia = 0;

  const dfs = (node: TreeNode | null): number => {
    if (!node) {
      return 0;
    }
    const left = dfs(node.left);
    const right = dfs(node.right);

    const max = Math.max(left, right);
    maxDia = Math.max(maxDia, left + right);
    return max + 1;
  };

  dfs(root);
  return maxDia;
}
