class ThreeInOne:
    def __init__(self):
        # keep all data in this array
        self.data = []
        # save the indices of each stack
        self.indices_of_1 = []
        self.indices_of_2 = []
        self.indices_of_3 = []

    def push(self, stack, val):
        # append the new elem index at its corresponding array.
        # the new elem index will always be the len of the data array.
        if stack == 1:
            self.indices_of_1.append(len(self.data))
        elif stack == 2:
            self.indices_of_2.append(len(self.data))
        elif stack == 3:
            self.indices_of_3.append(len(self.data))
        else:
            return "Stack number is wrong. Please use either 1, 2, or 3."
        self.data.append(val)

    def fix_indices(self, res_index):
        # in case an element is popped, the length of the array changes.
        # so, we need to decrement each index bigger than the popped index by one.
        for x in range(len(self.indices_of_1)):
            if self.indices_of_1[x] > res_index:
                self.indices_of_1[x] -= 1
        for x in range(len(self.indices_of_2)):
            if self.indices_of_2[x] > res_index:
                self.indices_of_2[x] -= 1
        for x in range(len(self.indices_of_3)):
            if self.indices_of_3[x] > res_index:
                self.indices_of_3[x] -= 1

    def top(self, stack):
        # to get the top of a stack, just return the element of its last index.
        if stack == 1 and len(self.indices_of_1):
            res_index = self.indices_of_1[-1]
        elif stack == 2 and len(self.indices_of_2):
            res_index = self.indices_of_2[-1]
        elif stack == 3 and len(self.indices_of_3):
            res_index = self.indices_of_3[-1]
        else:
            return "Error: stack is empty or doesn't exist"

        res = self.data[res_index]
        return res

    def pop(self, stack):
        if stack == 1 and len(self.indices_of_1):
            res_index = self.indices_of_1.pop(-1)
        elif stack == 2 and len(self.indices_of_2):
            res_index = self.indices_of_2.pop(-1)
        elif stack == 3 and len(self.indices_of_3):
            res_index = self.indices_of_3.pop(-1)
        else:
            return "Error: stack is empty or doesn't exist"

        self.fix_indices(res_index)

        res = self.data.pop(res_index)
        return res


# TESTS
my_weird_stack = ThreeInOne()


my_weird_stack.push(1, "1a")
print(my_weird_stack.pop(1))  # 1a
my_weird_stack.push(2, "2b")
print(my_weird_stack.pop(2))  # 2b
my_weird_stack.push(3, "3c")
my_weird_stack.push(1, "1d")
my_weird_stack.push(1, "1d")
print(my_weird_stack.pop(1))  # 1d
my_weird_stack.push(2, "2e")
my_weird_stack.push(2, "2e")
print(my_weird_stack.pop(2))  # 2e
my_weird_stack.push(3, "3f")
my_weird_stack.push(3, "3f")
print(my_weird_stack.pop(3))  # 3f
print(my_weird_stack.pop(3))  # 3f
print(my_weird_stack.pop(3))  # 3c
print("==========")
print(my_weird_stack.data)  # ['1d','2e']
print(my_weird_stack.indices_of_1)  # [0]
print(my_weird_stack.indices_of_2)  # [1]
print(my_weird_stack.indices_of_3)  # []
print("==========")
print(my_weird_stack.top(1))  # 1d
print(my_weird_stack.top(2))  # 2e
print(my_weird_stack.top(3))  # Error: stack is empty or doesn't exist


# This solution should do all operations in O(n) time and space
