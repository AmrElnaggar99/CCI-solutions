from linkedlist import Node, LinkedList


def loopDetection(list_1):
    pointer_1 = list_1.head
    pointer_2 = list_1.head
    while pointer_2:
        pointer_1 = pointer_1.next
        pointer_2 = pointer_2.next.next
        if pointer_1 == pointer_2:
            break

    if not pointer_2 or not pointer_2.next:
        return None
    # return pointer_1 to the head if it goes faster than pointer_2
    pointer_1 = list_1.head

    while pointer_2 != pointer_1:
        pointer_1 = pointer_1.next
        pointer_2 = pointer_2.next

    return pointer_1


# TESTS
a = Node('a')
b = Node('b')
c = Node('c')

a.next = b
b.next = c
c.next = a


list_1 = LinkedList()

list_1.appendNode(a)
list_1.appendNode(b)
list_1.appendNode(c)


res = loopDetection(list_1)
if res:
    print(res.val)
else:
    print(res)

# a


# This solution is O(n) time and O(1) space
