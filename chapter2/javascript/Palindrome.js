const LinkedList = require("./linkedlist");

let return_middle_node = (input_list) => {
    let index = parseInt(input_list.size /
        2);
    let node = input_list.head;
    let step = 1;
    while (step < index) {
        step++;
        node = node.next;
    }
    return node;
}

let reverse_from_after_node = (node) => {
    let anc = node;
    let prev = null;
    let curr = node.next;
    while (curr) {
        nxt = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nxt;
    }
    anc.next = prev;
}

let isPalendrome = (input_list) => {
    let mid_node = return_middle_node(input_list);
    reverse_from_after_node(mid_node);
    let start_right = mid_node.next;
    let node = input_list.head;
    while (node != mid_node.next) {
        if (node.val != start_right.val) {
            return false;
        }
        start_right = start_right.next;
        node = node.next;
    }

    return true;
}

// TEST
let my_list = new LinkedList();

let my_arr = ['r', 'a', 'a', 'r'];
for (let i = 0; i < my_arr.length; i++) {
    my_list.append(my_arr[i]);
}

console.log(isPalendrome(my_list)); // True


let my_list2 = new LinkedList();

let my_arr2 = ['r', 'a', 'd', 'a', 'r'];
for (let i = 0; i < my_arr2.length; i++) {
    my_list2.append(my_arr2[i]);
}
console.log(isPalendrome(my_list2)); // True


let my_list3 = new LinkedList();

let my_arr3 = [1, 2, 3, 3, 2, 1];
for (let i = 0; i < my_arr3.length; i++) {
    my_list3.append(my_arr3[i]);
}
console.log(isPalendrome(my_list3)); // True

let my_list4 = new LinkedList();

let my_arr4 = [1, 2, 3, 3, 2, 1, 1];
for (let i = 0; i < my_arr4.length; i++) {
    my_list4.append(my_arr4[i]);
}
console.log(isPalendrome(my_list4)); // False


// This solution should be O(n) time and O(1) space