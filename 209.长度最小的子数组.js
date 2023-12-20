/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let sum = 0
  let initIndex = 0
  let j = 0
  let successJ = 0
  for (let index = initIndex; initIndex < nums.length; index++) {
    const element = nums[index];

    sum += element
    j++

    if (sum >= target) {
      sum = 0
      initIndex++
      index = initIndex

      if (successJ === 0 || j < successJ) {
        successJ = j
      }
      j = 0
    }
    if (index === nums.length - 1 && sum < target) {
      initIndex = nums.length
    }
  }
  return successJ
};
// @lc code=end
// console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]))