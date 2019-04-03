/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 *
 * https://leetcode-cn.com/problems/reverse-integer/description/
 *
 * algorithms
 * Easy (32.21%)
 * Total Accepted:    104.8K
 * Total Submissions: 325.5K
 * Testcase Example:  '123'
 *
 * 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。
 * 
 * 示例 1:
 * 
 * 输入: 123
 * 输出: 321
 * 
 * 
 * 示例 2:
 * 
 * 输入: -123
 * 输出: -321
 * 
 * 
 * 示例 3:
 * 
 * 输入: 120
 * 输出: 21
 * 
 * 
 * 注意:
 * 
 * 假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−2^31,  2^31 − 1]。请根据这个假设，如果反转后整数溢出那么就返回
 * 0。
 * 
 */
/*
  思路：将数字想象为一个队列，从队列头取出并加入队列尾，取出方法为%除于，加入方法为原数字/10后取整相加。判断溢出方法为计算结果/10取整后与原算式中乘数比较是否相同。
*/
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let res = 0
    let temp
    while (x != 0) {
        temp = res * 10 + x % 10;
        x = parseInt(x / 10)
        if (parseInt(temp / 10) !== res) {
            res = 0
            break
        }
        res = temp
    }
    if (res < -2147483648 || res > 2147483647) {
        return 0
    }
    return res
};