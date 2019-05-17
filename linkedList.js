function Node(element) {
    this.element = element
    this.next = null
}

function LList() {
    this.head = new Node('head')
    this.find = find
    this.insert = insert
        // this.remove = remove
        // this.findPrev = findPrev
    this.display = display
}

function find(item) {
    let currNode = this.head
    while (currNode.element !== item) {
        currNode = currNode.next
    }
    return currNode
}

function insert(newElement, item) {
    let newNode = new Node(newElement)
    let currNode = this.find(item)
    newNode.next = currNode.next
    currNode.next = newNode
}

function display() {
    let currNode = this.head
    while (!(currNode.next == null)) {
        console.log(currNode.next.element)
        currNode = currNode.next
    }
}
let fruits = new LList()
fruits.insert('Apple', 'head')
fruits.insert('Banana', 'Apple')
fruits.insert('Pear', 'Banana')
fruits.display()