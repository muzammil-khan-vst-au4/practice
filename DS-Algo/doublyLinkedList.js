class Node {
    constructor(val) {
        this.val = val;
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }
    push(val) {
        let newNode = new Node(val)
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head
        }else {
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
        }
        this.length++
        return this
    }
    pop() {
        if(!this.head) {
            return null
        }
        let removed = this.tail
        if(this.length === 1) {
            this.head = null
            this.tail = null
        }else {
            this.tail = this.tail.prev
            this.tail.next = null
            removed.prev = null
        }
        this.length--
        return removed
    }
}

let list = new DoublyLinkedList()
list.push("first")
list.push("second")
list.push("third")
console.log(list)
console.log(list.pop().prev)
console.log(list)