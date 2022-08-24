import { TreeNode } from './type';

/** middle 114. 二叉树展开为链表 */
function flatten(root: TreeNode | null): void {
  let preNode = null;
  const preorder = (node: TreeNode | null) => {
    if (!node) {
      return;
    }
    const leftNode = node.left;
    const rightNode = node.right;
    if (!preNode) {
      preNode = node;
    } else {
      preNode.left = null;
      preNode.right = node;
      preNode = node;
    }
    preorder(leftNode);
    preorder(rightNode);
  };

  preorder(root);
}
