def isUnique(strr):
    char_arr = [0 for i in range(30)]
    lw_str = strr.lower()
    for char in lw_str:
        if char == " ":
            char_arr[0] += 1
            continue
        this_char = ord(char) - 96
        if char_arr[this_char] < 1:
            char_arr[this_char] += 1
        else:
            return False
    return True


assert (isUnique("abcd") == True)
assert (isUnique("yes right") == True)
assert (isUnique("no not unique") == False)
assert (isUnique("notunique") == False)

# This solution is O(n) time, O(n) space.
