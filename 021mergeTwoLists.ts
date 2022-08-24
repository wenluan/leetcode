/** easy 21. 合并2个有序链表 */
function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  if (!list1 && !list2) {
    return null;
  }
  if (!list1) {
    return list2;
  }
  if (!list2) {
    return list1;
  }
  let firstNode = list1;
  let secondNode = list2;
  let head = null;
  let newNode = null;

  while (firstNode && secondNode) {
    const node = firstNode.val < secondNode.val ? firstNode : secondNode;
    if (!head) {
      head = node;
      newNode = node;
    } else {
      newNode.next = node;
      newNode = node;
    }
    if (firstNode.val < secondNode.val) {
      firstNode = firstNode.next;
    } else {
      secondNode = secondNode.next;
    }
  }

  const node = firstNode || secondNode || null;
  newNode.next = node;

  return head;
}
