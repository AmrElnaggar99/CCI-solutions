def oneAway(str_1, str_2):

    # 1. Determine the longer string
    len_1 = len(str_1)
    len_2 = len(str_2)
    if len_1 > len_2:
        big = str_1
        small = str_2
    else:
        big = str_2
        small = str_1

    # 2. loop on the longer string
    fp = 0
    while fp < len(big) - 1:
        # if these two letters match, continue
        if big[fp] == small[fp]:
            fp += 1
            continue
        else:
            # if the difference is in the first or the last, remove it from both strings
            if fp == 0 or fp == len(big) - 1:
                new_str = big[:fp] + big[fp+1:]
                small = small[:fp] + small[fp+1:]
            else:
                # if the difference is in the middle, just remove if from the bigger string
                new_str = big[:fp] + big[fp+1:]
            # now return whether they are equal or not
            return new_str == small
    # you will only reach this if there is no difference found, so return True
    return True


# TESTS
print(oneAway("pale", "ple"))  # True
print(oneAway("pales", "pale"))  # True
print(oneAway("pale", "bale"))  # True
print(oneAway("pale", "bake"))  # False
print(oneAway("balb", "balp"))  # True
print(oneAway("balp", "balp"))  # True
print(oneAway("", ""))  # True


# This solution should be O(n) time and O(n) space
