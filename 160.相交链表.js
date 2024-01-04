/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  // 先把一个链表改成双向链表
  // 再按照另外一个链表，开始查询，且看节点有没有pre，有就是交点了
  // 甚至不用改成双向，随便给个标识就行了
};
// @lc code=end

