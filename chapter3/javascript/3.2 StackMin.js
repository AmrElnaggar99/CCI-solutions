class StackMin {
    constructor() {
        this.values = [];
        this.min_arr = [];
        this.min_num = 0x3f3f3f3f;
    }

    size() {
        return this.values.length;
    }

    isEmpty() {
        return this.values.length === 0;
    }

    push(val) {
        this.values.push(val);
        this.min_num = Math.min(this.min_num, val);
        this.min_arr.push(this.min_num)
    }

    pop() {
        this.min_arr.pop();
        return this.values.pop();
    }

    top() {
        return this.values[this.values.length - 1];
    }

    toArray() {
        return this.values;
    }

    min() {
        return this.min_arr[this.min_arr.length - 1];
    }
}

let my_stack = new StackMin();

console.log(my_stack.isEmpty()); // true
console.log(my_stack.pop()); // undefined
console.log(my_stack.size()); // 0
my_stack.push(40);
console.log(my_stack.min()); // 40
my_stack.push(20);
console.log(my_stack.min()); // 20
my_stack.push(30);
console.log(my_stack.min()); // 20
my_stack.push(10);
console.log(my_stack.min()); // 10
my_stack.pop();
console.log(my_stack.min()); // 20
my_stack.pop();
console.log(my_stack.min()); // 20
my_stack.pop();
console.log(my_stack.min()); // 40

// This solution is O(1) time and O(n) space