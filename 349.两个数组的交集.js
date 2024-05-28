/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  const map = {}
  const intersectionMap = {}

  nums1.forEach(num=>{
    if (!map[num]) {
      map[num] = true
    }
  })
  nums2.forEach(num=>{
    if (map[num]) {
      intersectionMap[num] = true
    }
  })
  return Object.keys(intersectionMap)
};
// @lc code=end

