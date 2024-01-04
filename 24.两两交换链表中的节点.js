/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function swap(current, pre, virtualNode) {
  const next = current.next
  if (!next) {
    return
  }
  // 需要上一个节点来交换
  // 需要一个虚拟节点来当做两对之间的中介点
  virtualNode.next = next.next
  next.next = current
  current.next = virtualNode
  if (pre) {
    pre.next = next
  }
  pre = current
  if (virtualNode.next) {
    swap(virtualNode.next, pre, virtualNode)
  } else {
    return
  }

}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  const current = head
  let pre = null
  const virtualNode = new ListNode(0)
  if (current) {
    return swap(current, pre, virtualNode)
  }

};
// @lc code=end

