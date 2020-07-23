const Stack = require('./stack')

// O(n^2) solution
// While stack1 is not empty:
// = pop stack1 into temp.
// = While stack2 is not empty and temp < stack2.peek
// == pop stack2 into stack1
// = push temp into stack2
// While stack2 is not empty:
// = pop stack2 into stack1.

const sortStack = (stack1) => {
    let temp = 0;
    let stack2 = new Stack();
    while (!stack1.isEmpty()) {
        temp = stack1.pop();
        while (!stack2.isEmpty() && temp < stack2.peek()) {
            stack1.push(stack2.pop())
        }
        stack2.push(temp)
    }
    while (!stack2.isEmpty())
        stack1.push(stack2.pop())

    return stack1
}

let my_stack = new Stack()
my_stack.push(5)
my_stack.push(1)
my_stack.push(2)
my_stack.push(6)
my_stack.push(3)
my_stack.push(8)

console.log(my_stack.items)

my_new_stack = sortStack(my_stack)

console.log(my_new_stack.items)