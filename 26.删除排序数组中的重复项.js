/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 */
/*
思路: 审题可知：一、数组有序，二、只要求给出结果长度并不要求得出修改后的数组。采用双指针法，如果快慢指针数据相同则快指针继续向前一步，慢指针不动，这样就会跳过重复项，直至快指针指向与慢指针不同的数据，这时候慢指针向前一位并把快指针指向的数据复制过来，可以看作挪过来。[1,2,2,3,5]就变成[1,2,3,3,5].
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length == 0) return 0
    let i = 0
    for (let j = 1; j < nums.length; j++) {
        if (nums[j] !== nums[i]) {
            i++
            nums[i] = nums[j]
        }
    }
    return i + 1
};