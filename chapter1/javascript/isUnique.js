let isUnique = (str) => {
    let chars_arr = new Array(30).fill(0);
    var lw_str = str.toLowerCase();

    for (var i = 0; i < lw_str.length; i++) {
        if (lw_str[i] == " ") {
            chars_arr[0]++;
            continue;
        }
        let this_char = lw_str.charCodeAt(i) - 96;
        if (chars_arr[this_char] < 1) {
            chars_arr[this_char]++;
        } else {
            return false;
        }
    }
    return true
}

/* TESTS */
console.log(isUnique('abcd'), 'true');
console.log(isUnique("yes right"), "true")
console.log(isUnique('no not unique'), 'false');
console.log(isUnique('notunique'), 'false');

// this solution is O(n) time, O(n) space