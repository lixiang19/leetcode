/*
 * @lc app=leetcode.cn id=151 lang=javascript
 *
 * [151] 反转字符串中的单词
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  s = s.trim();
  const arr = s.split(' ').filter(item => item);
  return arr.reverse().join(' ');
};
// @lc code=end

