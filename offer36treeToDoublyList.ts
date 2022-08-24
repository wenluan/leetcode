/** middle 剑指 Offer 36. 二叉搜索树与双向链表 */
/**
 * // Definition for a Node.
 * function Node(val,left,right) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var treeToDoublyList = function (root) {
  let head = root;
  let tail = root;
  let lastNode = null;

  let dfs = (node) => {
    if (!node) {
      return;
    }
    dfs(node.left);
    if (node.val <= head.val) {
      head = node;
    }
    if (node.val >= tail.val) {
      tail = node;
    }
    if (lastNode) {
      node.left = lastNode;
      lastNode.right = node;
    }
    lastNode = node;
    dfs(node.right);
  };

  dfs(root);
  head && (head.left = tail);
  tail && (tail.right = head);
  return head;
};
