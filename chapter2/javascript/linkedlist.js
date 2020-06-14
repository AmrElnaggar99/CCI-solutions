class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    printList() {
        let node = this.head;
        let res = "";
        while (node) {
            res += node.val + " => ";
            node = node.next;
        }
        console.log(res);
    }

    toArray() {
        let res = [];
        let node = this.head;
        while (node) {
            res.push(node.val);
            node = node.next;
        }
        return res;
    }
    append(val) {
        let node = new Node(val);
        // if it's an empty list
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.size++;
    }

    prepend(val) {
        let node = new Node(val);
        node.next = this.head;
        this.head = node;
        this.size++;
    }

    remove(index) {
        if (index == 0) {
            this.head = this.head.next;
        } else {
            let node = this.head;
            // loop till you reach the previous node to the target, the index here is more like "remaining steps"
            while (index - 1) {
                node = node.next;
                index--;
            }
            if (!node.next.next) {
                this.tail = node;
            }
            node.next = node.next.next;

        }
        this.size--;
    }

    pop() {
        this.remove(this.size - 1);
    }
    popFirst() {
        this.remove(0);
    }
}

module.exports = LinkedList;

// TESTS 

// let my_list = new LinkedList();


// my_list.append(5);
// my_list.printList();
// my_list.append(8);
// my_list.printList();
// my_list.append(7);
// my_list.printList();
// my_list.remove(1);
// my_list.printList();
// my_list.prepend(10);
// my_list.printList();
// my_list.append(22);
// my_list.printList();
// my_list.popFirst();
// my_list.pop();

// my_arr = my_list.toArray();

// my_list.printList();

// console.log(my_arr);