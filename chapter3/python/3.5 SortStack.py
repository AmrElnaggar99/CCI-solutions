from stack import Stack

'''
O(n^2) solution
While stack1 is not empty:
= pop stack1 into temp.
= While stack2 is not empty and temp < stack2.peek
== pop stack2 into stack1
= push temp into stack2
While stack2 is not empty:
= pop stack2 into stack1.
'''


def sortStack(stack1):
    temp = 0
    stack2 = Stack()

    while stack1.size():
        temp = stack1.pop()
        while stack2.peek() and temp < stack2.peek():
            stack1.push(stack2.pop())
        stack2.push(temp)
    while stack2.size():
        stack1.push(stack2.pop())
    return stack1


my_stack = Stack()
my_stack.push(5)
my_stack.push(1)
my_stack.push(2)
my_stack.push(6)
my_stack.push(3)
my_stack.push(8)

print(my_stack.items)

my_stack = sortStack(my_stack)

print(my_stack.items)
