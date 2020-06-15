from linkedlist import Node, LinkedList


def returnKthtoLast(input_list, k):
    # since my implementation has the size of the linkedlist, we can iterate till size - k.
    # another solution would be to make two pointers, the difference between their index is k-1 and when the front pointer reaches the tail, the back pointer will be at the target.
    # in this solution we just iterate the list till the size-k index
    node = input_list.head
    target_index = input_list.size - k
    steps = 0
    while(steps < target_index):
        node = node.next
        steps += 1
    return node.val

# TEST


my_list = LinkedList()

for elem in [1, 2, 2, 2, 2, 3, 4, 5, 6, 6, 0, 7, 8, 10, 10, 15, 88]:
    my_list.append(elem)

print(returnKthtoLast(my_list, my_list.size))  # return first element
print(returnKthtoLast(my_list, 1))  # return last element
print(returnKthtoLast(my_list, 3))  # return 3rd to last element

# This solution should be O(n) time and O(1) space
