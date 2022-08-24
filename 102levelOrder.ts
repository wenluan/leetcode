import { TreeNode } from './type';

/** middle 102. 二叉树的层序遍历 */
function levelOrder(root: TreeNode | null): number[][] {
  if (!root) {
    return [];
  }
  let queue = [root];
  const result = [];
  while (queue.length !== 0) {
    const level = [];
    for (let i = 0; i < queue.length; i++) {
      const node = queue[i];
      if (node.left) {
        level.push(node.left);
      }
      if (node.right) {
        level.push(node.right);
      }
    }
    result.push([...queue].map((node) => node.val));
    queue = level;
  }
  return result;
}
