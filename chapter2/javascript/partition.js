const LinkedList = require("./linkedlist");

let partition = (input_list, part_at) => {
    node = input_list.head;
    output_list = new LinkedList();
    while (node) {
        if (node.val < part_at) {
            output_list.prepend(node.val);
        } else {
            output_list.append(node.val);
        }
        node = node.next;
    }
    return output_list;
}

// TEST
let my_list = new LinkedList();

let my_arr = [3, 5, 8, 5, 10, 2, 1];
for (let i = 0; i < my_arr.length; i++) {
    my_list.append(my_arr[i]);
}

console.log("Before: ");
my_list.printList();

console.log("After: ");
partition(my_list, 5).printList();


// This solution is O(n) time and O(n) space