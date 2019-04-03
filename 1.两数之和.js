/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 *
 * https://leetcode-cn.com/problems/two-sum/description/
 *
 * algorithms
 * Easy (45.51%)
 * Total Accepted:    306.2K
 * Total Submissions: 672.9K
 * Testcase Example:  '[2,7,11,15]\n9'
 *
 * 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
 * 
 * 你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。
 * 
 * 示例:
 * 
 * 给定 nums = [2, 7, 11, 15], target = 9
 * 
 * 因为 nums[0] + nums[1] = 2 + 7 = 9
 * 所以返回 [0, 1]
 * 
 * 
 */
/*
  思路：用暴力破解法时间复杂度为O(n^2),通过哈希结构来以空间复杂度换时间复杂度。
  遍历nums的同时将满足条件的值保存并在遍历其他数组项时进行判断。时间复杂度为O(n)
  */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = {}
    let res = []
    nums.forEach((num, index) => {
        if (map.hasOwnProperty(num)) {
            res[0] = map[num]
            res[1] = index
        }
        map[target - num] = index
    })
};