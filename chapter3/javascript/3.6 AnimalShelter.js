// The idea is having a linked list for each species.
// Each animal is a node that's marked with the order of its entrance to the shelter.
// C (2) => C (1) 
// D (5) => D (4) => D (3)
// Enqeueu:
// - Prepend to the species's linked list.
// Dequeue Any:
// - Return the animal of the least order.
// Dequeue Dog:
// - Pop the last dog
// Dequeue Cat:
// - Pop the last cat.

// Since it's implemented using a linked list, the pop operation is done in O(n) and the prepend is done in O(1).

class Node {
    constructor(val, order) {
        this.val = val;
        this.next = null;
        this.order = order;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    printList() {
        let node = this.head;
        let res = "";
        while (node) {
            res += node.val + ` (${node.order}) => `;
            node = node.next;
        }
        console.log(res);
    }

    prepend(val, order) {
        let node = new Node(val, order);
        // if it's an empty list
        if (!this.head || !this.tail) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
    }

    pop() {
        let node = this.head;
        let popped_res = this.tail;
        if (this.head && this.tail == this.head) {
            this.head = null;
            this.tail = null
        } else {
            while (node.next.next)
                node = node.next;
            node.next = null;
            this.tail = node;
        }
        return popped_res;
    }

}

class LS_Queue {
    constructor() {
        this.cats = new LinkedList();
        this.dogs = new LinkedList();
        this.last = 0;
    }

    enqueue(species) {
        if (species === 'D')
            this.dogs.prepend('D', this.last + 1);
        if (species === 'C')
            this.cats.prepend('C', this.last + 1);
        this.last += 1
    }

    dequeueAny() {
        if (this.dogs.tail && this.cats.tail) {
            this.last -= 1
            if ((this.cats.tail.order) < this.dogs.tail.order) {
                return this.cats.pop()
            } else {
                return this.dogs.pop()
            }
        } else if (this.dogs.tail) {
            this.last -= 1
            return this.dogs.pop()
        } else if (this.cats.tail) {
            this.last -= 1
            return this.cats.pop()
        } else {
            console.log("No Animaals Available");
            return "";
        }
    }
    dequeueDog() {

        if (this.dogs.tail) {

            this.last -= 1
            return this.dogs.pop()
        } else {

            console.log("No Dogs Availalbe")
            return "";
        }
    }

    dequeueCat() {

        if (this.cats.tail) {

            this.last -= 1
            return this.cats.pop()
        } else {

            console.log("No Cats Availalbe")
            return "";
        }
    }
}


let my_weird_queue = new LS_Queue()


my_weird_queue.enqueue('C')
my_weird_queue.enqueue('C')
my_weird_queue.enqueue('D')
my_weird_queue.enqueue('D')
my_weird_queue.enqueue('D')

my_weird_queue.cats.printList()
my_weird_queue.dogs.printList()
console.log("=====")
my_weird_queue.dequeueDog()
my_weird_queue.cats.printList()
my_weird_queue.dogs.printList()
console.log("=====")
my_weird_queue.dequeueDog()
my_weird_queue.cats.printList()
my_weird_queue.dogs.printList()
console.log("=====")
my_weird_queue.dequeueAny()
my_weird_queue.cats.printList()
my_weird_queue.dogs.printList()
console.log("=====")
my_weird_queue.dequeueCat()
my_weird_queue.cats.printList()
my_weird_queue.dogs.printList()
console.log("=====")
my_weird_queue.dequeueDog()
my_weird_queue.cats.printList()
my_weird_queue.dogs.printList()
console.log("=====")
my_weird_queue.dequeueCat()
my_weird_queue.cats.printList()
my_weird_queue.dogs.printList()