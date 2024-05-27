/*
 * @lc app=leetcode.cn id=1002 lang=javascript
 *
 * [1002] 查找共用字符
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(A) {
  let res = [...A[0]];
  for (let i = 1; i < A.length; i++) {
    res = res.filter(c => {
      
      const l = A[i].length;
      A[i] = A[i].replace(c, "");
      return l > A[i].length;
    });
  }
  return res;
};
// @lc code=end

