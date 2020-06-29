const Stack = require('./stack');


class StackOfPlates {
    constructor(threshold) {
        this.stacks = [new Stack()];
        this.available_places = [];
        this.threshold = threshold;
    }

    clean_available_places() {
        let i = 0;
        while (i < this.available_places.length) {
            if (this.available_places[i] >= this.stacks.length) {
                this.available_places.splice(i, 1);
            }
            i++;
        }
    }

    push(val) {
        if (this.available_places.length != 0) {
            this.clean_available_places();
        }
        if (this.available_places.length == 0) {
            if (this.stacks[this.stacks.length - 1].size() >= this.threshold) {
                let new_stack = new Stack();
                new_stack.push(val);
                this.stacks.push(new_stack);
            } else {
                this.stacks[this.stacks.length - 1].push(val);
            }
        } else {
            let last_index = this.available_places.pop();
            this.stacks[last_index].push(val);
        }
    }


    pop() {
        let curr_stack = this.stacks[this.stacks.length - 1];

        if (curr_stack.size() == 0 || curr_stack.size() == 1) {
            let res = curr_stack.pop();

            if (this.stacks.length > 1) {
                this.stacks.pop();
                this.available_places.push(this.stacks.length);
            }
            return res;
        } else {
            let res = curr_stack.pop();
            this.available_places.push(this.stacks.length - 1);
            return res
        }
    }

    popAt(index) {
        let curr_stack = this.stacks[index];
        let res = curr_stack.pop();
        this.available_places.push(index);
        return res;
    }
}


// TESTS


let my_stack = new StackOfPlates(3)
my_stack.push(1)
my_stack.push(2)
my_stack.push(3)
my_stack.push(4)
my_stack.push(5)
my_stack.push(6)
my_stack.push(7)
my_stack.push(8)

for (let stack of my_stack.stacks) {
    console.log(stack.items);
}

console.log(my_stack.available_places)
console.log("=============")

console.log(my_stack.pop())
console.log(my_stack.pop())
console.log(my_stack.pop())
my_stack.push(8)

for (let stack of my_stack.stacks) {
    console.log(stack.items);
}

console.log(my_stack.available_places)
console.log("=============")

console.log(my_stack.popAt(0))
console.log(my_stack.popAt(0))
console.log(my_stack.popAt(1))

my_stack.push(6)


my_stack.push(2)


my_stack.push(3)

my_stack.push(7)
my_stack.push(8)

for (let stack of my_stack.stacks) {
    console.log(stack.items);
}

console.log(my_stack.pop())
console.log(my_stack.pop())
console.log(my_stack.pop())
console.log(my_stack.pop())
console.log(my_stack.pop())
console.log(my_stack.pop())
console.log(my_stack.pop())
console.log(my_stack.pop())
console.log(my_stack.pop())
console.log(my_stack.pop())
console.log(my_stack.pop())
console.log(my_stack.pop())
console.log(my_stack.pop())
console.log(my_stack.pop())

my_stack.push(1)
my_stack.push(2)
my_stack.push(3)
my_stack.push(4)
my_stack.push(5)
my_stack.push(6)

for (let stack of my_stack.stacks) {
    console.log(stack.items);
}


console.log(my_stack.available_places)


// This solution should be O(1) time and O(n) space