import { TreeNode } from './type';

/** middle 98. 验证二叉搜索树 */
function isValidBST(root: TreeNode | null): boolean {
  if (!root) {
    return false;
  }
  let lastNum: number | null = null;
  let result = true;

  const middleDfs = (node: TreeNode) => {
    if (!node) {
      return;
    }
    if (!result) {
      return;
    }
    middleDfs(node.left);

    if (!result) {
      return;
    }
    if (lastNum === null) {
      lastNum = node.val;
    } else {
      result = node.val > lastNum;
      lastNum = node.val;
    }

    middleDfs(node.right);
  };

  middleDfs(root);
  return result;
}
