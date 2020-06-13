def stringRotation(str_1, str_2):
    if len(str_1) != len(str_2):
        return False
    # Concat any of the strings with itself ->  erbottlewaterbottlewat
    new_str1 = str_1 + str_1
    # a pointer at the first char of each string
    p_str2 = 0
    p_new = 0
    # if the chars match, move both pointers. if not, only move the pointer of the longer string.
    while p_str2 < len(str_2) and p_new < len(new_str1):
        if new_str1[p_new] == str_2[p_str2]:
            p_new += 1
            p_str2 += 1
        else:
            p_new += 1
    # when the loop ends, if the second pointer is already on the last char in str2, then we found str2 inside the concatenation.
    # note that this should be len(str_2) - 1 but we already added that 1 in line 13.
    if p_str2 == len(str_2):
        return True
    else:
        return False


# TESTS
print(stringRotation("waterbottle", "erbottlewat"))  # True
print(stringRotation("erbottlewat", "waterbottle"))  # True
print(stringRotation("", ""))  # True
print(stringRotation("abcdef", "abcdef"))  # True
print(stringRotation("abcdef", "abc"))  # False
print(stringRotation("aaaa", "aaaa"))  # True


# This solution should be O(n) time and O(1) space
