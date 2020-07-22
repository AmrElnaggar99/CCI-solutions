const Stack = require('./stack');


// The idea will be that every time we need to:
// 1.enqueue: we will copy stack1 into stack2 then push the next item to stack1 and copy back stack2 into stack1. O(n)
// 2. dequeue: pop stack1 O(1)


class QueueViaStacks {
    constructor() {
        this.stack1 = new Stack();
        this.stack2 = new Stack();
    }

    enqueue(item) {
        while (this.stack1.size()) {
            this.stack2.push(this.stack1.pop());
        }
        this.stack1.push(item);
        while (this.stack2.size()) {
            this.stack1.push(this.stack2.pop());
        }
    }

    dequeue() {
        return this.stack1.pop();
    }
}

let my_weird_queue = new QueueViaStacks()

my_weird_queue.enqueue(4)
my_weird_queue.enqueue(3)
my_weird_queue.enqueue(2)
my_weird_queue.enqueue(1)


// =================
// | 1 , 2 , 3 , 4 |
// =================

let de_item;
de_item = my_weird_queue.dequeue()
    // 4
de_item = my_weird_queue.dequeue()
    // 3
de_item = my_weird_queue.dequeue()
    // 2
de_item = my_weird_queue.dequeue()
    // 1
de_item = my_weird_queue.dequeue()
    // None

my_weird_queue.enqueue(1)


// ======
// | 1  |
// ======

console.log("Stack1")
for (let x of my_weird_queue.stack1.items) {
    console.log(x);
}

console.log("Stack2")
for (let x of my_weird_queue.stack2.items) {
    console.log(x);
}