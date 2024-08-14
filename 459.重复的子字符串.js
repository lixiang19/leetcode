/*
 * @lc app=leetcode.cn id=459 lang=javascript
 *
 * [459] 重复的子字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
  let isRepeated = false;
  for (let i = 1; i <= s.length / 2; i++) {
    const subStr = s.slice(0, i);
    const splitArr = s.split(subStr);
    if (splitArr.every(item => item === '')) {
      isRepeated = true;
      break
    }else {
      continue;
    }
  }
  return isRepeated;
};
// @lc code=end

