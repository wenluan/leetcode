import { TreeNode } from './type';

/** middle 236. 二叉树的最近公共祖先 */
function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
  if (!root) {
    return null;
  }
  const path: TreeNode[] = [];
  let visited = [];
  let isEnd = false;

  function dfs(treeNode: TreeNode | null): void {
    if (!treeNode || isEnd) {
      return;
    }
    if (!visited.length) {
      path.push(treeNode);
    }
    const isTargetNode = treeNode.val === p.val || treeNode.val === q.val;
    if (isTargetNode && !visited.length) {
      visited.push(treeNode);
    }
    if (isTargetNode && treeNode.val !== visited[0].val) {
      isEnd = true;
    }
    if (!isEnd) {
      dfs(treeNode.left);
      dfs(treeNode.right);
      if (treeNode.val === path[path.length - 1].val && !isEnd) {
        const node = path.pop();
        if (node.val === root.val) {
          isEnd = true;
          path.push(treeNode);
        }
      }
    }
  }

  dfs(root);
  return path[path.length - 1] || null;
}
