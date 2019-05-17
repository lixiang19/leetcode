/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 *
 * https://leetcode-cn.com/problems/longest-common-prefix/description/
 *
 * algorithms
 * Easy (32.50%)
 * Total Accepted:    66.4K
 * Total Submissions: 203.5K
 * Testcase Example:  '["flower","flow","flight"]'
 *
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 * 
 * 如果不存在公共前缀，返回空字符串 ""。
 * 
 * 示例 1:
 * 
 * 输入: ["flower","flow","flight"]
 * 输出: "fl"
 * 
 * 
 * 示例 2:
 * 
 * 输入: ["dog","racecar","car"]
 * 输出: ""
 * 解释: 输入不存在公共前缀。
 * 
 * 
 * 说明:
 * 
 * 所有输入只包含小写字母 a-z 。
 * 
 */
/*
  思路一：最简单的思路：以数组第一项为前缀判断初始标准，然后与第二个成员比较后得出两者公共前缀，继续以此比较第三个，依次进行。
  思路二：以数组第一项为前缀判断初始标准，然后将标准的第一个字符串与其余项的第一个字符串对比，接着取第二个字符串与其余项第二个字符串对比。
  思路三:利用字典树（前缀树）
*/
/**
 * @param {string[]} strs
 * @return {string}
 */
const strs = ['dog', 'dodxz', 'dozz']
let longestCommonPrefix = function(strs) {
    if (strs == null || strs.length == 0) {
        return ''
    }
    let prefix = strs[0]
    for (let i = 0; i < strs.length; i++) {
        let j = 0
        while (j < strs[i].length && j < prefix.length && strs[i].charAt(j) == prefix.charAt(j)) {
            j++
        }
        if (j == 0) {
            return ''
        }
        prefix = prefix.substring(0, j)
    }
    return prefix
}
let longestCommonPrefix2 = function(strs) {
    if (strs == null || strs.length == 0) {
        return ''
    }
    let prefix = strs[0]
    for (let i = 0; i < prefix.length; i++) {
        for (let j = 0; j < strs.length; j++) {
            if (i == strs[j].length || strs[j].charAt(i) !== prefix.charAt(i)) {
                return prefix.substring(0, i)
            }
        }
    }
    return strs[0] //因为数组只有一项
}