from linkedlist import Node, LinkedList


def removeDups(input_list):
    unique = set()
    # this index is used only because my linkedlist implementation needs an index to remove a node.
    index = 0
    node = input_list.head
    unique.add(node.val)
    # loop on all nodes except the tail, because I use node.next to verify the duplicates.
    while(node != input_list.tail):
        # if this node is in the set, remove the node but don't move to the next node yet.
        if node.next.val in unique:
            input_list.remove(index+1)
        else:
            # if this node is not in the set, add it and move to the next node.
            unique.add(node.next.val)
            node = node.next
            index += 1


# TEST

my_list = LinkedList()

for elem in [1, 1, 2, 2, 2, 2, 3, 4, 5, 6, 6, 0, 7, 8, 10, 10, 15, 88, 88]:
    my_list.append(elem)

print("Before: ")
my_list.printList()

removeDups(my_list)
print("After: ")
my_list.printList()


# This solution should be O(n) time and O(n) space
