/*
 * @lc app=leetcode.cn id=707 lang=javascript
 *
 * [707] 设计链表
 */
class ListNode {
  constructor(val, next) {
    this.val = val
    this.next = next
  }
}
// @lc code=start

var MyLinkedList = function () {
  this.head = null
}
MyLinkedList.prototype.traversal = function () {
  current = this.head
  const list = []
  if (current) {

    list.push(current.val)
    while (current.next) {
      current = current.next
      list.push(current.val)
    }
  }


  console.log(list)
}
/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  current = this.head
  let currentIndex = 0
  if (index === 0) {
    return this.head ? this.head.val : -1
  }
  let val = -1
  while (current.next) {
    currentIndex++
    if (currentIndex === index) {
      val = current.next.val
      break
    }
    current = current.next
  }
  console.log('get的时候', val)
  return val
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  const node = new ListNode(val)
  if (this.head) {
    node.next = this.head
  }
  this.head = node
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  const node = new ListNode(val)
  let current
  if (this.head) {
    current = this.head
    while (current.next) {
      current = current.next
    }
    current.next = node
  } else {
    this.head = node
  }
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  //将一个值为 val 的节点插入到链表中下标为 index 的节点之前。如果 index 等于链表的长度，那么该节点会被追加到链表的末尾。如果 index 比长度更大，该节点将 不会插入 到链表中。


  let currentIndex = 0
  const node = new ListNode(val)
  current = this.head
  if (index === 0) {
    node.next = this.head
    this.head = node
    return
  }
  while (current && current.next) {
    currentIndex++
    if (currentIndex === index) {
      node.next = current.next
      current.next = node
    } else {
      current = current.next
    }
  }
  if (current && currentIndex + 1 === index) {
    current.next = node
  }
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  let currentIndex = 0

  current = this.head
  if (index === 0) {
    this.head = current.next
    return
  }
  while (current.next) {
    currentIndex++
    if (currentIndex === index) {
      // 删除的是next
      current.next = current.next.next
    } else {
      current = current.next
    }

  }
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
// @lc code=end

