def stringCompression(str_in):
    res = ""
    prev = None
    counter = 1

    # loop on the string with two pointers, i and prev
    for i in range(len(str_in)):
        # if the chars in prev and i are equal increment the counter.
        if prev != None and str_in[prev] == str_in[i]:
            counter += 1
            prev += 1
        else:
            # if that is not the first character
            if prev != None:
                res += str(counter)
                counter = 1
                prev += 1
            # if that is the first character, change from None to 0 so we can increment later on.
            # note that you can't initialize prev as -1 because python will understand the index -1 as the last index
            else:
                prev = 0

            res += str_in[i]
    # when the for loop is done, append the last counter value.
    res += str(counter)

    if len(res) > len(str_in):
        return str_in
    else:
        return res

# TESTS


print(stringCompression("aabcccccaaa"))
print(stringCompression("aaaaa"))
print(stringCompression("aabbbbbbbaaa"))
print(stringCompression("a"))
print(stringCompression(""))
print(stringCompression("aba"))

# This solution should be O(n) time and O(n) space
