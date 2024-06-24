/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const sortedNums = nums.sort((a, b) => a - b);  // 先排序
  const result = [];
  for (let i = 0; i < sortedNums.length - 2; i++) {
    if (sortedNums[i] > 0) {
      break;
    }
    if (i > 0 && sortedNums[i] === sortedNums[i - 1]) {
      continue;
    }
    let left = i + 1;
    let right = sortedNums.length - 1;
    while (left < right) {
      const sum = sortedNums[i] + sortedNums[left] + sortedNums[right];
      if (sum === 0) {
        result.push([sortedNums[i], sortedNums[left], sortedNums[right]]);
        while (left < right && sortedNums[left] === sortedNums[left + 1]) {
          left++;
        }
        while (left < right && sortedNums[right] === sortedNums[right - 1]) {
          right--;
        }
        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }
  return result;
};
// @lc code=end
