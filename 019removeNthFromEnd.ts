import { ListNode } from './type';
/** middle 19. 删除链表的倒数第 N 个节点 */
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let firstNode = head;
  if (!head.next && n) {
    return null;
  }
  if (!n) {
    return head;
  }
  let lastNode = head.next;
  let lastNNode = head.next;
  let lastNPlusNode = head;

  let lastNIndex = 1;
  let length = 2;
  while (lastNode.next) {
    length++;

    if (lastNIndex < n) {
      lastNode = lastNode.next;
      lastNIndex++;
      continue;
    }

    lastNode = lastNode.next;
    lastNNode = lastNNode.next;
    lastNPlusNode = lastNPlusNode.next;
  }
  if (n === length) {
    firstNode = firstNode.next;
  } else {
    lastNPlusNode.next = lastNNode.next;
    lastNNode = null;
  }

  return firstNode;
}
