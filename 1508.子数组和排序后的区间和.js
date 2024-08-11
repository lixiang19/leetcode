/*
 * @lc app=leetcode.cn id=1508 lang=javascript
 *
 * [1508] 子数组和排序后的区间和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} n
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeSum = function(nums, n, left, right) {
  const sumArr = []
  // 不要先求出所有的子数组，会爆内存
  for (let i = 0; i < n; i++) {
    let sum = 0
    for (let j = i; j < n; j++) {
      sum += nums[j]
      sumArr.push(sum)
    }
  }
  sumArr.sort((a, b) => a - b)
  let res = 0
  for (let i = left - 1; i < right; i++) {
    res += sumArr[i]
  }
  return res % (10 ** 9 + 7)
};
// @lc code=end

