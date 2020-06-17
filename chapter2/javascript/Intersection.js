const LinkedList = require("./linkedlist");


let intersection = (list_1, list_2) => {
        if (list_1.tail != list_2.tail)
            return null
        let size_1 = list_1.size;
        let size_2 = list_2.size;
        let diff = Math.abs(size_1 - size_2);
        // put the longer list as head_1
        if (size_1 > size_2) {
            head_1 = list_1.head;
            head_2 = list_2.head;
        } else {
            head_1 = list_2.head;
            head_2 = list_1.head;
        }
        // move in the longer list till the size of two lists are the same
        for (let i = 0; i < diff; i++) {
            head_1 = head_1.next;
        }
        // check when the head_1 and head_2 are pointing at the same node
        while (head_1) {
            if (head_1 === head_2)
                return head_1;
            head_1 = head_1.next;
            head_2 = head_2.next;
        }

    }
    // TESTS
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

let a = new Node('a');
let b = new Node('b');
let c = new Node('c');
let d = new Node('d');

a.next = b;
b.next = c;
c.next = d;

let e = new Node('e');
let f = new Node('f');
let h = new Node('g');
let g = new Node('h');

e.next = f;
f.next = h;
h.next = c;

list_1 = new LinkedList();
list_2 = new LinkedList();

while (a) {
    list_1.appendNode(a);
    a = a.next;
}


// list_1.printList()
// a => b => c => d =>
while (e) {
    list_2.appendNode(e);
    e = e.next;
}

// list_2.printList()
// e => f => c => d =>

let res = intersection(list_1, list_2);
if (res)
    console.log(res.val);
else
    console.log(res);
// c


// This solution is O(n) time and O(1) space