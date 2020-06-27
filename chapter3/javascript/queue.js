class Queue {
    constructor() {
        this.values = [];
    }

    enqueue(val) {
        this.values.unshift(val);
    }

    dequeue() {
        if (this.isEmpty()) {
            return;
        }
        return this.values.pop();
    }

    isEmpty() {
        return this.values.length === 0;
    }

    front() {
        if (this.values.length === 0) {
            return;
        }
        return this.values[this.values.length - 1];
    }

    printQueue() {
        let str = "";
        for (let val of this.values) {
            str += " " + val;
        }
        return str;
    }
}

module.exports = Queue;



// // TESTS

// let queue = new Queue();
// console.log(queue.dequeue()); // returns undefined
// console.log(queue.isEmpty()); // return true

// queue.enqueue(10);
// queue.enqueue(20);
// queue.enqueue(30);
// queue.enqueue(40);
// queue.enqueue(50);
// queue.enqueue(60);

// console.log(queue.front()); // 10

// console.log(queue.dequeue()); // 10

// console.log(queue.front()); // 20

// console.log(queue.dequeue()); // 20

// console.log(queue.printQueue()); // 60 50 40 30