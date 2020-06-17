const LinkedList = require("./linkedlist");


loopDetection = (list_1) => {
        pointer_1 = list_1.head;
        pointer_2 = list_1.head;
        while (pointer_2) {
            pointer_1 = pointer_1.next;
            pointer_2 = pointer_2.next.next;
            if (pointer_1 === pointer_2)
                break;
        }
        if (!pointer_2 || !pointer_2.next)
            return null;

        pointer_1 = list_1.head;

        while (pointer_2 != pointer_1) {
            pointer_1 = pointer_1.next;
            pointer_2 = pointer_2.next;
        }
        return pointer_1;
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
d.next = b;


let list_1 = new LinkedList();

list_1.appendNode(a);
list_1.appendNode(b);
list_1.appendNode(c);
list_1.appendNode(d);


let res = loopDetection(list_1);
if (res)
    console.log(res.val);
else
    console.log(res);

// b


// This solution is O(n) time and O(1) space