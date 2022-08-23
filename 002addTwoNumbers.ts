/** middle 2. 两数相加 */

import { ListNode } from './type';

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  if (!l1 && !l2) {
    return null;
  }
  if (!l1 || !l2) {
    return l1 || l2;
  }
  let flag = 0;
  let result: ListNode | null = null;
  let temp = new ListNode(0, null);
  while (l1 !== null || l2 !== null || flag !== 0) {
    const num1 = l1?.val || 0;
    const num2 = l2?.val || 0;
    const res = num1 + num2 + flag;
    flag = res / 10 >= 1 ? 1 : 0;

    const newNode = new ListNode(res % 10);
    if (!result) {
      result = newNode;
      temp = result;
    } else {
      temp.next = newNode;
      temp = temp.next;
    }

    l1 = l1?.next || null;
    l2 = l2?.next || null;
  }

  return result;
}
