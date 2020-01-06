class Stack {
    constructor() {
        this.count = 0;
        this.storage = {};
    }
    
    // Adds a value onto the end of the stack
    push(value){
        this.storage[this.count] = value;
        this.count++;
    }
    
    // Removes and returns the value at the end of the stack
    pop() {
        if (this.count === 0) {
            return undefined;
        }
        this.count--;
        let result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    }
    
    size() {
        return this.count;
    }
    
    // Returns the value at the end of the stack
    peek() {
        return this.storage[this.count-1];
    }
}

let newStack = new Stack();

newStack.push(5);
newStack.push(7);
console.log(`size of stack is ${newStack.size()}`)
console.log(newStack.peek())
console.log(newStack.pop())
console.log(newStack.peek())