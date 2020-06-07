def checkPermutation(str1, str2):
    sorted_str1 = sorted(str1)
    sorted_str2 = sorted(str2)
    return sorted_str1 == sorted_str2


assert(checkPermutation("amr", "aa") == False)
assert(checkPermutation("abcd", "adcb") == True)
assert(checkPermutation("", "") == True)

# This solution is O(nlog(n)) in time, O(n) space
