const LinkedList = require("./linkedlist");

let deleteMiddleNode = (input_list, del_node) => {
    node = input_list.head;
    if (node == null || node.next == null) {
        return
    } else {
        while (node.next != del_node) {
            node = node.next;
        }
        node.next = del_node.next;
    }
}

// TEST
let my_list = new LinkedList();

let my_arr = ['a', 'b', 'c', 'd', 'e', 'f'];
for (let i = 0; i < my_arr.length; i++) {
    my_list.append(my_arr[i]);
}

console.log("Before: ");
my_list.printList();

deleteMiddleNode(my_list, my_list.head.next.next)
console.log("After: ");
my_list.printList();


// This solution is O(n) time and O(1) space