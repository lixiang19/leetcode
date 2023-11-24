/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const numMap = nums.reduce((acc, cur, index) => {
    acc[target - cur] = index
    return acc
  }, {})
  console.log(numMap)
  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];
    if (numMap[element] !== undefined && numMap[element] !== index) {
      return [index, numMap[element]]
    }
  }
};
// @lc code=end

/**
 * 
 */