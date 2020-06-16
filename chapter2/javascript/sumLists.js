const LinkedList = require("./linkedlist");

let sumLists_normal_order = (list_1, list_2) => {
    let num1 = "";
    let num2 = "";
    let output_list = new LinkedList();
    let node_1 = list_1.head;
    let node_2 = list_2.head;
    while (node_1) {
        num1 += node_1.val.toString();
        node_1 = node_1.next;
    }
    while (node_2) {
        num2 += node_2.val.toString();
        node_2 = node_2.next;
    }

    let out_num = parseInt(num1) + parseInt(num2);

    for (let num of out_num.toString()) {
        output_list.append(parseInt(num));
    }
    return output_list;
}

let sumLists_reverse_order = (list_1, list_2) => {
    let carry_out = 0;
    let output_list = new LinkedList();
    let node_1 = list_1.head;
    let node_2 = list_2.head;
    while (node_1 || node_2 || carry_out != 0) {
        if (node_1 == null && node_2) {
            output_dig = (carry_out + 0 + node_2.val) % 10;
            carry_out = parseInt((carry_out + 0 + node_2.val) / 10);
        } else if (node_2 == null && node_1) {
            output_dig = (carry_out + node_1.val + 0) % 10;
            carry_out = parseInt((carry_out + node_1.val + 0) / 10);
        } else if (node_1 && node_2) {
            output_dig = (carry_out + node_1.val + node_2.val) % 10;
            carry_out = parseInt((carry_out + node_2.val + node_1.val) / 10);
        } else {
            output_dig = (carry_out + 0 + 0) % 10;
            carry_out = parseInt((carry_out + 0 + 0) / 10);
        }
        output_list.append(output_dig);
        // This condition is only needed because in the case of (617+623) node_1 and node_2 will actually be None, so we shouldn't enter these if conditions.
        if (node_1) {
            node_1 = node_1.next;
        }

        if (node_2) {
            node_2 = node_2.next;
        }
    }


    return output_list;
}


// TEST

console.log("=== Reverse Order Test")
    // 617 + 623 = 1240
let list_1 = new LinkedList()
for (let elem of[7, 1, 6]) {
    list_1.append(elem);
}

let list_2 = new LinkedList()
for (let elem of[3, 2, 6]) {
    list_2.append(elem);
}

sumLists_reverse_order(list_1, list_2).printList()

// 617 + 23 = 640
list_1 = new LinkedList()
for (let elem of[7, 1, 6]) {
    list_1.append(elem);
}

list_2 = new LinkedList()
for (let elem of[3, 2]) {
    list_2.append(elem);
}

sumLists_reverse_order(list_1, list_2).printList()

// 617 + 295 = 912
list_1 = new LinkedList()
for (let elem of[7, 1, 6]) {
    list_1.append(elem);
}

list_2 = new LinkedList()
for (let elem of[5, 9, 2]) {
    list_2.append(elem);
}

sumLists_reverse_order(list_1, list_2).printList()

console.log("=== Normal Order Test")

// 617 + 623 = 1240
list_1 = new LinkedList()
for (let elem of[6, 1, 7]) {
    list_1.append(elem);
}

list_2 = new LinkedList()
for (let elem of[6, 2, 3]) {
    list_2.append(elem);
}


sumLists_normal_order(list_1, list_2).printList()

// 617 + 23 = 640
list_1 = new LinkedList()
for (let elem of[6, 1, 7]) {
    list_1.append(elem);
}

list_2 = new LinkedList()
for (let elem of[2, 3]) {
    list_2.append(elem);
}

sumLists_normal_order(list_1, list_2).printList()

// 617 + 295 = 912
list_1 = new LinkedList()
for (let elem of[6, 1, 7]) {
    list_1.append(elem);
}


list_2 = new LinkedList()
for (let elem of[2, 9, 5]) {
    list_2.append(elem);
}


sumLists_normal_order(list_1, list_2).printList()


// The output should be like this
// === Reverse Order Test
// 0 => 4 => 2 => 1 =>
// 0 => 4 => 6 =>
// 2 => 1 => 9 =>
// === Normal Order Test
// 1 => 2 => 4 => 0 =>
// 6 => 4 => 0 =>
// 9 => 1 => 2 =>

// This solution should be O(n) time and O(n) space