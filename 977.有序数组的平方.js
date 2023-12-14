/*
 * @lc app=leetcode.cn id=977 lang=javascript
 *
 * [977] 有序数组的平方
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  const result = []
  let i = 0
  let j = nums.length - 1
  while (i <= j) {
    if (Math.abs(nums[i]) > Math.abs(nums[j])) {
      result.unshift(nums[i] * nums[i])
      i++
    } else {
      result.unshift(nums[j] * nums[j])
      j--
    }
  }
  return result
};
// @lc code=end

