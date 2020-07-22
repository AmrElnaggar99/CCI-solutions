from stack import Stack

'''
The idea will be that every time we need to:
1.enqueue: we will copy stack1 into stack2 then push the next item to stack1 and copy back stack2 into stack1. O(n)
2. dequeue: pop stack1 O(1)
'''


class QueueViaStacks:
    def __init__(self):
        self.stack1 = Stack()
        self.stack2 = Stack()

    def enqueue(self, item):
        while self.stack1.size():
            self.stack2.push(self.stack1.pop())
        self.stack1.push(item)
        while self.stack2.size():
            self.stack1.push(self.stack2.pop())

    def dequeue(self):
        return self.stack1.pop()


my_weird_queue = QueueViaStacks()

my_weird_queue.enqueue(4)
my_weird_queue.enqueue(3)
my_weird_queue.enqueue(2)
my_weird_queue.enqueue(1)

'''
=================
| 1 , 2 , 3 , 4 |
=================
'''
de_item = my_weird_queue.dequeue()
# 4
de_item = my_weird_queue.dequeue()
# 3
de_item = my_weird_queue.dequeue()
# 2
de_item = my_weird_queue.dequeue()
# 1
de_item = my_weird_queue.dequeue()
# None

my_weird_queue.enqueue(1)

'''
======
| 1  |
======
'''
print("Stack1")
for x in my_weird_queue.stack1.items:
    print(x)

print("Stack2")
for x in my_weird_queue.stack2.items:
    print(x)
