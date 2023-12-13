/*
 * @lc app=leetcode.cn id=704 lang=javascript
 *
 * [704] 二分查找
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  return binarySearch(nums, target, 0, nums.length - 1);
};

function binarySearch(nums, target, left, right) {
  if (left > right) {
    return -1; // 找不到目标值
  }

  const mid = left + Math.floor((right - left) / 2); // 防止(left + right)溢出
  const midValue = nums[mid];

  if (midValue === target) {
    return mid;
  } else if (midValue > target) {
    return binarySearch(nums, target, left, mid - 1);
  } else {
    return binarySearch(nums, target, mid + 1, right);
  }
}
// @lc code=end

