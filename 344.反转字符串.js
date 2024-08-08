/*
 * @lc app=leetcode.cn id=344 lang=javascript
 *
 * [344] 反转字符串
 */

// @lc code=start
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
  for (let index = 0; index < s.length; index++) {
    const i = s.length - 1 - index
    if (index<i) {
     
      const temp = s[index]
      s[index] = s[i]
      s[i] = temp
    
    }
  }

};
// @lc code=end

