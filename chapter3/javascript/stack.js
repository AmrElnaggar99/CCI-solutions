class Stack {
    constructor() {
        this.items = [];
    }

    size() {
        return this.items.length;
    }

    isEmpty() {
        return this.items.length === 0;
    }

    push(val) {
        this.items.push(val);
    }

    pop() {
        if (this.size() == 0) {
            return null;
        }
        return this.items.pop();
    }

    top() {
        return this.items[this.items.length - 1];
    }

    toArray() {
        return this.items;
    }
}
module.exports = Stack;


// let my_stack = new Stack();

// console.log(my_stack.isEmpty()); // true
// console.log(my_stack.pop()); // undefined
// console.log(my_stack.size()); // 0
// my_stack.push(10);
// my_stack.push(20);
// my_stack.push(30);
// my_stack.push(40);
// my_stack.push(50);
// my_stack.push(60);

// console.log(my_stack.top()); // 60
// console.log(my_stack.pop()); // 60
// console.log(my_stack.top()); // 50