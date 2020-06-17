class Node:
    def __init__(self, val):
        self.val = val
        self.next = None


class LinkedList:
    def __init__(self):
        self.head = None
        self.tail = None
        self.size = 0

    def reverse_list(self):
        prev = None
        curr = self.head
        while(curr != None):
            nxt = curr.next
            curr.next = prev
            prev = curr
            curr = nxt
        self.head = prev

    def printList(self):
        node = self.head
        res = ""
        while(node):
            res += str(node.val) + " => "
            node = node.next
        print(res)

    def toArray(self):
        res = []
        node = self.head
        while node:
            res.append(node.val)
            node = node.next
        return res

    def append(self, val):
        node = Node(val)
        # if it's an empty list
        if not self.head or not self.tail:
            self.head = node
            self.tail = node
        else:
            self.tail.next = node
            self.tail = node
        self.size += 1

    def prepend(self, val):
        node = Node(val)
        # if it's an empty list
        if not self.head or not self.tail:
            self.head = node
            self.tail = node
        else:
            node.next = self.head
            self.head = node
        self.size += 1

    def appendNode(self, node):
        if not self.head or not self.tail:
            self.head = node
            self.tail = node
        else:
            self.tail.next = node
            self.tail = node
        self.size += 1

    def remove(self, index):
        if index == 0:
            self.head = self.head.next
        else:
            node = self.head
            # loop till you reach the previous node to the target, the index here is more like "remaining steps"
            while (index-1):
                node = node.next
                index -= 1
            if not node.next.next:
                self.tail = node
            node.next = node.next.next
        self.size -= 1

    def pop(self):
        return self.remove(self.size-1)

    def popFirst(self):
        return self.remove(0)

# TESTS

# my_list = LinkedList()


# my_list.append(5)
# my_list.printList()
# my_list.append(8)
# my_list.printList()
# my_list.append(7)
# my_list.printList()
# my_list.remove(1)
# my_list.printList()
# my_list.prepend(10)
# my_list.printList()
# my_list.append(22)
# my_list.printList()
# my_list.popFirst()
# my_list.pop()

# my_arr = my_list.toArray()

# my_list.printList()

# print(my_arr)
