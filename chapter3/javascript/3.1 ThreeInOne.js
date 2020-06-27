class ThreeInOne {
    constructor() {
        this.data = [];
        this.indices_of_1 = [];
        this.indices_of_2 = [];
        this.indices_of_3 = [];
    }

    push(stack, val) {
        if (stack == 1)
            this.indices_of_1.push(this.data.length);
        else if (stack == 2)
            this.indices_of_2.push(this.data.length);
        else if (stack == 3)
            this.indices_of_3.push(this.data.length);
        else
            return "Error: Stack number is wrong. Please use either 1, 2, or 3."
        this.data.push(val)
    }

    fix_indices(res_index) {
        for (let i = 0; i < this.indices_of_1.length; i++) {
            if (this.indices_of_1[i] > res_index)
                this.indices_of_1[i]--;
        }
        for (let i = 0; i < this.indices_of_2.length; i++) {
            if (this.indices_of_2[i] > res_index)
                this.indices_of_2[i]--;
        }
        for (let i = 0; i < this.indices_of_3.length; i++) {
            if (this.indices_of_3[i] > res_index)
                this.indices_of_3[i]--;
        }
    }

    top(stack) {
        let res_index = -1;
        if (stack === 1 && this.indices_of_1.length)
            res_index = this.indices_of_1[this.indices_of_1.length - 1];
        else if (stack === 2 && this.indices_of_2.length)
            res_index = this.indices_of_2[this.indices_of_2.length - 1];
        else if (stack === 3 && this.indices_of_3.length)
            res_index = this.indices_of_3[this.indices_of_3.length - 1];
        else
            return "Error: stack is empty or doesn't exist";

        let res = this.data[res_index];
        return res;
    }

    pop(stack) {
        let res_index = -1;
        if (stack === 1 && this.indices_of_1.length)
            res_index = this.indices_of_1.pop();
        else if (stack === 2 && this.indices_of_2.length)
            res_index = this.indices_of_2.pop();
        else if (stack === 3 && this.indices_of_3.length)
            res_index = this.indices_of_3.pop();
        else
            return "Error: stack is empty or doesn't exist";

        this.fix_indices(res_index);
        let res = this.data.splice(res_index, 1);
        return res[0];
    }
}


// TESTS

let my_weird_stack = new ThreeInOne();

my_weird_stack.push(1, "1a")
console.log(my_weird_stack.pop(1)) // 1a
my_weird_stack.push(2, "2b")
console.log(my_weird_stack.pop(2)) // 2b
my_weird_stack.push(3, "3c")
my_weird_stack.push(1, "1d")
my_weird_stack.push(1, "1d")
console.log(my_weird_stack.pop(1)) // 1d
my_weird_stack.push(2, "2e")
my_weird_stack.push(2, "2e")
console.log(my_weird_stack.pop(2)) // 2e
my_weird_stack.push(3, "3f")
my_weird_stack.push(3, "3f")
console.log(my_weird_stack.pop(3)) // 3f
console.log(my_weird_stack.pop(3)) // 3f
console.log(my_weird_stack.pop(3)) // 3c
console.log("==========")
console.log(my_weird_stack.data) // ['1d','2e']
console.log(my_weird_stack.indices_of_1) // [0]
console.log(my_weird_stack.indices_of_2) // [1]
console.log(my_weird_stack.indices_of_3) // []
console.log("==========")
console.log(my_weird_stack.top(1)) // 1d
console.log(my_weird_stack.top(2)) // 2e
console.log(my_weird_stack.top(3)) // Error: stack is empty or doesn't exist


// This solution should do all operations in O(n) time and space