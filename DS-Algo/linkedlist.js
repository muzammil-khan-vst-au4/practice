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
}

let list = new LinkedList()
list.push("hello");
list.push("there");
list.push("how");
list.push("are");
//console.log(list.head.next)
console.log(list);
list.pop();
list.pop();
list.pop();
//list.pop();
//list.pop();
console.log(list);