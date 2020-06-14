const LinkedList = require("./linkedlist");


let removeDups = (input_list) => {
    let node = input_list.head;
    // this index is used only because my linkedlist implementation needs an index to remove a node.
    let index = 0;
    let unique = new Set();
    unique.add(node.val);
    // loop on all nodes except the tail, because I use node.next to verify the duplicates.
    while (node != input_list.tail) {
        // if this node is in the set, remove the node but don't move to the next node yet.
        if (unique.has(node.next.val)) {
            input_list.remove(index + 1);
        } else {
            // if this node is not in the set, add it and move to the next node.
            unique.add(node.next.val)
            index++;
            node = node.next;
        }
    }
}

// TEST
let my_list = new LinkedList();

let my_arr = [1, 1, 2, 2, 2, 2, 3, 4, 5, 6, 6, 0, 7, 8, 10, 10, 15, 88, 88];
for (let i = 0; i < my_arr.length; i++) {
    my_list.append(my_arr[i]);
}

console.log("Before: ");
my_list.printList();

removeDups(my_list);
console.log("After: ");
my_list.printList();


// This solution should be O(n) time and O(n) space