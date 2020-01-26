class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        let node = new Node(val);
        if(!this.head) {
            this.head = node
            this.tail = this.head
        }else {
            this.tail.next = node
            this.tail = node
        }
        this.length++;
        return this;
    }
    pop() {
        if(!this.head) {
            return undefined
        }
        let current = this.head
        let pre = current;
        while(current.next) {
            pre = current
            current = current.next
        }
        this.tail = pre
        this.tail.next = null
        this.length-- 
        if(this.length === 0){
            this.head = null
            this.tail = null
        }
        return current;
    }
    shift() {
        if(!this.head) {
            return undefined;
        }
        let head = this.head
        //let newhead = this.head.next
        this.head = head.next
        this.length--
        if(this.length=== 0 ){
            this.head =null
            this.tail =null
        }
        return head
    }
    unshift(val) {
        let node = new Node(val);
        if(!this.head) {
            this.head = node
            this.tail = this.head
        }else {
            node.next = this.head
            this.head = node
        }
        this.length++;
        return this;
    }
    get(index) {
        if(index < 0 || index >= this.length) return null;
        if(index == 0) return this.head
        let current = this.head
        //console.log("this is the head",this.head)
        for (let i = 1; i <= index; i++) {
            current = current.next
        }
        return current;
    }
    //updates value of node at index
    set(index, value) {
        let position = this.get(index)
        if(position){
            position.val = value
            return true
        }else {
            return false
        }
    }
    //inserts a new node at index
    insert(index, value) {
        if(index < 0 ||index > this.length) return false
        if(index === this.length) {
            this.push(value)
            return true 
        }
        if(index === 0) {
            this.unshift(value)
            return true
        }
        let node = this.get(index -1)
        let prevNext = node.next
        node.next = new Node(value)
        node.next.next = prevNext
        this.length++
        return true
    }
    //remove node at index
    remove(index) {
        if(index < 0 ||index >= this.length) return null
        if(index === this.length -1) return this.pop()
        if(index === 0) return this.shift()
        let prevNode = this.get(index-1)
        let newNext =  prevNode.next.next
        prevNode.next = newNext
        this.length-- 
        return true;
    }
    reverse() {
        let node = this.head
        this.head = this.tail
        this.tail = node;
        let next;
        let prev = null;
        for (let i = 0; i < this.length; i++) { 
            next = node.next
            node.next = prev
            prev = node
            node = next
        }
        return this
    }
    print() {
        let arr = []
        let current = this.head 
        while(current) {
            arr.push(current.val)
            current = current.next
        }
        console.log(arr)
    }
}

let list = new LinkedList()
//list.push("hello");
//list.push("there");
list.push("how");
list.push("are");
//console.log(list.head.next)
console.log(list);
//list.pop();
//list.shift();
//list.shift();
//list.unshift(101)
//console.log(list.get(2))
//list.set(1, "why")
console.log(list.insert(2, "you"))
list.insert(1, "Hello")
list.remove(1)
console.log(list);
list.print()
list.reverse()
list.print()