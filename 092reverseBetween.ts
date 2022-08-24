/** middle 92. 反转链表2 */
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

function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
  if (left === right) {
    return head;
  }
  let leftIndex = 0;
  let leftNode = head;
  let nextNode = head.next;
  let beforeStartNode = null;
  let startNode = null;

  while (leftIndex < right - 1) {
    if (leftIndex < left - 1) {
      if (leftIndex === left - 2) {
        beforeStartNode = leftNode;
      }
      leftIndex++;
      leftNode = nextNode;
      nextNode = nextNode.next;
      continue;
    }
    if (leftIndex === left - 1) {
      startNode = leftNode;
    }

    let tempNode = leftNode;
    leftNode = nextNode;
    nextNode = leftNode.next;
    leftNode.next = tempNode;

    leftIndex++;
  }

  startNode.next = nextNode;
  // 从第一个开始反转
  if (!beforeStartNode) {
    return leftNode;
  }

  beforeStartNode.next = leftNode;
  return head;
}
