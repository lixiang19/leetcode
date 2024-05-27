/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s.length!==t.length) {
    return false
  }
  const map ={}
  s.split('').forEach(letter=>{
    if (!map[letter]) {
      map[letter]= 0
    }
    map[letter]++
  })
  t.split('').forEach(letter=>{
    if (map[letter]) {
      map[letter]--
    }
  })
  return Object.values(map).reduce((acc,cur)=>acc+cur,0)===0
};
// @lc code=end