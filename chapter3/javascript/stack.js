class Stack {
    constructor() {
        this.values = [];
    }

    size() {
        return this.values.length;
    }

    isEmpty() {
        return this.values.length === 0;
    }

    push(val) {
        this.values.push(val);
    }

    pop() {
        return this.values.pop();
    }

    top() {
        return this.values[this.values.length - 1];
    }

    toArray() {
        return this.values;
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