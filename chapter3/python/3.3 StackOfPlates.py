from stack import Stack

# The idea is whenever a new element is pushed, it checks if there is a place in an already existing stack, if yes => push, if no => create a new stack then push.
# when an element is popped, the index of its stack is saved so we know this stack has space.
# and if the popped element was the last element, pop the whole stack.


class StackOfPlates:
    def __init__(self, threshold):
        self.stacks = [Stack()]  # array of stacks
        # to keep track of available spaces, if empty than means push the new element at the end.
        self.available_places = []
        self.threshold = threshold

    def clean_available_places(self):
        i = 0
        while i < len(self.available_places):
            if self.available_places[i] >= len(self.stacks):
                self.available_places.pop(i)
            i += 1

    def push(self, val):
        # check if available places has any index out of range and remove it
        if len(self.available_places) != 0:
            self.clean_available_places()

        # if available_places is empty
        if len(self.available_places) == 0:
            if self.stacks[-1].size() >= self.threshold:
                # if no place in current stacks, create a new stack
                new_stack = Stack()
                new_stack.push(val)
                self.stacks.append(new_stack)
            else:
                self.stacks[-1].push(val)
        # if available_places is not empty, use it instead of pushing to the end
        else:
            last_index = self.available_places.pop()
            self.stacks[last_index].push(val)

    def pop(self):

        curr_stack = self.stacks[-1]

        if curr_stack.size() in [0, 1]:
            res = curr_stack.pop()
            if len(self.stacks) > 1:  # don't pop the last empty stack from stacks
                self.stacks.pop()
                self.available_places.append(len(self.stacks))
            return res
        else:
            res = curr_stack.pop()
            self.available_places.append(len(self.stacks)-1)
            return res

    def popAt(self, index):
        curr_stack = self.stacks[index]
        res = curr_stack.pop()
        self.available_places.append(index)
        return res


# TESTS

my_stack = StackOfPlates(3)
my_stack.push(1)
my_stack.push(2)
my_stack.push(3)
my_stack.push(4)
my_stack.push(5)
my_stack.push(6)
my_stack.push(7)
my_stack.push(8)

for stack in my_stack.stacks:
    print(stack.items)

print(my_stack.available_places)
print("=============")

print(my_stack.pop())
print(my_stack.pop())
print(my_stack.pop())
my_stack.push(8)

for stack in my_stack.stacks:
    print(stack.items)

print(my_stack.available_places)
print("=============")

print(my_stack.popAt(0))
print(my_stack.popAt(0))
print(my_stack.popAt(1))

my_stack.push(6)


my_stack.push(2)


my_stack.push(3)

my_stack.push(7)
my_stack.push(8)


for stack in my_stack.stacks:
    print(stack.items)

print(my_stack.pop())
print(my_stack.pop())
print(my_stack.pop())
print(my_stack.pop())
print(my_stack.pop())
print(my_stack.pop())
print(my_stack.pop())
print(my_stack.pop())
print(my_stack.pop())
print(my_stack.pop())
print(my_stack.pop())
print(my_stack.pop())
print(my_stack.pop())
print(my_stack.pop())

my_stack.push(1)
my_stack.push(2)
my_stack.push(3)
my_stack.push(4)
my_stack.push(5)
my_stack.push(6)

for stack in my_stack.stacks:
    print(stack.items)


print(my_stack.available_places)


# This solution should be O(1) time and O(n) space
