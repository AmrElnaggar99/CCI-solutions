in_string = "My John Smith   "

let URLify = (in_string, in_size) => {
    return in_string.slice(0, in_size).split(" ").join("%20")
}

/* TESTS */
console.log(URLify("My John Smith   ", 13))
console.log(URLify("   ", 0))

// This solution should be O(n) time and O(1) space