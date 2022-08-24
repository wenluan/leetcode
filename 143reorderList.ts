/** middle 143. 重排链表 */
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

import { ListNode } from './type';

/**
 Do not return anything, modify head in-place instead.
 */
function reorderList(head: ListNode | null): void {
  if (!head || !head.next || !head.next.next) {
    return;
  }

  // 思路：1. 先通过快慢指针分成2个链表
  // 2. 反转第二个链表
  // 3. 重新排序拼接

  let slowNode = head;
  let fastNode = head;
  while (fastNode?.next) {
    fastNode = fastNode.next.next;
    slowNode = slowNode.next;
  }

  let secondHead = slowNode.next;
  slowNode.next = null;

  let secondListNode = reverseNodeList(secondHead);
  let firstListNode = head;

  while (firstListNode) {
    if (!secondListNode) {
      return;
    }
    const tempSecondNode = secondListNode.next;
    const tempFirstNode = firstListNode.next;

    firstListNode.next = secondListNode;
    secondListNode.next = tempFirstNode;
    secondListNode = tempSecondNode;
    firstListNode = tempFirstNode;
  }
}

// 1 2 3 4

// 5 6 7

// 反转链表
function reverseNodeList(head: ListNode | null): ListNode | null {
  if (!head || !head.next) {
    return head;
  }

  let node = head;
  let nextNode = head.next;

  while (nextNode) {
    const tempNode = node;
    node = nextNode;
    nextNode = node.next;
    node.next = tempNode;
    if (tempNode === head) {
      tempNode.next = null;
    }
  }

  return node;
}
