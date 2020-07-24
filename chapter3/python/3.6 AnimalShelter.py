'''
The idea is having a linked list for each species.
Each animal is a node that's marked with the order of its entrance to the shelter.
C (2) => C (1) 
D (5) => D (4) => D (3)
Enqeueu:
- Prepend to the species's linked list.
Dequeue Any:
- Return the animal of the least order.
Dequeue Dog:
- Pop the last dog
Dequeue Cat:
- Pop the last cat.

Since it's implemented using a linked list, the pop operation is done in O(n) and the prepend is done in O(1).
'''


class Node:
    def __init__(self, val, order):
        self.val = val
        self.next = None
        self.order = order


class LinkedList:
    def __init__(self):
        self.head = None
        self.tail = None

    def printList(self):
        node = self.head
        res = ""
        while(node):
            res += str(node.val) + " ({}) => ".format(node.order)
            node = node.next
        print(res)

    def prepend(self, val, order):
        node = Node(val, order)
        # if it's an empty list
        if not self.head or not self.tail:
            self.head = node
            self.tail = node
        else:
            node.next = self.head
            self.head = node

    def pop(self):
        node = self.head
        popped_res = self.tail
        if self.head and self.head == self.tail:
            self.head = None
            self.tail = None
        else:
            while(node.next.next):
                node = node.next
            node.next = None
            self.tail = node
        return popped_res


class LS_Queue:
    def __init__(self):
        self.cats = LinkedList()
        self.dogs = LinkedList()
        self.last = 0

    def enqueue(self, species):
        if species == 'D':
            self.dogs.prepend('D', self.last+1)
        if species == 'C':
            self.cats.prepend('C', self.last+1)
        self.last += 1

    def dequeueAny(self):
        if self.dogs.tail and self.cats.tail:
            self.last -= 1
            if (self.cats.tail.order) < self.dogs.tail.order:
                return self.cats.pop()
            else:
                return self.dogs.pop()
        elif self.dogs.tail:
            self.last -= 1
            return self.dogs.pop()
        elif self.cats.tail:
            self.last -= 1
            return self.cats.pop()
        else:
            print("No Animaals Available")
            pass

    def dequeueDog(self):
        if self.dogs.tail:
            self.last -= 1
            return self.dogs.pop()
        else:
            print("No Dogs Availalbe")
            pass

    def dequeueCat(self):
        if self.cats.tail:
            self.last -= 1
            return self.cats.pop()
        else:
            print("No Cats Availalbe")
            pass


my_weird_queue = LS_Queue()


my_weird_queue.enqueue('C')
my_weird_queue.enqueue('C')
my_weird_queue.enqueue('D')
my_weird_queue.enqueue('D')
my_weird_queue.enqueue('D')

my_weird_queue.cats.printList()
my_weird_queue.dogs.printList()
print("=====")
my_weird_queue.dequeueDog()
my_weird_queue.cats.printList()
my_weird_queue.dogs.printList()
print("=====")
my_weird_queue.dequeueDog()
my_weird_queue.cats.printList()
my_weird_queue.dogs.printList()
print("=====")
my_weird_queue.dequeueAny()
my_weird_queue.cats.printList()
my_weird_queue.dogs.printList()
print("=====")
my_weird_queue.dequeueCat()
my_weird_queue.cats.printList()
my_weird_queue.dogs.printList()
print("=====")
my_weird_queue.dequeueDog()
my_weird_queue.cats.printList()
my_weird_queue.dogs.printList()
print("=====")
my_weird_queue.dequeueCat()
my_weird_queue.cats.printList()
my_weird_queue.dogs.printList()
