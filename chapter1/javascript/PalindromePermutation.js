let isalpha = (in_string) => {
    return /^[a-z]$/i.test(in_string);
}
let PalindromePermutation = (in_string) => {
    odd_counter = 0;
    letters_dict = {};
    lower_string = in_string.toLowerCase();
    mod_in_string = "";
    for (let i = 0; i < lower_string.length; i++) {
        if (isalpha(lower_string[i])) {
            mod_in_string += lower_string[i];
        }
    }

    for (let i = 0; i < mod_in_string.length; i++) {
        letters_dict[mod_in_string[i]] = 0;
    }

    for (let i = 0; i < mod_in_string.length; i++) {
        letters_dict[mod_in_string[i]]++;
    }
    // Object.values(dict) returns an array of all values inside the dict
    for (let i = 0; i < Object.values(letters_dict).length; i++) {
        if (Object.values(letters_dict)[i] % 2) {
            odd_counter++;
        }
    }
    return odd_counter <= 1;
}

/* TESTS */

console.log(PalindromePermutation('Tact Coa')) // True
console.log(PalindromePermutation('Mr. owl ate my Metal worm')) // True
console.log(PalindromePermutation('')) // True
console.log(PalindromePermutation('amr')) // False

// This should be O(n) time and O(n) space