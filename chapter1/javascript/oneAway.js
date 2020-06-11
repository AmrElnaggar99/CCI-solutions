let oneAway = (str_1, str_2) => {

    // Determine the bigger string

    let len_1 = str_1.length;
    let len_2 = str_2.length;
    if (len_1 > len_2) {
        var big = str_1;
        var small = str_2;
    } else {
        var big = str_2;
        var small = str_1;
    }
    // loop on the longer string
    for (let i = 0; i < len_1; i++) {
        // if these two letters match, continue
        if (big[i] == small[i]) {
            continue
        } else {
            // if the difference is in the first or the last, remove it from both strings
            if (i == 0 || i == (len_1 - 1)) {
                new_str = big.slice(0, i) + big.slice(i + 1, len_1);
                small = small.slice(0, i) + small.slice(i + 1, len_1);
            }
            // if the difference is in the middle, just remove if from the bigger string
            else {
                new_str = big.slice(0, i) + big.slice(i + 1, len_1);
            }
            // now return whether they are equal or not
            return new_str == small;
        }
    }
    // you will only reach this if there is no difference found, so return True
    return true;
}

// TESTS
console.log(oneAway("pale", "ple")) // True
console.log(oneAway("pales", "pale")) // True
console.log(oneAway("pale", "bale")) // True
console.log(oneAway("pale", "bake")) // False
console.log(oneAway("balb", "balp")) // True
console.log(oneAway("balp", "balp")) // True
console.log(oneAway("", "")) // True


// This solution should be O(n) time and O(n) space