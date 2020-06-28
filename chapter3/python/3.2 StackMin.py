# Solution


class MinStack:
    def __init__(self):
        self.items = []
        self.min_arr = []
        self.min_num = 0x3f3f3f3f

    def size(self):
        return len(self.items)

    def push(self, item):
        self.items.append(item)
        self.min_num = min(self.min_num, item)
        self.min_arr.append(self.min_num)

    def pop(self):
        if self.size() == 0:
            return None
        else:
            self.min_arr.pop()
            return self.items.pop()

    def min(self):
        return self.min_arr[-1]


# TESTS
MyStack = MinStack()

MyStack.push(40)
print(MyStack.min())  # 40
MyStack.push(20)
print(MyStack.min())  # 20
MyStack.push(30)
print(MyStack.min())  # 20
MyStack.push(10)
print(MyStack.min())  # 10
MyStack.pop()
print(MyStack.min())  # 20
MyStack.pop()
print(MyStack.min())  # 20
MyStack.pop()
print(MyStack.min())  # 40

# This solution is O(1) time and O(n) space
