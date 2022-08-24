import { TreeNode } from './type';

/** easy 101. 对称二叉树 */
function isSymmetric(root: TreeNode | null): boolean {
  // 同时前序遍历左子树，后序遍历右子树，比较值是否相等
  if (!root) {
    return false;
  }
  const left = root.left;
  const right = root.right;

  const dfs = (leftNode: TreeNode | null, rightNode: TreeNode | null): boolean => {
    if (!leftNode || !rightNode) {
      return !leftNode && !rightNode;
    }

    if (!dfs(leftNode.left, rightNode.right)) {
      return false;
    }
    if (leftNode.val !== rightNode.val) {
      return false;
    }
    if (!dfs(leftNode.right, rightNode.left)) {
      return false;
    }

    return true;
  };

  return dfs(left, right);
}
