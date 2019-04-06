/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 *
 * https://leetcode-cn.com/problems/palindrome-number/description/
 *
 * algorithms
 * Easy (56.11%)
 * Total Accepted:    91.7K
 * Total Submissions: 163.8K
 * Testcase Example:  '121'
 *
 * 判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。
 * 
 * 示例 1:
 * 
 * 输入: 121
 * 输出: true
 * 
 * 
 * 示例 2:
 * 
 * 输入: -121
 * 输出: false
 * 解释: 从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
 * 
 * 
 * 示例 3:
 * 
 * 输入: 10
 * 输出: false
 * 解释: 从右向左读, 为 01 。因此它不是一个回文数。
 * 
 * 
 * 进阶:
 * 
 * 你能不将整数转为字符串来解决这个问题吗？
 * 
 */
/*
  思路:同整数反转将数字队列头移至队列尾，如果是回文数则过程中肯定会出现与原数字相同的情况。
 */
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0 || (x % 10 == 0 && x != 0)) {
        return false
    }
    if (x === 0) {
        return true
    }
    let org = x
    let temp
    let res = 0
    let boo = false
    while (x != 0) {
        temp = res * 10 + x % 10
        x = parseInt(x / 10)
        if (temp === org) {
            boo = true
        }
        res = temp
    }
    return boo
};
isPalindrome(0)