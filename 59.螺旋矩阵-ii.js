/*
 * @lc app=leetcode.cn id=59 lang=javascript
 *
 * [59] 螺旋矩阵 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {

  const list = Array.from({ length: n }, () => {
    return Array.from({ length: n }, () => 0)
  });
  let row = 0
  let col = 0
  let colType = 'ADD'
  let rowType = 'ADD'
  let direction = 'row'
  for (let index = 1; index <= Math.pow(n, 2); index++) {
    list[row][col] = index
    if (direction === 'row') {
      const nextCol = operation(col, colType)
      const next = list[row][nextCol]
      let status = 'continue'
      if (next) {
        status = 'stop'
      }
      if (colType === 'ADD' && col === n - 1) {
        status = 'stop'
      }
      if (colType === 'SUB' && col === 0) {
        status = 'stop'
      }
      if (status === 'stop') { //  
        direction = 'col'
        colType = flipOperation(colType)
        row = operation(row, rowType)
      } else {
        col = operation(col, colType)
      }
    } else {
      const nextRow = operation(row, rowType)

      const next = list[nextRow] && list[nextRow][col]
      let status = 'continue'
      if (next) {
        status = 'stop'
      }
      if (rowType === 'ADD' && row === n - 1) {
        status = 'stop'
      }
      if (rowType === 'SUB' && row === 0) {
        status = 'stop'
      }
      if (status === 'stop') { //  
        direction = 'row'
        rowType = flipOperation(rowType)
        col = operation(col, colType)
      } else {
        row = operation(row, rowType)
      }
    }
  }
  return list
};
function flipOperation(type) {
  if (type === 'ADD') {
    return 'SUB'
  } else {
    return "ADD"
  }
}
function operation(num, type) {
  if (type === "ADD") {
    return num + 1
  } else {
    return num - 1
  }
}
// @lc code=end


