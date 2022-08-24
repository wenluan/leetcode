import { ListNode } from './type';

/** easy offer24 反转链表 */
function reverseList(head: ListNode | null): ListNode | null {
  if (!head) {
    return null;
  }
  let cur = head;
  let next = head.next;
  while (next) {
    const temp = next.next;
    next.next = cur;
    if (cur === head) {
      cur.next = null;
    }
    cur = next;
    next = temp;
  }

  return cur;
}
