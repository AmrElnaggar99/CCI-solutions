let checkPermutation = (str1, str2) => {
    sorted_str1 = str1.split('').sort().join('');
    sorted_str2 = str2.split('').sort().join('');
    return sorted_str1 === sorted_str2;
}

// This solution is O(nlog(n)) in time, O(n) space