/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  if (n<=1) {
    return true
  }

  
  const set = new Set()
  while(true) {
    const nums = n.toString().split('').map(Number)
    const sum = nums.reduce((a,b)=>a+b*b,0)
    if (set.has(sum)) {
      return false
    }
    console.log("🚀 ~ isHappy ~ sum:", sum)
    set.add(sum)
    if (sum===1) {
      return true
    }
    n = sum
  }
};
// @lc code=end
