let stringCompression = (str_in) => {
    var res = "";
    var counter = 1;
    var prev = -1;

    // loop on str with i and prev
    for (let i = 0; i < str_in.length; i++) {
        // if the chars in prev and i are equal increment the counter.
        if (prev != -1 && str_in[prev] == str_in[i]) {
            counter++;
        } else {
            if (prev != -1)
                res += counter.toString();
            counter = 1;
            res += str_in[i];
        }
        prev++;
    }
    // when the for loop is done, append the last counter value.
    res += counter.toString();

    if (str_in.length < res.length) {
        return str_in;
    } else {
        return res;
    }
}

// TESTS


console.log(stringCompression("aabcccccaaa"))
console.log(stringCompression("aaaaa"))
console.log(stringCompression("aabbbbbbbaaa"))
console.log(stringCompression("a"))
console.log(stringCompression(""))
console.log(stringCompression("aba"))

// This solution should be O(n) time and O(n) space