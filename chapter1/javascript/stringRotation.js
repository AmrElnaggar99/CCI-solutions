let stringRotation = (str_1, str_2) => {
    if (str_1.length != str_2.length) return false;
    // Concat any of the strings with itself ->  erbottlewaterbottlewat
    new_str1 = str_1 + str_1;
    // a pointer at the first char of each string
    p_str2 = 0;
    p_new = 0;
    // if the chars match, move both pointers. if not, only move the pointer of the longer string.
    while (p_str2 < str_2.length && p_new < new_str1.length) {
        if (new_str1[p_new] == str_2[p_str2]) {
            p_new++;
            p_str2++;
        } else {
            p_new++;
        }
    }
    // when the loop ends, if the second pointer is already on the last char in str2, then we found str2 inside the concatenation.
    // note that this should be len(str_2) - 1 but we already added that 1 in line 12.
    if (p_str2 == str_2.length) return true;
    else return false;
}

// TESTS

console.log(stringRotation("waterbottle", "erbottlewat")) // True
console.log(stringRotation("erbottlewat", "waterbottle")) // True
console.log(stringRotation("", "")) // True
console.log(stringRotation("abcdef", "abcdef")) // True
console.log(stringRotation("abcdef", "abc")) // False
console.log(stringRotation("aaaa", "aaaa")) // True


// This solution should be O(n) time and O(1) space