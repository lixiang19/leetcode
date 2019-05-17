/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/*
  思路：新建一个空节点作为新链表的头，比较l1、l2的值，将较小的一个作为新链表的下个节点，并将下个节点设为当前节点，较小节点指向下一个。
*/
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let head = new ListNode()
    current = head
    while (l1 && l2) {
        l1.val > l2.val ? (current = current.next = l2, l2 = l2.next) : (current = current.next = l1, l1 = l1.next)
    }
    l1 ? current.next = l1 : current.next = l2
    return head.next
}