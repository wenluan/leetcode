import { ListNode } from './type';

/** middle 24. 两两交换链表中的节点 */
function swapPairs(head: ListNode | null): ListNode | null {
  if (!head) {
    return null;
  }
  let firstNode = head;
  let lastNode = head;
  let isFirst = true;
  let lastTwoNode = null;
  while (lastNode && lastNode.next) {
    if (isFirst) {
      firstNode = lastNode.next;
      isFirst = false;
    }
    let tempNode = lastNode.next.next;
    if (lastTwoNode) {
      lastTwoNode.next = lastNode.next;
    }
    lastNode.next.next = lastNode;
    lastNode.next = tempNode;
    lastTwoNode = lastNode;

    lastNode = lastNode.next;
  }

  return firstNode;
}
