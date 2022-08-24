import { ListNode } from './type';
/** easy 141. 环形链表 */
function hasCycle(head: ListNode | null): boolean {
  // 快慢指针，如果2指针能相遇，说明一定有环
  let slow = head;
  let fast = head;

  while (fast) {
    slow = slow.next;
    fast = fast.next?.next;

    if (fast && slow === fast) {
      return true;
    }
  }

  return false;
}
