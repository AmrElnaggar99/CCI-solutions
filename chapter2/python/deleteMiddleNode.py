from linkedlist import Node, LinkedList


def deleteMiddleNode(input_list, del_node):
    node = input_list.head
    if not node or not node.next:
        return

    while(node.next != del_node):
        node = node.next
    node.next = del_node.next

# TESTS
my_list = LinkedList()

for elem in ['a', 'b', 'c', 'd', 'e', 'f']:
    my_list.append(elem)

print("Before: ")
my_list.printList()

deleteMiddleNode(my_list, my_list.head.next.next)
print("After: ")
my_list.printList()


# This solution is O(n) time and O(1) space
