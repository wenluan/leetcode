import { ListNode } from './type';

/** hard 25. K 个一组翻转链表 */
function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
  if (!head) {
    return null;
  }
  if (k === 1) {
    return head;
  }
  let first = head;
  let pre = null;
  let start = head;
  let end = head;
  let next = head;
  while (next) {
    for (let i = 1; i < k; i++) {
      end = end?.next;
    }
    // 结尾不足 n 个，不进行反转
    if (!end) {
      pre.next = next;
      break;
    }
    if (start === head) {
      first = end;
    }
    next = end.next;
    reverseList(start, k);
    if (!next) {
      start.next = null;
    }
    pre && (pre.next = end);
    pre = start;
    start = next;
    end = next;
  }
  return first;
}

function reverseList(head: ListNode, k: number): void {
  let cur = head;
  let next = head.next;
  for (let i = 1; i < k; i++) {
    const temp = next?.next || null;
    if (next) {
      next.next = cur;
    }
    cur = next;
    next = temp;
  }
}
