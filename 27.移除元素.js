/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {

  for (let index = nums.length - 1; index >= 0; index--) {

    const element = nums[index];

    if (element === val) {
      nums.splice(index, 1)
    }
  }

};
// @lc code=end
console.log(removeElement([3, 2, 2, 3], 3))

