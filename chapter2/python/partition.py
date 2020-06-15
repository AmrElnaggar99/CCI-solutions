from linkedlist import Node, LinkedList


def partition(input_list, part_at):
    output_list = LinkedList()
    node = input_list.head
    while(node):
        if node.val < part_at:
            output_list.prepend(node.val)
        else:
            output_list.append(node.val)
        node = node.next
    return output_list


# TESTS
my_list = LinkedList()

for elem in [3, 5, 8, 5, 10, 2, 1]:
    my_list.append(elem)

print("Before: ")
my_list.printList()


print("After: ")
partition(my_list, 5).printList()

# This solution is O(n) time and O(n) space
