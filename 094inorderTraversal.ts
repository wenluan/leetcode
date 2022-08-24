import { TreeNode } from './type';

/** easy 94. 二叉树的中序遍历 */
function inorderTraversal(root: TreeNode | null): number[] {
  const result = [];

  const dfs = (node: TreeNode | null) => {
    if (!node) {
      return;
    }
    dfs(node.left);
    result.push(node.val);
    dfs(node.right);
  };

  dfs(root);

  return result;
}
