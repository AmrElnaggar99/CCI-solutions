from linkedlist import Node, LinkedList


def intersection(list_1, list_2):
    if list_1.tail != list_2.tail:
        return None
    size_1 = list_1.size
    size_2 = list_2.size
    # put the longer list as head_1
    if size_1 > size_2:
        head_1 = list_1.head
        head_2 = list_2.head
    else:
        head_1 = list_2.head
        head_2 = list_1.head
    diff = abs(size_1 - size_2)
    for i in range(diff):
        head_1 = head_1.next

    while(head_1):
        if head_1 == head_2:
            return head_1
        head_1 = head_1.next
        head_2 = head_2.next


# TESTS

a = Node('a')
b = Node('b')
c = Node('c')
d = Node('d')

a.next = b
b.next = c
c.next = d

e = Node('e')
f = Node('f')
h = Node('g')
g = Node('h')

e.next = f
f.next = h
# h.next = c

list_1 = LinkedList()
list_2 = LinkedList()

while a:
    list_1.appendNode(a)
    a = a.next

# list_1.printList()
# a => b => c => d =>
while e:
    list_2.appendNode(e)
    e = e.next
# list_2.printList()
# e => f => c => d =>

res = intersection(list_1, list_2)
if res:
    print(res.val)
else:
    print(res)

# c


# This solution is O(n) time and O(1) space
