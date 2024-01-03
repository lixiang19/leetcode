/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}
const n1 = new ListNode(1)
const n2 = new ListNode(2)
const n3 = new ListNode(3)
const n4 = new ListNode(4)
const n5 = new ListNode(5)
n1.next = n2
n2.next = n3
n3.next = n4
n4.next = n5
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  // 只搞一个新节点，不断保存上一个
  let node = new ListNode(0)
  let current = head
  if (current) {
    while (current.next) {
      let temp = current.next
      current.next = node.next
      node.next = current
      current = temp
    }
    current.next = node.next
  }
  return current
};
// @lc code=end
