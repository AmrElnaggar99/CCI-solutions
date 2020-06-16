from linkedlist import Node, LinkedList


def return_middle_node(input_list):
    index = input_list.size // 2
    node = input_list.head
    step = 1
    while step < index:
        step += 1
        node = node.next
    return node


def reverse_from_after_node(node):
    anc = node
    prev = None
    curr = node.next
    while(curr):
        nxt = curr.next
        curr.next = prev
        prev = curr
        curr = nxt
    anc.next = prev


def isPalendrome(input_list):
    mid_node = return_middle_node(input_list)
    reverse_from_after_node(mid_node)
    start_right = mid_node.next
    node = input_list.head
    while(node != mid_node.next):
        if node.val != start_right.val:
            return False
        start_right = start_right.next
        node = node.next
    return True


# TESTS
my_list = LinkedList()

for elem in ['r', 'a', 'a', 'r']:  # True
    my_list.append(elem)


print(isPalendrome(my_list))

my_list = LinkedList()

for elem in ['r', 'a', 'd', 'a', 'r']:  # True
    my_list.append(elem)

print(isPalendrome(my_list))
my_list = LinkedList()

for elem in [1, 2, 3, 3, 2, 1]:  # True
    my_list.append(elem)

print(isPalendrome(my_list))

# This solution is O(n) time and O(1) space
