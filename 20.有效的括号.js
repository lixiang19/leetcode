/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 *
 * https://leetcode-cn.com/problems/valid-parentheses/description/
 *
 * algorithms
 * Easy (37.11%)
 * Total Accepted:    66K
 * Total Submissions: 176.3K
 * Testcase Example:  '"()"'
 *
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
 * 
 * 有效字符串需满足：
 * 
 * 
 * 左括号必须用相同类型的右括号闭合。
 * 左括号必须以正确的顺序闭合。
 * 
 * 
 * 注意空字符串可被认为是有效字符串。
 * 
 * 示例 1:
 * 
 * 输入: "()"
 * 输出: true
 * 
 * 
 * 示例 2:
 * 
 * 输入: "()[]{}"
 * 输出: true
 * 
 * 
 * 示例 3:
 * 
 * 输入: "(]"
 * 输出: false
 * 
 * 
 * 示例 4:
 * 
 * 输入: "([)]"
 * 输出: false
 * 
 * 
 * 示例 5:
 * 
 * 输入: "{[]}"
 * 输出: true
 * 
 */
/*
  思路：利用栈的先进后出特性，将左括号导入栈，匹配到右括号时去栈取值，最后栈清空则括号有效。
*/
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let map = {
        '(': ')',
        '[': ']',
        '{': '}'
    };
    let arr = [];
    for (let i = 0; i < s.length; i++) {
        if (i === 0) {
            if (!map[s[0]]) return false;
            arr.push(s[0]);
            continue;
        }
        if (map[arr[arr.length - 1]] === s[i]) {
            arr.pop();
            continue;
        }
        if (!map[s[i]]) return false;
        arr.push(s[i]);
    }
    return arr.length === 0;
};