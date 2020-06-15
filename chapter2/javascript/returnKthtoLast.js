const LinkedList = require("./linkedlist");


let returnKthtoLast = (input_list, k) => {
    let target_index = input_list.size - k;
    let steps = 0;
    let node = input_list.head;
    while (steps < target_index) {
        node = node.next;
        steps++;
    }

    return node.val;
}


// TESTS

let my_list = new LinkedList();

let my_arr = [1, 2, 2, 2, 2, 3, 4, 5, 6, 6, 0, 7, 8, 10, 10, 15, 88];
for (let i = 0; i < my_arr.length; i++) {
    my_list.append(my_arr[i]);
}

console.log(returnKthtoLast(my_list, my_list.size)); // First Element
console.log(returnKthtoLast(my_list, 1)); // Last Element
console.log(returnKthtoLast(my_list, 3)); // 3rd to last Element